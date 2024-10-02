use crate::CurrencyId;
use crate::TimeUnit;
use sp_runtime::DispatchResult;
use sp_std::{boxed::Box, vec::Vec};
use xcm::latest::Weight;
use xcm::v3::MultiLocation;

pub type QueryId = u64;

pub trait StakingAgentDelegator<AccountId, MultiLocation, CurrencyId, Balance, Error> {
	/// Delegate to some validators.
	fn delegate(
		who: &AccountId,
		targets: &Vec<MultiLocation>,
		currency_id: CurrencyId,
		weight_and_fee: Option<(Weight, Balance)>,
	) -> Result<QueryId, Error>;

	/// Delegate to some validators.
	fn undelegate(
		who: &AccountId,
		targets: &Vec<MultiLocation>,
		currency_id: CurrencyId,
		weight_and_fee: Option<(Weight, Balance)>,
	) -> Result<QueryId, Error>;

	/// Delegate to some validators.
	fn liquidize(
		who: &AccountId,
		targets: &Vec<MultiLocation>,
		currency_id: CurrencyId,
		amount: Option<Balance>,
		weight_and_fee: Option<(Weight, Balance)>,
	) -> Result<QueryId, Error>;

	fn active_stake(account: &AccountId, currency_id: CurrencyId) -> Balance;

	fn total_stake(account: &AccountId, currency_id: CurrencyId) -> Balance;
}

/// Abstraction over a staking agent for a certain POS chain.
pub trait StakingAgent<
	Balance,
	AccountId,
	LedgerUpdateEntry,
	ValidatorsByDelegatorUpdateEntry,
	Error,
>
{
	/// Delegator initialization work. Generate a new delegator and return its ID.
	fn initialize_delegator(
		&self,
		currency_id: CurrencyId,
		delegator_location: Option<Box<MultiLocation>>,
	) -> Result<MultiLocation, Error>;

	/// First time bonding some amount to a delegator.
	fn bond(
		&self,
		who: &MultiLocation,
		amount: Balance,
		validator: &Option<MultiLocation>,
		currency_id: CurrencyId,
		weight_and_fee: Option<(Weight, Balance)>,
	) -> Result<QueryId, Error>;

	/// Bond extra amount to a delegator.
	fn bond_extra(
		&self,
		who: &MultiLocation,
		amount: Balance,
		validator: &Option<MultiLocation>,
		currency_id: CurrencyId,
		weight_and_fee: Option<(Weight, Balance)>,
	) -> Result<QueryId, Error>;

	/// Decrease the bonding amount of a delegator.
	fn unbond(
		&self,
		who: &MultiLocation,
		amount: Balance,
		validator: &Option<MultiLocation>,
		currency_id: CurrencyId,
		weight_and_fee: Option<(Weight, Balance)>,
	) -> Result<QueryId, Error>;

	/// Unbonding all amount of a delegator. Differentiate from regular unbonding.
	fn unbond_all(
		&self,
		who: &MultiLocation,
		currency_id: CurrencyId,
		weight_and_fee: Option<(Weight, Balance)>,
	) -> Result<QueryId, Error>;

	/// Cancel some unbonding amount.
	fn rebond(
		&self,
		who: &MultiLocation,
		amount: Option<Balance>,
		validator: &Option<MultiLocation>,
		currency_id: CurrencyId,
		weight_and_fee: Option<(Weight, Balance)>,
	) -> Result<QueryId, Error>;

	/// Delegate to some validators.
	fn delegate(
		&self,
		who: &MultiLocation,
		targets: &Vec<MultiLocation>,
		currency_id: CurrencyId,
		weight_and_fee: Option<(Weight, Balance)>,
	) -> Result<QueryId, Error>;

	/// Remove delegation relationship with some validators.
	fn undelegate(
		&self,
		who: &MultiLocation,
		targets: &Vec<MultiLocation>,
		currency_id: CurrencyId,
		weight_and_fee: Option<(Weight, Balance)>,
	) -> Result<QueryId, Error>;

	/// Re-delegate existing delegation to a new validator set.
	fn redelegate(
		&self,
		who: &MultiLocation,
		targets: &Option<Vec<MultiLocation>>,
		currency_id: CurrencyId,
		weight_and_fee: Option<(Weight, Balance)>,
	) -> Result<QueryId, Error>;

	/// Initiate payout for a certain delegator.
	fn payout(
		&self,
		who: &MultiLocation,
		validator: &MultiLocation,
		when: &Option<TimeUnit>,
		currency_id: CurrencyId,
		weight_and_fee: Option<(Weight, Balance)>,
	) -> Result<QueryId, Error>;

	/// Withdraw the due payout into free balance.
	fn liquidize(
		&self,
		who: &MultiLocation,
		when: &Option<TimeUnit>,
		validator: &Option<MultiLocation>,
		currency_id: CurrencyId,
		amount: Option<Balance>,
		weight_and_fee: Option<(Weight, Balance)>,
	) -> Result<QueryId, Error>;

	/// Cancel the identity of delegator.
	fn chill(
		&self,
		who: &MultiLocation,
		currency_id: CurrencyId,
		weight_and_fee: Option<(Weight, Balance)>,
	) -> Result<QueryId, Error>;

	/// Make token transferred back to Tangle chain account.
	fn transfer_back(
		&self,
		from: &MultiLocation,
		to: &MultiLocation,
		amount: Balance,
		currency_id: CurrencyId,
		weight_and_fee: Option<(Weight, Balance)>,
	) -> Result<(), Error>;

	/// Make token from Tangle chain account to the staking chain account.
	fn transfer_to(
		&self,
		from: &MultiLocation,
		to: &MultiLocation,
		amount: Balance,
		currency_id: CurrencyId,
	) -> Result<(), Error>;

	// Convert token to another token.
	fn convert_asset(
		&self,
		who: &MultiLocation,
		amount: Balance,
		currency_id: CurrencyId,
		if_from_currency: bool,
		weight_and_fee: Option<(Weight, Balance)>,
	) -> Result<QueryId, Error>;

	/// Tune the Lst exchage rate.
	fn tune_lst_exchange_rate(
		&self,
		who: &Option<MultiLocation>,
		token_amount: Balance,
		lst_amount: Balance,
		currency_id: CurrencyId,
	) -> Result<(), Error>;

	/// ************************************
	/// Abstraction over a fee manager for charging fee from the origin chain(Tangle)
	/// or deposit fee reserves for the destination chain nominator accounts.
	/// ************************************
	/// Charge hosting fee.
	fn charge_hosting_fee(
		&self,
		amount: Balance,
		from: &MultiLocation,
		to: &MultiLocation,
		currency_id: CurrencyId,
	) -> DispatchResult;

	/// Deposit some amount as fee to nominator accounts.
	fn supplement_fee_reserve(
		&self,
		amount: Balance,
		from: &MultiLocation,
		to: &MultiLocation,
		currency_id: CurrencyId,
	) -> Result<(), Error>;

	/// Remove an existing serving delegator for a particular currency.
	fn remove_delegator(&self, who: &MultiLocation, currency_id: CurrencyId) -> DispatchResult;

	/// ************************************
	/// Abstraction over a QueryResponseChecker.
	/// ************************************

	fn check_delegator_ledger_query_response(
		&self,
		query_id: QueryId,
		query_entry: LedgerUpdateEntry,
		manual_mode: bool,
		currency_id: CurrencyId,
	) -> Result<bool, Error>;

	fn check_validators_by_delegator_query_response(
		&self,
		query_id: QueryId,
		query_entry: ValidatorsByDelegatorUpdateEntry,
		manual_mode: bool,
	) -> Result<bool, Error>;

	fn fail_delegator_ledger_query_response(&self, query_id: QueryId) -> Result<(), Error>;

	fn fail_validators_by_delegator_query_response(&self, query_id: QueryId) -> Result<(), Error>;
}

/// Helper to communicate with pallet_xcm's Queries storage for Substrate chains in runtime.
pub trait QueryResponseManager<QueryId, AccountId, BlockNumber, RuntimeCall> {
	// If the query exists and we've already got the Response, then True is returned. Otherwise,
	// False is returned.
	fn get_query_response_record(query_id: QueryId) -> bool;
	fn create_query_record(
		responder: AccountId,
		call_back: Option<RuntimeCall>,
		timeout: BlockNumber,
	) -> u64;
	fn remove_query_record(query_id: QueryId) -> bool;
}

pub trait OnRefund<AccountId, CurrencyId, Balance> {
	fn on_refund(token_id: CurrencyId, to: AccountId, token_amount: Balance) -> u64;
}

impl<AccountId, CurrencyId, Balance> OnRefund<AccountId, CurrencyId, Balance> for () {
	fn on_refund(_token_id: CurrencyId, _to: AccountId, _token_amount: Balance) -> u64 {
		0
	}
}
