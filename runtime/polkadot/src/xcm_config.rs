// This file is part of Tangle.

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

use super::*;
use cumulus_primitives_core::AggregateMessageOrigin;
pub use cumulus_primitives_core::ParaId;
use cumulus_primitives_core::ParaId as CumulusParaId;
use frame_support::traits::TransformOrigin;
use frame_support::{
	ensure,
	sp_runtime::traits::{CheckedConversion, Convert},
	traits::{ContainsPair, Get, ProcessMessageError},
};
use orml_traits::{
	currency::MutationHooks,
	location::{RelativeReserveProvider, Reserve},
};
pub use orml_traits::{location::AbsoluteReserveProvider, parameter_type_with_key, MultiCurrency};
use pallet_xcm::XcmPassthrough;
use parachains_common::message_queue::{NarrowOriginToSibling, ParaIdToSibling};
use parity_scale_codec::{Decode, Encode};
pub use polkadot_parachain_primitives::primitives::Sibling;
use polkadot_runtime_common::xcm_sender::NoPriceForMessageDelivery;
use sp_core::bounded::BoundedVec;
use sp_std::{convert::TryFrom, marker::PhantomData};
use tangle_asset_registry::{AssetIdMaps, FixedRateOfAsset};
use tangle_primitives::{
	AccountId, CurrencyId, CurrencyIdMapping, TokenSymbol, DOT_TOKEN_ID, GLMR_TOKEN_ID,
};
pub use tangle_xcm_interface::traits::{parachains, XcmBaseWeight};
use xcm::v4::{prelude::*, Asset, AssetId, InteriorLocation, Location};
use xcm_builder::{
	Account32Hash, DescribeAllTerminal, DescribeFamily, FrameTransactionalProcessor,
	HashedDescription, TrailingSetTopicAsId,
};
pub use xcm_builder::{
	AccountId32Aliases, AllowKnownQueryResponses, AllowSubscriptionsFrom,
	AllowTopLevelPaidExecutionFrom, EnsureXcmOrigin, FixedRateOfFungible, FixedWeightBounds,
	IsConcrete, ParentAsSuperuser, ParentIsPreset, RelayChainAsNative, SiblingParachainAsNative,
	SiblingParachainConvertsVia, SignedAccountId32AsNative, SignedToAccountId32,
	SovereignSignedViaLocation, TakeRevenue, TakeWeightCredit,
};
use xcm_executor::traits::{MatchesFungible, Properties, ShouldExecute};
// orml imports
use tangle_currencies::BasicCurrencyAdapter;
use tangle_runtime_common::currency_adapter::{
	DepositToAlternative, MultiCurrencyAdapter, TangleDropAssets,
};

/// Tangle Asset Matcher
pub struct TangleAssetMatcher<CurrencyId, CurrencyIdConvert>(
	PhantomData<(CurrencyId, CurrencyIdConvert)>,
);

impl<CurrencyId, CurrencyIdConvert, Amount> MatchesFungible<Amount>
	for TangleAssetMatcher<CurrencyId, CurrencyIdConvert>
where
	CurrencyIdConvert: Convert<Location, Option<CurrencyId>>,
	Amount: TryFrom<u128>,
{
	fn matches_fungible(a: &Asset) -> Option<Amount> {
		if let (Fungible(ref amount), AssetId(ref location)) = (&a.fun, &a.id) {
			if CurrencyIdConvert::convert(location.clone()).is_some() {
				return CheckedConversion::checked_from(*amount);
			}
		}
		None
	}
}

/// A `FilterAssetLocation` implementation. Filters multi native assets whose
/// reserve is same with `origin`.
pub struct MultiNativeAsset<ReserveProvider>(PhantomData<ReserveProvider>);
impl<ReserveProvider> ContainsPair<Asset, Location> for MultiNativeAsset<ReserveProvider>
where
	ReserveProvider: Reserve,
{
	fn contains(asset: &Asset, origin: &Location) -> bool {
		if let Some(ref reserve) = ReserveProvider::reserve(asset) {
			if reserve == origin {
				return true;
			}
		}
		false
	}
}

fn native_currency_location(id: CurrencyId) -> Location {
	Location::new(0, [Junction::from(BoundedVec::try_from(id.encode()).unwrap())])
}

impl<T: Get<ParaId>> Convert<Asset, Option<CurrencyId>> for TangleCurrencyIdConvert<T> {
	fn convert(asset: Asset) -> Option<CurrencyId> {
		if let Asset { id: AssetId(id), fun: xcm::v4::Fungibility::Fungible(_) } = asset {
			Self::convert(id)
		} else {
			None
		}
	}
}

pub struct TangleAccountIdToLocation;
impl Convert<AccountId, Location> for TangleAccountIdToLocation {
	fn convert(account: AccountId) -> Location {
		[AccountId32 { network: None, id: account.into() }].into()
	}
}

pub struct TangleCurrencyIdConvert<T>(PhantomData<T>);
impl<T: Get<ParaId>> Convert<CurrencyId, Option<Location>> for TangleCurrencyIdConvert<T> {
	fn convert(id: CurrencyId) -> Option<Location> {
		use CurrencyId::*;
		use TokenSymbol::*;

		if let Some(id) = AssetIdMaps::<Runtime>::get_location(id) {
			return Some(id);
		}

		match id {
			Token2(DOT_TOKEN_ID) => Some(Location::parent()),
			Native(BNC) => Some(native_currency_location(id)),
			// Moonbeam Native token
			Token2(GLMR_TOKEN_ID) => Some(Location::new(
				1,
				[
					Parachain(parachains::moonbeam::ID),
					PalletInstance(parachains::moonbeam::PALLET_ID),
				],
			)),
			_ => None,
		}
	}
}

impl<T: Get<ParaId>> Convert<Location, Option<CurrencyId>> for TangleCurrencyIdConvert<T> {
	fn convert(location: Location) -> Option<CurrencyId> {
		use CurrencyId::*;
		use TokenSymbol::*;

		if location == Location::parent() {
			return Some(Token2(DOT_TOKEN_ID));
		}

		if let Some(currency_id) = AssetIdMaps::<Runtime>::get_currency_id(location.clone()) {
			return Some(currency_id);
		}

		match &location.unpack() {
			(0, [Parachain(id), PalletInstance(index)])
				if (*id == parachains::moonbeam::ID)
					&& (*index == parachains::moonbeam::PALLET_ID) =>
			{
				Some(Token2(GLMR_TOKEN_ID))
			},
			(0, [Parachain(id), GeneralKey { data, length }])
				if *id == u32::from(ParachainInfo::parachain_id()) =>
			{
				let key = &data[..*length as usize];
				if let Ok(currency_id) = CurrencyId::decode(&mut &key[..]) {
					match currency_id {
						Native(BNC) => Some(currency_id),
						_ => None,
					}
				} else {
					None
				}
			},
			(0, [GeneralKey { data, length }]) => {
				// decode the general key
				let key = &data[..*length as usize];
				if let Ok(currency_id) = CurrencyId::decode(&mut &key[..]) {
					match currency_id {
						Native(BNC) => Some(currency_id),
						_ => None,
					}
				} else {
					None
				}
			},
			_ => None,
		}
	}
}

parameter_types! {
	pub const DotLocation: MultiLocation = MultiLocation::parent();
	pub const RelayNetwork: NetworkId = NetworkId::Polkadot;
	pub RelayChainOrigin: RuntimeOrigin = cumulus_pallet_xcm::Origin::Relay.into();
	pub SelfParaChainId: CumulusParaId = ParachainInfo::parachain_id();
	pub UniversalLocation: InteriorLocation = [GlobalConsensus(RelayNetwork::get()), Parachain(ParachainInfo::parachain_id().into())].into();
}

/// Type for specifying how a `MultiLocation` can be converted into an `AccountId`. This is used
/// when determining ownership of accounts for asset transacting and when attempting to use XCM
/// `Transact` in order to determine the dispatch RuntimeOrigin.
pub type LocationToAccountId = (
	// The parent (Relay-chain) origin converts to the parent `AccountId`.
	ParentIsPreset<AccountId>,
	// Sibling parachain origins convert to AccountId via the `ParaId::into`.
	SiblingParachainConvertsVia<Sibling, AccountId>,
	// Straight up local `AccountId32` origins just alias directly to `AccountId`.
	AccountId32Aliases<RelayNetwork, AccountId>,
	// TODO: Generate remote accounts according to polkadot standards
	// Derives a private `Account32` by hashing `("multiloc", received multilocation)`
	Account32Hash<RelayNetwork, AccountId>,
	// Foreign locations alias into accounts according to a hash of their standard description.
	HashedDescription<AccountId, DescribeFamily<DescribeAllTerminal>>,
);

/// This is the type we use to convert an (incoming) XCM origin into a local `RuntimeOrigin`
/// instance, ready for dispatching a transaction with Xcm's `Transact`. There is an `OriginKind`
/// which can biases the kind of local `RuntimeOrigin` it will become.
pub type XcmOriginToTransactDispatchOrigin = (
	// Sovereign account converter; this attempts to derive an `AccountId` from the origin location
	// using `LocationToAccountId` and then turn that into the usual `Signed` origin. Useful for
	// foreign chains who want to have a local sovereign account on this chain which they control.
	SovereignSignedViaLocation<LocationToAccountId, RuntimeOrigin>,
	// Native converter for Relay-chain (Parent) location; will converts to a `Relay` origin when
	// recognized.
	RelayChainAsNative<RelayChainOrigin, RuntimeOrigin>,
	// Native converter for sibling Parachains; will convert to a `SiblingPara` origin when
	// recognized.
	SiblingParachainAsNative<cumulus_pallet_xcm::Origin, RuntimeOrigin>,
	// Superuser converter for the Relay-chain (Parent) location. This will allow it to issue a
	// transaction from the Root origin.
	ParentAsSuperuser<RuntimeOrigin>,
	// Native signed account converter; this just converts an `AccountId32` origin into a normal
	// `RuntimeOrigin::Signed` origin of the same 32-byte value.
	SignedAccountId32AsNative<RelayNetwork, RuntimeOrigin>,
	// Xcm origins can be represented natively under the Xcm pallet's Xcm origin.
	XcmPassthrough<RuntimeOrigin>,
);

parameter_types! {
	// One XCM operation is 200_000_000 weight, cross-chain transfer ~= 2x of transfer = 3_000_000_000
	pub UnitWeightCost: Weight = Weight::from_parts(200_000_000, 0);
	pub const MaxInstructions: u32 = 100;
}

/// Barrier allowing a top level paid message with DescendOrigin instruction
pub const DEFAULT_PROOF_SIZE: u64 = 64 * 1024;
pub const DEFAULT_REF_TIMR: u64 = 10_000_000_000;
pub struct AllowTopLevelPaidExecutionDescendOriginFirst<T>(PhantomData<T>);
impl<T: Contains<Location>> ShouldExecute for AllowTopLevelPaidExecutionDescendOriginFirst<T> {
	fn should_execute<Call>(
		origin: &Location,
		message: &mut [Instruction<Call>],
		max_weight: Weight,
		_weight_credit: &mut Properties,
	) -> Result<(), ProcessMessageError> {
		log::trace!(
			target: "xcm::barriers",
			"AllowTopLevelPaidExecutionDescendOriginFirst origin:
			{:?}, message: {:?}, max_weight: {:?}, weight_credit: {:?}",
			origin, message, max_weight, _weight_credit,
		);
		ensure!(T::contains(origin), ProcessMessageError::Unsupported);
		let mut iter = message.iter_mut();
		// Make sure the first instruction is DescendOrigin
		iter.next()
			.filter(|instruction| matches!(instruction, DescendOrigin(_)))
			.ok_or(ProcessMessageError::Unsupported)?;

		// Then WithdrawAsset
		iter.next()
			.filter(|instruction| matches!(instruction, WithdrawAsset(_)))
			.ok_or(ProcessMessageError::Unsupported)?;

		// Then BuyExecution
		let i = iter.next().ok_or(ProcessMessageError::Unsupported)?;
		match i {
			BuyExecution { weight_limit: Limited(ref mut weight), .. } => {
				if weight.all_gte(max_weight) {
					weight.set_ref_time(max_weight.ref_time());
					weight.set_proof_size(max_weight.proof_size());
				};
			},
			BuyExecution { ref mut weight_limit, .. } if weight_limit == &Unlimited => {
				*weight_limit = Limited(max_weight);
			},
			_ => {},
		};

		// Then Transact
		let i = iter.next().ok_or(ProcessMessageError::Unsupported)?;
		match i {
			Transact { ref mut require_weight_at_most, .. } => {
				let weight = Weight::from_parts(DEFAULT_REF_TIMR, DEFAULT_PROOF_SIZE);
				*require_weight_at_most = weight;
				Ok(())
			},
			_ => Err(ProcessMessageError::Unsupported),
		}
	}
}

pub type Barrier = TrailingSetTopicAsId<(
	// Weight that is paid for may be consumed.
	TakeWeightCredit,
	// Expected responses are OK.
	AllowKnownQueryResponses<PolkadotXcm>,
	// If the message is one that immediately attemps to pay for execution, then allow it.
	AllowTopLevelPaidExecutionFrom<Everything>,
	// Subscriptions for version tracking are OK.
	AllowSubscriptionsFrom<Everything>,
	// Barrier allowing a top level paid message with DescendOrigin instruction
	AllowTopLevelPaidExecutionDescendOriginFirst<Everything>,
)>;

pub type TangleAssetTransactor = MultiCurrencyAdapter<
	Currencies,
	UnknownTokens,
	TangleAssetMatcher<CurrencyId, TangleCurrencyIdConvert<SelfParaChainId>>,
	AccountId,
	LocationToAccountId,
	CurrencyId,
	TangleCurrencyIdConvert<SelfParaChainId>,
	DepositToAlternative<TangleTreasuryAccount, Currencies, CurrencyId, AccountId, Balance>,
>;

parameter_types! {
	pub DotPerSecond: (AssetId,u128, u128) = (Location::parent().into(), dot_per_second::<Runtime>(),0);
	pub BncPerSecond: (AssetId,u128, u128) = (
		Location::new(
			1,
			[xcm::v4::Junction::Parachain(SelfParaId::get()), xcm::v4::Junction::from(BoundedVec::try_from(NativeCurrencyId::get().encode()).unwrap())],
		).into(),
		// BNC:DOT = 80:1
		dot_per_second::<Runtime>() * 80,
		0
	);
	pub BncNewPerSecond: (AssetId,u128, u128) = (
		Location::new(
			0,
			[xcm::v4::Junction::from(BoundedVec::try_from(NativeCurrencyId::get().encode()).unwrap())]
		).into(),
		// BNC:DOT = 80:1
		dot_per_second::<Runtime>() * 80,
	0
	);
	pub ZlkPerSecond: (AssetId, u128,u128) = (
		Location::new(
			1,
			[xcm::v4::Junction::Parachain(SelfParaId::get()), xcm::v4::Junction::from(BoundedVec::try_from(CurrencyId::Token(TokenSymbol::ZLK).encode()).unwrap())]
		).into(),
		// ZLK:KSM = 150:1
		dot_per_second::<Runtime>() * 150 * 1_000_000,
	0
	);
	pub ZlkNewPerSecond: (AssetId, u128,u128) = (
		Location::new(
			0,
			[xcm::v4::Junction::from(BoundedVec::try_from(CurrencyId::Token(TokenSymbol::ZLK).encode()).unwrap())]
		).into(),
		// ZLK:KSM = 150:1
		dot_per_second::<Runtime>() * 150 * 1_000_000,
	0
	);
	pub BasePerSecond: u128 = dot_per_second::<Runtime>();
}

pub struct ToTreasury;
impl TakeRevenue for ToTreasury {
	fn take_revenue(revenue: Asset) {
		if let Asset { id: AssetId(location), fun: xcm::v4::Fungibility::Fungible(amount) } =
			revenue
		{
			if let Some(currency_id) = TangleCurrencyIdConvert::<SelfParaChainId>::convert(location)
			{
				let _ = Currencies::deposit(currency_id, &TangleTreasuryAccount::get(), amount);
			}
		}
	}
}

pub type Trader = (
	FixedRateOfFungible<BncPerSecond, ToTreasury>,
	FixedRateOfFungible<BncNewPerSecond, ToTreasury>,
	FixedRateOfFungible<DotPerSecond, ToTreasury>,
	FixedRateOfAsset<Runtime, BasePerSecond, ToTreasury>,
);

/// A call filter for the XCM Transact instruction. This is a temporary measure until we properly
/// account for proof size weights.
///
/// Calls that are allowed through this filter must:
/// 1. Have a fixed weight;
/// 2. Cannot lead to another call being made;
/// 3. Have a defined proof size weight, e.g. no unbounded vecs in call parameters.
pub struct SafeCallFilter;
impl Contains<RuntimeCall> for SafeCallFilter {
	fn contains(call: &RuntimeCall) -> bool {
		#[cfg(feature = "runtime-benchmarks")]
		{
			if matches!(call, RuntimeCall::System(frame_system::Call::remark_with_event { .. })) {
				return true;
			}
		}

		match call {
			RuntimeCall::System(
				frame_system::Call::kill_prefix { .. } | frame_system::Call::set_heap_pages { .. },
			)
			| RuntimeCall::Timestamp(..)
			| RuntimeCall::Indices(..)
			| RuntimeCall::Balances(..)
			| RuntimeCall::Session(pallet_session::Call::purge_keys { .. })
			| RuntimeCall::Treasury(..)
			| RuntimeCall::Utility(pallet_utility::Call::as_derivative { .. })
			| RuntimeCall::Identity(
				pallet_identity::Call::add_registrar { .. }
				| pallet_identity::Call::set_identity { .. }
				| pallet_identity::Call::clear_identity { .. }
				| pallet_identity::Call::request_judgement { .. }
				| pallet_identity::Call::cancel_request { .. }
				| pallet_identity::Call::set_fee { .. }
				| pallet_identity::Call::set_account_id { .. }
				| pallet_identity::Call::set_fields { .. }
				| pallet_identity::Call::provide_judgement { .. }
				| pallet_identity::Call::kill_identity { .. }
				| pallet_identity::Call::add_sub { .. }
				| pallet_identity::Call::rename_sub { .. }
				| pallet_identity::Call::remove_sub { .. }
				| pallet_identity::Call::quit_sub { .. },
			)
			| RuntimeCall::PolkadotXcm(pallet_xcm::Call::limited_reserve_transfer_assets {
				..
			})
			| RuntimeCall::Proxy(..)
			| RuntimeCall::Tokens(
				orml_tokens::Call::transfer { .. }
				| orml_tokens::Call::transfer_all { .. }
				| orml_tokens::Call::transfer_keep_alive { .. },
			)
			| RuntimeCall::LstMinting(
				tangle_lst_minting::Call::mint { .. }
				| tangle_lst_minting::Call::rebond { .. }
				| tangle_lst_minting::Call::redeem { .. },
			)
			| RuntimeCall::XcmInterface(tangle_xcm_interface::Call::transfer_statemine_assets {
				..
			})
			| RuntimeCall::ZenlinkProtocol(
				zenlink_protocol::Call::add_liquidity { .. }
				| zenlink_protocol::Call::remove_liquidity { .. }
				| zenlink_protocol::Call::transfer { .. },
			) => true,
			_ => false,
		}
	}
}

pub struct XcmConfig;
impl xcm_executor::Config for XcmConfig {
	type AssetClaims = PolkadotXcm;
	type AssetTransactor = TangleAssetTransactor;
	type AssetTrap = TangleDropAssets<ToTreasury>;
	type Barrier = Barrier;
	type RuntimeCall = RuntimeCall;
	type IsReserve = MultiNativeAsset<RelativeReserveProvider>;
	type IsTeleporter = ();
	type UniversalLocation = UniversalLocation;
	type OriginConverter = XcmOriginToTransactDispatchOrigin;
	type ResponseHandler = PolkadotXcm;
	type SubscriptionService = PolkadotXcm;
	type Trader = Trader;
	type Weigher = FixedWeightBounds<UnitWeightCost, RuntimeCall, MaxInstructions>;
	type XcmSender = XcmRouter;
	type PalletInstancesInfo = AllPalletsWithSystem;
	type MaxAssetsIntoHolding = ConstU32<8>;
	type UniversalAliases = Nothing;
	type CallDispatcher = RuntimeCall;
	type SafeCallFilter = SafeCallFilter;
	type AssetLocker = ();
	type AssetExchanger = ();
	type FeeManager = ();
	type MessageExporter = ();
	type Aliasers = Nothing;
	type TransactionalProcessor = FrameTransactionalProcessor;
}

/// Local origins on this chain are allowed to dispatch XCM sends/executions.
pub type LocalOriginToLocation = SignedToAccountId32<RuntimeOrigin, AccountId, RelayNetwork>;

/// The means for routing XCM messages which are not for local execution into the right message
/// queues.
pub type XcmRouter = (
	// Two routers - use UMP to communicate with the relay chain:
	cumulus_primitives_utility::ParentAsUmp<ParachainSystem, PolkadotXcm, ()>,
	// ..and XCMP to communicate with the sibling chains.
	XcmpQueue,
);

#[cfg(feature = "runtime-benchmarks")]
parameter_types! {
	pub ReachableDest: Option<MultiLocation> = Some(Parent.into());
}

impl pallet_xcm::Config for Runtime {
	type RuntimeEvent = RuntimeEvent;
	type ExecuteXcmOrigin = EnsureXcmOrigin<RuntimeOrigin, LocalOriginToLocation>;
	type UniversalLocation = UniversalLocation;
	type SendXcmOrigin = EnsureXcmOrigin<RuntimeOrigin, LocalOriginToLocation>;
	type Weigher = FixedWeightBounds<UnitWeightCost, RuntimeCall, MaxInstructions>;
	type XcmExecuteFilter = Nothing;
	type XcmExecutor = XcmExecutor<XcmConfig>;
	type XcmReserveTransferFilter = Everything;
	#[cfg(feature = "runtime-benchmarks")]
	type XcmRouter = tangle_primitives::DoNothingRouter;
	#[cfg(not(feature = "runtime-benchmarks"))]
	type XcmRouter = XcmRouter;
	type XcmTeleportFilter = Nothing;
	type RuntimeOrigin = RuntimeOrigin;
	type RuntimeCall = RuntimeCall;
	const VERSION_DISCOVERY_QUEUE_SIZE: u32 = 100;
	type AdvertisedXcmVersion = pallet_xcm::CurrentXcmVersion;
	type Currency = Balances;
	type CurrencyMatcher = ();
	type TrustedLockers = ();
	type SovereignAccountOf = ();
	type MaxLockers = ConstU32<8>;
	type WeightInfo = weights::pallet_xcm::WeightInfo<Runtime>;
	type AdminOrigin = EnsureRoot<AccountId>;
	type MaxRemoteLockConsumers = ConstU32<0>;
	type RemoteLockConsumerIdentifier = ();
}

impl cumulus_pallet_xcm::Config for Runtime {
	type RuntimeEvent = RuntimeEvent;
	type XcmExecutor = XcmExecutor<XcmConfig>;
}

parameter_types! {
	pub const RelayOrigin: AggregateMessageOrigin = AggregateMessageOrigin::Parent;
}

impl cumulus_pallet_xcmp_queue::Config for Runtime {
	type ChannelInfo = ParachainSystem;
	type RuntimeEvent = RuntimeEvent;
	type VersionWrapper = PolkadotXcm;
	type XcmpQueue = TransformOrigin<MessageQueue, AggregateMessageOrigin, ParaId, ParaIdToSibling>;
	type MaxInboundSuspended = ConstU32<1_000>;
	type ControllerOrigin = EnsureRoot<AccountId>;
	type ControllerOriginConverter = XcmOriginToTransactDispatchOrigin;
	type WeightInfo = cumulus_pallet_xcmp_queue::weights::SubstrateWeight<Runtime>;
	type PriceForSiblingDelivery = NoPriceForMessageDelivery<ParaId>;
}

parameter_types! {
	pub MessageQueueServiceWeight: Weight = Perbill::from_percent(35) * RuntimeBlockWeights::get().max_block;
}

impl pallet_message_queue::Config for Runtime {
	type RuntimeEvent = RuntimeEvent;
	type WeightInfo = pallet_message_queue::weights::SubstrateWeight<Self>;
	#[cfg(feature = "runtime-benchmarks")]
	type MessageProcessor =
		pallet_message_queue::mock_helpers::NoopMessageProcessor<AggregateMessageOrigin>;
	#[cfg(not(feature = "runtime-benchmarks"))]
	type MessageProcessor = xcm_builder::ProcessXcmMessage<
		AggregateMessageOrigin,
		xcm_executor::XcmExecutor<XcmConfig>,
		RuntimeCall,
	>;
	type Size = u32;
	type QueueChangeHandler = NarrowOriginToSibling<XcmpQueue>;
	type QueuePausedQuery = NarrowOriginToSibling<XcmpQueue>;
	type HeapSize = ConstU32<{ 64 * 1024 }>;
	type MaxStale = ConstU32<8>;
	type ServiceWeight = MessageQueueServiceWeight;
}

// orml runtime start

impl tangle_currencies::Config for Runtime {
	type GetNativeCurrencyId = NativeCurrencyId;
	type MultiCurrency = Tokens;
	type NativeCurrency = BasicCurrencyAdapter<Runtime, Balances, Amount, BlockNumber>;
	type WeightInfo = weights::tangle_currencies::WeightInfo<Runtime>;
}

parameter_type_with_key! {
	pub ExistentialDeposits: |currency_id: CurrencyId| -> Balance {
		match currency_id {
			&CurrencyId::Native(TokenSymbol::TNT) => 10 * milli::<Runtime>(NativeCurrencyId::get()),   // 0.01 TNT
			&CurrencyId::Token2(DOT_TOKEN_ID) => 1_000_000,  // DOT
			&CurrencyId::LPToken(..) => micro::<Runtime>(NativeCurrencyId::get()),
			CurrencyId::ForeignAsset(foreign_asset_id) => {
				AssetIdMaps::<Runtime>::get_asset_metadata(AssetIds::ForeignAssetId(*foreign_asset_id)).
					map_or(Balance::max_value(), |metatata| metatata.minimal_balance)
			},
			_ => AssetIdMaps::<Runtime>::get_currency_metadata(*currency_id)
				.map_or(Balance::max_value(), |metatata| metatata.minimal_balance)
		}
	};
}

pub struct DustRemovalWhitelist;
impl Contains<AccountId> for DustRemovalWhitelist {
	fn contains(a: &AccountId) -> bool {
		AccountIdConversion::<AccountId>::into_account_truncating(&TreasuryPalletId::get()).eq(a)
			|| AccountIdConversion::<AccountId>::into_account_truncating(&TangleCrowdloanId::get())
				.eq(a) || AccountIdConversion::<AccountId>::into_account_truncating(
			&TangleVsbondPalletId::get(),
		)
		.eq(a) || AccountIdConversion::<AccountId>::into_account_truncating(
			&SlpEntrancePalletId::get(),
		)
		.eq(a) || AccountIdConversion::<AccountId>::into_account_truncating(&SlpExitPalletId::get())
			.eq(a) || FarmingKeeperPalletId::get().check_sub_account::<PoolId>(a)
			|| FarmingRewardIssuerPalletId::get().check_sub_account::<PoolId>(a)
			|| AccountIdConversion::<AccountId>::into_account_truncating(&BuybackPalletId::get())
				.eq(a) || AccountIdConversion::<AccountId>::into_account_truncating(
			&SystemMakerPalletId::get(),
		)
		.eq(a) || FeeSharePalletId::get().check_sub_account::<DistributionId>(a)
			|| a.eq(&ZenklinkFeeAccount::get())
			|| AccountIdConversion::<AccountId>::into_account_truncating(&CommissionPalletId::get())
				.eq(a)
	}
}

parameter_types! {
	pub TangleTreasuryAccount: AccountId = TreasuryPalletId::get().into_account_truncating();
	// gVLo8SqxQsm11cXpkFJnaqXhAd6qtxwi2DhxfUFE7pSiyoi
	pub ZenklinkFeeAccount: AccountId = hex!["d2ca9ceb400cc68dcf58de4871bd261406958fd17338d2d82ad2592db62e6a2a"].into();
}

pub struct CurrencyHooks;
impl MutationHooks<AccountId, CurrencyId, Balance> for CurrencyHooks {
	type OnDust = orml_tokens::TransferDust<Runtime, TangleTreasuryAccount>;
	type OnSlash = ();
	type PreDeposit = ();
	type PostDeposit = ();
	type PreTransfer = ();
	type PostTransfer = ();
	type OnNewTokenAccount = ();
	type OnKilledTokenAccount = ();
}

impl orml_tokens::Config for Runtime {
	type Amount = Amount;
	type Balance = Balance;
	type CurrencyId = CurrencyId;
	type DustRemovalWhitelist = DustRemovalWhitelist;
	type RuntimeEvent = RuntimeEvent;
	type ExistentialDeposits = ExistentialDeposits;
	type MaxLocks = ConstU32<50>;
	type MaxReserves = ConstU32<50>;
	type ReserveIdentifier = [u8; 8];
	type WeightInfo = weights::orml_tokens::WeightInfo<Runtime>;
	type CurrencyHooks = CurrencyHooks;
}

parameter_types! {
	pub SelfLocation: Location = Location::new(1, [Parachain(ParachainInfo::get().into())]);
	pub SelfRelativeLocation: Location = Location::here();
	pub const BaseXcmWeight: Weight = Weight::from_parts(1_000_000_000_u64, 0);
	pub const MaxAssetsForTransfer: usize = 2;
}

parameter_type_with_key! {
	pub ParachainMinFee: |_location: Location| -> Option<u128> {
		Some(u128::MAX)
	};
}

impl orml_xtokens::Config for Runtime {
	type RuntimeEvent = RuntimeEvent;
	type Balance = Balance;
	type CurrencyId = CurrencyId;
	type CurrencyIdConvert = TangleCurrencyIdConvert<ParachainInfo>;
	type AccountIdToLocation = TangleAccountIdToLocation;
	type UniversalLocation = UniversalLocation;
	type SelfLocation = SelfRelativeLocation;
	type XcmExecutor = XcmExecutor<XcmConfig>;
	type Weigher = FixedWeightBounds<UnitWeightCost, RuntimeCall, MaxInstructions>;
	type BaseXcmWeight = BaseXcmWeight;
	type MaxAssetsForTransfer = MaxAssetsForTransfer;
	type MinXcmFee = ParachainMinFee;
	type LocationsFilter = Everything;
	type ReserveProvider = RelativeReserveProvider;
	type RateLimiter = ();
	type RateLimiterId = ();
}

impl orml_unknown_tokens::Config for Runtime {
	type RuntimeEvent = RuntimeEvent;
}

impl orml_xcm::Config for Runtime {
	type RuntimeEvent = RuntimeEvent;
	type SovereignOrigin = EnsureRoot<AccountId>;
}

pub struct DummySalpHelper;

impl tangle_xcm_interface::SalpHelper<AccountId, RuntimeCall, Balance> for DummySalpHelper {
	fn confirm_contribute_call() -> RuntimeCall {
		RuntimeCall::System(frame_system::Call::remark_with_event { remark: "test".into() })
	}

	fn bind_query_id_and_contribution(
		_query_id: u64,
		_index: u32,
		_contributer: AccountId,
		_amount: Balance,
	) {
	}
}

parameter_types! {
	pub ParachainAccount: AccountId = ParachainInfo::get().into_account_truncating();
}

impl tangle_xcm_interface::Config for Runtime {
	type RuntimeEvent = RuntimeEvent;
	type UpdateOrigin = EnsureRoot<AccountId>;
	type MultiCurrency = Currencies;
	type RelayNetwork = RelayNetwork;
	type RelaychainCurrencyId = RelayCurrencyId;
	type ParachainSovereignAccount = ParachainAccount;
	type XcmExecutor = XcmExecutor<XcmConfig>;
	type AccountIdToLocation = TangleAccountIdToLocation;
	type SalpHelper = DummySalpHelper;
	type ParachainId = SelfParaChainId;
	type CallBackTimeOut = ConstU32<10>;
	type CurrencyIdConvert = AssetIdMaps<Runtime>;
}