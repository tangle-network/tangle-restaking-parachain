// This file is part of Tangle.

// Copyright (C) Liebi Technologies PTE. LTD.
// SPDX-License-Identifier: GPL-3.0-or-later WITH Classpath-exception-2.0

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

// Ensure we're `no_std` when compiling for Wasm.

#![cfg(test)]

use crate as tangle_slp;
use crate::{Config, DispatchResult, QueryResponseManager};
pub use cumulus_primitives_core::ParaId;
use frame_support::{
	construct_runtime, derive_impl, ord_parameter_types,
	pallet_prelude::Get,
	parameter_types,
	traits::{ConstU128, ConstU32, Everything, Nothing, ProcessMessageError},
	PalletId,
};
use frame_system::{EnsureRoot, EnsureSignedBy};
use hex_literal::hex;
use orml_traits::{location::RelativeReserveProvider, parameter_type_with_key};
use codec::{Decode, Encode};
use sp_core::{bounded::BoundedVec, hashing::blake2_256};
pub use sp_runtime::Perbill;
use sp_runtime::{
	traits::{AccountIdConversion, Convert, TrailingZeroInput},
	AccountId32, BuildStorage, Percent,
};
use sp_std::{boxed::Box, vec::Vec};
use tangle_asset_registry::AssetIdMaps;
use tangle_primitives::{
	currency::{TNT, KSM, MANTA, VKSM},
	Amount, Balance, CurrencyId, DoNothingExecuteXcm, DoNothingRouter, SlpxOperator, TokenSymbol,
	XcmDestWeightAndFeeHandler, XcmOperationType,
};
use xcm::v3::{prelude::*, Weight};
use xcm_builder::{FixedWeightBounds, FrameTransactionalProcessor};
use xcm_executor::traits::{Properties, ShouldExecute};

pub type AccountId = AccountId32;
pub type Block = frame_system::mocking::MockBlock<Runtime>;

pub const ALICE: AccountId = AccountId32::new([1u8; 32]);
pub const BOB: AccountId = AccountId32::new([2u8; 32]);

construct_runtime!(
	pub enum Runtime {
		System: frame_system,
		Indices: pallet_indices,
		Balances: pallet_balances,
		Currencies: tangle_currencies,
		Tokens: orml_tokens,
		XTokens: orml_xtokens,
		Slp: tangle_slp,
		LstMinting: tangle_lst_minting,
		AssetRegistry: tangle_asset_registry,
		ParachainStaking: tangle_parachain_staking,
		Utility: pallet_utility,
		PolkadotXcm: pallet_xcm,
		StableAsset: tangle_stable_asset,
		StablePool: tangle_stable_pool,
	}
);

impl tangle_stable_pool::Config for Runtime {
	type WeightInfo = ();
	type ControlOrigin = EnsureSignedBy<One, AccountId>;
	type CurrencyId = CurrencyId;
	type MultiCurrency = Currencies;
	type StableAsset = StableAsset;
	type LstMinting = LstMinting;
	type CurrencyIdConversion = AssetIdMaps<Runtime>;
	type CurrencyIdRegister = AssetIdMaps<Runtime>;
}

pub struct EnsurePoolAssetId;
impl tangle_stable_asset::traits::ValidateAssetId<CurrencyId> for EnsurePoolAssetId {
	fn validate(_: CurrencyId) -> bool {
		true
	}
}
parameter_types! {
	pub const StableAssetPalletId: PalletId = PalletId(*b"nuts/sta");
}

impl tangle_stable_asset::Config for Runtime {
	type RuntimeEvent = RuntimeEvent;
	type AssetId = CurrencyId;
	type Balance = Balance;
	type Assets = Currencies;
	type PalletId = StableAssetPalletId;
	type AtLeast64BitUnsigned = u128;
	type FeePrecision = ConstU128<10_000_000_000>;
	type APrecision = ConstU128<100>;
	type PoolAssetLimit = ConstU32<5>;
	type SwapExactOverAmount = ConstU128<100>;
	type WeightInfo = ();
	type ListingOrigin = EnsureSignedBy<One, AccountId>;
	type EnsurePoolAssetId = EnsurePoolAssetId;
}

parameter_types! {
	pub const NativeCurrencyId: CurrencyId = TNT;
	pub const RelayCurrencyId: CurrencyId = KSM;
}

impl pallet_utility::Config for Runtime {
	type RuntimeCall = RuntimeCall;
	type RuntimeEvent = RuntimeEvent;
	type PalletsOrigin = OriginCaller;
	type WeightInfo = ();
}

parameter_types! {
	pub const BlockHashCount: u64 = 250;
}

#[derive_impl(frame_system::config_preludes::TestDefaultConfig as frame_system::DefaultConfig)]
impl frame_system::Config for Runtime {
	type Block = Block;
	type AccountId = AccountId;
	type Lookup = Indices;
	type AccountData = pallet_balances::AccountData<Balance>;
}

parameter_types! {
	pub const Deposit: u128 = 1_000_000_000_000;
}

impl pallet_indices::Config for Runtime {
	type AccountIndex = u32;
	type Currency = Balances;
	type Deposit = Deposit;
	type RuntimeEvent = RuntimeEvent;
	type WeightInfo = ();
}

parameter_types! {
	pub const ExistentialDeposit: u128 = 1;
	pub const MaxLocks: u32 = 999_999;
	pub const MaxReserves: u32 = 999_999;
}

impl pallet_balances::Config for Runtime {
	type AccountStore = System;
	/// The type for recording an account's balance.
	type Balance = Balance;
	type DustRemoval = ();
	/// The ubiquitous event type.
	type RuntimeEvent = RuntimeEvent;
	type ExistentialDeposit = ExistentialDeposit;
	type MaxLocks = MaxLocks;
	type MaxReserves = MaxReserves;
	type ReserveIdentifier = [u8; 8];
	type WeightInfo = pallet_balances::weights::SubstrateWeight<Runtime>;
	type RuntimeHoldReason = RuntimeHoldReason;
	type RuntimeFreezeReason = RuntimeFreezeReason;
	type FreezeIdentifier = ();
	type MaxFreezes = ConstU32<0>;
}

orml_traits::parameter_type_with_key! {
	pub ExistentialDeposits: |_currency_id: CurrencyId| -> Balance {
		0
	};
}

impl orml_tokens::Config for Runtime {
	type Amount = Amount;
	type Balance = Balance;
	type CurrencyId = CurrencyId;
	type DustRemovalWhitelist = Nothing;
	type RuntimeEvent = RuntimeEvent;
	type ExistentialDeposits = ExistentialDeposits;
	type MaxLocks = MaxLocks;
	type MaxReserves = ();
	type ReserveIdentifier = [u8; 8];
	type WeightInfo = ();
	type CurrencyHooks = ();
}

pub type TangleToken = tangle_currencies::BasicCurrencyAdapter<Runtime, Balances, Amount, u64>;

impl tangle_currencies::Config for Runtime {
	type GetNativeCurrencyId = NativeCurrencyId;
	type MultiCurrency = Tokens;
	type NativeCurrency = TangleToken;
	type WeightInfo = ();
}

parameter_type_with_key! {
	pub ParachainMinFee: |_location: xcm::v4::Location| -> Option<u128> {
		Some(u128::MAX)
	};
}

parameter_types! {
	pub SelfRelativeLocation: xcm::v4::Location = xcm::v4::Location::here();
	pub const BaseXcmWeight: Weight = Weight::from_parts(1000_000_000u64, 0);
	pub const MaxAssetsForTransfer: usize = 2;
}

impl orml_xtokens::Config for Runtime {
	type RuntimeEvent = RuntimeEvent;
	type Balance = Balance;
	type CurrencyId = CurrencyId;
	type CurrencyIdConvert = TangleCurrencyIdConvert;
	type AccountIdToLocation = ();
	type UniversalLocation = UniversalLocation;
	type SelfLocation = SelfRelativeLocation;
	type XcmExecutor = DoNothingExecuteXcm;
	type Weigher = FixedWeightBounds<UnitWeightCost, RuntimeCall, MaxInstructions>;
	type BaseXcmWeight = BaseXcmWeight;
	type MaxAssetsForTransfer = MaxAssetsForTransfer;
	type MinXcmFee = ParachainMinFee;
	type LocationsFilter = Everything;
	type ReserveProvider = RelativeReserveProvider;
	type RateLimiter = ();
	type RateLimiterId = ();
}

parameter_types! {
	pub const MaximumUnlockIdOfUser: u32 = 10;
	pub const MaximumUnlockIdOfTimeUnit: u32 = 50;
	pub TangleEntranceAccount: PalletId = PalletId(*b"bf/vtkin");
	pub TangleExitAccount: PalletId = PalletId(*b"bf/vtout");
	pub TangleFeeAccount: AccountId = hex!["e4da05f08e89bf6c43260d96f26fffcfc7deae5b465da08669a9d008e64c2c63"].into();
	pub IncentivePoolAccount: PalletId = PalletId(*b"bf/inpoo");
}

pub struct SlpxInterface;
impl SlpxOperator<Balance> for SlpxInterface {
	fn get_moonbeam_transfer_to_fee() -> Balance {
		Default::default()
	}
}

impl tangle_lst_minting::Config for Runtime {
	type RuntimeEvent = RuntimeEvent;
	type MultiCurrency = Currencies;
	type ControlOrigin = EnsureSignedBy<One, AccountId>;
	type MaximumUnlockIdOfUser = MaximumUnlockIdOfUser;
	type MaximumUnlockIdOfTimeUnit = MaximumUnlockIdOfTimeUnit;
	type EntranceAccount = TangleEntranceAccount;
	type ExitAccount = TangleExitAccount;
	type FeeAccount = TangleFeeAccount;
	type RedeemFeeAccount = TangleFeeAccount;
	type RelayChainToken = RelayCurrencyId;
	type CurrencyIdConversion = AssetIdMaps<Runtime>;
	type CurrencyIdRegister = AssetIdMaps<Runtime>;
	type TangleSlp = Slp;
	type TangleSlpx = SlpxInterface;
	type WeightInfo = ();
	type OnRedeemSuccess = ();
	type XcmTransfer = XTokens;
	type AstarParachainId = ConstU32<2007>;
	type MoonbeamParachainId = ConstU32<2023>;
	type HydradxParachainId = ConstU32<2034>;
	type MantaParachainId = ConstU32<2104>;
	type InterlayParachainId = ConstU32<2032>;
	type ChannelCommission = ();
	type MaxLockRecords = ConstU32<100>;
	type IncentivePoolAccount = IncentivePoolAccount;
	type LstMinting = ();
	type AssetIdMaps = AssetIdMaps<Runtime>;
}

parameter_types! {
	pub const MinBlocksPerRound: u32 = 3;
	pub const DefaultBlocksPerRound: u32 = 5;
	pub const LeaveCandidatesDelay: u32 = 2;
	pub const CandidateBondLessDelay: u32 = 2;
	pub const LeaveDelegatorsDelay: u32 = 2;
	pub const RevokeDelegationDelay: u32 = 2;
	pub const DelegationBondLessDelay: u32 = 2;
	pub const RewardPaymentDelay: u32 = 2;
	pub const MinSelectedCandidates: u32 = 5;
	pub const MaxTopDelegationsPerCandidate: u32 = 4;
	pub const MaxBottomDelegationsPerCandidate: u32 = 4;
	pub const MaxDelegationsPerDelegator: u32 = 4;
	pub const DefaultCollatorCommission: Perbill = Perbill::from_percent(20);
	pub const DefaultParachainBondReservePercent: Percent = Percent::from_percent(30);
	pub const MinCollatorStk: u128 = 10;
	pub const MinDelegatorStk: u128 = 5;
	pub const MinDelegation: u128 = 3;
	pub AllowInflation: bool = true;
	pub PaymentInRound: u128 = 10;
	pub const ParachainStakingPalletId: PalletId = PalletId(*b"bf/stake");
	pub ToMigrateInvulnables: Vec<AccountId> = vec![AccountId32::new([1u8; 32])];
	pub InitSeedStk: u128 = 10;
}
impl tangle_parachain_staking::Config for Runtime {
	type RuntimeEvent = RuntimeEvent;
	type Currency = Balances;
	type MonetaryGovernanceOrigin = frame_system::EnsureRoot<AccountId>;
	type MinBlocksPerRound = MinBlocksPerRound;
	type DefaultBlocksPerRound = DefaultBlocksPerRound;
	type LeaveCandidatesDelay = LeaveCandidatesDelay;
	type CandidateBondLessDelay = CandidateBondLessDelay;
	type LeaveDelegatorsDelay = LeaveDelegatorsDelay;
	type RevokeDelegationDelay = RevokeDelegationDelay;
	type DelegationBondLessDelay = DelegationBondLessDelay;
	type RewardPaymentDelay = RewardPaymentDelay;
	type MinSelectedCandidates = MinSelectedCandidates;
	type MaxTopDelegationsPerCandidate = MaxTopDelegationsPerCandidate;
	type MaxBottomDelegationsPerCandidate = MaxBottomDelegationsPerCandidate;
	type MaxDelegationsPerDelegator = MaxDelegationsPerDelegator;
	type DefaultCollatorCommission = DefaultCollatorCommission;
	type DefaultParachainBondReservePercent = DefaultParachainBondReservePercent;
	type MinCollatorStk = MinCollatorStk;
	type MinCandidateStk = MinCollatorStk;
	type MinDelegatorStk = MinDelegatorStk;
	type MinDelegation = MinDelegation;
	type OnCollatorPayout = ();
	type OnNewRound = ();
	type WeightInfo = ();
	type AllowInflation = AllowInflation;
	type PaymentInRound = PaymentInRound;
	type PalletId = ParachainStakingPalletId;
	type ToMigrateInvulnables = ToMigrateInvulnables;
	type InitSeedStk = InitSeedStk;
}

ord_parameter_types! {
	pub const CouncilAccount: AccountId = AccountId::from([1u8; 32]);
}
impl tangle_asset_registry::Config for Runtime {
	type RuntimeEvent = RuntimeEvent;
	type Currency = Balances;
	type RegisterOrigin = EnsureSignedBy<CouncilAccount, AccountId>;
	type WeightInfo = ();
}

ord_parameter_types! {
	pub const One: AccountId = AccountId32::new([1u8; 32]);
}

parameter_types! {
	pub TangleParachainAccountId20: [u8; 20] = hex_literal::hex!["7369626cd1070000000000000000000000000000"].into();
}

pub struct SubAccountIndexMultiLocationConvertor;
impl Convert<(u16, CurrencyId), MultiLocation> for SubAccountIndexMultiLocationConvertor {
	fn convert((sub_account_index, currency_id): (u16, CurrencyId)) -> MultiLocation {
		match currency_id {
			// AccountKey20 format of Tangle sibling para account
			CurrencyId::Token(TokenSymbol::MOVR) => MultiLocation::new(
				1,
				X2(
					Parachain(2023),
					AccountKey20 {
						network: None,
						key: Slp::derivative_account_id_20(
							hex!["7369626cd1070000000000000000000000000000"].into(),
							sub_account_index,
						)
						.into(),
					},
				),
			),
			// Only relay chain use the Tangle para account with "para"
			CurrencyId::Token(TokenSymbol::KSM) => MultiLocation::new(
				1,
				X1(Junction::AccountId32 {
					network: None,
					id: Self::derivative_account_id(
						ParaId::from(2001u32).into_account_truncating(),
						sub_account_index,
					)
					.into(),
				}),
			),
			// Tangle Kusama Native token
			CurrencyId::Native(TokenSymbol::TNT) => MultiLocation::new(
				0,
				X1(Junction::AccountId32 {
					network: None,
					id: Self::derivative_account_id(
						polkadot_parachain_primitives::primitives::Sibling::from(2001u32)
							.into_account_truncating(),
						sub_account_index,
					)
					.into(),
				}),
			),
			MANTA => {
				// get parachain id
				if let Some(location) = TangleCurrencyIdConvert::convert(currency_id) {
					let v3_location = xcm::v3::Location::try_from(location).unwrap();
					if let Some(Parachain(para_id)) = v3_location.interior().first() {
						MultiLocation::new(
							1,
							X2(
								Parachain(*para_id),
								Junction::AccountId32 {
									network: None,
									id: Self::derivative_account_id(
										polkadot_parachain_primitives::primitives::Sibling::from(
											2030u32,
										)
										.into_account_truncating(),
										sub_account_index,
									)
									.into(),
								},
							),
						)
					} else {
						MultiLocation::default()
					}
				} else {
					MultiLocation::default()
				}
			},
			// Other sibling chains use the Tangle para account with "sibl"
			_ => {
				// get parachain id
				if let Some(location) = TangleCurrencyIdConvert::convert(currency_id) {
					let v3_location = xcm::v3::Location::try_from(location).unwrap();
					if let Some(Parachain(para_id)) = v3_location.interior().first() {
						MultiLocation::new(
							1,
							X2(
								Parachain(*para_id),
								Junction::AccountId32 {
									network: None,
									id: Self::derivative_account_id(
										polkadot_parachain_primitives::primitives::Sibling::from(
											2001u32,
										)
										.into_account_truncating(),
										sub_account_index,
									)
									.into(),
								},
							),
						)
					} else {
						MultiLocation::default()
					}
				} else {
					MultiLocation::default()
				}
			},
		}
	}
}

// Mock Utility::derivative_account_id function.
impl SubAccountIndexMultiLocationConvertor {
	pub fn derivative_account_id(who: AccountId, index: u16) -> AccountId {
		let entropy = (b"modlpy/utilisuba", who, index).using_encoded(blake2_256);
		Decode::decode(&mut TrailingZeroInput::new(entropy.as_ref()))
			.expect("infinite length input; no invalid inputs for type; qed")
	}
}

pub struct ParachainId;
impl Get<ParaId> for ParachainId {
	fn get() -> ParaId {
		2001.into()
	}
}

parameter_types! {
	pub const MaxTypeEntryPerBlock: u32 = 10;
	pub const MaxRefundPerBlock: u32 = 10;
	pub const MaxLengthLimit: u32 = 100;
}

pub struct TangleCurrencyIdConvert;
impl Convert<CurrencyId, Option<xcm::v4::Location>> for TangleCurrencyIdConvert {
	fn convert(id: CurrencyId) -> Option<xcm::v4::Location> {
		use CurrencyId::*;
		use TokenSymbol::*;

		match id {
			Token(MOVR) => Some(xcm::v4::Location::new(
				1,
				[xcm::v4::Junction::Parachain(2023), xcm::v4::Junction::PalletInstance(10)],
			)),
			Token(KSM) => Some(xcm::v4::Location::parent()),
			Native(TNT) => Some(xcm::v4::Location::new(
				0,
				[xcm::v4::Junction::from(BoundedVec::try_from("0x0001".encode()).unwrap())],
			)),
			Token(PHA) => Some(xcm::v4::Location::new(1, [xcm::v4::Junction::Parachain(2004)])),
			MANTA => Some(xcm::v4::Location::new(1, [xcm::v4::Junction::Parachain(2104)])),
			_ => None,
		}
	}
}

pub struct SubstrateResponseManager;
impl QueryResponseManager<QueryId, xcm::v4::Location, u64, RuntimeCall>
	for SubstrateResponseManager
{
	fn get_query_response_record(_query_id: QueryId) -> bool {
		Default::default()
	}
	fn create_query_record(
		_responder: xcm::v4::Location,
		_call_back: Option<RuntimeCall>,
		_timeout: u64,
	) -> u64 {
		Default::default()
	}
	fn remove_query_record(_query_id: QueryId) -> bool {
		Default::default()
	}
}

parameter_types! {
	pub TangleTreasuryAccount: AccountId = PalletId(*b"bf/trsry").into_account_truncating();
}

impl Config for Runtime {
	type RuntimeEvent = RuntimeEvent;
	type RuntimeOrigin = RuntimeOrigin;
	type RuntimeCall = RuntimeCall;
	type MultiCurrency = Currencies;
	type ControlOrigin = EnsureSignedBy<One, AccountId>;
	type WeightInfo = ();
	type LstMinting = LstMinting;
	type AccountConverter = SubAccountIndexMultiLocationConvertor;
	type ParachainId = ParachainId;
	type SubstrateResponseManager = SubstrateResponseManager;
	type MaxTypeEntryPerBlock = MaxTypeEntryPerBlock;
	type MaxRefundPerBlock = MaxRefundPerBlock;
	type ParachainStaking = ParachainStaking;
	type XcmTransfer = XTokens;
	type MaxLengthLimit = MaxLengthLimit;
	type XcmWeightAndFeeHandler = XcmDestWeightAndFee;
	type ChannelCommission = ();
	type StablePoolHandler = StablePool;
	type AssetIdMaps = AssetIdMaps<Runtime>;
	type TreasuryAccount = TangleTreasuryAccount;
}

pub struct XcmDestWeightAndFee;
impl XcmDestWeightAndFeeHandler<CurrencyId, Balance> for XcmDestWeightAndFee {
	fn get_operation_weight_and_fee(
		_token: CurrencyId,
		_operation: XcmOperationType,
	) -> Option<(Weight, Balance)> {
		// Some((Weight::from_parts(100, 100), 100u32.into()))
		Some((20_000_000_000.into(), 10_000_000_000))
	}

	fn set_xcm_dest_weight_and_fee(
		_currency_id: CurrencyId,
		_operation: XcmOperationType,
		_weight_and_fee: Option<(Weight, Balance)>,
	) -> DispatchResult {
		Ok(())
	}
}

parameter_types! {
	// One XCM operation is 200_000_000 XcmWeight, cross-chain transfer ~= 2x of transfer = 3_000_000_000
	pub UnitWeightCost: Weight = Weight::from_parts(200_000_000, 0);
	pub const MaxInstructions: u32 = 100;
	pub UniversalLocation: xcm::v4::InteriorLocation = xcm::v4::Junction::Parachain(2001).into();
}

pub struct Barrier;
impl ShouldExecute for Barrier {
	fn should_execute<Call>(
		_origin: &xcm::v4::Location,
		_message: &mut [xcm::v4::Instruction<Call>],
		_max_weight: Weight,
		_weight_credit: &mut Properties,
	) -> Result<(), ProcessMessageError> {
		Ok(())
	}
}

pub struct XcmConfig;
impl xcm_executor::Config for XcmConfig {
	type AssetClaims = PolkadotXcm;
	type AssetTransactor = ();
	type AssetTrap = PolkadotXcm;
	type Barrier = Barrier;
	type RuntimeCall = RuntimeCall;
	type IsReserve = ();
	type IsTeleporter = ();
	type UniversalLocation = UniversalLocation;
	type OriginConverter = ();
	type ResponseHandler = PolkadotXcm;
	type SubscriptionService = PolkadotXcm;
	type Trader = ();
	type Weigher = FixedWeightBounds<UnitWeightCost, RuntimeCall, MaxInstructions>;
	type XcmSender = DoNothingRouter;
	type PalletInstancesInfo = AllPalletsWithSystem;
	type MaxAssetsIntoHolding = ConstU32<64>;
	type FeeManager = ();
	type MessageExporter = ();
	type UniversalAliases = Nothing;
	type CallDispatcher = RuntimeCall;
	type SafeCallFilter = Everything;
	type AssetLocker = ();
	type AssetExchanger = ();
	type Aliasers = Nothing;
	type TransactionalProcessor = FrameTransactionalProcessor;
}

#[cfg(feature = "runtime-benchmarks")]
parameter_types! {
	pub ReachableDest: Option<Location> = Some(Parent.into());
}

impl pallet_xcm::Config for Runtime {
	type RuntimeEvent = RuntimeEvent;
	type ExecuteXcmOrigin = xcm_builder::EnsureXcmOrigin<RuntimeOrigin, ()>;
	type UniversalLocation = UniversalLocation;
	type SendXcmOrigin = xcm_builder::EnsureXcmOrigin<RuntimeOrigin, ()>;
	type Weigher = FixedWeightBounds<UnitWeightCost, RuntimeCall, MaxInstructions>;
	type XcmExecuteFilter = Nothing;
	type XcmExecutor = DoNothingExecuteXcm;
	type XcmReserveTransferFilter = Everything;
	type XcmRouter = DoNothingRouter;
	type XcmTeleportFilter = Nothing;
	type RuntimeOrigin = RuntimeOrigin;
	type RuntimeCall = RuntimeCall;
	const VERSION_DISCOVERY_QUEUE_SIZE: u32 = 100;
	type AdvertisedXcmVersion = ConstU32<2>;
	type Currency = Balances;
	type CurrencyMatcher = ();
	type TrustedLockers = ();
	type SovereignAccountOf = ();
	type MaxLockers = ConstU32<8>;
	type WeightInfo = pallet_xcm::TestWeightInfo;
	type AdminOrigin = EnsureRoot<AccountId>;
	type MaxRemoteLockConsumers = ConstU32<0>;
	type RemoteLockConsumerIdentifier = ();
}

pub struct ExtBuilder {
	endowed_accounts: Vec<(AccountId, CurrencyId, Balance)>,
}

impl Default for ExtBuilder {
	fn default() -> Self {
		Self { endowed_accounts: vec![] }
	}
}

impl ExtBuilder {
	pub fn balances(mut self, endowed_accounts: Vec<(AccountId, CurrencyId, Balance)>) -> Self {
		self.endowed_accounts = endowed_accounts;
		self
	}

	pub fn one_hundred_for_alice(self) -> Self {
		self.balances(vec![(ALICE, TNT, 100), (ALICE, KSM, 100), (ALICE, VKSM, 100)])
	}

	pub fn build(self) -> sp_io::TestExternalities {
		let mut t = frame_system::GenesisConfig::<Runtime>::default().build_storage().unwrap();

		pallet_balances::GenesisConfig::<Runtime> {
			balances: self
				.endowed_accounts
				.clone()
				.into_iter()
				.filter(|(_, currency_id, _)| *currency_id == TNT)
				.map(|(account_id, _, initial_balance)| (account_id, initial_balance))
				.collect::<Vec<_>>(),
		}
		.assimilate_storage(&mut t)
		.unwrap();

		orml_tokens::GenesisConfig::<Runtime> {
			balances: self
				.endowed_accounts
				.into_iter()
				.filter(|(_, currency_id, _)| *currency_id != TNT)
				.collect::<Vec<_>>(),
		}
		.assimilate_storage(&mut t)
		.unwrap();

		t.into()
	}
}
