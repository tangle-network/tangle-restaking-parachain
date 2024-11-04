// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Data } from '@polkadot/types';
import type {
	BTreeMap,
	BTreeSet,
	Bytes,
	Compact,
	Enum,
	Null,
	Option,
	Result,
	Set,
	Struct,
	Text,
	U8aFixed,
	Vec,
	bool,
	i128,
	i64,
	u128,
	u16,
	u32,
	u64,
	u8,
} from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Vote } from '@polkadot/types/interfaces/elections';
import type {
	AccountId32,
	Call,
	H160,
	H256,
	MultiAddress,
	Perbill,
	Percent,
	Permill,
} from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

declare module '@polkadot/types/lookup' {
	/** @name FrameSystemAccountInfo (3) */
	interface FrameSystemAccountInfo extends Struct {
		readonly nonce: u32;
		readonly consumers: u32;
		readonly providers: u32;
		readonly sufficients: u32;
		readonly data: PalletBalancesAccountData;
	}

	/** @name PalletBalancesAccountData (5) */
	interface PalletBalancesAccountData extends Struct {
		readonly free: u128;
		readonly reserved: u128;
		readonly frozen: u128;
		readonly flags: u128;
	}

	/** @name FrameSupportDispatchPerDispatchClassWeight (8) */
	interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
		readonly normal: SpWeightsWeightV2Weight;
		readonly operational: SpWeightsWeightV2Weight;
		readonly mandatory: SpWeightsWeightV2Weight;
	}

	/** @name SpWeightsWeightV2Weight (9) */
	interface SpWeightsWeightV2Weight extends Struct {
		readonly refTime: Compact<u64>;
		readonly proofSize: Compact<u64>;
	}

	/** @name SpRuntimeDigest (14) */
	interface SpRuntimeDigest extends Struct {
		readonly logs: Vec<SpRuntimeDigestDigestItem>;
	}

	/** @name SpRuntimeDigestDigestItem (16) */
	interface SpRuntimeDigestDigestItem extends Enum {
		readonly isOther: boolean;
		readonly asOther: Bytes;
		readonly isConsensus: boolean;
		readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
		readonly isSeal: boolean;
		readonly asSeal: ITuple<[U8aFixed, Bytes]>;
		readonly isPreRuntime: boolean;
		readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
		readonly isRuntimeEnvironmentUpdated: boolean;
		readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
	}

	/** @name FrameSystemEventRecord (19) */
	interface FrameSystemEventRecord extends Struct {
		readonly phase: FrameSystemPhase;
		readonly event: Event;
		readonly topics: Vec<H256>;
	}

	/** @name FrameSystemEvent (21) */
	interface FrameSystemEvent extends Enum {
		readonly isExtrinsicSuccess: boolean;
		readonly asExtrinsicSuccess: {
			readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
		} & Struct;
		readonly isExtrinsicFailed: boolean;
		readonly asExtrinsicFailed: {
			readonly dispatchError: SpRuntimeDispatchError;
			readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
		} & Struct;
		readonly isCodeUpdated: boolean;
		readonly isNewAccount: boolean;
		readonly asNewAccount: {
			readonly account: AccountId32;
		} & Struct;
		readonly isKilledAccount: boolean;
		readonly asKilledAccount: {
			readonly account: AccountId32;
		} & Struct;
		readonly isRemarked: boolean;
		readonly asRemarked: {
			readonly sender: AccountId32;
			readonly hash_: H256;
		} & Struct;
		readonly type:
			| 'ExtrinsicSuccess'
			| 'ExtrinsicFailed'
			| 'CodeUpdated'
			| 'NewAccount'
			| 'KilledAccount'
			| 'Remarked';
	}

	/** @name FrameSupportDispatchDispatchInfo (22) */
	interface FrameSupportDispatchDispatchInfo extends Struct {
		readonly weight: SpWeightsWeightV2Weight;
		readonly class: FrameSupportDispatchDispatchClass;
		readonly paysFee: FrameSupportDispatchPays;
	}

	/** @name FrameSupportDispatchDispatchClass (23) */
	interface FrameSupportDispatchDispatchClass extends Enum {
		readonly isNormal: boolean;
		readonly isOperational: boolean;
		readonly isMandatory: boolean;
		readonly type: 'Normal' | 'Operational' | 'Mandatory';
	}

	/** @name FrameSupportDispatchPays (24) */
	interface FrameSupportDispatchPays extends Enum {
		readonly isYes: boolean;
		readonly isNo: boolean;
		readonly type: 'Yes' | 'No';
	}

	/** @name SpRuntimeDispatchError (25) */
	interface SpRuntimeDispatchError extends Enum {
		readonly isOther: boolean;
		readonly isCannotLookup: boolean;
		readonly isBadOrigin: boolean;
		readonly isModule: boolean;
		readonly asModule: SpRuntimeModuleError;
		readonly isConsumerRemaining: boolean;
		readonly isNoProviders: boolean;
		readonly isTooManyConsumers: boolean;
		readonly isToken: boolean;
		readonly asToken: SpRuntimeTokenError;
		readonly isArithmetic: boolean;
		readonly asArithmetic: SpArithmeticArithmeticError;
		readonly isTransactional: boolean;
		readonly asTransactional: SpRuntimeTransactionalError;
		readonly isExhausted: boolean;
		readonly isCorruption: boolean;
		readonly isUnavailable: boolean;
		readonly isRootNotAllowed: boolean;
		readonly type:
			| 'Other'
			| 'CannotLookup'
			| 'BadOrigin'
			| 'Module'
			| 'ConsumerRemaining'
			| 'NoProviders'
			| 'TooManyConsumers'
			| 'Token'
			| 'Arithmetic'
			| 'Transactional'
			| 'Exhausted'
			| 'Corruption'
			| 'Unavailable'
			| 'RootNotAllowed';
	}

	/** @name SpRuntimeModuleError (26) */
	interface SpRuntimeModuleError extends Struct {
		readonly index: u8;
		readonly error: U8aFixed;
	}

	/** @name SpRuntimeTokenError (27) */
	interface SpRuntimeTokenError extends Enum {
		readonly isFundsUnavailable: boolean;
		readonly isOnlyProvider: boolean;
		readonly isBelowMinimum: boolean;
		readonly isCannotCreate: boolean;
		readonly isUnknownAsset: boolean;
		readonly isFrozen: boolean;
		readonly isUnsupported: boolean;
		readonly isCannotCreateHold: boolean;
		readonly isNotExpendable: boolean;
		readonly isBlocked: boolean;
		readonly type:
			| 'FundsUnavailable'
			| 'OnlyProvider'
			| 'BelowMinimum'
			| 'CannotCreate'
			| 'UnknownAsset'
			| 'Frozen'
			| 'Unsupported'
			| 'CannotCreateHold'
			| 'NotExpendable'
			| 'Blocked';
	}

	/** @name SpArithmeticArithmeticError (28) */
	interface SpArithmeticArithmeticError extends Enum {
		readonly isUnderflow: boolean;
		readonly isOverflow: boolean;
		readonly isDivisionByZero: boolean;
		readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
	}

	/** @name SpRuntimeTransactionalError (29) */
	interface SpRuntimeTransactionalError extends Enum {
		readonly isLimitReached: boolean;
		readonly isNoLayer: boolean;
		readonly type: 'LimitReached' | 'NoLayer';
	}

	/** @name PalletIndicesEvent (30) */
	interface PalletIndicesEvent extends Enum {
		readonly isIndexAssigned: boolean;
		readonly asIndexAssigned: {
			readonly who: AccountId32;
			readonly index: u32;
		} & Struct;
		readonly isIndexFreed: boolean;
		readonly asIndexFreed: {
			readonly index: u32;
		} & Struct;
		readonly isIndexFrozen: boolean;
		readonly asIndexFrozen: {
			readonly index: u32;
			readonly who: AccountId32;
		} & Struct;
		readonly type: 'IndexAssigned' | 'IndexFreed' | 'IndexFrozen';
	}

	/** @name CumulusPalletParachainSystemEvent (31) */
	interface CumulusPalletParachainSystemEvent extends Enum {
		readonly isValidationFunctionStored: boolean;
		readonly isValidationFunctionApplied: boolean;
		readonly asValidationFunctionApplied: {
			readonly relayChainBlockNum: u32;
		} & Struct;
		readonly isValidationFunctionDiscarded: boolean;
		readonly isUpgradeAuthorized: boolean;
		readonly asUpgradeAuthorized: {
			readonly codeHash: H256;
		} & Struct;
		readonly isDownwardMessagesReceived: boolean;
		readonly asDownwardMessagesReceived: {
			readonly count: u32;
		} & Struct;
		readonly isDownwardMessagesProcessed: boolean;
		readonly asDownwardMessagesProcessed: {
			readonly weightUsed: SpWeightsWeightV2Weight;
			readonly dmqHead: H256;
		} & Struct;
		readonly isUpwardMessageSent: boolean;
		readonly asUpwardMessageSent: {
			readonly messageHash: Option<U8aFixed>;
		} & Struct;
		readonly type:
			| 'ValidationFunctionStored'
			| 'ValidationFunctionApplied'
			| 'ValidationFunctionDiscarded'
			| 'UpgradeAuthorized'
			| 'DownwardMessagesReceived'
			| 'DownwardMessagesProcessed'
			| 'UpwardMessageSent';
	}

	/** @name PalletBalancesEvent (33) */
	interface PalletBalancesEvent extends Enum {
		readonly isEndowed: boolean;
		readonly asEndowed: {
			readonly account: AccountId32;
			readonly freeBalance: u128;
		} & Struct;
		readonly isDustLost: boolean;
		readonly asDustLost: {
			readonly account: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isTransfer: boolean;
		readonly asTransfer: {
			readonly from: AccountId32;
			readonly to: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isBalanceSet: boolean;
		readonly asBalanceSet: {
			readonly who: AccountId32;
			readonly free: u128;
		} & Struct;
		readonly isReserved: boolean;
		readonly asReserved: {
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isUnreserved: boolean;
		readonly asUnreserved: {
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isReserveRepatriated: boolean;
		readonly asReserveRepatriated: {
			readonly from: AccountId32;
			readonly to: AccountId32;
			readonly amount: u128;
			readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
		} & Struct;
		readonly isDeposit: boolean;
		readonly asDeposit: {
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isWithdraw: boolean;
		readonly asWithdraw: {
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isSlashed: boolean;
		readonly asSlashed: {
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isMinted: boolean;
		readonly asMinted: {
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isBurned: boolean;
		readonly asBurned: {
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isSuspended: boolean;
		readonly asSuspended: {
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isRestored: boolean;
		readonly asRestored: {
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isUpgraded: boolean;
		readonly asUpgraded: {
			readonly who: AccountId32;
		} & Struct;
		readonly isIssued: boolean;
		readonly asIssued: {
			readonly amount: u128;
		} & Struct;
		readonly isRescinded: boolean;
		readonly asRescinded: {
			readonly amount: u128;
		} & Struct;
		readonly isLocked: boolean;
		readonly asLocked: {
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isUnlocked: boolean;
		readonly asUnlocked: {
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isFrozen: boolean;
		readonly asFrozen: {
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isThawed: boolean;
		readonly asThawed: {
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly type:
			| 'Endowed'
			| 'DustLost'
			| 'Transfer'
			| 'BalanceSet'
			| 'Reserved'
			| 'Unreserved'
			| 'ReserveRepatriated'
			| 'Deposit'
			| 'Withdraw'
			| 'Slashed'
			| 'Minted'
			| 'Burned'
			| 'Suspended'
			| 'Restored'
			| 'Upgraded'
			| 'Issued'
			| 'Rescinded'
			| 'Locked'
			| 'Unlocked'
			| 'Frozen'
			| 'Thawed';
	}

	/** @name FrameSupportTokensMiscBalanceStatus (34) */
	interface FrameSupportTokensMiscBalanceStatus extends Enum {
		readonly isFree: boolean;
		readonly isReserved: boolean;
		readonly type: 'Free' | 'Reserved';
	}

	/** @name PalletTransactionPaymentEvent (35) */
	interface PalletTransactionPaymentEvent extends Enum {
		readonly isTransactionFeePaid: boolean;
		readonly asTransactionFeePaid: {
			readonly who: AccountId32;
			readonly actualFee: u128;
			readonly tip: u128;
		} & Struct;
		readonly type: 'TransactionFeePaid';
	}

	/** @name PalletSessionEvent (36) */
	interface PalletSessionEvent extends Enum {
		readonly isNewSession: boolean;
		readonly asNewSession: {
			readonly sessionIndex: u32;
		} & Struct;
		readonly type: 'NewSession';
	}

	/** @name TangleParachainStakingEvent (37) */
	interface TangleParachainStakingEvent extends Enum {
		readonly isNewRound: boolean;
		readonly asNewRound: {
			readonly startingBlock: u32;
			readonly round: u32;
			readonly selectedCollatorsNumber: u32;
			readonly totalBalance: u128;
		} & Struct;
		readonly isJoinedCollatorCandidates: boolean;
		readonly asJoinedCollatorCandidates: {
			readonly account: AccountId32;
			readonly amountLocked: u128;
			readonly newTotalAmtLocked: u128;
		} & Struct;
		readonly isCollatorChosen: boolean;
		readonly asCollatorChosen: {
			readonly round: u32;
			readonly collatorAccount: AccountId32;
			readonly totalExposedAmount: u128;
		} & Struct;
		readonly isCandidateBondLessRequested: boolean;
		readonly asCandidateBondLessRequested: {
			readonly candidate: AccountId32;
			readonly amountToDecrease: u128;
			readonly executeRound: u32;
		} & Struct;
		readonly isCandidateBondedMore: boolean;
		readonly asCandidateBondedMore: {
			readonly candidate: AccountId32;
			readonly amount: u128;
			readonly newTotalBond: u128;
		} & Struct;
		readonly isCandidateBondedLess: boolean;
		readonly asCandidateBondedLess: {
			readonly candidate: AccountId32;
			readonly amount: u128;
			readonly newBond: u128;
		} & Struct;
		readonly isCandidateWentOffline: boolean;
		readonly asCandidateWentOffline: {
			readonly candidate: AccountId32;
		} & Struct;
		readonly isCandidateBackOnline: boolean;
		readonly asCandidateBackOnline: {
			readonly candidate: AccountId32;
		} & Struct;
		readonly isCandidateScheduledExit: boolean;
		readonly asCandidateScheduledExit: {
			readonly exitAllowedRound: u32;
			readonly candidate: AccountId32;
			readonly scheduledExit: u32;
		} & Struct;
		readonly isCancelledCandidateExit: boolean;
		readonly asCancelledCandidateExit: {
			readonly candidate: AccountId32;
		} & Struct;
		readonly isCancelledCandidateBondLess: boolean;
		readonly asCancelledCandidateBondLess: {
			readonly candidate: AccountId32;
			readonly amount: u128;
			readonly executeRound: u32;
		} & Struct;
		readonly isCandidateLeft: boolean;
		readonly asCandidateLeft: {
			readonly exCandidate: AccountId32;
			readonly unlockedAmount: u128;
			readonly newTotalAmtLocked: u128;
		} & Struct;
		readonly isDelegationDecreaseScheduled: boolean;
		readonly asDelegationDecreaseScheduled: {
			readonly delegator: AccountId32;
			readonly candidate: AccountId32;
			readonly amountToDecrease: u128;
			readonly executeRound: u32;
		} & Struct;
		readonly isDelegationIncreased: boolean;
		readonly asDelegationIncreased: {
			readonly delegator: AccountId32;
			readonly candidate: AccountId32;
			readonly amount: u128;
			readonly inTop: bool;
		} & Struct;
		readonly isDelegationDecreased: boolean;
		readonly asDelegationDecreased: {
			readonly delegator: AccountId32;
			readonly candidate: AccountId32;
			readonly amount: u128;
			readonly inTop: bool;
		} & Struct;
		readonly isDelegatorExitScheduled: boolean;
		readonly asDelegatorExitScheduled: {
			readonly round: u32;
			readonly delegator: AccountId32;
			readonly scheduledExit: u32;
		} & Struct;
		readonly isDelegationRevocationScheduled: boolean;
		readonly asDelegationRevocationScheduled: {
			readonly round: u32;
			readonly delegator: AccountId32;
			readonly candidate: AccountId32;
			readonly scheduledExit: u32;
		} & Struct;
		readonly isDelegatorLeft: boolean;
		readonly asDelegatorLeft: {
			readonly delegator: AccountId32;
			readonly unstakedAmount: u128;
		} & Struct;
		readonly isDelegationRevoked: boolean;
		readonly asDelegationRevoked: {
			readonly delegator: AccountId32;
			readonly candidate: AccountId32;
			readonly unstakedAmount: u128;
		} & Struct;
		readonly isDelegationKicked: boolean;
		readonly asDelegationKicked: {
			readonly delegator: AccountId32;
			readonly candidate: AccountId32;
			readonly unstakedAmount: u128;
		} & Struct;
		readonly isDelegatorExitCancelled: boolean;
		readonly asDelegatorExitCancelled: {
			readonly delegator: AccountId32;
		} & Struct;
		readonly isCancelledDelegationRequest: boolean;
		readonly asCancelledDelegationRequest: {
			readonly delegator: AccountId32;
			readonly cancelledRequest: TangleParachainStakingDelegationRequestsCancelledScheduledRequest;
			readonly collator: AccountId32;
		} & Struct;
		readonly isDelegation: boolean;
		readonly asDelegation: {
			readonly delegator: AccountId32;
			readonly lockedAmount: u128;
			readonly candidate: AccountId32;
			readonly delegatorPosition: TangleParachainStakingDelegatorAdded;
		} & Struct;
		readonly isDelegatorLeftCandidate: boolean;
		readonly asDelegatorLeftCandidate: {
			readonly delegator: AccountId32;
			readonly candidate: AccountId32;
			readonly unstakedAmount: u128;
			readonly totalCandidateStaked: u128;
		} & Struct;
		readonly isRewarded: boolean;
		readonly asRewarded: {
			readonly account: AccountId32;
			readonly rewards: u128;
		} & Struct;
		readonly isReservedForParachainBond: boolean;
		readonly asReservedForParachainBond: {
			readonly account: AccountId32;
			readonly value: u128;
		} & Struct;
		readonly isParachainBondAccountSet: boolean;
		readonly asParachainBondAccountSet: {
			readonly old: AccountId32;
			readonly new_: AccountId32;
		} & Struct;
		readonly isParachainBondReservePercentSet: boolean;
		readonly asParachainBondReservePercentSet: {
			readonly old: Percent;
			readonly new_: Percent;
		} & Struct;
		readonly isInflationSet: boolean;
		readonly asInflationSet: {
			readonly annualMin: Perbill;
			readonly annualIdeal: Perbill;
			readonly annualMax: Perbill;
			readonly roundMin: Perbill;
			readonly roundIdeal: Perbill;
			readonly roundMax: Perbill;
		} & Struct;
		readonly isStakeExpectationsSet: boolean;
		readonly asStakeExpectationsSet: {
			readonly expectMin: u128;
			readonly expectIdeal: u128;
			readonly expectMax: u128;
		} & Struct;
		readonly isTotalSelectedSet: boolean;
		readonly asTotalSelectedSet: {
			readonly old: u32;
			readonly new_: u32;
		} & Struct;
		readonly isCollatorCommissionSet: boolean;
		readonly asCollatorCommissionSet: {
			readonly old: Perbill;
			readonly new_: Perbill;
		} & Struct;
		readonly isBlocksPerRoundSet: boolean;
		readonly asBlocksPerRoundSet: {
			readonly currentRound: u32;
			readonly firstBlock: u32;
			readonly old: u32;
			readonly new_: u32;
			readonly newPerRoundInflationMin: Perbill;
			readonly newPerRoundInflationIdeal: Perbill;
			readonly newPerRoundInflationMax: Perbill;
		} & Struct;
		readonly type:
			| 'NewRound'
			| 'JoinedCollatorCandidates'
			| 'CollatorChosen'
			| 'CandidateBondLessRequested'
			| 'CandidateBondedMore'
			| 'CandidateBondedLess'
			| 'CandidateWentOffline'
			| 'CandidateBackOnline'
			| 'CandidateScheduledExit'
			| 'CancelledCandidateExit'
			| 'CancelledCandidateBondLess'
			| 'CandidateLeft'
			| 'DelegationDecreaseScheduled'
			| 'DelegationIncreased'
			| 'DelegationDecreased'
			| 'DelegatorExitScheduled'
			| 'DelegationRevocationScheduled'
			| 'DelegatorLeft'
			| 'DelegationRevoked'
			| 'DelegationKicked'
			| 'DelegatorExitCancelled'
			| 'CancelledDelegationRequest'
			| 'Delegation'
			| 'DelegatorLeftCandidate'
			| 'Rewarded'
			| 'ReservedForParachainBond'
			| 'ParachainBondAccountSet'
			| 'ParachainBondReservePercentSet'
			| 'InflationSet'
			| 'StakeExpectationsSet'
			| 'TotalSelectedSet'
			| 'CollatorCommissionSet'
			| 'BlocksPerRoundSet';
	}

	/** @name TangleParachainStakingDelegationRequestsCancelledScheduledRequest (39) */
	interface TangleParachainStakingDelegationRequestsCancelledScheduledRequest extends Struct {
		readonly whenExecutable: u32;
		readonly action: TangleParachainStakingDelegationRequestsDelegationAction;
	}

	/** @name TangleParachainStakingDelegationRequestsDelegationAction (40) */
	interface TangleParachainStakingDelegationRequestsDelegationAction extends Enum {
		readonly isRevoke: boolean;
		readonly asRevoke: u128;
		readonly isDecrease: boolean;
		readonly asDecrease: u128;
		readonly type: 'Revoke' | 'Decrease';
	}

	/** @name TangleParachainStakingDelegatorAdded (41) */
	interface TangleParachainStakingDelegatorAdded extends Enum {
		readonly isAddedToTop: boolean;
		readonly asAddedToTop: {
			readonly newTotal: u128;
		} & Struct;
		readonly isAddedToBottom: boolean;
		readonly type: 'AddedToTop' | 'AddedToBottom';
	}

	/** @name PalletDemocracyEvent (44) */
	interface PalletDemocracyEvent extends Enum {
		readonly isProposed: boolean;
		readonly asProposed: {
			readonly proposalIndex: u32;
			readonly deposit: u128;
		} & Struct;
		readonly isTabled: boolean;
		readonly asTabled: {
			readonly proposalIndex: u32;
			readonly deposit: u128;
		} & Struct;
		readonly isExternalTabled: boolean;
		readonly isStarted: boolean;
		readonly asStarted: {
			readonly refIndex: u32;
			readonly threshold: PalletDemocracyVoteThreshold;
		} & Struct;
		readonly isPassed: boolean;
		readonly asPassed: {
			readonly refIndex: u32;
		} & Struct;
		readonly isNotPassed: boolean;
		readonly asNotPassed: {
			readonly refIndex: u32;
		} & Struct;
		readonly isCancelled: boolean;
		readonly asCancelled: {
			readonly refIndex: u32;
		} & Struct;
		readonly isDelegated: boolean;
		readonly asDelegated: {
			readonly who: AccountId32;
			readonly target: AccountId32;
		} & Struct;
		readonly isUndelegated: boolean;
		readonly asUndelegated: {
			readonly account: AccountId32;
		} & Struct;
		readonly isVetoed: boolean;
		readonly asVetoed: {
			readonly who: AccountId32;
			readonly proposalHash: H256;
			readonly until: u32;
		} & Struct;
		readonly isBlacklisted: boolean;
		readonly asBlacklisted: {
			readonly proposalHash: H256;
		} & Struct;
		readonly isVoted: boolean;
		readonly asVoted: {
			readonly voter: AccountId32;
			readonly refIndex: u32;
			readonly vote: PalletDemocracyVoteAccountVote;
		} & Struct;
		readonly isSeconded: boolean;
		readonly asSeconded: {
			readonly seconder: AccountId32;
			readonly propIndex: u32;
		} & Struct;
		readonly isProposalCanceled: boolean;
		readonly asProposalCanceled: {
			readonly propIndex: u32;
		} & Struct;
		readonly isMetadataSet: boolean;
		readonly asMetadataSet: {
			readonly owner: PalletDemocracyMetadataOwner;
			readonly hash_: H256;
		} & Struct;
		readonly isMetadataCleared: boolean;
		readonly asMetadataCleared: {
			readonly owner: PalletDemocracyMetadataOwner;
			readonly hash_: H256;
		} & Struct;
		readonly isMetadataTransferred: boolean;
		readonly asMetadataTransferred: {
			readonly prevOwner: PalletDemocracyMetadataOwner;
			readonly owner: PalletDemocracyMetadataOwner;
			readonly hash_: H256;
		} & Struct;
		readonly type:
			| 'Proposed'
			| 'Tabled'
			| 'ExternalTabled'
			| 'Started'
			| 'Passed'
			| 'NotPassed'
			| 'Cancelled'
			| 'Delegated'
			| 'Undelegated'
			| 'Vetoed'
			| 'Blacklisted'
			| 'Voted'
			| 'Seconded'
			| 'ProposalCanceled'
			| 'MetadataSet'
			| 'MetadataCleared'
			| 'MetadataTransferred';
	}

	/** @name PalletDemocracyVoteThreshold (45) */
	interface PalletDemocracyVoteThreshold extends Enum {
		readonly isSuperMajorityApprove: boolean;
		readonly isSuperMajorityAgainst: boolean;
		readonly isSimpleMajority: boolean;
		readonly type: 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority';
	}

	/** @name PalletDemocracyVoteAccountVote (46) */
	interface PalletDemocracyVoteAccountVote extends Enum {
		readonly isStandard: boolean;
		readonly asStandard: {
			readonly vote: Vote;
			readonly balance: u128;
		} & Struct;
		readonly isSplit: boolean;
		readonly asSplit: {
			readonly aye: u128;
			readonly nay: u128;
		} & Struct;
		readonly type: 'Standard' | 'Split';
	}

	/** @name PalletDemocracyMetadataOwner (48) */
	interface PalletDemocracyMetadataOwner extends Enum {
		readonly isExternal: boolean;
		readonly isProposal: boolean;
		readonly asProposal: u32;
		readonly isReferendum: boolean;
		readonly asReferendum: u32;
		readonly type: 'External' | 'Proposal' | 'Referendum';
	}

	/** @name PalletCollectiveEvent (49) */
	interface PalletCollectiveEvent extends Enum {
		readonly isProposed: boolean;
		readonly asProposed: {
			readonly account: AccountId32;
			readonly proposalIndex: u32;
			readonly proposalHash: H256;
			readonly threshold: u32;
		} & Struct;
		readonly isVoted: boolean;
		readonly asVoted: {
			readonly account: AccountId32;
			readonly proposalHash: H256;
			readonly voted: bool;
			readonly yes: u32;
			readonly no: u32;
		} & Struct;
		readonly isApproved: boolean;
		readonly asApproved: {
			readonly proposalHash: H256;
		} & Struct;
		readonly isDisapproved: boolean;
		readonly asDisapproved: {
			readonly proposalHash: H256;
		} & Struct;
		readonly isExecuted: boolean;
		readonly asExecuted: {
			readonly proposalHash: H256;
			readonly result: Result<Null, SpRuntimeDispatchError>;
		} & Struct;
		readonly isMemberExecuted: boolean;
		readonly asMemberExecuted: {
			readonly proposalHash: H256;
			readonly result: Result<Null, SpRuntimeDispatchError>;
		} & Struct;
		readonly isClosed: boolean;
		readonly asClosed: {
			readonly proposalHash: H256;
			readonly yes: u32;
			readonly no: u32;
		} & Struct;
		readonly type:
			| 'Proposed'
			| 'Voted'
			| 'Approved'
			| 'Disapproved'
			| 'Executed'
			| 'MemberExecuted'
			| 'Closed';
	}

	/** @name PalletElectionsPhragmenEvent (53) */
	interface PalletElectionsPhragmenEvent extends Enum {
		readonly isNewTerm: boolean;
		readonly asNewTerm: {
			readonly newMembers: Vec<ITuple<[AccountId32, u128]>>;
		} & Struct;
		readonly isEmptyTerm: boolean;
		readonly isElectionError: boolean;
		readonly isMemberKicked: boolean;
		readonly asMemberKicked: {
			readonly member: AccountId32;
		} & Struct;
		readonly isRenounced: boolean;
		readonly asRenounced: {
			readonly candidate: AccountId32;
		} & Struct;
		readonly isCandidateSlashed: boolean;
		readonly asCandidateSlashed: {
			readonly candidate: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isSeatHolderSlashed: boolean;
		readonly asSeatHolderSlashed: {
			readonly seatHolder: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly type:
			| 'NewTerm'
			| 'EmptyTerm'
			| 'ElectionError'
			| 'MemberKicked'
			| 'Renounced'
			| 'CandidateSlashed'
			| 'SeatHolderSlashed';
	}

	/** @name PalletMembershipEvent (56) */
	interface PalletMembershipEvent extends Enum {
		readonly isMemberAdded: boolean;
		readonly isMemberRemoved: boolean;
		readonly isMembersSwapped: boolean;
		readonly isMembersReset: boolean;
		readonly isKeyChanged: boolean;
		readonly isDummy: boolean;
		readonly type:
			| 'MemberAdded'
			| 'MemberRemoved'
			| 'MembersSwapped'
			| 'MembersReset'
			| 'KeyChanged'
			| 'Dummy';
	}

	/** @name PalletConvictionVotingEvent (58) */
	interface PalletConvictionVotingEvent extends Enum {
		readonly isDelegated: boolean;
		readonly asDelegated: ITuple<[AccountId32, AccountId32]>;
		readonly isUndelegated: boolean;
		readonly asUndelegated: AccountId32;
		readonly type: 'Delegated' | 'Undelegated';
	}

	/** @name PalletReferendaEvent (59) */
	interface PalletReferendaEvent extends Enum {
		readonly isSubmitted: boolean;
		readonly asSubmitted: {
			readonly index: u32;
			readonly track: u16;
			readonly proposal: FrameSupportPreimagesBounded;
		} & Struct;
		readonly isDecisionDepositPlaced: boolean;
		readonly asDecisionDepositPlaced: {
			readonly index: u32;
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isDecisionDepositRefunded: boolean;
		readonly asDecisionDepositRefunded: {
			readonly index: u32;
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isDepositSlashed: boolean;
		readonly asDepositSlashed: {
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isDecisionStarted: boolean;
		readonly asDecisionStarted: {
			readonly index: u32;
			readonly track: u16;
			readonly proposal: FrameSupportPreimagesBounded;
			readonly tally: PalletConvictionVotingTally;
		} & Struct;
		readonly isConfirmStarted: boolean;
		readonly asConfirmStarted: {
			readonly index: u32;
		} & Struct;
		readonly isConfirmAborted: boolean;
		readonly asConfirmAborted: {
			readonly index: u32;
		} & Struct;
		readonly isConfirmed: boolean;
		readonly asConfirmed: {
			readonly index: u32;
			readonly tally: PalletConvictionVotingTally;
		} & Struct;
		readonly isApproved: boolean;
		readonly asApproved: {
			readonly index: u32;
		} & Struct;
		readonly isRejected: boolean;
		readonly asRejected: {
			readonly index: u32;
			readonly tally: PalletConvictionVotingTally;
		} & Struct;
		readonly isTimedOut: boolean;
		readonly asTimedOut: {
			readonly index: u32;
			readonly tally: PalletConvictionVotingTally;
		} & Struct;
		readonly isCancelled: boolean;
		readonly asCancelled: {
			readonly index: u32;
			readonly tally: PalletConvictionVotingTally;
		} & Struct;
		readonly isKilled: boolean;
		readonly asKilled: {
			readonly index: u32;
			readonly tally: PalletConvictionVotingTally;
		} & Struct;
		readonly isSubmissionDepositRefunded: boolean;
		readonly asSubmissionDepositRefunded: {
			readonly index: u32;
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isMetadataSet: boolean;
		readonly asMetadataSet: {
			readonly index: u32;
			readonly hash_: H256;
		} & Struct;
		readonly isMetadataCleared: boolean;
		readonly asMetadataCleared: {
			readonly index: u32;
			readonly hash_: H256;
		} & Struct;
		readonly type:
			| 'Submitted'
			| 'DecisionDepositPlaced'
			| 'DecisionDepositRefunded'
			| 'DepositSlashed'
			| 'DecisionStarted'
			| 'ConfirmStarted'
			| 'ConfirmAborted'
			| 'Confirmed'
			| 'Approved'
			| 'Rejected'
			| 'TimedOut'
			| 'Cancelled'
			| 'Killed'
			| 'SubmissionDepositRefunded'
			| 'MetadataSet'
			| 'MetadataCleared';
	}

	/** @name FrameSupportPreimagesBounded (61) */
	interface FrameSupportPreimagesBounded extends Enum {
		readonly isLegacy: boolean;
		readonly asLegacy: {
			readonly hash_: H256;
		} & Struct;
		readonly isInline: boolean;
		readonly asInline: Bytes;
		readonly isLookup: boolean;
		readonly asLookup: {
			readonly hash_: H256;
			readonly len: u32;
		} & Struct;
		readonly type: 'Legacy' | 'Inline' | 'Lookup';
	}

	/** @name FrameSystemCall (63) */
	interface FrameSystemCall extends Enum {
		readonly isRemark: boolean;
		readonly asRemark: {
			readonly remark: Bytes;
		} & Struct;
		readonly isSetHeapPages: boolean;
		readonly asSetHeapPages: {
			readonly pages: u64;
		} & Struct;
		readonly isSetCode: boolean;
		readonly asSetCode: {
			readonly code: Bytes;
		} & Struct;
		readonly isSetCodeWithoutChecks: boolean;
		readonly asSetCodeWithoutChecks: {
			readonly code: Bytes;
		} & Struct;
		readonly isSetStorage: boolean;
		readonly asSetStorage: {
			readonly items: Vec<ITuple<[Bytes, Bytes]>>;
		} & Struct;
		readonly isKilLstorage: boolean;
		readonly asKilLstorage: {
			readonly keys_: Vec<Bytes>;
		} & Struct;
		readonly isKillPrefix: boolean;
		readonly asKillPrefix: {
			readonly prefix: Bytes;
			readonly subkeys: u32;
		} & Struct;
		readonly isRemarkWithEvent: boolean;
		readonly asRemarkWithEvent: {
			readonly remark: Bytes;
		} & Struct;
		readonly type:
			| 'Remark'
			| 'SetHeapPages'
			| 'SetCode'
			| 'SetCodeWithoutChecks'
			| 'SetStorage'
			| 'KilLstorage'
			| 'KillPrefix'
			| 'RemarkWithEvent';
	}

	/** @name PalletTimestampCall (67) */
	interface PalletTimestampCall extends Enum {
		readonly isSet: boolean;
		readonly asSet: {
			readonly now: Compact<u64>;
		} & Struct;
		readonly type: 'Set';
	}

	/** @name PalletIndicesCall (68) */
	interface PalletIndicesCall extends Enum {
		readonly isClaim: boolean;
		readonly asClaim: {
			readonly index: u32;
		} & Struct;
		readonly isTransfer: boolean;
		readonly asTransfer: {
			readonly new_: MultiAddress;
			readonly index: u32;
		} & Struct;
		readonly isFree: boolean;
		readonly asFree: {
			readonly index: u32;
		} & Struct;
		readonly isForceTransfer: boolean;
		readonly asForceTransfer: {
			readonly new_: MultiAddress;
			readonly index: u32;
			readonly freeze: bool;
		} & Struct;
		readonly isFreeze: boolean;
		readonly asFreeze: {
			readonly index: u32;
		} & Struct;
		readonly type: 'Claim' | 'Transfer' | 'Free' | 'ForceTransfer' | 'Freeze';
	}

	/** @name CumulusPalletParachainSystemCall (72) */
	interface CumulusPalletParachainSystemCall extends Enum {
		readonly isSetValidationData: boolean;
		readonly asSetValidationData: {
			readonly data: CumulusPrimitivesParachainInherentParachainInherentData;
		} & Struct;
		readonly isSudoSendUpwardMessage: boolean;
		readonly asSudoSendUpwardMessage: {
			readonly message: Bytes;
		} & Struct;
		readonly isAuthorizeUpgrade: boolean;
		readonly asAuthorizeUpgrade: {
			readonly codeHash: H256;
			readonly checkVersion: bool;
		} & Struct;
		readonly isEnactAuthorizedUpgrade: boolean;
		readonly asEnactAuthorizedUpgrade: {
			readonly code: Bytes;
		} & Struct;
		readonly type:
			| 'SetValidationData'
			| 'SudoSendUpwardMessage'
			| 'AuthorizeUpgrade'
			| 'EnactAuthorizedUpgrade';
	}

	/** @name CumulusPrimitivesParachainInherentParachainInherentData (73) */
	interface CumulusPrimitivesParachainInherentParachainInherentData extends Struct {
		readonly validationData: PolkadotPrimitivesV6PersistedValidationData;
		readonly relayChainState: SpTrieStorageProof;
		readonly downwardMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>;
		readonly horizontalMessages: BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>;
	}

	/** @name PolkadotPrimitivesV6PersistedValidationData (74) */
	interface PolkadotPrimitivesV6PersistedValidationData extends Struct {
		readonly parentHead: Bytes;
		readonly relayParentNumber: u32;
		readonly relayParentStorageRoot: H256;
		readonly maxPovSize: u32;
	}

	/** @name SpTrieStorageProof (76) */
	interface SpTrieStorageProof extends Struct {
		readonly trieNodes: BTreeSet<Bytes>;
	}

	/** @name PolkadotCorePrimitivesInboundDownwardMessage (79) */
	interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
		readonly sentAt: u32;
		readonly msg: Bytes;
	}

	/** @name PolkadotCorePrimitivesInboundHrmpMessage (83) */
	interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
		readonly sentAt: u32;
		readonly data: Bytes;
	}

	/** @name StagingParachainInfoCall (86) */
	type StagingParachainInfoCall = Null;

	/** @name PalletBalancesCall (87) */
	interface PalletBalancesCall extends Enum {
		readonly isTransferAllowDeath: boolean;
		readonly asTransferAllowDeath: {
			readonly dest: MultiAddress;
			readonly value: Compact<u128>;
		} & Struct;
		readonly isForceTransfer: boolean;
		readonly asForceTransfer: {
			readonly source: MultiAddress;
			readonly dest: MultiAddress;
			readonly value: Compact<u128>;
		} & Struct;
		readonly isTransferKeepAlive: boolean;
		readonly asTransferKeepAlive: {
			readonly dest: MultiAddress;
			readonly value: Compact<u128>;
		} & Struct;
		readonly isTransferAll: boolean;
		readonly asTransferAll: {
			readonly dest: MultiAddress;
			readonly keepAlive: bool;
		} & Struct;
		readonly isForceUnreserve: boolean;
		readonly asForceUnreserve: {
			readonly who: MultiAddress;
			readonly amount: u128;
		} & Struct;
		readonly isUpgradeAccounts: boolean;
		readonly asUpgradeAccounts: {
			readonly who: Vec<AccountId32>;
		} & Struct;
		readonly isForceSetBalance: boolean;
		readonly asForceSetBalance: {
			readonly who: MultiAddress;
			readonly newFree: Compact<u128>;
		} & Struct;
		readonly type:
			| 'TransferAllowDeath'
			| 'ForceTransfer'
			| 'TransferKeepAlive'
			| 'TransferAll'
			| 'ForceUnreserve'
			| 'UpgradeAccounts'
			| 'ForceSetBalance';
	}

	/** @name PalletSessionCall (90) */
	interface PalletSessionCall extends Enum {
		readonly isSetKeys: boolean;
		readonly asSetKeys: {
			readonly keys_: TangleKusamaRuntimeSessionKeys;
			readonly proof: Bytes;
		} & Struct;
		readonly isPurgeKeys: boolean;
		readonly type: 'SetKeys' | 'PurgeKeys';
	}

	/** @name TangleKusamaRuntimeSessionKeys (91) */
	interface TangleKusamaRuntimeSessionKeys extends Struct {
		readonly aura: SpConsensusAuraSr25519AppSr25519Public;
	}

	/** @name SpConsensusAuraSr25519AppSr25519Public (92) */
	interface SpConsensusAuraSr25519AppSr25519Public extends SpCoreSr25519Public {}

	/** @name SpCoreSr25519Public (93) */
	interface SpCoreSr25519Public extends U8aFixed {}

	/** @name TangleParachainStakingCall (94) */
	interface TangleParachainStakingCall extends Enum {
		readonly isSetStakingExpectations: boolean;
		readonly asSetStakingExpectations: {
			readonly expectations: {
				readonly min: u128;
				readonly ideal: u128;
				readonly max: u128;
			} & Struct;
		} & Struct;
		readonly isSetInflation: boolean;
		readonly asSetInflation: {
			readonly schedule: {
				readonly min: Perbill;
				readonly ideal: Perbill;
				readonly max: Perbill;
			} & Struct;
		} & Struct;
		readonly isSetParachainBondAccount: boolean;
		readonly asSetParachainBondAccount: {
			readonly new_: AccountId32;
		} & Struct;
		readonly isSetParachainBondReservePercent: boolean;
		readonly asSetParachainBondReservePercent: {
			readonly new_: Percent;
		} & Struct;
		readonly isSetTotalSelected: boolean;
		readonly asSetTotalSelected: {
			readonly new_: u32;
		} & Struct;
		readonly isSetCollatorCommission: boolean;
		readonly asSetCollatorCommission: {
			readonly new_: Perbill;
		} & Struct;
		readonly isSetBlocksPerRound: boolean;
		readonly asSetBlocksPerRound: {
			readonly new_: u32;
		} & Struct;
		readonly isJoinCandidates: boolean;
		readonly asJoinCandidates: {
			readonly bond: u128;
			readonly candidateCount: u32;
		} & Struct;
		readonly isScheduleLeaveCandidates: boolean;
		readonly asScheduleLeaveCandidates: {
			readonly candidateCount: u32;
		} & Struct;
		readonly isExecuteLeaveCandidates: boolean;
		readonly asExecuteLeaveCandidates: {
			readonly candidate: AccountId32;
			readonly candidateDelegationCount: u32;
		} & Struct;
		readonly isCancelLeaveCandidates: boolean;
		readonly asCancelLeaveCandidates: {
			readonly candidateCount: u32;
		} & Struct;
		readonly isGoOffline: boolean;
		readonly isGoOnline: boolean;
		readonly isCandidateBondMore: boolean;
		readonly asCandidateBondMore: {
			readonly more: u128;
		} & Struct;
		readonly isScheduleCandidateBondLess: boolean;
		readonly asScheduleCandidateBondLess: {
			readonly less: u128;
		} & Struct;
		readonly isExecuteCandidateBondLess: boolean;
		readonly asExecuteCandidateBondLess: {
			readonly candidate: AccountId32;
		} & Struct;
		readonly isCancelCandidateBondLess: boolean;
		readonly isDelegate: boolean;
		readonly asDelegate: {
			readonly candidate: AccountId32;
			readonly amount: u128;
			readonly candidateDelegationCount: u32;
			readonly delegationCount: u32;
		} & Struct;
		readonly isScheduleLeaveDelegators: boolean;
		readonly isExecuteLeaveDelegators: boolean;
		readonly asExecuteLeaveDelegators: {
			readonly delegator: AccountId32;
			readonly delegationCount: u32;
		} & Struct;
		readonly isCancelLeaveDelegators: boolean;
		readonly isScheduleRevokeDelegation: boolean;
		readonly asScheduleRevokeDelegation: {
			readonly collator: AccountId32;
		} & Struct;
		readonly isDelegatorBondMore: boolean;
		readonly asDelegatorBondMore: {
			readonly candidate: AccountId32;
			readonly more: u128;
		} & Struct;
		readonly isScheduleDelegatorBondLess: boolean;
		readonly asScheduleDelegatorBondLess: {
			readonly candidate: AccountId32;
			readonly less: u128;
		} & Struct;
		readonly isExecuteDelegationRequest: boolean;
		readonly asExecuteDelegationRequest: {
			readonly delegator: AccountId32;
			readonly candidate: AccountId32;
		} & Struct;
		readonly isCancelDelegationRequest: boolean;
		readonly asCancelDelegationRequest: {
			readonly candidate: AccountId32;
		} & Struct;
		readonly isHotfixRemoveDelegationRequestsExitedCandidates: boolean;
		readonly asHotfixRemoveDelegationRequestsExitedCandidates: {
			readonly candidates: Vec<AccountId32>;
		} & Struct;
		readonly isHotfixMigrateDelegatorsFromReserveToLocks: boolean;
		readonly asHotfixMigrateDelegatorsFromReserveToLocks: {
			readonly delegators: Vec<AccountId32>;
		} & Struct;
		readonly isHotfixMigrateCollatorsFromReserveToLocks: boolean;
		readonly asHotfixMigrateCollatorsFromReserveToLocks: {
			readonly collators: Vec<AccountId32>;
		} & Struct;
		readonly type:
			| 'SetStakingExpectations'
			| 'SetInflation'
			| 'SetParachainBondAccount'
			| 'SetParachainBondReservePercent'
			| 'SetTotalSelected'
			| 'SetCollatorCommission'
			| 'SetBlocksPerRound'
			| 'JoinCandidates'
			| 'ScheduleLeaveCandidates'
			| 'ExecuteLeaveCandidates'
			| 'CancelLeaveCandidates'
			| 'GoOffline'
			| 'GoOnline'
			| 'CandidateBondMore'
			| 'ScheduleCandidateBondLess'
			| 'ExecuteCandidateBondLess'
			| 'CancelCandidateBondLess'
			| 'Delegate'
			| 'ScheduleLeaveDelegators'
			| 'ExecuteLeaveDelegators'
			| 'CancelLeaveDelegators'
			| 'ScheduleRevokeDelegation'
			| 'DelegatorBondMore'
			| 'ScheduleDelegatorBondLess'
			| 'ExecuteDelegationRequest'
			| 'CancelDelegationRequest'
			| 'HotfixRemoveDelegationRequestsExitedCandidates'
			| 'HotfixMigrateDelegatorsFromReserveToLocks'
			| 'HotfixMigrateCollatorsFromReserveToLocks';
	}

	/** @name PalletDemocracyCall (97) */
	interface PalletDemocracyCall extends Enum {
		readonly isPropose: boolean;
		readonly asPropose: {
			readonly proposal: FrameSupportPreimagesBounded;
			readonly value: Compact<u128>;
		} & Struct;
		readonly isSecond: boolean;
		readonly asSecond: {
			readonly proposal: Compact<u32>;
		} & Struct;
		readonly isVote: boolean;
		readonly asVote: {
			readonly refIndex: Compact<u32>;
			readonly vote: PalletDemocracyVoteAccountVote;
		} & Struct;
		readonly isEmergencyCancel: boolean;
		readonly asEmergencyCancel: {
			readonly refIndex: u32;
		} & Struct;
		readonly isExternalPropose: boolean;
		readonly asExternalPropose: {
			readonly proposal: FrameSupportPreimagesBounded;
		} & Struct;
		readonly isExternalProposeMajority: boolean;
		readonly asExternalProposeMajority: {
			readonly proposal: FrameSupportPreimagesBounded;
		} & Struct;
		readonly isExternalProposeDefault: boolean;
		readonly asExternalProposeDefault: {
			readonly proposal: FrameSupportPreimagesBounded;
		} & Struct;
		readonly isFastTrack: boolean;
		readonly asFastTrack: {
			readonly proposalHash: H256;
			readonly votingPeriod: u32;
			readonly delay: u32;
		} & Struct;
		readonly isVetoExternal: boolean;
		readonly asVetoExternal: {
			readonly proposalHash: H256;
		} & Struct;
		readonly isCancelReferendum: boolean;
		readonly asCancelReferendum: {
			readonly refIndex: Compact<u32>;
		} & Struct;
		readonly isDelegate: boolean;
		readonly asDelegate: {
			readonly to: MultiAddress;
			readonly conviction: PalletDemocracyConviction;
			readonly balance: u128;
		} & Struct;
		readonly isUndelegate: boolean;
		readonly isClearPublicProposals: boolean;
		readonly isUnlock: boolean;
		readonly asUnlock: {
			readonly target: MultiAddress;
		} & Struct;
		readonly isRemoveVote: boolean;
		readonly asRemoveVote: {
			readonly index: u32;
		} & Struct;
		readonly isRemoveOtherVote: boolean;
		readonly asRemoveOtherVote: {
			readonly target: MultiAddress;
			readonly index: u32;
		} & Struct;
		readonly isBlacklist: boolean;
		readonly asBlacklist: {
			readonly proposalHash: H256;
			readonly maybeRefIndex: Option<u32>;
		} & Struct;
		readonly isCancelProposal: boolean;
		readonly asCancelProposal: {
			readonly propIndex: Compact<u32>;
		} & Struct;
		readonly isSetMetadata: boolean;
		readonly asSetMetadata: {
			readonly owner: PalletDemocracyMetadataOwner;
			readonly maybeHash: Option<H256>;
		} & Struct;
		readonly type:
			| 'Propose'
			| 'Second'
			| 'Vote'
			| 'EmergencyCancel'
			| 'ExternalPropose'
			| 'ExternalProposeMajority'
			| 'ExternalProposeDefault'
			| 'FastTrack'
			| 'VetoExternal'
			| 'CancelReferendum'
			| 'Delegate'
			| 'Undelegate'
			| 'ClearPublicProposals'
			| 'Unlock'
			| 'RemoveVote'
			| 'RemoveOtherVote'
			| 'Blacklist'
			| 'CancelProposal'
			| 'SetMetadata';
	}

	/** @name PalletDemocracyConviction (98) */
	interface PalletDemocracyConviction extends Enum {
		readonly isNone: boolean;
		readonly isLocked1x: boolean;
		readonly isLocked2x: boolean;
		readonly isLocked3x: boolean;
		readonly isLocked4x: boolean;
		readonly isLocked5x: boolean;
		readonly isLocked6x: boolean;
		readonly type:
			| 'None'
			| 'Locked1x'
			| 'Locked2x'
			| 'Locked3x'
			| 'Locked4x'
			| 'Locked5x'
			| 'Locked6x';
	}

	/** @name PalletCollectiveCall (101) */
	interface PalletCollectiveCall extends Enum {
		readonly isSetMembers: boolean;
		readonly asSetMembers: {
			readonly newMembers: Vec<AccountId32>;
			readonly prime: Option<AccountId32>;
			readonly oldCount: u32;
		} & Struct;
		readonly isExecute: boolean;
		readonly asExecute: {
			readonly proposal: Call;
			readonly lengthBound: Compact<u32>;
		} & Struct;
		readonly isPropose: boolean;
		readonly asPropose: {
			readonly threshold: Compact<u32>;
			readonly proposal: Call;
			readonly lengthBound: Compact<u32>;
		} & Struct;
		readonly isVote: boolean;
		readonly asVote: {
			readonly proposal: H256;
			readonly index: Compact<u32>;
			readonly approve: bool;
		} & Struct;
		readonly isDisapproveProposal: boolean;
		readonly asDisapproveProposal: {
			readonly proposalHash: H256;
		} & Struct;
		readonly isClose: boolean;
		readonly asClose: {
			readonly proposalHash: H256;
			readonly index: Compact<u32>;
			readonly proposalWeightBound: SpWeightsWeightV2Weight;
			readonly lengthBound: Compact<u32>;
		} & Struct;
		readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'DisapproveProposal' | 'Close';
	}

	/** @name PalletElectionsPhragmenCall (104) */
	interface PalletElectionsPhragmenCall extends Enum {
		readonly isVote: boolean;
		readonly asVote: {
			readonly votes: Vec<AccountId32>;
			readonly value: Compact<u128>;
		} & Struct;
		readonly isRemoveVoter: boolean;
		readonly isSubmitCandidacy: boolean;
		readonly asSubmitCandidacy: {
			readonly candidateCount: Compact<u32>;
		} & Struct;
		readonly isRenounceCandidacy: boolean;
		readonly asRenounceCandidacy: {
			readonly renouncing: PalletElectionsPhragmenRenouncing;
		} & Struct;
		readonly isRemoveMember: boolean;
		readonly asRemoveMember: {
			readonly who: MultiAddress;
			readonly slashBond: bool;
			readonly rerunElection: bool;
		} & Struct;
		readonly isCleanDefunctVoters: boolean;
		readonly asCleanDefunctVoters: {
			readonly numVoters: u32;
			readonly numDefunct: u32;
		} & Struct;
		readonly type:
			| 'Vote'
			| 'RemoveVoter'
			| 'SubmitCandidacy'
			| 'RenounceCandidacy'
			| 'RemoveMember'
			| 'CleanDefunctVoters';
	}

	/** @name PalletElectionsPhragmenRenouncing (105) */
	interface PalletElectionsPhragmenRenouncing extends Enum {
		readonly isMember: boolean;
		readonly isRunnerUp: boolean;
		readonly isCandidate: boolean;
		readonly asCandidate: Compact<u32>;
		readonly type: 'Member' | 'RunnerUp' | 'Candidate';
	}

	/** @name PalletMembershipCall (106) */
	interface PalletMembershipCall extends Enum {
		readonly isAddMember: boolean;
		readonly asAddMember: {
			readonly who: MultiAddress;
		} & Struct;
		readonly isRemoveMember: boolean;
		readonly asRemoveMember: {
			readonly who: MultiAddress;
		} & Struct;
		readonly isSwapMember: boolean;
		readonly asSwapMember: {
			readonly remove: MultiAddress;
			readonly add: MultiAddress;
		} & Struct;
		readonly isResetMembers: boolean;
		readonly asResetMembers: {
			readonly members: Vec<AccountId32>;
		} & Struct;
		readonly isChangeKey: boolean;
		readonly asChangeKey: {
			readonly new_: MultiAddress;
		} & Struct;
		readonly isSetPrime: boolean;
		readonly asSetPrime: {
			readonly who: MultiAddress;
		} & Struct;
		readonly isClearPrime: boolean;
		readonly type:
			| 'AddMember'
			| 'RemoveMember'
			| 'SwapMember'
			| 'ResetMembers'
			| 'ChangeKey'
			| 'SetPrime'
			| 'ClearPrime';
	}

	/** @name PalletConvictionVotingCall (108) */
	interface PalletConvictionVotingCall extends Enum {
		readonly isVote: boolean;
		readonly asVote: {
			readonly pollIndex: Compact<u32>;
			readonly vote: PalletConvictionVotingVoteAccountVote;
		} & Struct;
		readonly isDelegate: boolean;
		readonly asDelegate: {
			readonly class: u16;
			readonly to: MultiAddress;
			readonly conviction: PalletConvictionVotingConviction;
			readonly balance: u128;
		} & Struct;
		readonly isUndelegate: boolean;
		readonly asUndelegate: {
			readonly class: u16;
		} & Struct;
		readonly isUnlock: boolean;
		readonly asUnlock: {
			readonly class: u16;
			readonly target: MultiAddress;
		} & Struct;
		readonly isRemoveVote: boolean;
		readonly asRemoveVote: {
			readonly class: Option<u16>;
			readonly index: u32;
		} & Struct;
		readonly isRemoveOtherVote: boolean;
		readonly asRemoveOtherVote: {
			readonly target: MultiAddress;
			readonly class: u16;
			readonly index: u32;
		} & Struct;
		readonly type: 'Vote' | 'Delegate' | 'Undelegate' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote';
	}

	/** @name PalletConvictionVotingVoteAccountVote (109) */
	interface PalletConvictionVotingVoteAccountVote extends Enum {
		readonly isStandard: boolean;
		readonly asStandard: {
			readonly vote: Vote;
			readonly balance: u128;
		} & Struct;
		readonly isSplit: boolean;
		readonly asSplit: {
			readonly aye: u128;
			readonly nay: u128;
		} & Struct;
		readonly isSplitAbstain: boolean;
		readonly asSplitAbstain: {
			readonly aye: u128;
			readonly nay: u128;
			readonly abstain: u128;
		} & Struct;
		readonly type: 'Standard' | 'Split' | 'SplitAbstain';
	}

	/** @name PalletConvictionVotingConviction (111) */
	interface PalletConvictionVotingConviction extends Enum {
		readonly isNone: boolean;
		readonly isLocked1x: boolean;
		readonly isLocked2x: boolean;
		readonly isLocked3x: boolean;
		readonly isLocked4x: boolean;
		readonly isLocked5x: boolean;
		readonly isLocked6x: boolean;
		readonly type:
			| 'None'
			| 'Locked1x'
			| 'Locked2x'
			| 'Locked3x'
			| 'Locked4x'
			| 'Locked5x'
			| 'Locked6x';
	}

	/** @name PalletReferendaCall (113) */
	interface PalletReferendaCall extends Enum {
		readonly isSubmit: boolean;
		readonly asSubmit: {
			readonly proposalOrigin: TangleKusamaRuntimeOriginCaller;
			readonly proposal: FrameSupportPreimagesBounded;
			readonly enactmentMoment: FrameSupportScheduleDispatchTime;
		} & Struct;
		readonly isPlaceDecisionDeposit: boolean;
		readonly asPlaceDecisionDeposit: {
			readonly index: u32;
		} & Struct;
		readonly isRefundDecisionDeposit: boolean;
		readonly asRefundDecisionDeposit: {
			readonly index: u32;
		} & Struct;
		readonly isCancel: boolean;
		readonly asCancel: {
			readonly index: u32;
		} & Struct;
		readonly isKill: boolean;
		readonly asKill: {
			readonly index: u32;
		} & Struct;
		readonly isNudgeReferendum: boolean;
		readonly asNudgeReferendum: {
			readonly index: u32;
		} & Struct;
		readonly isOneFewerDeciding: boolean;
		readonly asOneFewerDeciding: {
			readonly track: u16;
		} & Struct;
		readonly isRefundSubmissionDeposit: boolean;
		readonly asRefundSubmissionDeposit: {
			readonly index: u32;
		} & Struct;
		readonly isSetMetadata: boolean;
		readonly asSetMetadata: {
			readonly index: u32;
			readonly maybeHash: Option<H256>;
		} & Struct;
		readonly type:
			| 'Submit'
			| 'PlaceDecisionDeposit'
			| 'RefundDecisionDeposit'
			| 'Cancel'
			| 'Kill'
			| 'NudgeReferendum'
			| 'OneFewerDeciding'
			| 'RefundSubmissionDeposit'
			| 'SetMetadata';
	}

	/** @name TangleKusamaRuntimeOriginCaller (114) */
	interface TangleKusamaRuntimeOriginCaller extends Enum {
		readonly isSystem: boolean;
		readonly asSystem: FrameSupportDispatchRawOrigin;
		readonly isVoid: boolean;
		readonly isCouncil: boolean;
		readonly asCouncil: PalletCollectiveRawOrigin;
		readonly isTechnicalCommittee: boolean;
		readonly asTechnicalCommittee: PalletCollectiveRawOrigin;
		readonly isOrigins: boolean;
		readonly asOrigins: TangleKusamaRuntimeGovernanceOriginsCustomOriginsOrigin;
		readonly isPolkadotXcm: boolean;
		readonly asPolkadotXcm: PalletXcmOrigin;
		readonly isCumulusXcm: boolean;
		readonly asCumulusXcm: CumulusPalletXcmOrigin;
		readonly type:
			| 'System'
			| 'Void'
			| 'Council'
			| 'TechnicalCommittee'
			| 'Origins'
			| 'PolkadotXcm'
			| 'CumulusXcm';
	}

	/** @name FrameSupportDispatchRawOrigin (115) */
	interface FrameSupportDispatchRawOrigin extends Enum {
		readonly isRoot: boolean;
		readonly isSigned: boolean;
		readonly asSigned: AccountId32;
		readonly isNone: boolean;
		readonly type: 'Root' | 'Signed' | 'None';
	}

	/** @name PalletCollectiveRawOrigin (116) */
	interface PalletCollectiveRawOrigin extends Enum {
		readonly isMembers: boolean;
		readonly asMembers: ITuple<[u32, u32]>;
		readonly isMember: boolean;
		readonly asMember: AccountId32;
		readonly isPhantom: boolean;
		readonly type: 'Members' | 'Member' | 'Phantom';
	}

	/** @name TangleKusamaRuntimeGovernanceOriginsCustomOriginsOrigin (118) */
	interface TangleKusamaRuntimeGovernanceOriginsCustomOriginsOrigin extends Enum {
		readonly isWhitelistedCaller: boolean;
		readonly isFellowshipAdmin: boolean;
		readonly isReferendumCanceller: boolean;
		readonly isReferendumKiller: boolean;
		readonly isLiquidStaking: boolean;
		readonly isSalpAdmin: boolean;
		readonly isFellowshipInitiates: boolean;
		readonly isFellows: boolean;
		readonly isFellowshipExperts: boolean;
		readonly isFellowshipMasters: boolean;
		readonly isFellowship1Dan: boolean;
		readonly isFellowship2Dan: boolean;
		readonly isFellowship3Dan: boolean;
		readonly isFellowship4Dan: boolean;
		readonly isFellowship5Dan: boolean;
		readonly isFellowship6Dan: boolean;
		readonly isFellowship7Dan: boolean;
		readonly isFellowship8Dan: boolean;
		readonly isFellowship9Dan: boolean;
		readonly isTechAdmin: boolean;
		readonly isCoreAdmin: boolean;
		readonly isTreasurySpend: boolean;
		readonly type:
			| 'WhitelistedCaller'
			| 'FellowshipAdmin'
			| 'ReferendumCanceller'
			| 'ReferendumKiller'
			| 'LiquidStaking'
			| 'SalpAdmin'
			| 'FellowshipInitiates'
			| 'Fellows'
			| 'FellowshipExperts'
			| 'FellowshipMasters'
			| 'Fellowship1Dan'
			| 'Fellowship2Dan'
			| 'Fellowship3Dan'
			| 'Fellowship4Dan'
			| 'Fellowship5Dan'
			| 'Fellowship6Dan'
			| 'Fellowship7Dan'
			| 'Fellowship8Dan'
			| 'Fellowship9Dan'
			| 'TechAdmin'
			| 'CoreAdmin'
			| 'TreasurySpend';
	}

	/** @name PalletXcmOrigin (119) */
	interface PalletXcmOrigin extends Enum {
		readonly isXcm: boolean;
		readonly asXcm: StagingXcmV3MultiLocation;
		readonly isResponse: boolean;
		readonly asResponse: StagingXcmV3MultiLocation;
		readonly type: 'Xcm' | 'Response';
	}

	/** @name StagingXcmV3MultiLocation (120) */
	interface StagingXcmV3MultiLocation extends Struct {
		readonly parents: u8;
		readonly interior: XcmV3Junctions;
	}

	/** @name XcmV3Junctions (121) */
	interface XcmV3Junctions extends Enum {
		readonly isHere: boolean;
		readonly isX1: boolean;
		readonly asX1: XcmV3Junction;
		readonly isX2: boolean;
		readonly asX2: ITuple<[XcmV3Junction, XcmV3Junction]>;
		readonly isX3: boolean;
		readonly asX3: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
		readonly isX4: boolean;
		readonly asX4: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
		readonly isX5: boolean;
		readonly asX5: ITuple<
			[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]
		>;
		readonly isX6: boolean;
		readonly asX6: ITuple<
			[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]
		>;
		readonly isX7: boolean;
		readonly asX7: ITuple<
			[
				XcmV3Junction,
				XcmV3Junction,
				XcmV3Junction,
				XcmV3Junction,
				XcmV3Junction,
				XcmV3Junction,
				XcmV3Junction,
			]
		>;
		readonly isX8: boolean;
		readonly asX8: ITuple<
			[
				XcmV3Junction,
				XcmV3Junction,
				XcmV3Junction,
				XcmV3Junction,
				XcmV3Junction,
				XcmV3Junction,
				XcmV3Junction,
				XcmV3Junction,
			]
		>;
		readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
	}

	/** @name XcmV3Junction (122) */
	interface XcmV3Junction extends Enum {
		readonly isParachain: boolean;
		readonly asParachain: Compact<u32>;
		readonly isAccountId32: boolean;
		readonly asAccountId32: {
			readonly network: Option<XcmV3JunctionNetworkId>;
			readonly id: U8aFixed;
		} & Struct;
		readonly isAccountIndex64: boolean;
		readonly asAccountIndex64: {
			readonly network: Option<XcmV3JunctionNetworkId>;
			readonly index: Compact<u64>;
		} & Struct;
		readonly isAccountKey20: boolean;
		readonly asAccountKey20: {
			readonly network: Option<XcmV3JunctionNetworkId>;
			readonly key: U8aFixed;
		} & Struct;
		readonly isPalletInstance: boolean;
		readonly asPalletInstance: u8;
		readonly isGeneralIndex: boolean;
		readonly asGeneralIndex: Compact<u128>;
		readonly isGeneralKey: boolean;
		readonly asGeneralKey: {
			readonly length: u8;
			readonly data: U8aFixed;
		} & Struct;
		readonly isOnlyChild: boolean;
		readonly isPlurality: boolean;
		readonly asPlurality: {
			readonly id: XcmV3JunctionBodyId;
			readonly part: XcmV3JunctionBodyPart;
		} & Struct;
		readonly isGlobalConsensus: boolean;
		readonly asGlobalConsensus: XcmV3JunctionNetworkId;
		readonly type:
			| 'Parachain'
			| 'AccountId32'
			| 'AccountIndex64'
			| 'AccountKey20'
			| 'PalletInstance'
			| 'GeneralIndex'
			| 'GeneralKey'
			| 'OnlyChild'
			| 'Plurality'
			| 'GlobalConsensus';
	}

	/** @name XcmV3JunctionNetworkId (124) */
	interface XcmV3JunctionNetworkId extends Enum {
		readonly isByGenesis: boolean;
		readonly asByGenesis: U8aFixed;
		readonly isByFork: boolean;
		readonly asByFork: {
			readonly blockNumber: u64;
			readonly blockHash: U8aFixed;
		} & Struct;
		readonly isPolkadot: boolean;
		readonly isKusama: boolean;
		readonly isWestend: boolean;
		readonly isRococo: boolean;
		readonly isWococo: boolean;
		readonly isEthereum: boolean;
		readonly asEthereum: {
			readonly chainId: Compact<u64>;
		} & Struct;
		readonly isBitcoinCore: boolean;
		readonly isBitcoinCash: boolean;
		readonly type:
			| 'ByGenesis'
			| 'ByFork'
			| 'Polkadot'
			| 'Kusama'
			| 'Westend'
			| 'Rococo'
			| 'Wococo'
			| 'Ethereum'
			| 'BitcoinCore'
			| 'BitcoinCash';
	}

	/** @name XcmV3JunctionBodyId (125) */
	interface XcmV3JunctionBodyId extends Enum {
		readonly isUnit: boolean;
		readonly isMoniker: boolean;
		readonly asMoniker: U8aFixed;
		readonly isIndex: boolean;
		readonly asIndex: Compact<u32>;
		readonly isExecutive: boolean;
		readonly isTechnical: boolean;
		readonly isLegislative: boolean;
		readonly isJudicial: boolean;
		readonly isDefense: boolean;
		readonly isAdministration: boolean;
		readonly isTreasury: boolean;
		readonly type:
			| 'Unit'
			| 'Moniker'
			| 'Index'
			| 'Executive'
			| 'Technical'
			| 'Legislative'
			| 'Judicial'
			| 'Defense'
			| 'Administration'
			| 'Treasury';
	}

	/** @name XcmV3JunctionBodyPart (126) */
	interface XcmV3JunctionBodyPart extends Enum {
		readonly isVoice: boolean;
		readonly isMembers: boolean;
		readonly asMembers: {
			readonly count: Compact<u32>;
		} & Struct;
		readonly isFraction: boolean;
		readonly asFraction: {
			readonly nom: Compact<u32>;
			readonly denom: Compact<u32>;
		} & Struct;
		readonly isAtLeastProportion: boolean;
		readonly asAtLeastProportion: {
			readonly nom: Compact<u32>;
			readonly denom: Compact<u32>;
		} & Struct;
		readonly isMoreThanProportion: boolean;
		readonly asMoreThanProportion: {
			readonly nom: Compact<u32>;
			readonly denom: Compact<u32>;
		} & Struct;
		readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
	}

	/** @name CumulusPalletXcmOrigin (127) */
	interface CumulusPalletXcmOrigin extends Enum {
		readonly isRelay: boolean;
		readonly isSiblingParachain: boolean;
		readonly asSiblingParachain: u32;
		readonly type: 'Relay' | 'SiblingParachain';
	}

	/** @name SpCoreVoid (128) */
	type SpCoreVoid = Null;

	/** @name FrameSupportScheduleDispatchTime (129) */
	interface FrameSupportScheduleDispatchTime extends Enum {
		readonly isAt: boolean;
		readonly asAt: u32;
		readonly isAfter: boolean;
		readonly asAfter: u32;
		readonly type: 'At' | 'After';
	}

	/** @name PalletWhitelistCall (130) */
	interface PalletWhitelistCall extends Enum {
		readonly isWhitelistCall: boolean;
		readonly asWhitelistCall: {
			readonly callHash: H256;
		} & Struct;
		readonly isRemoveWhitelistedCall: boolean;
		readonly asRemoveWhitelistedCall: {
			readonly callHash: H256;
		} & Struct;
		readonly isDispatchWhitelistedCall: boolean;
		readonly asDispatchWhitelistedCall: {
			readonly callHash: H256;
			readonly callEncodedLen: u32;
			readonly callWeightWitness: SpWeightsWeightV2Weight;
		} & Struct;
		readonly isDispatchWhitelistedCallWithPreimage: boolean;
		readonly asDispatchWhitelistedCallWithPreimage: {
			readonly call: Call;
		} & Struct;
		readonly type:
			| 'WhitelistCall'
			| 'RemoveWhitelistedCall'
			| 'DispatchWhitelistedCall'
			| 'DispatchWhitelistedCallWithPreimage';
	}

	/** @name CumulusPalletXcmpQueueCall (131) */
	interface CumulusPalletXcmpQueueCall extends Enum {
		readonly isServiceOverweight: boolean;
		readonly asServiceOverweight: {
			readonly index: u64;
			readonly weightLimit: SpWeightsWeightV2Weight;
		} & Struct;
		readonly isSuspendXcmExecution: boolean;
		readonly isResumeXcmExecution: boolean;
		readonly isUpdateSuspendThreshold: boolean;
		readonly asUpdateSuspendThreshold: {
			readonly new_: u32;
		} & Struct;
		readonly isUpdateDropThreshold: boolean;
		readonly asUpdateDropThreshold: {
			readonly new_: u32;
		} & Struct;
		readonly isUpdateResumeThreshold: boolean;
		readonly asUpdateResumeThreshold: {
			readonly new_: u32;
		} & Struct;
		readonly isUpdateThresholdWeight: boolean;
		readonly asUpdateThresholdWeight: {
			readonly new_: SpWeightsWeightV2Weight;
		} & Struct;
		readonly isUpdateWeightRestrictDecay: boolean;
		readonly asUpdateWeightRestrictDecay: {
			readonly new_: SpWeightsWeightV2Weight;
		} & Struct;
		readonly isUpdateXcmpMaxIndividualWeight: boolean;
		readonly asUpdateXcmpMaxIndividualWeight: {
			readonly new_: SpWeightsWeightV2Weight;
		} & Struct;
		readonly type:
			| 'ServiceOverweight'
			| 'SuspendXcmExecution'
			| 'ResumeXcmExecution'
			| 'UpdateSuspendThreshold'
			| 'UpdateDropThreshold'
			| 'UpdateResumeThreshold'
			| 'UpdateThresholdWeight'
			| 'UpdateWeightRestrictDecay'
			| 'UpdateXcmpMaxIndividualWeight';
	}

	/** @name PalletXcmCall (132) */
	interface PalletXcmCall extends Enum {
		readonly isSend: boolean;
		readonly asSend: {
			readonly dest: XcmVersionedMultiLocation;
			readonly message: XcmVersionedXcm;
		} & Struct;
		readonly isTeleportAssets: boolean;
		readonly asTeleportAssets: {
			readonly dest: XcmVersionedMultiLocation;
			readonly beneficiary: XcmVersionedMultiLocation;
			readonly assets: XcmVersionedMultiAssets;
			readonly feeAssetItem: u32;
		} & Struct;
		readonly isReserveTransferAssets: boolean;
		readonly asReserveTransferAssets: {
			readonly dest: XcmVersionedMultiLocation;
			readonly beneficiary: XcmVersionedMultiLocation;
			readonly assets: XcmVersionedMultiAssets;
			readonly feeAssetItem: u32;
		} & Struct;
		readonly isExecute: boolean;
		readonly asExecute: {
			readonly message: XcmVersionedXcm;
			readonly maxWeight: SpWeightsWeightV2Weight;
		} & Struct;
		readonly isForceXcmVersion: boolean;
		readonly asForceXcmVersion: {
			readonly location: StagingXcmV3MultiLocation;
			readonly version: u32;
		} & Struct;
		readonly isForceDefaultXcmVersion: boolean;
		readonly asForceDefaultXcmVersion: {
			readonly maybeXcmVersion: Option<u32>;
		} & Struct;
		readonly isForceSubscribeVersionNotify: boolean;
		readonly asForceSubscribeVersionNotify: {
			readonly location: XcmVersionedMultiLocation;
		} & Struct;
		readonly isForceUnsubscribeVersionNotify: boolean;
		readonly asForceUnsubscribeVersionNotify: {
			readonly location: XcmVersionedMultiLocation;
		} & Struct;
		readonly isLimitedReserveTransferAssets: boolean;
		readonly asLimitedReserveTransferAssets: {
			readonly dest: XcmVersionedMultiLocation;
			readonly beneficiary: XcmVersionedMultiLocation;
			readonly assets: XcmVersionedMultiAssets;
			readonly feeAssetItem: u32;
			readonly weightLimit: XcmV3WeightLimit;
		} & Struct;
		readonly isLimitedTeleportAssets: boolean;
		readonly asLimitedTeleportAssets: {
			readonly dest: XcmVersionedMultiLocation;
			readonly beneficiary: XcmVersionedMultiLocation;
			readonly assets: XcmVersionedMultiAssets;
			readonly feeAssetItem: u32;
			readonly weightLimit: XcmV3WeightLimit;
		} & Struct;
		readonly isForceSuspension: boolean;
		readonly asForceSuspension: {
			readonly suspended: bool;
		} & Struct;
		readonly type:
			| 'Send'
			| 'TeleportAssets'
			| 'ReserveTransferAssets'
			| 'Execute'
			| 'ForceXcmVersion'
			| 'ForceDefaultXcmVersion'
			| 'ForceSubscribeVersionNotify'
			| 'ForceUnsubscribeVersionNotify'
			| 'LimitedReserveTransferAssets'
			| 'LimitedTeleportAssets'
			| 'ForceSuspension';
	}

	/** @name XcmVersionedMultiLocation (133) */
	interface XcmVersionedMultiLocation extends Enum {
		readonly isV2: boolean;
		readonly asV2: XcmV2MultiLocation;
		readonly isV3: boolean;
		readonly asV3: StagingXcmV3MultiLocation;
		readonly type: 'V2' | 'V3';
	}

	/** @name XcmV2MultiLocation (134) */
	interface XcmV2MultiLocation extends Struct {
		readonly parents: u8;
		readonly interior: XcmV2MultilocationJunctions;
	}

	/** @name XcmV2MultilocationJunctions (135) */
	interface XcmV2MultilocationJunctions extends Enum {
		readonly isHere: boolean;
		readonly isX1: boolean;
		readonly asX1: XcmV2Junction;
		readonly isX2: boolean;
		readonly asX2: ITuple<[XcmV2Junction, XcmV2Junction]>;
		readonly isX3: boolean;
		readonly asX3: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
		readonly isX4: boolean;
		readonly asX4: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
		readonly isX5: boolean;
		readonly asX5: ITuple<
			[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]
		>;
		readonly isX6: boolean;
		readonly asX6: ITuple<
			[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]
		>;
		readonly isX7: boolean;
		readonly asX7: ITuple<
			[
				XcmV2Junction,
				XcmV2Junction,
				XcmV2Junction,
				XcmV2Junction,
				XcmV2Junction,
				XcmV2Junction,
				XcmV2Junction,
			]
		>;
		readonly isX8: boolean;
		readonly asX8: ITuple<
			[
				XcmV2Junction,
				XcmV2Junction,
				XcmV2Junction,
				XcmV2Junction,
				XcmV2Junction,
				XcmV2Junction,
				XcmV2Junction,
				XcmV2Junction,
			]
		>;
		readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
	}

	/** @name XcmV2Junction (136) */
	interface XcmV2Junction extends Enum {
		readonly isParachain: boolean;
		readonly asParachain: Compact<u32>;
		readonly isAccountId32: boolean;
		readonly asAccountId32: {
			readonly network: XcmV2NetworkId;
			readonly id: U8aFixed;
		} & Struct;
		readonly isAccountIndex64: boolean;
		readonly asAccountIndex64: {
			readonly network: XcmV2NetworkId;
			readonly index: Compact<u64>;
		} & Struct;
		readonly isAccountKey20: boolean;
		readonly asAccountKey20: {
			readonly network: XcmV2NetworkId;
			readonly key: U8aFixed;
		} & Struct;
		readonly isPalletInstance: boolean;
		readonly asPalletInstance: u8;
		readonly isGeneralIndex: boolean;
		readonly asGeneralIndex: Compact<u128>;
		readonly isGeneralKey: boolean;
		readonly asGeneralKey: Bytes;
		readonly isOnlyChild: boolean;
		readonly isPlurality: boolean;
		readonly asPlurality: {
			readonly id: XcmV2BodyId;
			readonly part: XcmV2BodyPart;
		} & Struct;
		readonly type:
			| 'Parachain'
			| 'AccountId32'
			| 'AccountIndex64'
			| 'AccountKey20'
			| 'PalletInstance'
			| 'GeneralIndex'
			| 'GeneralKey'
			| 'OnlyChild'
			| 'Plurality';
	}

	/** @name XcmV2NetworkId (137) */
	interface XcmV2NetworkId extends Enum {
		readonly isAny: boolean;
		readonly isNamed: boolean;
		readonly asNamed: Bytes;
		readonly isPolkadot: boolean;
		readonly isKusama: boolean;
		readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
	}

	/** @name XcmV2BodyId (139) */
	interface XcmV2BodyId extends Enum {
		readonly isUnit: boolean;
		readonly isNamed: boolean;
		readonly asNamed: Bytes;
		readonly isIndex: boolean;
		readonly asIndex: Compact<u32>;
		readonly isExecutive: boolean;
		readonly isTechnical: boolean;
		readonly isLegislative: boolean;
		readonly isJudicial: boolean;
		readonly isDefense: boolean;
		readonly isAdministration: boolean;
		readonly isTreasury: boolean;
		readonly type:
			| 'Unit'
			| 'Named'
			| 'Index'
			| 'Executive'
			| 'Technical'
			| 'Legislative'
			| 'Judicial'
			| 'Defense'
			| 'Administration'
			| 'Treasury';
	}

	/** @name XcmV2BodyPart (140) */
	interface XcmV2BodyPart extends Enum {
		readonly isVoice: boolean;
		readonly isMembers: boolean;
		readonly asMembers: {
			readonly count: Compact<u32>;
		} & Struct;
		readonly isFraction: boolean;
		readonly asFraction: {
			readonly nom: Compact<u32>;
			readonly denom: Compact<u32>;
		} & Struct;
		readonly isAtLeastProportion: boolean;
		readonly asAtLeastProportion: {
			readonly nom: Compact<u32>;
			readonly denom: Compact<u32>;
		} & Struct;
		readonly isMoreThanProportion: boolean;
		readonly asMoreThanProportion: {
			readonly nom: Compact<u32>;
			readonly denom: Compact<u32>;
		} & Struct;
		readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
	}

	/** @name XcmVersionedXcm (141) */
	interface XcmVersionedXcm extends Enum {
		readonly isV2: boolean;
		readonly asV2: XcmV2Xcm;
		readonly isV3: boolean;
		readonly asV3: XcmV3Xcm;
		readonly type: 'V2' | 'V3';
	}

	/** @name XcmV2Xcm (142) */
	interface XcmV2Xcm extends Vec<XcmV2Instruction> {}

	/** @name XcmV2Instruction (144) */
	interface XcmV2Instruction extends Enum {
		readonly isWithdrawAsset: boolean;
		readonly asWithdrawAsset: XcmV2MultiassetMultiAssets;
		readonly isReserveAssetDeposited: boolean;
		readonly asReserveAssetDeposited: XcmV2MultiassetMultiAssets;
		readonly isReceiveTeleportedAsset: boolean;
		readonly asReceiveTeleportedAsset: XcmV2MultiassetMultiAssets;
		readonly isQueryResponse: boolean;
		readonly asQueryResponse: {
			readonly queryId: Compact<u64>;
			readonly response: XcmV2Response;
			readonly maxWeight: Compact<u64>;
		} & Struct;
		readonly isTransferAsset: boolean;
		readonly asTransferAsset: {
			readonly assets: XcmV2MultiassetMultiAssets;
			readonly beneficiary: XcmV2MultiLocation;
		} & Struct;
		readonly isTransferReserveAsset: boolean;
		readonly asTransferReserveAsset: {
			readonly assets: XcmV2MultiassetMultiAssets;
			readonly dest: XcmV2MultiLocation;
			readonly xcm: XcmV2Xcm;
		} & Struct;
		readonly isTransact: boolean;
		readonly asTransact: {
			readonly originType: XcmV2OriginKind;
			readonly requireWeightAtMost: Compact<u64>;
			readonly call: XcmDoubleEncoded;
		} & Struct;
		readonly isHrmpNewChannelOpenRequest: boolean;
		readonly asHrmpNewChannelOpenRequest: {
			readonly sender: Compact<u32>;
			readonly maxMessageSize: Compact<u32>;
			readonly maxCapacity: Compact<u32>;
		} & Struct;
		readonly isHrmpChannelAccepted: boolean;
		readonly asHrmpChannelAccepted: {
			readonly recipient: Compact<u32>;
		} & Struct;
		readonly isHrmpChannelClosing: boolean;
		readonly asHrmpChannelClosing: {
			readonly initiator: Compact<u32>;
			readonly sender: Compact<u32>;
			readonly recipient: Compact<u32>;
		} & Struct;
		readonly isClearOrigin: boolean;
		readonly isDescendOrigin: boolean;
		readonly asDescendOrigin: XcmV2MultilocationJunctions;
		readonly isReportError: boolean;
		readonly asReportError: {
			readonly queryId: Compact<u64>;
			readonly dest: XcmV2MultiLocation;
			readonly maxResponseWeight: Compact<u64>;
		} & Struct;
		readonly isDepositAsset: boolean;
		readonly asDepositAsset: {
			readonly assets: XcmV2MultiassetMultiAssetFilter;
			readonly maxAssets: Compact<u32>;
			readonly beneficiary: XcmV2MultiLocation;
		} & Struct;
		readonly isDepositReserveAsset: boolean;
		readonly asDepositReserveAsset: {
			readonly assets: XcmV2MultiassetMultiAssetFilter;
			readonly maxAssets: Compact<u32>;
			readonly dest: XcmV2MultiLocation;
			readonly xcm: XcmV2Xcm;
		} & Struct;
		readonly isExchangeAsset: boolean;
		readonly asExchangeAsset: {
			readonly give: XcmV2MultiassetMultiAssetFilter;
			readonly receive: XcmV2MultiassetMultiAssets;
		} & Struct;
		readonly isInitiateReserveWithdraw: boolean;
		readonly asInitiateReserveWithdraw: {
			readonly assets: XcmV2MultiassetMultiAssetFilter;
			readonly reserve: XcmV2MultiLocation;
			readonly xcm: XcmV2Xcm;
		} & Struct;
		readonly isInitiateTeleport: boolean;
		readonly asInitiateTeleport: {
			readonly assets: XcmV2MultiassetMultiAssetFilter;
			readonly dest: XcmV2MultiLocation;
			readonly xcm: XcmV2Xcm;
		} & Struct;
		readonly isQueryHolding: boolean;
		readonly asQueryHolding: {
			readonly queryId: Compact<u64>;
			readonly dest: XcmV2MultiLocation;
			readonly assets: XcmV2MultiassetMultiAssetFilter;
			readonly maxResponseWeight: Compact<u64>;
		} & Struct;
		readonly isBuyExecution: boolean;
		readonly asBuyExecution: {
			readonly fees: XcmV2MultiAsset;
			readonly weightLimit: XcmV2WeightLimit;
		} & Struct;
		readonly isRefundSurplus: boolean;
		readonly isSetErrorHandler: boolean;
		readonly asSetErrorHandler: XcmV2Xcm;
		readonly isSetAppendix: boolean;
		readonly asSetAppendix: XcmV2Xcm;
		readonly isClearError: boolean;
		readonly isClaimAsset: boolean;
		readonly asClaimAsset: {
			readonly assets: XcmV2MultiassetMultiAssets;
			readonly ticket: XcmV2MultiLocation;
		} & Struct;
		readonly isTrap: boolean;
		readonly asTrap: Compact<u64>;
		readonly isSubscribeVersion: boolean;
		readonly asSubscribeVersion: {
			readonly queryId: Compact<u64>;
			readonly maxResponseWeight: Compact<u64>;
		} & Struct;
		readonly isUnsubscribeVersion: boolean;
		readonly type:
			| 'WithdrawAsset'
			| 'ReserveAssetDeposited'
			| 'ReceiveTeleportedAsset'
			| 'QueryResponse'
			| 'TransferAsset'
			| 'TransferReserveAsset'
			| 'Transact'
			| 'HrmpNewChannelOpenRequest'
			| 'HrmpChannelAccepted'
			| 'HrmpChannelClosing'
			| 'ClearOrigin'
			| 'DescendOrigin'
			| 'ReportError'
			| 'DepositAsset'
			| 'DepositReserveAsset'
			| 'ExchangeAsset'
			| 'InitiateReserveWithdraw'
			| 'InitiateTeleport'
			| 'QueryHolding'
			| 'BuyExecution'
			| 'RefundSurplus'
			| 'SetErrorHandler'
			| 'SetAppendix'
			| 'ClearError'
			| 'ClaimAsset'
			| 'Trap'
			| 'SubscribeVersion'
			| 'UnsubscribeVersion';
	}

	/** @name XcmV2MultiassetMultiAssets (145) */
	interface XcmV2MultiassetMultiAssets extends Vec<XcmV2MultiAsset> {}

	/** @name XcmV2MultiAsset (147) */
	interface XcmV2MultiAsset extends Struct {
		readonly id: XcmV2MultiassetAssetId;
		readonly fun: XcmV2MultiassetFungibility;
	}

	/** @name XcmV2MultiassetAssetId (148) */
	interface XcmV2MultiassetAssetId extends Enum {
		readonly isConcrete: boolean;
		readonly asConcrete: XcmV2MultiLocation;
		readonly isAbstract: boolean;
		readonly asAbstract: Bytes;
		readonly type: 'Concrete' | 'Abstract';
	}

	/** @name XcmV2MultiassetFungibility (149) */
	interface XcmV2MultiassetFungibility extends Enum {
		readonly isFungible: boolean;
		readonly asFungible: Compact<u128>;
		readonly isNonFungible: boolean;
		readonly asNonFungible: XcmV2MultiassetAssetInstance;
		readonly type: 'Fungible' | 'NonFungible';
	}

	/** @name XcmV2MultiassetAssetInstance (150) */
	interface XcmV2MultiassetAssetInstance extends Enum {
		readonly isUndefined: boolean;
		readonly isIndex: boolean;
		readonly asIndex: Compact<u128>;
		readonly isArray4: boolean;
		readonly asArray4: U8aFixed;
		readonly isArray8: boolean;
		readonly asArray8: U8aFixed;
		readonly isArray16: boolean;
		readonly asArray16: U8aFixed;
		readonly isArray32: boolean;
		readonly asArray32: U8aFixed;
		readonly isBlob: boolean;
		readonly asBlob: Bytes;
		readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32' | 'Blob';
	}

	/** @name XcmV2Response (153) */
	interface XcmV2Response extends Enum {
		readonly isNull: boolean;
		readonly isAssets: boolean;
		readonly asAssets: XcmV2MultiassetMultiAssets;
		readonly isExecutionResult: boolean;
		readonly asExecutionResult: Option<ITuple<[u32, XcmV2TraitsError]>>;
		readonly isVersion: boolean;
		readonly asVersion: u32;
		readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version';
	}

	/** @name XcmV2TraitsError (156) */
	interface XcmV2TraitsError extends Enum {
		readonly isOverflow: boolean;
		readonly isUnimplemented: boolean;
		readonly isUntrustedReserveLocation: boolean;
		readonly isUntrustedTeleportLocation: boolean;
		readonly isMultiLocationFull: boolean;
		readonly isMultiLocationNotInvertible: boolean;
		readonly isBadOrigin: boolean;
		readonly isInvalidLocation: boolean;
		readonly isAssetNotFound: boolean;
		readonly isFailedToTransactAsset: boolean;
		readonly isNotWithdrawable: boolean;
		readonly isLocationCannotHold: boolean;
		readonly isExceedsMaxMessageSize: boolean;
		readonly isDestinationUnsupported: boolean;
		readonly isTransport: boolean;
		readonly isUnroutable: boolean;
		readonly isUnknownClaim: boolean;
		readonly isFailedToDecode: boolean;
		readonly isMaxWeightInvalid: boolean;
		readonly isNotHoldingFees: boolean;
		readonly isTooExpensive: boolean;
		readonly isTrap: boolean;
		readonly asTrap: u64;
		readonly isUnhandledXcmVersion: boolean;
		readonly isWeightLimitReached: boolean;
		readonly asWeightLimitReached: u64;
		readonly isBarrier: boolean;
		readonly isWeightNotComputable: boolean;
		readonly type:
			| 'Overflow'
			| 'Unimplemented'
			| 'UntrustedReserveLocation'
			| 'UntrustedTeleportLocation'
			| 'MultiLocationFull'
			| 'MultiLocationNotInvertible'
			| 'BadOrigin'
			| 'InvalidLocation'
			| 'AssetNotFound'
			| 'FailedToTransactAsset'
			| 'NotWithdrawable'
			| 'LocationCannotHold'
			| 'ExceedsMaxMessageSize'
			| 'DestinationUnsupported'
			| 'Transport'
			| 'Unroutable'
			| 'UnknownClaim'
			| 'FailedToDecode'
			| 'MaxWeightInvalid'
			| 'NotHoldingFees'
			| 'TooExpensive'
			| 'Trap'
			| 'UnhandledXcmVersion'
			| 'WeightLimitReached'
			| 'Barrier'
			| 'WeightNotComputable';
	}

	/** @name XcmV2OriginKind (157) */
	interface XcmV2OriginKind extends Enum {
		readonly isNative: boolean;
		readonly isSovereignAccount: boolean;
		readonly isSuperuser: boolean;
		readonly isXcm: boolean;
		readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
	}

	/** @name XcmDoubleEncoded (158) */
	interface XcmDoubleEncoded extends Struct {
		readonly encoded: Bytes;
	}

	/** @name XcmV2MultiassetMultiAssetFilter (159) */
	interface XcmV2MultiassetMultiAssetFilter extends Enum {
		readonly isDefinite: boolean;
		readonly asDefinite: XcmV2MultiassetMultiAssets;
		readonly isWild: boolean;
		readonly asWild: XcmV2MultiassetWildMultiAsset;
		readonly type: 'Definite' | 'Wild';
	}

	/** @name XcmV2MultiassetWildMultiAsset (160) */
	interface XcmV2MultiassetWildMultiAsset extends Enum {
		readonly isAll: boolean;
		readonly isAllOf: boolean;
		readonly asAllOf: {
			readonly id: XcmV2MultiassetAssetId;
			readonly fun: XcmV2MultiassetWildFungibility;
		} & Struct;
		readonly type: 'All' | 'AllOf';
	}

	/** @name XcmV2MultiassetWildFungibility (161) */
	interface XcmV2MultiassetWildFungibility extends Enum {
		readonly isFungible: boolean;
		readonly isNonFungible: boolean;
		readonly type: 'Fungible' | 'NonFungible';
	}

	/** @name XcmV2WeightLimit (162) */
	interface XcmV2WeightLimit extends Enum {
		readonly isUnlimited: boolean;
		readonly isLimited: boolean;
		readonly asLimited: Compact<u64>;
		readonly type: 'Unlimited' | 'Limited';
	}

	/** @name XcmV3Xcm (163) */
	interface XcmV3Xcm extends Vec<XcmV3Instruction> {}

	/** @name XcmV3Instruction (165) */
	interface XcmV3Instruction extends Enum {
		readonly isWithdrawAsset: boolean;
		readonly asWithdrawAsset: XcmV3MultiassetMultiAssets;
		readonly isReserveAssetDeposited: boolean;
		readonly asReserveAssetDeposited: XcmV3MultiassetMultiAssets;
		readonly isReceiveTeleportedAsset: boolean;
		readonly asReceiveTeleportedAsset: XcmV3MultiassetMultiAssets;
		readonly isQueryResponse: boolean;
		readonly asQueryResponse: {
			readonly queryId: Compact<u64>;
			readonly response: XcmV3Response;
			readonly maxWeight: SpWeightsWeightV2Weight;
			readonly querier: Option<StagingXcmV3MultiLocation>;
		} & Struct;
		readonly isTransferAsset: boolean;
		readonly asTransferAsset: {
			readonly assets: XcmV3MultiassetMultiAssets;
			readonly beneficiary: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isTransferReserveAsset: boolean;
		readonly asTransferReserveAsset: {
			readonly assets: XcmV3MultiassetMultiAssets;
			readonly dest: StagingXcmV3MultiLocation;
			readonly xcm: XcmV3Xcm;
		} & Struct;
		readonly isTransact: boolean;
		readonly asTransact: {
			readonly originKind: XcmV2OriginKind;
			readonly requireWeightAtMost: SpWeightsWeightV2Weight;
			readonly call: XcmDoubleEncoded;
		} & Struct;
		readonly isHrmpNewChannelOpenRequest: boolean;
		readonly asHrmpNewChannelOpenRequest: {
			readonly sender: Compact<u32>;
			readonly maxMessageSize: Compact<u32>;
			readonly maxCapacity: Compact<u32>;
		} & Struct;
		readonly isHrmpChannelAccepted: boolean;
		readonly asHrmpChannelAccepted: {
			readonly recipient: Compact<u32>;
		} & Struct;
		readonly isHrmpChannelClosing: boolean;
		readonly asHrmpChannelClosing: {
			readonly initiator: Compact<u32>;
			readonly sender: Compact<u32>;
			readonly recipient: Compact<u32>;
		} & Struct;
		readonly isClearOrigin: boolean;
		readonly isDescendOrigin: boolean;
		readonly asDescendOrigin: XcmV3Junctions;
		readonly isReportError: boolean;
		readonly asReportError: XcmV3QueryResponseInfo;
		readonly isDepositAsset: boolean;
		readonly asDepositAsset: {
			readonly assets: XcmV3MultiassetMultiAssetFilter;
			readonly beneficiary: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isDepositReserveAsset: boolean;
		readonly asDepositReserveAsset: {
			readonly assets: XcmV3MultiassetMultiAssetFilter;
			readonly dest: StagingXcmV3MultiLocation;
			readonly xcm: XcmV3Xcm;
		} & Struct;
		readonly isExchangeAsset: boolean;
		readonly asExchangeAsset: {
			readonly give: XcmV3MultiassetMultiAssetFilter;
			readonly want: XcmV3MultiassetMultiAssets;
			readonly maximal: bool;
		} & Struct;
		readonly isInitiateReserveWithdraw: boolean;
		readonly asInitiateReserveWithdraw: {
			readonly assets: XcmV3MultiassetMultiAssetFilter;
			readonly reserve: StagingXcmV3MultiLocation;
			readonly xcm: XcmV3Xcm;
		} & Struct;
		readonly isInitiateTeleport: boolean;
		readonly asInitiateTeleport: {
			readonly assets: XcmV3MultiassetMultiAssetFilter;
			readonly dest: StagingXcmV3MultiLocation;
			readonly xcm: XcmV3Xcm;
		} & Struct;
		readonly isReportHolding: boolean;
		readonly asReportHolding: {
			readonly responseInfo: XcmV3QueryResponseInfo;
			readonly assets: XcmV3MultiassetMultiAssetFilter;
		} & Struct;
		readonly isBuyExecution: boolean;
		readonly asBuyExecution: {
			readonly fees: XcmV3MultiAsset;
			readonly weightLimit: XcmV3WeightLimit;
		} & Struct;
		readonly isRefundSurplus: boolean;
		readonly isSetErrorHandler: boolean;
		readonly asSetErrorHandler: XcmV3Xcm;
		readonly isSetAppendix: boolean;
		readonly asSetAppendix: XcmV3Xcm;
		readonly isClearError: boolean;
		readonly isClaimAsset: boolean;
		readonly asClaimAsset: {
			readonly assets: XcmV3MultiassetMultiAssets;
			readonly ticket: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isTrap: boolean;
		readonly asTrap: Compact<u64>;
		readonly isSubscribeVersion: boolean;
		readonly asSubscribeVersion: {
			readonly queryId: Compact<u64>;
			readonly maxResponseWeight: SpWeightsWeightV2Weight;
		} & Struct;
		readonly isUnsubscribeVersion: boolean;
		readonly isBurnAsset: boolean;
		readonly asBurnAsset: XcmV3MultiassetMultiAssets;
		readonly isExpectAsset: boolean;
		readonly asExpectAsset: XcmV3MultiassetMultiAssets;
		readonly isExpectOrigin: boolean;
		readonly asExpectOrigin: Option<StagingXcmV3MultiLocation>;
		readonly isExpectError: boolean;
		readonly asExpectError: Option<ITuple<[u32, XcmV3TraitsError]>>;
		readonly isExpectTransactStatus: boolean;
		readonly asExpectTransactStatus: XcmV3MaybeErrorCode;
		readonly isQueryPallet: boolean;
		readonly asQueryPallet: {
			readonly moduleName: Bytes;
			readonly responseInfo: XcmV3QueryResponseInfo;
		} & Struct;
		readonly isExpectPallet: boolean;
		readonly asExpectPallet: {
			readonly index: Compact<u32>;
			readonly name: Bytes;
			readonly moduleName: Bytes;
			readonly crateMajor: Compact<u32>;
			readonly minCrateMinor: Compact<u32>;
		} & Struct;
		readonly isReportTransactStatus: boolean;
		readonly asReportTransactStatus: XcmV3QueryResponseInfo;
		readonly isClearTransactStatus: boolean;
		readonly isUniversalOrigin: boolean;
		readonly asUniversalOrigin: XcmV3Junction;
		readonly isExportMessage: boolean;
		readonly asExportMessage: {
			readonly network: XcmV3JunctionNetworkId;
			readonly destination: XcmV3Junctions;
			readonly xcm: XcmV3Xcm;
		} & Struct;
		readonly isLockAsset: boolean;
		readonly asLockAsset: {
			readonly asset: XcmV3MultiAsset;
			readonly unlocker: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isUnlockAsset: boolean;
		readonly asUnlockAsset: {
			readonly asset: XcmV3MultiAsset;
			readonly target: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isNoteUnlockable: boolean;
		readonly asNoteUnlockable: {
			readonly asset: XcmV3MultiAsset;
			readonly owner: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isRequestUnlock: boolean;
		readonly asRequestUnlock: {
			readonly asset: XcmV3MultiAsset;
			readonly locker: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isSetFeesMode: boolean;
		readonly asSetFeesMode: {
			readonly jitWithdraw: bool;
		} & Struct;
		readonly isSetTopic: boolean;
		readonly asSetTopic: U8aFixed;
		readonly isClearTopic: boolean;
		readonly isAliasOrigin: boolean;
		readonly asAliasOrigin: StagingXcmV3MultiLocation;
		readonly isUnpaidExecution: boolean;
		readonly asUnpaidExecution: {
			readonly weightLimit: XcmV3WeightLimit;
			readonly checkOrigin: Option<StagingXcmV3MultiLocation>;
		} & Struct;
		readonly type:
			| 'WithdrawAsset'
			| 'ReserveAssetDeposited'
			| 'ReceiveTeleportedAsset'
			| 'QueryResponse'
			| 'TransferAsset'
			| 'TransferReserveAsset'
			| 'Transact'
			| 'HrmpNewChannelOpenRequest'
			| 'HrmpChannelAccepted'
			| 'HrmpChannelClosing'
			| 'ClearOrigin'
			| 'DescendOrigin'
			| 'ReportError'
			| 'DepositAsset'
			| 'DepositReserveAsset'
			| 'ExchangeAsset'
			| 'InitiateReserveWithdraw'
			| 'InitiateTeleport'
			| 'ReportHolding'
			| 'BuyExecution'
			| 'RefundSurplus'
			| 'SetErrorHandler'
			| 'SetAppendix'
			| 'ClearError'
			| 'ClaimAsset'
			| 'Trap'
			| 'SubscribeVersion'
			| 'UnsubscribeVersion'
			| 'BurnAsset'
			| 'ExpectAsset'
			| 'ExpectOrigin'
			| 'ExpectError'
			| 'ExpectTransactStatus'
			| 'QueryPallet'
			| 'ExpectPallet'
			| 'ReportTransactStatus'
			| 'ClearTransactStatus'
			| 'UniversalOrigin'
			| 'ExportMessage'
			| 'LockAsset'
			| 'UnlockAsset'
			| 'NoteUnlockable'
			| 'RequestUnlock'
			| 'SetFeesMode'
			| 'SetTopic'
			| 'ClearTopic'
			| 'AliasOrigin'
			| 'UnpaidExecution';
	}

	/** @name XcmV3MultiassetMultiAssets (166) */
	interface XcmV3MultiassetMultiAssets extends Vec<XcmV3MultiAsset> {}

	/** @name XcmV3MultiAsset (168) */
	interface XcmV3MultiAsset extends Struct {
		readonly id: XcmV3MultiassetAssetId;
		readonly fun: XcmV3MultiassetFungibility;
	}

	/** @name XcmV3MultiassetAssetId (169) */
	interface XcmV3MultiassetAssetId extends Enum {
		readonly isConcrete: boolean;
		readonly asConcrete: StagingXcmV3MultiLocation;
		readonly isAbstract: boolean;
		readonly asAbstract: U8aFixed;
		readonly type: 'Concrete' | 'Abstract';
	}

	/** @name XcmV3MultiassetFungibility (170) */
	interface XcmV3MultiassetFungibility extends Enum {
		readonly isFungible: boolean;
		readonly asFungible: Compact<u128>;
		readonly isNonFungible: boolean;
		readonly asNonFungible: XcmV3MultiassetAssetInstance;
		readonly type: 'Fungible' | 'NonFungible';
	}

	/** @name XcmV3MultiassetAssetInstance (171) */
	interface XcmV3MultiassetAssetInstance extends Enum {
		readonly isUndefined: boolean;
		readonly isIndex: boolean;
		readonly asIndex: Compact<u128>;
		readonly isArray4: boolean;
		readonly asArray4: U8aFixed;
		readonly isArray8: boolean;
		readonly asArray8: U8aFixed;
		readonly isArray16: boolean;
		readonly asArray16: U8aFixed;
		readonly isArray32: boolean;
		readonly asArray32: U8aFixed;
		readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32';
	}

	/** @name XcmV3Response (172) */
	interface XcmV3Response extends Enum {
		readonly isNull: boolean;
		readonly isAssets: boolean;
		readonly asAssets: XcmV3MultiassetMultiAssets;
		readonly isExecutionResult: boolean;
		readonly asExecutionResult: Option<ITuple<[u32, XcmV3TraitsError]>>;
		readonly isVersion: boolean;
		readonly asVersion: u32;
		readonly isPalletsInfo: boolean;
		readonly asPalletsInfo: Vec<XcmV3PalletInfo>;
		readonly isDispatchResult: boolean;
		readonly asDispatchResult: XcmV3MaybeErrorCode;
		readonly type:
			| 'Null'
			| 'Assets'
			| 'ExecutionResult'
			| 'Version'
			| 'PalletsInfo'
			| 'DispatchResult';
	}

	/** @name XcmV3TraitsError (175) */
	interface XcmV3TraitsError extends Enum {
		readonly isOverflow: boolean;
		readonly isUnimplemented: boolean;
		readonly isUntrustedReserveLocation: boolean;
		readonly isUntrustedTeleportLocation: boolean;
		readonly isLocationFull: boolean;
		readonly isLocationNotInvertible: boolean;
		readonly isBadOrigin: boolean;
		readonly isInvalidLocation: boolean;
		readonly isAssetNotFound: boolean;
		readonly isFailedToTransactAsset: boolean;
		readonly isNotWithdrawable: boolean;
		readonly isLocationCannotHold: boolean;
		readonly isExceedsMaxMessageSize: boolean;
		readonly isDestinationUnsupported: boolean;
		readonly isTransport: boolean;
		readonly isUnroutable: boolean;
		readonly isUnknownClaim: boolean;
		readonly isFailedToDecode: boolean;
		readonly isMaxWeightInvalid: boolean;
		readonly isNotHoldingFees: boolean;
		readonly isTooExpensive: boolean;
		readonly isTrap: boolean;
		readonly asTrap: u64;
		readonly isExpectationFalse: boolean;
		readonly isPalletNotFound: boolean;
		readonly isNameMismatch: boolean;
		readonly isVersionIncompatible: boolean;
		readonly isHoldingWouldOverflow: boolean;
		readonly isExportError: boolean;
		readonly isReanchorFailed: boolean;
		readonly isNoDeal: boolean;
		readonly isFeesNotMet: boolean;
		readonly isLockError: boolean;
		readonly isNoPermission: boolean;
		readonly isUnanchored: boolean;
		readonly isNotDepositable: boolean;
		readonly isUnhandledXcmVersion: boolean;
		readonly isWeightLimitReached: boolean;
		readonly asWeightLimitReached: SpWeightsWeightV2Weight;
		readonly isBarrier: boolean;
		readonly isWeightNotComputable: boolean;
		readonly isExceedsStackLimit: boolean;
		readonly type:
			| 'Overflow'
			| 'Unimplemented'
			| 'UntrustedReserveLocation'
			| 'UntrustedTeleportLocation'
			| 'LocationFull'
			| 'LocationNotInvertible'
			| 'BadOrigin'
			| 'InvalidLocation'
			| 'AssetNotFound'
			| 'FailedToTransactAsset'
			| 'NotWithdrawable'
			| 'LocationCannotHold'
			| 'ExceedsMaxMessageSize'
			| 'DestinationUnsupported'
			| 'Transport'
			| 'Unroutable'
			| 'UnknownClaim'
			| 'FailedToDecode'
			| 'MaxWeightInvalid'
			| 'NotHoldingFees'
			| 'TooExpensive'
			| 'Trap'
			| 'ExpectationFalse'
			| 'PalletNotFound'
			| 'NameMismatch'
			| 'VersionIncompatible'
			| 'HoldingWouldOverflow'
			| 'ExportError'
			| 'ReanchorFailed'
			| 'NoDeal'
			| 'FeesNotMet'
			| 'LockError'
			| 'NoPermission'
			| 'Unanchored'
			| 'NotDepositable'
			| 'UnhandledXcmVersion'
			| 'WeightLimitReached'
			| 'Barrier'
			| 'WeightNotComputable'
			| 'ExceedsStackLimit';
	}

	/** @name XcmV3PalletInfo (177) */
	interface XcmV3PalletInfo extends Struct {
		readonly index: Compact<u32>;
		readonly name: Bytes;
		readonly moduleName: Bytes;
		readonly major: Compact<u32>;
		readonly minor: Compact<u32>;
		readonly patch: Compact<u32>;
	}

	/** @name XcmV3MaybeErrorCode (180) */
	interface XcmV3MaybeErrorCode extends Enum {
		readonly isSuccess: boolean;
		readonly isError: boolean;
		readonly asError: Bytes;
		readonly isTruncatedError: boolean;
		readonly asTruncatedError: Bytes;
		readonly type: 'Success' | 'Error' | 'TruncatedError';
	}

	/** @name XcmV3QueryResponseInfo (183) */
	interface XcmV3QueryResponseInfo extends Struct {
		readonly destination: StagingXcmV3MultiLocation;
		readonly queryId: Compact<u64>;
		readonly maxWeight: SpWeightsWeightV2Weight;
	}

	/** @name XcmV3MultiassetMultiAssetFilter (184) */
	interface XcmV3MultiassetMultiAssetFilter extends Enum {
		readonly isDefinite: boolean;
		readonly asDefinite: XcmV3MultiassetMultiAssets;
		readonly isWild: boolean;
		readonly asWild: XcmV3MultiassetWildMultiAsset;
		readonly type: 'Definite' | 'Wild';
	}

	/** @name XcmV3MultiassetWildMultiAsset (185) */
	interface XcmV3MultiassetWildMultiAsset extends Enum {
		readonly isAll: boolean;
		readonly isAllOf: boolean;
		readonly asAllOf: {
			readonly id: XcmV3MultiassetAssetId;
			readonly fun: XcmV3MultiassetWildFungibility;
		} & Struct;
		readonly isAllCounted: boolean;
		readonly asAllCounted: Compact<u32>;
		readonly isAllOfCounted: boolean;
		readonly asAllOfCounted: {
			readonly id: XcmV3MultiassetAssetId;
			readonly fun: XcmV3MultiassetWildFungibility;
			readonly count: Compact<u32>;
		} & Struct;
		readonly type: 'All' | 'AllOf' | 'AllCounted' | 'AllOfCounted';
	}

	/** @name XcmV3MultiassetWildFungibility (186) */
	interface XcmV3MultiassetWildFungibility extends Enum {
		readonly isFungible: boolean;
		readonly isNonFungible: boolean;
		readonly type: 'Fungible' | 'NonFungible';
	}

	/** @name XcmV3WeightLimit (187) */
	interface XcmV3WeightLimit extends Enum {
		readonly isUnlimited: boolean;
		readonly isLimited: boolean;
		readonly asLimited: SpWeightsWeightV2Weight;
		readonly type: 'Unlimited' | 'Limited';
	}

	/** @name XcmVersionedMultiAssets (188) */
	interface XcmVersionedMultiAssets extends Enum {
		readonly isV2: boolean;
		readonly asV2: XcmV2MultiassetMultiAssets;
		readonly isV3: boolean;
		readonly asV3: XcmV3MultiassetMultiAssets;
		readonly type: 'V2' | 'V3';
	}

	/** @name CumulusPalletXcmCall (197) */
	type CumulusPalletXcmCall = Null;

	/** @name CumulusPalletDmpQueueCall (198) */
	interface CumulusPalletDmpQueueCall extends Enum {
		readonly isServiceOverweight: boolean;
		readonly asServiceOverweight: {
			readonly index: u64;
			readonly weightLimit: SpWeightsWeightV2Weight;
		} & Struct;
		readonly type: 'ServiceOverweight';
	}

	/** @name PalletUtilityCall (199) */
	interface PalletUtilityCall extends Enum {
		readonly isBatch: boolean;
		readonly asBatch: {
			readonly calls: Vec<Call>;
		} & Struct;
		readonly isAsDerivative: boolean;
		readonly asAsDerivative: {
			readonly index: u16;
			readonly call: Call;
		} & Struct;
		readonly isBatchAll: boolean;
		readonly asBatchAll: {
			readonly calls: Vec<Call>;
		} & Struct;
		readonly isDispatchAs: boolean;
		readonly asDispatchAs: {
			readonly asOrigin: TangleKusamaRuntimeOriginCaller;
			readonly call: Call;
		} & Struct;
		readonly isForceBatch: boolean;
		readonly asForceBatch: {
			readonly calls: Vec<Call>;
		} & Struct;
		readonly isWithWeight: boolean;
		readonly asWithWeight: {
			readonly call: Call;
			readonly weight: SpWeightsWeightV2Weight;
		} & Struct;
		readonly type:
			| 'Batch'
			| 'AsDerivative'
			| 'BatchAll'
			| 'DispatchAs'
			| 'ForceBatch'
			| 'WithWeight';
	}

	/** @name PalletSchedulerCall (201) */
	interface PalletSchedulerCall extends Enum {
		readonly isSchedule: boolean;
		readonly asSchedule: {
			readonly when: u32;
			readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
			readonly priority: u8;
			readonly call: Call;
		} & Struct;
		readonly isCancel: boolean;
		readonly asCancel: {
			readonly when: u32;
			readonly index: u32;
		} & Struct;
		readonly isScheduleNamed: boolean;
		readonly asScheduleNamed: {
			readonly id: U8aFixed;
			readonly when: u32;
			readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
			readonly priority: u8;
			readonly call: Call;
		} & Struct;
		readonly isCancelNamed: boolean;
		readonly asCancelNamed: {
			readonly id: U8aFixed;
		} & Struct;
		readonly isScheduleAfter: boolean;
		readonly asScheduleAfter: {
			readonly after: u32;
			readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
			readonly priority: u8;
			readonly call: Call;
		} & Struct;
		readonly isScheduleNamedAfter: boolean;
		readonly asScheduleNamedAfter: {
			readonly id: U8aFixed;
			readonly after: u32;
			readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
			readonly priority: u8;
			readonly call: Call;
		} & Struct;
		readonly type:
			| 'Schedule'
			| 'Cancel'
			| 'ScheduleNamed'
			| 'CancelNamed'
			| 'ScheduleAfter'
			| 'ScheduleNamedAfter';
	}

	/** @name PalletProxyCall (204) */
	interface PalletProxyCall extends Enum {
		readonly isProxy: boolean;
		readonly asProxy: {
			readonly real: MultiAddress;
			readonly forceProxyType: Option<TangleKusamaRuntimeProxyType>;
			readonly call: Call;
		} & Struct;
		readonly isAddProxy: boolean;
		readonly asAddProxy: {
			readonly delegate: MultiAddress;
			readonly proxyType: TangleKusamaRuntimeProxyType;
			readonly delay: u32;
		} & Struct;
		readonly isRemoveProxy: boolean;
		readonly asRemoveProxy: {
			readonly delegate: MultiAddress;
			readonly proxyType: TangleKusamaRuntimeProxyType;
			readonly delay: u32;
		} & Struct;
		readonly isRemoveProxies: boolean;
		readonly isCreatePure: boolean;
		readonly asCreatePure: {
			readonly proxyType: TangleKusamaRuntimeProxyType;
			readonly delay: u32;
			readonly index: u16;
		} & Struct;
		readonly isKillPure: boolean;
		readonly asKillPure: {
			readonly spawner: MultiAddress;
			readonly proxyType: TangleKusamaRuntimeProxyType;
			readonly index: u16;
			readonly height: Compact<u32>;
			readonly extIndex: Compact<u32>;
		} & Struct;
		readonly isAnnounce: boolean;
		readonly asAnnounce: {
			readonly real: MultiAddress;
			readonly callHash: H256;
		} & Struct;
		readonly isRemoveAnnouncement: boolean;
		readonly asRemoveAnnouncement: {
			readonly real: MultiAddress;
			readonly callHash: H256;
		} & Struct;
		readonly isRejectAnnouncement: boolean;
		readonly asRejectAnnouncement: {
			readonly delegate: MultiAddress;
			readonly callHash: H256;
		} & Struct;
		readonly isProxyAnnounced: boolean;
		readonly asProxyAnnounced: {
			readonly delegate: MultiAddress;
			readonly real: MultiAddress;
			readonly forceProxyType: Option<TangleKusamaRuntimeProxyType>;
			readonly call: Call;
		} & Struct;
		readonly type:
			| 'Proxy'
			| 'AddProxy'
			| 'RemoveProxy'
			| 'RemoveProxies'
			| 'CreatePure'
			| 'KillPure'
			| 'Announce'
			| 'RemoveAnnouncement'
			| 'RejectAnnouncement'
			| 'ProxyAnnounced';
	}

	/** @name TangleKusamaRuntimeProxyType (206) */
	interface TangleKusamaRuntimeProxyType extends Enum {
		readonly isAny: boolean;
		readonly isNonTransfer: boolean;
		readonly isGovernance: boolean;
		readonly isCancelProxy: boolean;
		readonly isIdentityJudgement: boolean;
		readonly isStaking: boolean;
		readonly type:
			| 'Any'
			| 'NonTransfer'
			| 'Governance'
			| 'CancelProxy'
			| 'IdentityJudgement'
			| 'Staking';
	}

	/** @name PalletMultisigCall (207) */
	interface PalletMultisigCall extends Enum {
		readonly isAsMultiThreshold1: boolean;
		readonly asAsMultiThreshold1: {
			readonly otherSignatories: Vec<AccountId32>;
			readonly call: Call;
		} & Struct;
		readonly isAsMulti: boolean;
		readonly asAsMulti: {
			readonly threshold: u16;
			readonly otherSignatories: Vec<AccountId32>;
			readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
			readonly call: Call;
			readonly maxWeight: SpWeightsWeightV2Weight;
		} & Struct;
		readonly isApproveAsMulti: boolean;
		readonly asApproveAsMulti: {
			readonly threshold: u16;
			readonly otherSignatories: Vec<AccountId32>;
			readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
			readonly callHash: U8aFixed;
			readonly maxWeight: SpWeightsWeightV2Weight;
		} & Struct;
		readonly isCancelAsMulti: boolean;
		readonly asCancelAsMulti: {
			readonly threshold: u16;
			readonly otherSignatories: Vec<AccountId32>;
			readonly timepoint: PalletMultisigTimepoint;
			readonly callHash: U8aFixed;
		} & Struct;
		readonly type: 'AsMultiThreshold1' | 'AsMulti' | 'ApproveAsMulti' | 'CancelAsMulti';
	}

	/** @name PalletMultisigTimepoint (209) */
	interface PalletMultisigTimepoint extends Struct {
		readonly height: u32;
		readonly index: u32;
	}

	/** @name PalletIdentityCall (210) */
	interface PalletIdentityCall extends Enum {
		readonly isAddRegistrar: boolean;
		readonly asAddRegistrar: {
			readonly account: MultiAddress;
		} & Struct;
		readonly isSetIdentity: boolean;
		readonly asSetIdentity: {
			readonly info: PalletIdentitySimpleIdentityInfo;
		} & Struct;
		readonly isSetSubs: boolean;
		readonly asSetSubs: {
			readonly subs: Vec<ITuple<[AccountId32, Data]>>;
		} & Struct;
		readonly isClearIdentity: boolean;
		readonly isRequestJudgement: boolean;
		readonly asRequestJudgement: {
			readonly regIndex: Compact<u32>;
			readonly maxFee: Compact<u128>;
		} & Struct;
		readonly isCancelRequest: boolean;
		readonly asCancelRequest: {
			readonly regIndex: u32;
		} & Struct;
		readonly isSetFee: boolean;
		readonly asSetFee: {
			readonly index: Compact<u32>;
			readonly fee: Compact<u128>;
		} & Struct;
		readonly isSetAccountId: boolean;
		readonly asSetAccountId: {
			readonly index: Compact<u32>;
			readonly new_: MultiAddress;
		} & Struct;
		readonly isSetFields: boolean;
		readonly asSetFields: {
			readonly index: Compact<u32>;
			readonly fields: PalletIdentityBitFlags;
		} & Struct;
		readonly isProvideJudgement: boolean;
		readonly asProvideJudgement: {
			readonly regIndex: Compact<u32>;
			readonly target: MultiAddress;
			readonly judgement: PalletIdentityJudgement;
			readonly identity: H256;
		} & Struct;
		readonly isKillIdentity: boolean;
		readonly asKillIdentity: {
			readonly target: MultiAddress;
		} & Struct;
		readonly isAddSub: boolean;
		readonly asAddSub: {
			readonly sub: MultiAddress;
			readonly data: Data;
		} & Struct;
		readonly isRenameSub: boolean;
		readonly asRenameSub: {
			readonly sub: MultiAddress;
			readonly data: Data;
		} & Struct;
		readonly isRemoveSub: boolean;
		readonly asRemoveSub: {
			readonly sub: MultiAddress;
		} & Struct;
		readonly isQuitSub: boolean;
		readonly type:
			| 'AddRegistrar'
			| 'SetIdentity'
			| 'SetSubs'
			| 'ClearIdentity'
			| 'RequestJudgement'
			| 'CancelRequest'
			| 'SetFee'
			| 'SetAccountId'
			| 'SetFields'
			| 'ProvideJudgement'
			| 'KillIdentity'
			| 'AddSub'
			| 'RenameSub'
			| 'RemoveSub'
			| 'QuitSub';
	}

	/** @name PalletIdentitySimpleIdentityInfo (211) */
	interface PalletIdentitySimpleIdentityInfo extends Struct {
		readonly additional: Vec<ITuple<[Data, Data]>>;
		readonly display: Data;
		readonly legal: Data;
		readonly web: Data;
		readonly riot: Data;
		readonly email: Data;
		readonly pgpFingerprint: Option<U8aFixed>;
		readonly image: Data;
		readonly twitter: Data;
	}

	/** @name PalletIdentityBitFlags (247) */
	interface PalletIdentityBitFlags extends Set {
		readonly isDisplay: boolean;
		readonly isLegal: boolean;
		readonly isWeb: boolean;
		readonly isRiot: boolean;
		readonly isEmail: boolean;
		readonly isPgpFingerprint: boolean;
		readonly isImage: boolean;
		readonly isTwitter: boolean;
	}

	/** @name PalletIdentitySimpleIdentityField (248) */
	interface PalletIdentitySimpleIdentityField extends Enum {
		readonly isDisplay: boolean;
		readonly isLegal: boolean;
		readonly isWeb: boolean;
		readonly isRiot: boolean;
		readonly isEmail: boolean;
		readonly isPgpFingerprint: boolean;
		readonly isImage: boolean;
		readonly isTwitter: boolean;
		readonly type:
			| 'Display'
			| 'Legal'
			| 'Web'
			| 'Riot'
			| 'Email'
			| 'PgpFingerprint'
			| 'Image'
			| 'Twitter';
	}

	/** @name PalletIdentityJudgement (249) */
	interface PalletIdentityJudgement extends Enum {
		readonly isUnknown: boolean;
		readonly isFeePaid: boolean;
		readonly asFeePaid: u128;
		readonly isReasonable: boolean;
		readonly isKnownGood: boolean;
		readonly isOutOfDate: boolean;
		readonly isLowQuality: boolean;
		readonly isErroneous: boolean;
		readonly type:
			| 'Unknown'
			| 'FeePaid'
			| 'Reasonable'
			| 'KnownGood'
			| 'OutOfDate'
			| 'LowQuality'
			| 'Erroneous';
	}

	/** @name PalletTreasuryCall (250) */
	interface PalletTreasuryCall extends Enum {
		readonly isProposeSpend: boolean;
		readonly asProposeSpend: {
			readonly value: Compact<u128>;
			readonly beneficiary: MultiAddress;
		} & Struct;
		readonly isRejectProposal: boolean;
		readonly asRejectProposal: {
			readonly proposalId: Compact<u32>;
		} & Struct;
		readonly isApproveProposal: boolean;
		readonly asApproveProposal: {
			readonly proposalId: Compact<u32>;
		} & Struct;
		readonly isSpendLocal: boolean;
		readonly asSpendLocal: {
			readonly amount: Compact<u128>;
			readonly beneficiary: MultiAddress;
		} & Struct;
		readonly isRemoveApproval: boolean;
		readonly asRemoveApproval: {
			readonly proposalId: Compact<u32>;
		} & Struct;
		readonly isSpend: boolean;
		readonly asSpend: {
			readonly assetKind: Null;
			readonly amount: Compact<u128>;
			readonly beneficiary: AccountId32;
			readonly validFrom: Option<u32>;
		} & Struct;
		readonly isPayout: boolean;
		readonly asPayout: {
			readonly index: u32;
		} & Struct;
		readonly isCheckStatus: boolean;
		readonly asCheckStatus: {
			readonly index: u32;
		} & Struct;
		readonly isVoidSpend: boolean;
		readonly asVoidSpend: {
			readonly index: u32;
		} & Struct;
		readonly type:
			| 'ProposeSpend'
			| 'RejectProposal'
			| 'ApproveProposal'
			| 'SpendLocal'
			| 'RemoveApproval'
			| 'Spend'
			| 'Payout'
			| 'CheckStatus'
			| 'VoidSpend';
	}

	/** @name PalletBountiesCall (251) */
	interface PalletBountiesCall extends Enum {
		readonly isProposeBounty: boolean;
		readonly asProposeBounty: {
			readonly value: Compact<u128>;
			readonly description: Bytes;
		} & Struct;
		readonly isApproveBounty: boolean;
		readonly asApproveBounty: {
			readonly bountyId: Compact<u32>;
		} & Struct;
		readonly isProposeCurator: boolean;
		readonly asProposeCurator: {
			readonly bountyId: Compact<u32>;
			readonly curator: MultiAddress;
			readonly fee: Compact<u128>;
		} & Struct;
		readonly isUnassignCurator: boolean;
		readonly asUnassignCurator: {
			readonly bountyId: Compact<u32>;
		} & Struct;
		readonly isAcceptCurator: boolean;
		readonly asAcceptCurator: {
			readonly bountyId: Compact<u32>;
		} & Struct;
		readonly isAwardBounty: boolean;
		readonly asAwardBounty: {
			readonly bountyId: Compact<u32>;
			readonly beneficiary: MultiAddress;
		} & Struct;
		readonly isClaimBounty: boolean;
		readonly asClaimBounty: {
			readonly bountyId: Compact<u32>;
		} & Struct;
		readonly isCloseBounty: boolean;
		readonly asCloseBounty: {
			readonly bountyId: Compact<u32>;
		} & Struct;
		readonly isExtendBountyExpiry: boolean;
		readonly asExtendBountyExpiry: {
			readonly bountyId: Compact<u32>;
			readonly remark: Bytes;
		} & Struct;
		readonly type:
			| 'ProposeBounty'
			| 'ApproveBounty'
			| 'ProposeCurator'
			| 'UnassignCurator'
			| 'AcceptCurator'
			| 'AwardBounty'
			| 'ClaimBounty'
			| 'CloseBounty'
			| 'ExtendBountyExpiry';
	}

	/** @name PalletTipsCall (252) */
	interface PalletTipsCall extends Enum {
		readonly isReportAwesome: boolean;
		readonly asReportAwesome: {
			readonly reason: Bytes;
			readonly who: MultiAddress;
		} & Struct;
		readonly isRetractTip: boolean;
		readonly asRetractTip: {
			readonly hash_: H256;
		} & Struct;
		readonly isTipNew: boolean;
		readonly asTipNew: {
			readonly reason: Bytes;
			readonly who: MultiAddress;
			readonly tipValue: Compact<u128>;
		} & Struct;
		readonly isTip: boolean;
		readonly asTip: {
			readonly hash_: H256;
			readonly tipValue: Compact<u128>;
		} & Struct;
		readonly isCloseTip: boolean;
		readonly asCloseTip: {
			readonly hash_: H256;
		} & Struct;
		readonly isSlashTip: boolean;
		readonly asSlashTip: {
			readonly hash_: H256;
		} & Struct;
		readonly type: 'ReportAwesome' | 'RetractTip' | 'TipNew' | 'Tip' | 'CloseTip' | 'SlashTip';
	}

	/** @name PalletPreimageCall (253) */
	interface PalletPreimageCall extends Enum {
		readonly isNotePreimage: boolean;
		readonly asNotePreimage: {
			readonly bytes: Bytes;
		} & Struct;
		readonly isUnnotePreimage: boolean;
		readonly asUnnotePreimage: {
			readonly hash_: H256;
		} & Struct;
		readonly isRequestPreimage: boolean;
		readonly asRequestPreimage: {
			readonly hash_: H256;
		} & Struct;
		readonly isUnrequestPreimage: boolean;
		readonly asUnrequestPreimage: {
			readonly hash_: H256;
		} & Struct;
		readonly isEnsureUpdated: boolean;
		readonly asEnsureUpdated: {
			readonly hashes: Vec<H256>;
		} & Struct;
		readonly type:
			| 'NotePreimage'
			| 'UnnotePreimage'
			| 'RequestPreimage'
			| 'UnrequestPreimage'
			| 'EnsureUpdated';
	}

	/** @name OrmlXtokensModuleCall (255) */
	interface OrmlXtokensModuleCall extends Enum {
		readonly isTransfer: boolean;
		readonly asTransfer: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: u128;
			readonly dest: XcmVersionedMultiLocation;
			readonly destWeightLimit: XcmV3WeightLimit;
		} & Struct;
		readonly isTransferMultiasset: boolean;
		readonly asTransferMultiasset: {
			readonly asset: XcmVersionedMultiAsset;
			readonly dest: XcmVersionedMultiLocation;
			readonly destWeightLimit: XcmV3WeightLimit;
		} & Struct;
		readonly isTransferWithFee: boolean;
		readonly asTransferWithFee: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: u128;
			readonly fee: u128;
			readonly dest: XcmVersionedMultiLocation;
			readonly destWeightLimit: XcmV3WeightLimit;
		} & Struct;
		readonly isTransferMultiassetWithFee: boolean;
		readonly asTransferMultiassetWithFee: {
			readonly asset: XcmVersionedMultiAsset;
			readonly fee: XcmVersionedMultiAsset;
			readonly dest: XcmVersionedMultiLocation;
			readonly destWeightLimit: XcmV3WeightLimit;
		} & Struct;
		readonly isTransferMulticurrencies: boolean;
		readonly asTransferMulticurrencies: {
			readonly currencies: Vec<ITuple<[TanglePrimitivesCurrencyCurrencyId, u128]>>;
			readonly feeItem: u32;
			readonly dest: XcmVersionedMultiLocation;
			readonly destWeightLimit: XcmV3WeightLimit;
		} & Struct;
		readonly isTransferMultiassets: boolean;
		readonly asTransferMultiassets: {
			readonly assets: XcmVersionedMultiAssets;
			readonly feeItem: u32;
			readonly dest: XcmVersionedMultiLocation;
			readonly destWeightLimit: XcmV3WeightLimit;
		} & Struct;
		readonly type:
			| 'Transfer'
			| 'TransferMultiasset'
			| 'TransferWithFee'
			| 'TransferMultiassetWithFee'
			| 'TransferMulticurrencies'
			| 'TransferMultiassets';
	}

	/** @name TanglePrimitivesCurrencyCurrencyId (256) */
	interface TanglePrimitivesCurrencyCurrencyId extends Enum {
		readonly isNative: boolean;
		readonly asNative: TanglePrimitivesCurrencyTokenSymbol;
		readonly islst: boolean;
		readonly aslst: TanglePrimitivesCurrencyTokenSymbol;
		readonly isToken: boolean;
		readonly asToken: TanglePrimitivesCurrencyTokenSymbol;
		readonly isStable: boolean;
		readonly asStable: TanglePrimitivesCurrencyTokenSymbol;
		readonly isVsToken: boolean;
		readonly asVsToken: TanglePrimitivesCurrencyTokenSymbol;
		readonly isVsBond: boolean;
		readonly asVsBond: ITuple<[TanglePrimitivesCurrencyTokenSymbol, u32, u32, u32]>;
		readonly isLpToken: boolean;
		readonly asLpToken: ITuple<
			[TanglePrimitivesCurrencyTokenSymbol, u8, TanglePrimitivesCurrencyTokenSymbol, u8]
		>;
		readonly isForeignAsset: boolean;
		readonly asForeignAsset: u32;
		readonly isToken2: boolean;
		readonly asToken2: u8;
		readonly isLst2: boolean;
		readonly asLst2: u8;
		readonly isVsToken2: boolean;
		readonly asVsToken2: u8;
		readonly isVsBond2: boolean;
		readonly asVsBond2: ITuple<[u8, u32, u32, u32]>;
		readonly isStableLpToken: boolean;
		readonly asStableLpToken: u32;
		readonly isBlp: boolean;
		readonly asBlp: u32;
		readonly isLend: boolean;
		readonly asLend: u8;
		readonly type:
			| 'Native'
			| 'Lst'
			| 'Token'
			| 'Stable'
			| 'VsToken'
			| 'VsBond'
			| 'LpToken'
			| 'ForeignAsset'
			| 'Token2'
			| 'Lst2'
			| 'VsToken2'
			| 'VsBond2'
			| 'StableLpToken'
			| 'Blp'
			| 'Lend';
	}

	/** @name TanglePrimitivesCurrencyTokenSymbol (257) */
	interface TanglePrimitivesCurrencyTokenSymbol extends Enum {
		readonly isAsg: boolean;
		readonly isBnc: boolean;
		readonly isKusd: boolean;
		readonly isDot: boolean;
		readonly isKsm: boolean;
		readonly isEth: boolean;
		readonly isKar: boolean;
		readonly isZlk: boolean;
		readonly isPha: boolean;
		readonly isRmrk: boolean;
		readonly isMovr: boolean;
		readonly type:
			| 'Asg'
			| 'TNT'
			| 'Kusd'
			| 'Dot'
			| 'Ksm'
			| 'Eth'
			| 'Kar'
			| 'Zlk'
			| 'Pha'
			| 'Rmrk'
			| 'Movr';
	}

	/** @name XcmVersionedMultiAsset (258) */
	interface XcmVersionedMultiAsset extends Enum {
		readonly isV2: boolean;
		readonly asV2: XcmV2MultiAsset;
		readonly isV3: boolean;
		readonly asV3: XcmV3MultiAsset;
		readonly type: 'V2' | 'V3';
	}

	/** @name OrmlTokensModuleCall (261) */
	interface OrmlTokensModuleCall extends Enum {
		readonly isTransfer: boolean;
		readonly asTransfer: {
			readonly dest: MultiAddress;
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isTransferAll: boolean;
		readonly asTransferAll: {
			readonly dest: MultiAddress;
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly keepAlive: bool;
		} & Struct;
		readonly isTransferKeepAlive: boolean;
		readonly asTransferKeepAlive: {
			readonly dest: MultiAddress;
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isForceTransfer: boolean;
		readonly asForceTransfer: {
			readonly source: MultiAddress;
			readonly dest: MultiAddress;
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isSetBalance: boolean;
		readonly asSetBalance: {
			readonly who: MultiAddress;
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly newFree: Compact<u128>;
			readonly newReserved: Compact<u128>;
		} & Struct;
		readonly type:
			| 'Transfer'
			| 'TransferAll'
			| 'TransferKeepAlive'
			| 'ForceTransfer'
			| 'SetBalance';
	}

	/** @name TangleCurrenciesModuleCall (262) */
	interface TangleCurrenciesModuleCall extends Enum {
		readonly isTransfer: boolean;
		readonly asTransfer: {
			readonly dest: MultiAddress;
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isTransferNativeCurrency: boolean;
		readonly asTransferNativeCurrency: {
			readonly dest: MultiAddress;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isUpdateBalance: boolean;
		readonly asUpdateBalance: {
			readonly who: MultiAddress;
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: i128;
		} & Struct;
		readonly type: 'Transfer' | 'TransferNativeCurrency' | 'UpdateBalance';
	}

	/** @name OrmlXcmModuleCall (264) */
	interface OrmlXcmModuleCall extends Enum {
		readonly isSendAsSovereign: boolean;
		readonly asSendAsSovereign: {
			readonly dest: XcmVersionedMultiLocation;
			readonly message: XcmVersionedXcm;
		} & Struct;
		readonly type: 'SendAsSovereign';
	}

	/** @name ZenlinkProtocolCall (265) */
	interface ZenlinkProtocolCall extends Enum {
		readonly isSetFeeReceiver: boolean;
		readonly asSetFeeReceiver: {
			readonly sendTo: Option<MultiAddress>;
		} & Struct;
		readonly isSetFeePoint: boolean;
		readonly asSetFeePoint: {
			readonly feePoint: u8;
		} & Struct;
		readonly isTransfer: boolean;
		readonly asTransfer: {
			readonly assetId: ZenlinkProtocolPrimitivesAssetId;
			readonly recipient: MultiAddress;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isCreatePair: boolean;
		readonly asCreatePair: {
			readonly asset0: ZenlinkProtocolPrimitivesAssetId;
			readonly asset1: ZenlinkProtocolPrimitivesAssetId;
		} & Struct;
		readonly isAddLiquidity: boolean;
		readonly asAddLiquidity: {
			readonly asset0: ZenlinkProtocolPrimitivesAssetId;
			readonly asset1: ZenlinkProtocolPrimitivesAssetId;
			readonly amount0Desired: Compact<u128>;
			readonly amount1Desired: Compact<u128>;
			readonly amount0Min: Compact<u128>;
			readonly amount1Min: Compact<u128>;
			readonly deadline: Compact<u32>;
		} & Struct;
		readonly isRemoveLiquidity: boolean;
		readonly asRemoveLiquidity: {
			readonly asset0: ZenlinkProtocolPrimitivesAssetId;
			readonly asset1: ZenlinkProtocolPrimitivesAssetId;
			readonly liquidity: Compact<u128>;
			readonly amount0Min: Compact<u128>;
			readonly amount1Min: Compact<u128>;
			readonly recipient: MultiAddress;
			readonly deadline: Compact<u32>;
		} & Struct;
		readonly isSwapExactAssetsForAssets: boolean;
		readonly asSwapExactAssetsForAssets: {
			readonly amountIn: Compact<u128>;
			readonly amountOutMin: Compact<u128>;
			readonly path: Vec<ZenlinkProtocolPrimitivesAssetId>;
			readonly recipient: MultiAddress;
			readonly deadline: Compact<u32>;
		} & Struct;
		readonly isSwapAssetsForExactAssets: boolean;
		readonly asSwapAssetsForExactAssets: {
			readonly amountOut: Compact<u128>;
			readonly amountInMax: Compact<u128>;
			readonly path: Vec<ZenlinkProtocolPrimitivesAssetId>;
			readonly recipient: MultiAddress;
			readonly deadline: Compact<u32>;
		} & Struct;
		readonly isBootstrapCreate: boolean;
		readonly asBootstrapCreate: {
			readonly asset0: ZenlinkProtocolPrimitivesAssetId;
			readonly asset1: ZenlinkProtocolPrimitivesAssetId;
			readonly targetSupply0: Compact<u128>;
			readonly targetSupply1: Compact<u128>;
			readonly capacitySupply0: Compact<u128>;
			readonly capacitySupply1: Compact<u128>;
			readonly end: Compact<u32>;
			readonly rewards: Vec<ZenlinkProtocolPrimitivesAssetId>;
			readonly limits: Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>;
		} & Struct;
		readonly isBootstrapContribute: boolean;
		readonly asBootstrapContribute: {
			readonly asset0: ZenlinkProtocolPrimitivesAssetId;
			readonly asset1: ZenlinkProtocolPrimitivesAssetId;
			readonly amount0Contribute: Compact<u128>;
			readonly amount1Contribute: Compact<u128>;
			readonly deadline: Compact<u32>;
		} & Struct;
		readonly isBootstrapClaim: boolean;
		readonly asBootstrapClaim: {
			readonly recipient: MultiAddress;
			readonly asset0: ZenlinkProtocolPrimitivesAssetId;
			readonly asset1: ZenlinkProtocolPrimitivesAssetId;
			readonly deadline: Compact<u32>;
		} & Struct;
		readonly isBootstrapEnd: boolean;
		readonly asBootstrapEnd: {
			readonly asset0: ZenlinkProtocolPrimitivesAssetId;
			readonly asset1: ZenlinkProtocolPrimitivesAssetId;
		} & Struct;
		readonly isBootstrapUpdate: boolean;
		readonly asBootstrapUpdate: {
			readonly asset0: ZenlinkProtocolPrimitivesAssetId;
			readonly asset1: ZenlinkProtocolPrimitivesAssetId;
			readonly targetSupply0: Compact<u128>;
			readonly targetSupply1: Compact<u128>;
			readonly capacitySupply0: Compact<u128>;
			readonly capacitySupply1: Compact<u128>;
			readonly end: Compact<u32>;
			readonly rewards: Vec<ZenlinkProtocolPrimitivesAssetId>;
			readonly limits: Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>;
		} & Struct;
		readonly isBootstrapRefund: boolean;
		readonly asBootstrapRefund: {
			readonly asset0: ZenlinkProtocolPrimitivesAssetId;
			readonly asset1: ZenlinkProtocolPrimitivesAssetId;
		} & Struct;
		readonly isBootstrapChargeReward: boolean;
		readonly asBootstrapChargeReward: {
			readonly asset0: ZenlinkProtocolPrimitivesAssetId;
			readonly asset1: ZenlinkProtocolPrimitivesAssetId;
			readonly chargeRewards: Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>;
		} & Struct;
		readonly isBootstrapWithdrawReward: boolean;
		readonly asBootstrapWithdrawReward: {
			readonly asset0: ZenlinkProtocolPrimitivesAssetId;
			readonly asset1: ZenlinkProtocolPrimitivesAssetId;
			readonly recipient: MultiAddress;
		} & Struct;
		readonly type:
			| 'SetFeeReceiver'
			| 'SetFeePoint'
			| 'Transfer'
			| 'CreatePair'
			| 'AddLiquidity'
			| 'RemoveLiquidity'
			| 'SwapExactAssetsForAssets'
			| 'SwapAssetsForExactAssets'
			| 'BootstrapCreate'
			| 'BootstrapContribute'
			| 'BootstrapClaim'
			| 'BootstrapEnd'
			| 'BootstrapUpdate'
			| 'BootstrapRefund'
			| 'BootstrapChargeReward'
			| 'BootstrapWithdrawReward';
	}

	/** @name ZenlinkProtocolPrimitivesAssetId (267) */
	interface ZenlinkProtocolPrimitivesAssetId extends Struct {
		readonly chainId: u32;
		readonly assetType: u8;
		readonly assetIndex: u64;
	}

	/** @name MerkleDistributorCall (271) */
	interface MerkleDistributorCall extends Enum {
		readonly isAddToCreateWhitelist: boolean;
		readonly asAddToCreateWhitelist: {
			readonly account: AccountId32;
		} & Struct;
		readonly isRemoveFromCreateWhitelist: boolean;
		readonly asRemoveFromCreateWhitelist: {
			readonly account: AccountId32;
		} & Struct;
		readonly isCreateMerkleDistributor: boolean;
		readonly asCreateMerkleDistributor: {
			readonly merkleRoot: H256;
			readonly description: Bytes;
			readonly distributeCurrency: TanglePrimitivesCurrencyCurrencyId;
			readonly distributeAmount: u128;
		} & Struct;
		readonly isClaim: boolean;
		readonly asClaim: {
			readonly merkleDistributorId: u32;
			readonly index: u32;
			readonly account: MultiAddress;
			readonly amount: u128;
			readonly merkleProof: Vec<H256>;
		} & Struct;
		readonly isCharge: boolean;
		readonly asCharge: {
			readonly merkleDistributorId: u32;
		} & Struct;
		readonly isEmergencyWithdraw: boolean;
		readonly asEmergencyWithdraw: {
			readonly merkleDistributorId: u32;
			readonly recipient: MultiAddress;
			readonly amount: u128;
		} & Struct;
		readonly type:
			| 'AddToCreateWhitelist'
			| 'RemoveFromCreateWhitelist'
			| 'CreateMerkleDistributor'
			| 'Claim'
			| 'Charge'
			| 'EmergencyWithdraw';
	}

	/** @name ZenlinkStableAmmCall (272) */
	interface ZenlinkStableAmmCall extends Enum {
		readonly isCreateBasePool: boolean;
		readonly asCreateBasePool: {
			readonly currencyIds: Vec<TanglePrimitivesCurrencyCurrencyId>;
			readonly currencyDecimals: Vec<u32>;
			readonly a: u128;
			readonly fee: u128;
			readonly adminFee: u128;
			readonly adminFeeReceiver: AccountId32;
			readonly lpCurrencySymbol: Bytes;
		} & Struct;
		readonly isCreateMetaPool: boolean;
		readonly asCreateMetaPool: {
			readonly currencyIds: Vec<TanglePrimitivesCurrencyCurrencyId>;
			readonly currencyDecimals: Vec<u32>;
			readonly a: u128;
			readonly fee: u128;
			readonly adminFee: u128;
			readonly adminFeeReceiver: AccountId32;
			readonly lpCurrencySymbol: Bytes;
		} & Struct;
		readonly isAddLiquidity: boolean;
		readonly asAddLiquidity: {
			readonly poolId: u32;
			readonly amounts: Vec<u128>;
			readonly minMintAmount: u128;
			readonly to: AccountId32;
			readonly deadline: u32;
		} & Struct;
		readonly isSwap: boolean;
		readonly asSwap: {
			readonly pooId: u32;
			readonly fromIndex: u32;
			readonly toIndex: u32;
			readonly inAmount: u128;
			readonly minOutAmount: u128;
			readonly to: AccountId32;
			readonly deadline: u32;
		} & Struct;
		readonly isRemoveLiquidity: boolean;
		readonly asRemoveLiquidity: {
			readonly pooId: u32;
			readonly lpAmount: u128;
			readonly minAmounts: Vec<u128>;
			readonly to: AccountId32;
			readonly deadline: u32;
		} & Struct;
		readonly isRemoveLiquidityOneCurrency: boolean;
		readonly asRemoveLiquidityOneCurrency: {
			readonly pooId: u32;
			readonly lpAmount: u128;
			readonly index: u32;
			readonly minAmount: u128;
			readonly to: AccountId32;
			readonly deadline: u32;
		} & Struct;
		readonly isRemoveLiquidityImbalance: boolean;
		readonly asRemoveLiquidityImbalance: {
			readonly poolId: u32;
			readonly amounts: Vec<u128>;
			readonly maxBurnAmount: u128;
			readonly to: AccountId32;
			readonly deadline: u32;
		} & Struct;
		readonly isAddPoolAndBasePoolLiquidity: boolean;
		readonly asAddPoolAndBasePoolLiquidity: {
			readonly poolId: u32;
			readonly basePoolId: u32;
			readonly metaAmounts: Vec<u128>;
			readonly baseAmounts: Vec<u128>;
			readonly minToMint: u128;
			readonly to: AccountId32;
			readonly deadline: u32;
		} & Struct;
		readonly isRemovePoolAndBasePoolLiquidity: boolean;
		readonly asRemovePoolAndBasePoolLiquidity: {
			readonly poolId: u32;
			readonly basePoolId: u32;
			readonly amount: u128;
			readonly minAmountsMeta: Vec<u128>;
			readonly minAmountsBase: Vec<u128>;
			readonly to: AccountId32;
			readonly deadline: u32;
		} & Struct;
		readonly isRemovePoolAndBasePoolLiquidityOneCurrency: boolean;
		readonly asRemovePoolAndBasePoolLiquidityOneCurrency: {
			readonly poolId: u32;
			readonly basePoolId: u32;
			readonly amount: u128;
			readonly i: u32;
			readonly minAmount: u128;
			readonly to: AccountId32;
			readonly deadline: u32;
		} & Struct;
		readonly isSwapPoolFromBase: boolean;
		readonly asSwapPoolFromBase: {
			readonly poolId: u32;
			readonly basePoolId: u32;
			readonly inIndex: u32;
			readonly outIndex: u32;
			readonly dx: u128;
			readonly minDy: u128;
			readonly to: AccountId32;
			readonly deadline: u32;
		} & Struct;
		readonly isSwapPoolToBase: boolean;
		readonly asSwapPoolToBase: {
			readonly poolId: u32;
			readonly basePoolId: u32;
			readonly inIndex: u32;
			readonly outIndex: u32;
			readonly dx: u128;
			readonly minDy: u128;
			readonly to: AccountId32;
			readonly deadline: u32;
		} & Struct;
		readonly isSwapMetaPoolUnderlying: boolean;
		readonly asSwapMetaPoolUnderlying: {
			readonly poolId: u32;
			readonly inIndex: u32;
			readonly outIndex: u32;
			readonly dx: u128;
			readonly minDy: u128;
			readonly to: AccountId32;
			readonly deadline: u32;
		} & Struct;
		readonly isUpdateFeeReceiver: boolean;
		readonly asUpdateFeeReceiver: {
			readonly poolId: u32;
			readonly feeReceiver: MultiAddress;
		} & Struct;
		readonly isSetSwapFee: boolean;
		readonly asSetSwapFee: {
			readonly poolId: u32;
			readonly newSwapFee: u128;
		} & Struct;
		readonly isSetAdminFee: boolean;
		readonly asSetAdminFee: {
			readonly poolId: u32;
			readonly newAdminFee: u128;
		} & Struct;
		readonly isRampA: boolean;
		readonly asRampA: {
			readonly poolId: u32;
			readonly futureA: u128;
			readonly futureATime: u128;
		} & Struct;
		readonly isStopRampA: boolean;
		readonly asStopRampA: {
			readonly poolId: u32;
		} & Struct;
		readonly isWithdrawAdminFee: boolean;
		readonly asWithdrawAdminFee: {
			readonly poolId: u32;
		} & Struct;
		readonly type:
			| 'CreateBasePool'
			| 'CreateMetaPool'
			| 'AddLiquidity'
			| 'Swap'
			| 'RemoveLiquidity'
			| 'RemoveLiquidityOneCurrency'
			| 'RemoveLiquidityImbalance'
			| 'AddPoolAndBasePoolLiquidity'
			| 'RemovePoolAndBasePoolLiquidity'
			| 'RemovePoolAndBasePoolLiquidityOneCurrency'
			| 'SwapPoolFromBase'
			| 'SwapPoolToBase'
			| 'SwapMetaPoolUnderlying'
			| 'UpdateFeeReceiver'
			| 'SetSwapFee'
			| 'SetAdminFee'
			| 'RampA'
			| 'StopRampA'
			| 'WithdrawAdminFee';
	}

	/** @name ZenlinkSwapRouterCall (276) */
	interface ZenlinkSwapRouterCall extends Enum {
		readonly isSwapExactTokenForTokensThroughStablePool: boolean;
		readonly asSwapExactTokenForTokensThroughStablePool: {
			readonly amountIn: u128;
			readonly amountOutMin: u128;
			readonly routes: Vec<ZenlinkSwapRouterRoute>;
			readonly to: AccountId32;
			readonly deadline: u32;
		} & Struct;
		readonly type: 'SwapExactTokenForTokensThroughStablePool';
	}

	/** @name ZenlinkSwapRouterRoute (278) */
	interface ZenlinkSwapRouterRoute extends Enum {
		readonly isStable: boolean;
		readonly asStable: ZenlinkSwapRouterStablePath;
		readonly isNormal: boolean;
		readonly asNormal: Vec<ZenlinkProtocolPrimitivesAssetId>;
		readonly type: 'Stable' | 'Normal';
	}

	/** @name ZenlinkSwapRouterStablePath (279) */
	interface ZenlinkSwapRouterStablePath extends Struct {
		readonly poolId: u32;
		readonly basePoolId: u32;
		readonly mode: ZenlinkSwapRouterStableSwapMode;
		readonly fromCurrency: TanglePrimitivesCurrencyCurrencyId;
		readonly toCurrency: TanglePrimitivesCurrencyCurrencyId;
	}

	/** @name ZenlinkSwapRouterStableSwapMode (280) */
	interface ZenlinkSwapRouterStableSwapMode extends Enum {
		readonly isSingle: boolean;
		readonly isFromBase: boolean;
		readonly isToBase: boolean;
		readonly type: 'Single' | 'FromBase' | 'ToBase';
	}

	/** @name TangleTokenIssuerCall (281) */
	interface TangleTokenIssuerCall extends Enum {
		readonly isAddToIssueWhitelist: boolean;
		readonly asAddToIssueWhitelist: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly account: AccountId32;
		} & Struct;
		readonly isRemoveFromIssueWhitelist: boolean;
		readonly asRemoveFromIssueWhitelist: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly account: AccountId32;
		} & Struct;
		readonly isAddToTransferWhitelist: boolean;
		readonly asAddToTransferWhitelist: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly account: AccountId32;
		} & Struct;
		readonly isRemoveFromTransferWhitelist: boolean;
		readonly asRemoveFromTransferWhitelist: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly account: AccountId32;
		} & Struct;
		readonly isIssue: boolean;
		readonly asIssue: {
			readonly dest: AccountId32;
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isTransfer: boolean;
		readonly asTransfer: {
			readonly dest: AccountId32;
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly type:
			| 'AddToIssueWhitelist'
			| 'RemoveFromIssueWhitelist'
			| 'AddToTransferWhitelist'
			| 'RemoveFromTransferWhitelist'
			| 'Issue'
			| 'Transfer';
	}

	/** @name TangleAssetRegistryCall (282) */
	interface TangleAssetRegistryCall extends Enum {
		readonly isRegisterNativeAsset: boolean;
		readonly asRegisterNativeAsset: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly location: XcmVersionedMultiLocation;
			readonly metadata: TangleAssetRegistryAssetMetadata;
		} & Struct;
		readonly isUpdateNativeAsset: boolean;
		readonly asUpdateNativeAsset: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly location: XcmVersionedMultiLocation;
			readonly metadata: TangleAssetRegistryAssetMetadata;
		} & Struct;
		readonly isRegisterTokenMetadata: boolean;
		readonly asRegisterTokenMetadata: {
			readonly metadata: TangleAssetRegistryAssetMetadata;
		} & Struct;
		readonly isRegisterLstMetadata: boolean;
		readonly asRegisterLstMetadata: {
			readonly tokenId: u8;
		} & Struct;
		readonly isRegisterVstokenMetadata: boolean;
		readonly asRegisterVstokenMetadata: {
			readonly tokenId: u8;
		} & Struct;
		readonly isRegisterVsbondMetadata: boolean;
		readonly asRegisterVsbondMetadata: {
			readonly tokenId: u8;
			readonly paraId: u32;
			readonly firstSlot: u32;
			readonly lastSlot: u32;
		} & Struct;
		readonly isRegisterMultilocation: boolean;
		readonly asRegisterMultilocation: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly location: XcmVersionedMultiLocation;
			readonly weight: SpWeightsWeightV2Weight;
		} & Struct;
		readonly isForceSetMultilocation: boolean;
		readonly asForceSetMultilocation: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly location: XcmVersionedMultiLocation;
			readonly weight: SpWeightsWeightV2Weight;
		} & Struct;
		readonly type:
			| 'RegisterNativeAsset'
			| 'UpdateNativeAsset'
			| 'RegisterTokenMetadata'
			| 'RegisterLstMetadata'
			| 'RegisterVstokenMetadata'
			| 'RegisterVsbondMetadata'
			| 'RegisterMultilocation'
			| 'ForceSetMultilocation';
	}

	/** @name TangleAssetRegistryAssetMetadata (283) */
	interface TangleAssetRegistryAssetMetadata extends Struct {
		readonly name: Bytes;
		readonly symbol: Bytes;
		readonly decimals: u8;
		readonly minimalBalance: u128;
	}

	/** @name TangleLstMintingCall (284) */
	interface TangleLstMintingCall extends Enum {
		readonly isMint: boolean;
		readonly asMint: {
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
			readonly tokenAmount: u128;
			readonly remark: Bytes;
			readonly channelId: Option<u32>;
		} & Struct;
		readonly isRedeem: boolean;
		readonly asRedeem: {
			readonly LstId: TanglePrimitivesCurrencyCurrencyId;
			readonly LstAmount: u128;
		} & Struct;
		readonly isRebond: boolean;
		readonly asRebond: {
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
			readonly tokenAmount: u128;
		} & Struct;
		readonly isRebondByUnlockId: boolean;
		readonly asRebondByUnlockId: {
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
			readonly unlockId: u32;
		} & Struct;
		readonly isSetUnlockDuration: boolean;
		readonly asSetUnlockDuration: {
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
			readonly unlockDuration: TanglePrimitivesTimeUnit;
		} & Struct;
		readonly isSetMinimumMint: boolean;
		readonly asSetMinimumMint: {
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: u128;
		} & Struct;
		readonly isSetMinimumRedeem: boolean;
		readonly asSetMinimumRedeem: {
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: u128;
		} & Struct;
		readonly isAddSupportRebondToken: boolean;
		readonly asAddSupportRebondToken: {
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
		} & Struct;
		readonly isRemoveSupportRebondToken: boolean;
		readonly asRemoveSupportRebondToken: {
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
		} & Struct;
		readonly isSetFees: boolean;
		readonly asSetFees: {
			readonly mintFee: Permill;
			readonly redeemFee: Permill;
		} & Struct;
		readonly isSetHookIterationLimit: boolean;
		readonly asSetHookIterationLimit: {
			readonly limit: u32;
		} & Struct;
		readonly isSetUnlockingTotal: boolean;
		readonly asSetUnlockingTotal: {
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: u128;
		} & Struct;
		readonly isSetMinTimeUnit: boolean;
		readonly asSetMinTimeUnit: {
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
			readonly timeUnit: TanglePrimitivesTimeUnit;
		} & Struct;
		readonly isRecreateCurrencyOngoingTimeUnit: boolean;
		readonly asRecreateCurrencyOngoingTimeUnit: {
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
			readonly timeUnit: TanglePrimitivesTimeUnit;
		} & Struct;
		readonly type:
			| 'Mint'
			| 'Redeem'
			| 'Rebond'
			| 'RebondByUnlockId'
			| 'SetUnlockDuration'
			| 'SetMinimumMint'
			| 'SetMinimumRedeem'
			| 'AddSupportRebondToken'
			| 'RemoveSupportRebondToken'
			| 'SetFees'
			| 'SetHookIterationLimit'
			| 'SetUnlockingTotal'
			| 'SetMinTimeUnit'
			| 'RecreateCurrencyOngoingTimeUnit';
	}

	/** @name TanglePrimitivesTimeUnit (286) */
	interface TanglePrimitivesTimeUnit extends Enum {
		readonly isEra: boolean;
		readonly asEra: Compact<u32>;
		readonly isSlashingSpan: boolean;
		readonly asSlashingSpan: Compact<u32>;
		readonly isRound: boolean;
		readonly asRound: Compact<u32>;
		readonly isKblock: boolean;
		readonly asKblock: Compact<u32>;
		readonly isHour: boolean;
		readonly asHour: Compact<u32>;
		readonly type: 'Era' | 'SlashingSpan' | 'Round' | 'Kblock' | 'Hour';
	}

	/** @name TangleSlpCall (288) */
	interface TangleSlpCall extends Enum {
		readonly isInitializeDelegator: boolean;
		readonly asInitializeDelegator: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly delegatorLocation: Option<StagingXcmV3MultiLocation>;
		} & Struct;
		readonly isBond: boolean;
		readonly asBond: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
			readonly amount: Compact<u128>;
			readonly validator: Option<StagingXcmV3MultiLocation>;
			readonly weightAndFee: Option<ITuple<[SpWeightsWeightV2Weight, u128]>>;
		} & Struct;
		readonly isBondExtra: boolean;
		readonly asBondExtra: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
			readonly validator: Option<StagingXcmV3MultiLocation>;
			readonly amount: Compact<u128>;
			readonly weightAndFee: Option<ITuple<[SpWeightsWeightV2Weight, u128]>>;
		} & Struct;
		readonly isUnbond: boolean;
		readonly asUnbond: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
			readonly validator: Option<StagingXcmV3MultiLocation>;
			readonly amount: Compact<u128>;
			readonly weightAndFee: Option<ITuple<[SpWeightsWeightV2Weight, u128]>>;
		} & Struct;
		readonly isUnbondAll: boolean;
		readonly asUnbondAll: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
			readonly weightAndFee: Option<ITuple<[SpWeightsWeightV2Weight, u128]>>;
		} & Struct;
		readonly isRebond: boolean;
		readonly asRebond: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
			readonly validator: Option<StagingXcmV3MultiLocation>;
			readonly amount: Option<u128>;
			readonly weightAndFee: Option<ITuple<[SpWeightsWeightV2Weight, u128]>>;
		} & Struct;
		readonly isDelegate: boolean;
		readonly asDelegate: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
			readonly targets: Vec<StagingXcmV3MultiLocation>;
			readonly weightAndFee: Option<ITuple<[SpWeightsWeightV2Weight, u128]>>;
		} & Struct;
		readonly isUndelegate: boolean;
		readonly asUndelegate: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
			readonly targets: Vec<StagingXcmV3MultiLocation>;
			readonly weightAndFee: Option<ITuple<[SpWeightsWeightV2Weight, u128]>>;
		} & Struct;
		readonly isRedelegate: boolean;
		readonly asRedelegate: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
			readonly targets: Option<Vec<StagingXcmV3MultiLocation>>;
			readonly weightAndFee: Option<ITuple<[SpWeightsWeightV2Weight, u128]>>;
		} & Struct;
		readonly isPayout: boolean;
		readonly asPayout: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
			readonly validator: StagingXcmV3MultiLocation;
			readonly when: Option<TanglePrimitivesTimeUnit>;
			readonly weightAndFee: Option<ITuple<[SpWeightsWeightV2Weight, u128]>>;
		} & Struct;
		readonly isLiquidize: boolean;
		readonly asLiquidize: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
			readonly when: Option<TanglePrimitivesTimeUnit>;
			readonly validator: Option<StagingXcmV3MultiLocation>;
			readonly amount: Option<u128>;
			readonly weightAndFee: Option<ITuple<[SpWeightsWeightV2Weight, u128]>>;
		} & Struct;
		readonly isChill: boolean;
		readonly asChill: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
			readonly weightAndFee: Option<ITuple<[SpWeightsWeightV2Weight, u128]>>;
		} & Struct;
		readonly isTransferBack: boolean;
		readonly asTransferBack: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly from: StagingXcmV3MultiLocation;
			readonly to: StagingXcmV3MultiLocation;
			readonly amount: Compact<u128>;
			readonly weightAndFee: Option<ITuple<[SpWeightsWeightV2Weight, u128]>>;
		} & Struct;
		readonly isTransferTo: boolean;
		readonly asTransferTo: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly from: StagingXcmV3MultiLocation;
			readonly to: StagingXcmV3MultiLocation;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isConvertAsset: boolean;
		readonly asConvertAsset: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
			readonly amount: Compact<u128>;
			readonly ifFromCurrency: bool;
			readonly weightAndFee: Option<ITuple<[SpWeightsWeightV2Weight, u128]>>;
		} & Struct;
		readonly isIncreaseTokenPool: boolean;
		readonly asIncreaseTokenPool: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isDecreaseTokenPool: boolean;
		readonly asDecreaseTokenPool: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isUpdateOngoingTimeUnit: boolean;
		readonly asUpdateOngoingTimeUnit: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly timeUnit: TanglePrimitivesTimeUnit;
		} & Struct;
		readonly isRefundCurrencyDueUnbond: boolean;
		readonly asRefundCurrencyDueUnbond: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
		} & Struct;
		readonly isSupplementFeeReserve: boolean;
		readonly asSupplementFeeReserve: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly dest: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isChargeHostFeeAndTuneLstExchangeRate: boolean;
		readonly asChargeHostFeeAndTuneLstExchangeRate: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly value: Compact<u128>;
			readonly who: Option<StagingXcmV3MultiLocation>;
		} & Struct;
		readonly isSetOperateOrigin: boolean;
		readonly asSetOperateOrigin: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: Option<AccountId32>;
		} & Struct;
		readonly isSetFeeSource: boolean;
		readonly asSetFeeSource: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly whoAndFee: Option<ITuple<[StagingXcmV3MultiLocation, u128]>>;
		} & Struct;
		readonly isAddDelegator: boolean;
		readonly asAddDelegator: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly index: Compact<u16>;
			readonly who: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isRemoveDelegator: boolean;
		readonly asRemoveDelegator: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isAddValidator: boolean;
		readonly asAddValidator: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isRemoveValidator: boolean;
		readonly asRemoveValidator: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isSetValidatorsByDelegator: boolean;
		readonly asSetValidatorsByDelegator: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
			readonly validators: Vec<StagingXcmV3MultiLocation>;
		} & Struct;
		readonly isSetDelegatorLedger: boolean;
		readonly asSetDelegatorLedger: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
			readonly ledger: Option<TangleSlpPrimitivesLedger>;
		} & Struct;
		readonly isSetMinimumsAndMaximums: boolean;
		readonly asSetMinimumsAndMaximums: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly constraints: Option<TangleSlpPrimitivesMinimumsMaximums>;
		} & Struct;
		readonly isSetCurrencyDelays: boolean;
		readonly asSetCurrencyDelays: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly maybeDelays: Option<TangleSlpPrimitivesDelays>;
		} & Struct;
		readonly isSetHostingFees: boolean;
		readonly asSetHostingFees: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly maybeFeeSet: Option<ITuple<[Permill, StagingXcmV3MultiLocation]>>;
		} & Struct;
		readonly isSetCurrencyTuneExchangeRateLimit: boolean;
		readonly asSetCurrencyTuneExchangeRateLimit: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly maybeTuneExchangeRateLimit: Option<ITuple<[u32, Permill]>>;
		} & Struct;
		readonly isSetOngoingTimeUnitUpdateInterval: boolean;
		readonly asSetOngoingTimeUnitUpdateInterval: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly maybeInterval: Option<u32>;
		} & Struct;
		readonly isAddSupplementFeeAccountToWhitelist: boolean;
		readonly asAddSupplementFeeAccountToWhitelist: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isRemoveSupplementFeeAccountFromWhitelist: boolean;
		readonly asRemoveSupplementFeeAccountFromWhitelist: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isConfirmDelegatorLedgerQueryResponse: boolean;
		readonly asConfirmDelegatorLedgerQueryResponse: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly queryId: Compact<u64>;
		} & Struct;
		readonly isFailDelegatorLedgerQueryResponse: boolean;
		readonly asFailDelegatorLedgerQueryResponse: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly queryId: Compact<u64>;
		} & Struct;
		readonly isConfirmValidatorsByDelegatorQueryResponse: boolean;
		readonly asConfirmValidatorsByDelegatorQueryResponse: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly queryId: Compact<u64>;
		} & Struct;
		readonly isFailValidatorsByDelegatorQueryResponse: boolean;
		readonly asFailValidatorsByDelegatorQueryResponse: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly queryId: Compact<u64>;
		} & Struct;
		readonly isConfirmDelegatorLedger: boolean;
		readonly asConfirmDelegatorLedger: {
			readonly queryId: u64;
			readonly response: XcmV3Response;
		} & Struct;
		readonly isConfirmValidatorsByDelegator: boolean;
		readonly asConfirmValidatorsByDelegator: {
			readonly queryId: u64;
			readonly response: XcmV3Response;
		} & Struct;
		readonly isResetValidators: boolean;
		readonly asResetValidators: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly validatorList: Vec<StagingXcmV3MultiLocation>;
		} & Struct;
		readonly isSetValidatorBoostList: boolean;
		readonly asSetValidatorBoostList: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly validatorList: Vec<StagingXcmV3MultiLocation>;
		} & Struct;
		readonly isAddToValidatorBoostList: boolean;
		readonly asAddToValidatorBoostList: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isRemoveFromValidatorBootList: boolean;
		readonly asRemoveFromValidatorBootList: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isConvertTreasurylst: boolean;
		readonly asConvertTreasurylst: {
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: u128;
		} & Struct;
		readonly isCleanOutdatedValidatorBoostList: boolean;
		readonly asCleanOutdatedValidatorBoostList: {
			readonly token: TanglePrimitivesCurrencyCurrencyId;
			readonly page: u8;
		} & Struct;
		readonly type:
			| 'InitializeDelegator'
			| 'Bond'
			| 'BondExtra'
			| 'Unbond'
			| 'UnbondAll'
			| 'Rebond'
			| 'Delegate'
			| 'Undelegate'
			| 'Redelegate'
			| 'Payout'
			| 'Liquidize'
			| 'Chill'
			| 'TransferBack'
			| 'TransferTo'
			| 'ConvertAsset'
			| 'IncreaseTokenPool'
			| 'DecreaseTokenPool'
			| 'UpdateOngoingTimeUnit'
			| 'RefundCurrencyDueUnbond'
			| 'SupplementFeeReserve'
			| 'ChargeHostFeeAndTuneLstExchangeRate'
			| 'SetOperateOrigin'
			| 'SetFeeSource'
			| 'AddDelegator'
			| 'RemoveDelegator'
			| 'AddValidator'
			| 'RemoveValidator'
			| 'SetValidatorsByDelegator'
			| 'SetDelegatorLedger'
			| 'SetMinimumsAndMaximums'
			| 'SetCurrencyDelays'
			| 'SetHostingFees'
			| 'SetCurrencyTuneExchangeRateLimit'
			| 'SetOngoingTimeUnitUpdateInterval'
			| 'AddSupplementFeeAccountToWhitelist'
			| 'RemoveSupplementFeeAccountFromWhitelist'
			| 'ConfirmDelegatorLedgerQueryResponse'
			| 'FailDelegatorLedgerQueryResponse'
			| 'ConfirmValidatorsByDelegatorQueryResponse'
			| 'FailValidatorsByDelegatorQueryResponse'
			| 'ConfirmDelegatorLedger'
			| 'ConfirmValidatorsByDelegator'
			| 'ResetValidators'
			| 'SetValidatorBoostList'
			| 'AddToValidatorBoostList'
			| 'RemoveFromValidatorBootList'
			| 'ConvertTreasuryLst'
			| 'CleanOutdatedValidatorBoostList';
	}

	/** @name TangleSlpPrimitivesLedger (300) */
	interface TangleSlpPrimitivesLedger extends Enum {
		readonly isSubstrate: boolean;
		readonly asSubstrate: TangleSlpPrimitivesPolkadotPrimitivesSubstrateLedger;
		readonly isMoonbeam: boolean;
		readonly asMoonbeam: TangleSlpPrimitivesParachainStakingPrimitivesOneToManyLedger;
		readonly isParachainStaking: boolean;
		readonly asParachainStaking: TangleSlpPrimitivesParachainStakingPrimitivesOneToManyLedger;
		readonly isFilecoin: boolean;
		readonly asFilecoin: TangleSlpPrimitivesFilecoinPrimitivesFilecoinLedger;
		readonly isPhala: boolean;
		readonly asPhala: TangleSlpPrimitivesPhalaPrimitivesPhalaLedger;
		readonly type: 'Substrate' | 'Moonbeam' | 'ParachainStaking' | 'Filecoin' | 'Phala';
	}

	/** @name TangleSlpPrimitivesPolkadotPrimitivesSubstrateLedger (301) */
	interface TangleSlpPrimitivesPolkadotPrimitivesSubstrateLedger extends Struct {
		readonly account: StagingXcmV3MultiLocation;
		readonly total: Compact<u128>;
		readonly active: Compact<u128>;
		readonly unlocking: Vec<TangleSlpPrimitivesPolkadotPrimitivesUnlockChunk>;
	}

	/** @name TangleSlpPrimitivesPolkadotPrimitivesUnlockChunk (303) */
	interface TangleSlpPrimitivesPolkadotPrimitivesUnlockChunk extends Struct {
		readonly value: Compact<u128>;
		readonly unlockTime: TanglePrimitivesTimeUnit;
	}

	/** @name TangleSlpPrimitivesParachainStakingPrimitivesOneToManyLedger (304) */
	interface TangleSlpPrimitivesParachainStakingPrimitivesOneToManyLedger extends Struct {
		readonly account: StagingXcmV3MultiLocation;
		readonly delegations: BTreeMap<StagingXcmV3MultiLocation, u128>;
		readonly total: u128;
		readonly lessTotal: u128;
		readonly requests: Vec<TangleSlpPrimitivesParachainStakingPrimitivesOneToManyScheduledRequest>;
		readonly requestBriefs: BTreeMap<
			StagingXcmV3MultiLocation,
			ITuple<[TanglePrimitivesTimeUnit, u128]>
		>;
		readonly status: TangleSlpPrimitivesParachainStakingPrimitivesOneToManyDelegatorStatus;
	}

	/** @name TangleSlpPrimitivesParachainStakingPrimitivesOneToManyScheduledRequest (308) */
	interface TangleSlpPrimitivesParachainStakingPrimitivesOneToManyScheduledRequest extends Struct {
		readonly validator: StagingXcmV3MultiLocation;
		readonly whenExecutable: TanglePrimitivesTimeUnit;
		readonly action: TangleSlpPrimitivesParachainStakingPrimitivesOneToManyDelegationAction;
	}

	/** @name TangleSlpPrimitivesParachainStakingPrimitivesOneToManyDelegationAction (309) */
	interface TangleSlpPrimitivesParachainStakingPrimitivesOneToManyDelegationAction extends Enum {
		readonly isRevoke: boolean;
		readonly asRevoke: u128;
		readonly isDecrease: boolean;
		readonly asDecrease: u128;
		readonly type: 'Revoke' | 'Decrease';
	}

	/** @name TangleSlpPrimitivesParachainStakingPrimitivesOneToManyDelegatorStatus (314) */
	interface TangleSlpPrimitivesParachainStakingPrimitivesOneToManyDelegatorStatus extends Enum {
		readonly isActive: boolean;
		readonly isLeaving: boolean;
		readonly asLeaving: TanglePrimitivesTimeUnit;
		readonly type: 'Active' | 'Leaving';
	}

	/** @name TangleSlpPrimitivesFilecoinPrimitivesFilecoinLedger (315) */
	interface TangleSlpPrimitivesFilecoinPrimitivesFilecoinLedger extends Struct {
		readonly account: StagingXcmV3MultiLocation;
		readonly initialPledge: Compact<u128>;
	}

	/** @name TangleSlpPrimitivesPhalaPrimitivesPhalaLedger (316) */
	interface TangleSlpPrimitivesPhalaPrimitivesPhalaLedger extends Struct {
		readonly account: StagingXcmV3MultiLocation;
		readonly activeShares: Compact<u128>;
		readonly unlockingShares: Compact<u128>;
		readonly unlockingTimeUnit: Option<TanglePrimitivesTimeUnit>;
		readonly bondedPoolId: Option<u64>;
		readonly bondedPoolCollectionId: Option<u32>;
		readonly bondedIsVault: Option<bool>;
	}

	/** @name TangleSlpPrimitivesMinimumsMaximums (320) */
	interface TangleSlpPrimitivesMinimumsMaximums extends Struct {
		readonly delegatorBondedMinimum: Compact<u128>;
		readonly bondExtraMinimum: Compact<u128>;
		readonly unbondMinimum: Compact<u128>;
		readonly rebondMinimum: Compact<u128>;
		readonly unbondRecordMaximum: Compact<u32>;
		readonly validatorsBackMaximum: Compact<u32>;
		readonly delegatorActiveStakingMaximum: Compact<u128>;
		readonly validatorsRewardMaximum: Compact<u32>;
		readonly delegationAmountMinimum: Compact<u128>;
		readonly delegatorsMaximum: Compact<u16>;
		readonly validatorsMaximum: Compact<u16>;
	}

	/** @name TangleSlpPrimitivesDelays (322) */
	interface TangleSlpPrimitivesDelays extends Struct {
		readonly unlockDelay: TanglePrimitivesTimeUnit;
		readonly leaveDelegatorsDelay: TanglePrimitivesTimeUnit;
	}

	/** @name TangleXcmInterfaceCall (327) */
	interface TangleXcmInterfaceCall extends Enum {
		readonly isUpdateXcmDestWeightAndFee: boolean;
		readonly asUpdateXcmDestWeightAndFee: {
			readonly updates: Vec<
				ITuple<
					[
						TanglePrimitivesCurrencyCurrencyId,
						TanglePrimitivesXcmOperationType,
						SpWeightsWeightV2Weight,
						u128,
					]
				>
			>;
		} & Struct;
		readonly isTransferStatemineAssets: boolean;
		readonly asTransferStatemineAssets: {
			readonly amount: u128;
			readonly assetId: u32;
			readonly dest: Option<AccountId32>;
		} & Struct;
		readonly type: 'UpdateXcmDestWeightAndFee' | 'TransferStatemineAssets';
	}

	/** @name TanglePrimitivesXcmOperationType (330) */
	interface TanglePrimitivesXcmOperationType extends Enum {
		readonly isUmpContributeTransact: boolean;
		readonly isStatemineTransfer: boolean;
		readonly isBond: boolean;
		readonly isWithdrawUnbonded: boolean;
		readonly isBondExtra: boolean;
		readonly isUnbond: boolean;
		readonly isRebond: boolean;
		readonly isDelegate: boolean;
		readonly isPayout: boolean;
		readonly isLiquidize: boolean;
		readonly isTransferBack: boolean;
		readonly isTransferTo: boolean;
		readonly isChill: boolean;
		readonly isUndelegate: boolean;
		readonly isCancelLeave: boolean;
		readonly isXtokensTransferBack: boolean;
		readonly isExecuteLeave: boolean;
		readonly isConvertAsset: boolean;
		readonly isVote: boolean;
		readonly isRemoveVote: boolean;
		readonly isAny: boolean;
		readonly isSupplementaryFee: boolean;
		readonly type:
			| 'UmpContributeTransact'
			| 'StatemineTransfer'
			| 'Bond'
			| 'WithdrawUnbonded'
			| 'BondExtra'
			| 'Unbond'
			| 'Rebond'
			| 'Delegate'
			| 'Payout'
			| 'Liquidize'
			| 'TransferBack'
			| 'TransferTo'
			| 'Chill'
			| 'Undelegate'
			| 'CancelLeave'
			| 'XtokensTransferBack'
			| 'ExecuteLeave'
			| 'ConvertAsset'
			| 'Vote'
			| 'RemoveVote'
			| 'Any'
			| 'SupplementaryFee';
	}

	/** @name TangleSlpxCall (331) */
	interface TangleSlpxCall extends Enum {
		readonly isMint: boolean;
		readonly asMint: {
			readonly evmCaller: H160;
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly targetChain: TangleSlpxTargetChain;
			readonly remark: Bytes;
		} & Struct;
		readonly isZenlinkSwap: boolean;
		readonly asZenlinkSwap: {
			readonly evmCaller: H160;
			readonly currencyIdIn: TanglePrimitivesCurrencyCurrencyId;
			readonly currencyIdOut: TanglePrimitivesCurrencyCurrencyId;
			readonly currencyIdOutMin: u128;
			readonly targetChain: TangleSlpxTargetChain;
		} & Struct;
		readonly isRedeem: boolean;
		readonly asRedeem: {
			readonly evmCaller: H160;
			readonly LstId: TanglePrimitivesCurrencyCurrencyId;
			readonly targetChain: TangleSlpxTargetChain;
		} & Struct;
		readonly isStablePoolSwap: boolean;
		readonly asStablePoolSwap: {
			readonly evmCaller: H160;
			readonly poolId: u32;
			readonly currencyIdIn: TanglePrimitivesCurrencyCurrencyId;
			readonly currencyIdOut: TanglePrimitivesCurrencyCurrencyId;
			readonly minDy: u128;
			readonly targetChain: TangleSlpxTargetChain;
		} & Struct;
		readonly isAddWhitelist: boolean;
		readonly asAddWhitelist: {
			readonly supportChain: TangleSlpxSupportChain;
			readonly evmContractAccountId: AccountId32;
		} & Struct;
		readonly isRemoveWhitelist: boolean;
		readonly asRemoveWhitelist: {
			readonly supportChain: TangleSlpxSupportChain;
			readonly evmContractAccountId: AccountId32;
		} & Struct;
		readonly isSetExecutionFee: boolean;
		readonly asSetExecutionFee: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly executionFee: u128;
		} & Struct;
		readonly isSetTransferToFee: boolean;
		readonly asSetTransferToFee: {
			readonly supportChain: TangleSlpxSupportChain;
			readonly transferToFee: u128;
		} & Struct;
		readonly isSetCurrencyEthereumCallSwitch: boolean;
		readonly asSetCurrencyEthereumCallSwitch: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly isSupport: bool;
		} & Struct;
		readonly isSetEthereumCallConfigration: boolean;
		readonly asSetEthereumCallConfigration: {
			readonly xcmFee: u128;
			readonly xcmWeight: SpWeightsWeightV2Weight;
			readonly period: u32;
			readonly contract: H160;
		} & Struct;
		readonly isSetCurrencySupportXcmFee: boolean;
		readonly asSetCurrencySupportXcmFee: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly isSupport: bool;
		} & Struct;
		readonly isSetDelayBlock: boolean;
		readonly asSetDelayBlock: {
			readonly delayBlock: u32;
		} & Struct;
		readonly isForceAddOrder: boolean;
		readonly asForceAddOrder: {
			readonly slpxContractDerivativeAccount: AccountId32;
			readonly evmCaller: H160;
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly targetChain: TangleSlpxTargetChain;
			readonly remark: Bytes;
			readonly orderType: TangleSlpxOrderType;
		} & Struct;
		readonly type:
			| 'Mint'
			| 'ZenlinkSwap'
			| 'Redeem'
			| 'StablePoolSwap'
			| 'AddWhitelist'
			| 'RemoveWhitelist'
			| 'SetExecutionFee'
			| 'SetTransferToFee'
			| 'SetCurrencyEthereumCallSwitch'
			| 'SetEthereumCallConfigration'
			| 'SetCurrencySupportXcmFee'
			| 'SetDelayBlock'
			| 'ForceAddOrder';
	}

	/** @name TangleSlpxTargetChain (333) */
	interface TangleSlpxTargetChain extends Enum {
		readonly isAstar: boolean;
		readonly asAstar: H160;
		readonly isMoonbeam: boolean;
		readonly asMoonbeam: H160;
		readonly isHydradx: boolean;
		readonly asHydradx: AccountId32;
		readonly isInterlay: boolean;
		readonly asInterlay: AccountId32;
		readonly isManta: boolean;
		readonly asManta: AccountId32;
		readonly type: 'Astar' | 'Moonbeam' | 'Hydradx' | 'Interlay' | 'Manta';
	}

	/** @name TangleSlpxSupportChain (334) */
	interface TangleSlpxSupportChain extends Enum {
		readonly isAstar: boolean;
		readonly isMoonbeam: boolean;
		readonly isHydradx: boolean;
		readonly isInterlay: boolean;
		readonly isManta: boolean;
		readonly type: 'Astar' | 'Moonbeam' | 'Hydradx' | 'Interlay' | 'Manta';
	}

	/** @name TangleSlpxOrderType (335) */
	interface TangleSlpxOrderType extends Enum {
		readonly isMint: boolean;
		readonly isRedeem: boolean;
		readonly type: 'Mint' | 'Redeem';
	}

	/** @name PalletRankedCollectiveCall (336) */
	interface PalletRankedCollectiveCall extends Enum {
		readonly isAddMember: boolean;
		readonly asAddMember: {
			readonly who: MultiAddress;
		} & Struct;
		readonly isPromoteMember: boolean;
		readonly asPromoteMember: {
			readonly who: MultiAddress;
		} & Struct;
		readonly isDemoteMember: boolean;
		readonly asDemoteMember: {
			readonly who: MultiAddress;
		} & Struct;
		readonly isRemoveMember: boolean;
		readonly asRemoveMember: {
			readonly who: MultiAddress;
			readonly minRank: u16;
		} & Struct;
		readonly isVote: boolean;
		readonly asVote: {
			readonly poll: u32;
			readonly aye: bool;
		} & Struct;
		readonly isCleanupPoll: boolean;
		readonly asCleanupPoll: {
			readonly pollIndex: u32;
			readonly max: u32;
		} & Struct;
		readonly type:
			| 'AddMember'
			| 'PromoteMember'
			| 'DemoteMember'
			| 'RemoveMember'
			| 'Vote'
			| 'CleanupPoll';
	}

	/** @name TangleStablePoolCall (338) */
	interface TangleStablePoolCall extends Enum {
		readonly isCreatePool: boolean;
		readonly asCreatePool: {
			readonly assets: Vec<TanglePrimitivesCurrencyCurrencyId>;
			readonly precisions: Vec<u128>;
			readonly mintFee: u128;
			readonly swapFee: u128;
			readonly redeemFee: u128;
			readonly initialA: u128;
			readonly feeRecipient: AccountId32;
			readonly yieldRecipient: AccountId32;
			readonly precision: u128;
		} & Struct;
		readonly isAddLiquidity: boolean;
		readonly asAddLiquidity: {
			readonly poolId: u32;
			readonly amounts: Vec<u128>;
			readonly minMintAmount: u128;
		} & Struct;
		readonly isSwap: boolean;
		readonly asSwap: {
			readonly poolId: u32;
			readonly i: u32;
			readonly j: u32;
			readonly dx: u128;
			readonly minDy: u128;
		} & Struct;
		readonly isRedeemProportion: boolean;
		readonly asRedeemProportion: {
			readonly poolId: u32;
			readonly amount: u128;
			readonly minRedeemAmounts: Vec<u128>;
		} & Struct;
		readonly isRedeemSingle: boolean;
		readonly asRedeemSingle: {
			readonly poolId: u32;
			readonly amount: u128;
			readonly i: u32;
			readonly minRedeemAmount: u128;
			readonly assetLength: u32;
		} & Struct;
		readonly isRedeemMulti: boolean;
		readonly asRedeemMulti: {
			readonly poolId: u32;
			readonly amounts: Vec<u128>;
			readonly maxRedeemAmount: u128;
		} & Struct;
		readonly isModifyA: boolean;
		readonly asModifyA: {
			readonly poolId: u32;
			readonly a: u128;
			readonly futureABlock: u32;
		} & Struct;
		readonly isModifyFees: boolean;
		readonly asModifyFees: {
			readonly poolId: u32;
			readonly mintFee: Option<u128>;
			readonly swapFee: Option<u128>;
			readonly redeemFee: Option<u128>;
		} & Struct;
		readonly isModifyRecipients: boolean;
		readonly asModifyRecipients: {
			readonly poolId: u32;
			readonly feeRecipient: Option<AccountId32>;
			readonly yieldRecipient: Option<AccountId32>;
		} & Struct;
		readonly isEditTokenRate: boolean;
		readonly asEditTokenRate: {
			readonly poolId: u32;
			readonly tokenRateInfo: Vec<
				ITuple<[TanglePrimitivesCurrencyCurrencyId, ITuple<[u128, u128]>]>
			>;
		} & Struct;
		readonly isConfigLstAutoRefresh: boolean;
		readonly asConfigLstAutoRefresh: {
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly hardcap: Permill;
		} & Struct;
		readonly isRemoveLstAutoRefresh: boolean;
		readonly asRemoveLstAutoRefresh: {
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
		} & Struct;
		readonly type:
			| 'CreatePool'
			| 'AddLiquidity'
			| 'Swap'
			| 'RedeemProportion'
			| 'RedeemSingle'
			| 'RedeemMulti'
			| 'ModifyA'
			| 'ModifyFees'
			| 'ModifyRecipients'
			| 'EditTokenRate'
			| 'ConfigLstAutoRefresh'
			| 'RemoveLstAutoRefresh';
	}

	/** @name TangleLstVotingCall (342) */
	interface TangleLstVotingCall extends Enum {
		readonly isVote: boolean;
		readonly asVote: {
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly pollIndex: Compact<u32>;
			readonly LstVote: TangleLstVotingVoteAccountVote;
		} & Struct;
		readonly isUnlock: boolean;
		readonly asUnlock: {
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly pollIndex: Compact<u32>;
		} & Struct;
		readonly isRemoveDelegatorVote: boolean;
		readonly asRemoveDelegatorVote: {
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly pollIndex: Compact<u32>;
			readonly derivativeIndex: Compact<u16>;
		} & Struct;
		readonly isKillReferendum: boolean;
		readonly asKillReferendum: {
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly pollIndex: Compact<u32>;
		} & Struct;
		readonly isAddDelegator: boolean;
		readonly asAddDelegator: {
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly derivativeIndex: Compact<u16>;
		} & Struct;
		readonly isSetReferendumStatus: boolean;
		readonly asSetReferendumStatus: {
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly pollIndex: Compact<u32>;
			readonly info: TangleLstVotingVoteReferendumInfo;
		} & Struct;
		readonly isSetVoteLockingPeriod: boolean;
		readonly asSetVoteLockingPeriod: {
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly lockingPeriod: u32;
		} & Struct;
		readonly isSetUndecidingTimeout: boolean;
		readonly asSetUndecidingTimeout: {
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly undecidingTimeout: u32;
		} & Struct;
		readonly isNotifyVote: boolean;
		readonly asNotifyVote: {
			readonly queryId: u64;
			readonly response: XcmV3Response;
		} & Struct;
		readonly isNotifyRemoveDelegatorVote: boolean;
		readonly asNotifyRemoveDelegatorVote: {
			readonly queryId: u64;
			readonly response: XcmV3Response;
		} & Struct;
		readonly isSetVoteCapRatio: boolean;
		readonly asSetVoteCapRatio: {
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly voteCapRatio: Perbill;
		} & Struct;
		readonly type:
			| 'Vote'
			| 'Unlock'
			| 'RemoveDelegatorVote'
			| 'KillReferendum'
			| 'AddDelegator'
			| 'SetReferendumStatus'
			| 'SetVoteLockingPeriod'
			| 'SetUndecidingTimeout'
			| 'NotifyVote'
			| 'NotifyRemoveDelegatorVote'
			| 'SetVoteCapRatio';
	}

	/** @name TangleLstVotingVoteAccountVote (343) */
	interface TangleLstVotingVoteAccountVote extends Enum {
		readonly isStandard: boolean;
		readonly asStandard: {
			readonly vote: Vote;
			readonly balance: u128;
		} & Struct;
		readonly isSplit: boolean;
		readonly asSplit: {
			readonly aye: u128;
			readonly nay: u128;
		} & Struct;
		readonly isSplitAbstain: boolean;
		readonly asSplitAbstain: {
			readonly aye: u128;
			readonly nay: u128;
			readonly abstain: u128;
		} & Struct;
		readonly type: 'Standard' | 'Split' | 'SplitAbstain';
	}

	/** @name TangleLstVotingVoteReferendumInfo (344) */
	interface TangleLstVotingVoteReferendumInfo extends Enum {
		readonly isOngoing: boolean;
		readonly asOngoing: TangleLstVotingVoteReferendumStatus;
		readonly isCompleted: boolean;
		readonly asCompleted: u32;
		readonly isKilled: boolean;
		readonly asKilled: u32;
		readonly type: 'Ongoing' | 'Completed' | 'Killed';
	}

	/** @name TangleLstVotingVoteTally (345) */
	interface TangleLstVotingVoteTally extends Struct {
		readonly ayes: u128;
		readonly nays: u128;
		readonly support: u128;
	}

	/** @name TangleLstVotingVoteReferendumStatus (346) */
	interface TangleLstVotingVoteReferendumStatus extends Struct {
		readonly submitted: Option<u32>;
		readonly tally: TangleLstVotingVoteTally;
	}

	/** @name PalletPricesCall (347) */
	interface PalletPricesCall extends Enum {
		readonly isSetPrice: boolean;
		readonly asSetPrice: {
			readonly assetId: TanglePrimitivesCurrencyCurrencyId;
			readonly price: u128;
		} & Struct;
		readonly isResetPrice: boolean;
		readonly asResetPrice: {
			readonly assetId: TanglePrimitivesCurrencyCurrencyId;
		} & Struct;
		readonly isSetForeignAsset: boolean;
		readonly asSetForeignAsset: {
			readonly foreignAssetId: TanglePrimitivesCurrencyCurrencyId;
			readonly assetId: TanglePrimitivesCurrencyCurrencyId;
		} & Struct;
		readonly type: 'SetPrice' | 'ResetPrice' | 'SetForeignAsset';
	}

	/** @name OrmlOracleModuleCall (349) */
	interface OrmlOracleModuleCall extends Enum {
		readonly isFeedValues: boolean;
		readonly asFeedValues: {
			readonly values: Vec<ITuple<[TanglePrimitivesCurrencyCurrencyId, u128]>>;
		} & Struct;
		readonly type: 'FeedValues';
	}

	/** @name SpRuntimeBlakeTwo256 (354) */
	type SpRuntimeBlakeTwo256 = Null;

	/** @name PalletConvictionVotingTally (356) */
	interface PalletConvictionVotingTally extends Struct {
		readonly ayes: u128;
		readonly nays: u128;
		readonly support: u128;
	}

	/** @name PalletWhitelistEvent (357) */
	interface PalletWhitelistEvent extends Enum {
		readonly isCallWhitelisted: boolean;
		readonly asCallWhitelisted: {
			readonly callHash: H256;
		} & Struct;
		readonly isWhitelistedCallRemoved: boolean;
		readonly asWhitelistedCallRemoved: {
			readonly callHash: H256;
		} & Struct;
		readonly isWhitelistedCallDispatched: boolean;
		readonly asWhitelistedCallDispatched: {
			readonly callHash: H256;
			readonly result: Result<
				FrameSupportDispatchPostDispatchInfo,
				SpRuntimeDispatchErrorWithPostInfo
			>;
		} & Struct;
		readonly type: 'CallWhitelisted' | 'WhitelistedCallRemoved' | 'WhitelistedCallDispatched';
	}

	/** @name FrameSupportDispatchPostDispatchInfo (359) */
	interface FrameSupportDispatchPostDispatchInfo extends Struct {
		readonly actualWeight: Option<SpWeightsWeightV2Weight>;
		readonly paysFee: FrameSupportDispatchPays;
	}

	/** @name SpRuntimeDispatchErrorWithPostInfo (361) */
	interface SpRuntimeDispatchErrorWithPostInfo extends Struct {
		readonly postInfo: FrameSupportDispatchPostDispatchInfo;
		readonly error: SpRuntimeDispatchError;
	}

	/** @name CumulusPalletXcmpQueueEvent (362) */
	interface CumulusPalletXcmpQueueEvent extends Enum {
		readonly isSuccess: boolean;
		readonly asSuccess: {
			readonly messageHash: U8aFixed;
			readonly messageId: U8aFixed;
			readonly weight: SpWeightsWeightV2Weight;
		} & Struct;
		readonly isFail: boolean;
		readonly asFail: {
			readonly messageHash: U8aFixed;
			readonly messageId: U8aFixed;
			readonly error: XcmV3TraitsError;
			readonly weight: SpWeightsWeightV2Weight;
		} & Struct;
		readonly isBadVersion: boolean;
		readonly asBadVersion: {
			readonly messageHash: U8aFixed;
		} & Struct;
		readonly isBadFormat: boolean;
		readonly asBadFormat: {
			readonly messageHash: U8aFixed;
		} & Struct;
		readonly isXcmpMessageSent: boolean;
		readonly asXcmpMessageSent: {
			readonly messageHash: U8aFixed;
		} & Struct;
		readonly isOverweightEnqueued: boolean;
		readonly asOverweightEnqueued: {
			readonly sender: u32;
			readonly sentAt: u32;
			readonly index: u64;
			readonly required: SpWeightsWeightV2Weight;
		} & Struct;
		readonly isOverweightServiced: boolean;
		readonly asOverweightServiced: {
			readonly index: u64;
			readonly used: SpWeightsWeightV2Weight;
		} & Struct;
		readonly type:
			| 'Success'
			| 'Fail'
			| 'BadVersion'
			| 'BadFormat'
			| 'XcmpMessageSent'
			| 'OverweightEnqueued'
			| 'OverweightServiced';
	}

	/** @name PalletXcmEvent (363) */
	interface PalletXcmEvent extends Enum {
		readonly isAttempted: boolean;
		readonly asAttempted: {
			readonly outcome: XcmV3TraitsOutcome;
		} & Struct;
		readonly isSent: boolean;
		readonly asSent: {
			readonly origin: StagingXcmV3MultiLocation;
			readonly destination: StagingXcmV3MultiLocation;
			readonly message: XcmV3Xcm;
			readonly messageId: U8aFixed;
		} & Struct;
		readonly isUnexpectedResponse: boolean;
		readonly asUnexpectedResponse: {
			readonly origin: StagingXcmV3MultiLocation;
			readonly queryId: u64;
		} & Struct;
		readonly isResponseReady: boolean;
		readonly asResponseReady: {
			readonly queryId: u64;
			readonly response: XcmV3Response;
		} & Struct;
		readonly isNotified: boolean;
		readonly asNotified: {
			readonly queryId: u64;
			readonly palletIndex: u8;
			readonly callIndex: u8;
		} & Struct;
		readonly isNotifyOverweight: boolean;
		readonly asNotifyOverweight: {
			readonly queryId: u64;
			readonly palletIndex: u8;
			readonly callIndex: u8;
			readonly actualWeight: SpWeightsWeightV2Weight;
			readonly maxBudgetedWeight: SpWeightsWeightV2Weight;
		} & Struct;
		readonly isNotifyDispatchError: boolean;
		readonly asNotifyDispatchError: {
			readonly queryId: u64;
			readonly palletIndex: u8;
			readonly callIndex: u8;
		} & Struct;
		readonly isNotifyDecodeFailed: boolean;
		readonly asNotifyDecodeFailed: {
			readonly queryId: u64;
			readonly palletIndex: u8;
			readonly callIndex: u8;
		} & Struct;
		readonly isInvalidResponder: boolean;
		readonly asInvalidResponder: {
			readonly origin: StagingXcmV3MultiLocation;
			readonly queryId: u64;
			readonly expectedLocation: Option<StagingXcmV3MultiLocation>;
		} & Struct;
		readonly isInvalidResponderVersion: boolean;
		readonly asInvalidResponderVersion: {
			readonly origin: StagingXcmV3MultiLocation;
			readonly queryId: u64;
		} & Struct;
		readonly isResponseTaken: boolean;
		readonly asResponseTaken: {
			readonly queryId: u64;
		} & Struct;
		readonly isAssetsTrapped: boolean;
		readonly asAssetsTrapped: {
			readonly hash_: H256;
			readonly origin: StagingXcmV3MultiLocation;
			readonly assets: XcmVersionedMultiAssets;
		} & Struct;
		readonly isVersionChangeNotified: boolean;
		readonly asVersionChangeNotified: {
			readonly destination: StagingXcmV3MultiLocation;
			readonly result: u32;
			readonly cost: XcmV3MultiassetMultiAssets;
			readonly messageId: U8aFixed;
		} & Struct;
		readonly isSupportedVersionChanged: boolean;
		readonly asSupportedVersionChanged: {
			readonly location: StagingXcmV3MultiLocation;
			readonly version: u32;
		} & Struct;
		readonly isNotifyTargetSendFail: boolean;
		readonly asNotifyTargetSendFail: {
			readonly location: StagingXcmV3MultiLocation;
			readonly queryId: u64;
			readonly error: XcmV3TraitsError;
		} & Struct;
		readonly isNotifyTargetMigrationFail: boolean;
		readonly asNotifyTargetMigrationFail: {
			readonly location: XcmVersionedMultiLocation;
			readonly queryId: u64;
		} & Struct;
		readonly isInvalidQuerierVersion: boolean;
		readonly asInvalidQuerierVersion: {
			readonly origin: StagingXcmV3MultiLocation;
			readonly queryId: u64;
		} & Struct;
		readonly isInvalidQuerier: boolean;
		readonly asInvalidQuerier: {
			readonly origin: StagingXcmV3MultiLocation;
			readonly queryId: u64;
			readonly expectedQuerier: StagingXcmV3MultiLocation;
			readonly maybeActualQuerier: Option<StagingXcmV3MultiLocation>;
		} & Struct;
		readonly isVersionNotifyStarted: boolean;
		readonly asVersionNotifyStarted: {
			readonly destination: StagingXcmV3MultiLocation;
			readonly cost: XcmV3MultiassetMultiAssets;
			readonly messageId: U8aFixed;
		} & Struct;
		readonly isVersionNotifyRequested: boolean;
		readonly asVersionNotifyRequested: {
			readonly destination: StagingXcmV3MultiLocation;
			readonly cost: XcmV3MultiassetMultiAssets;
			readonly messageId: U8aFixed;
		} & Struct;
		readonly isVersionNotifyUnrequested: boolean;
		readonly asVersionNotifyUnrequested: {
			readonly destination: StagingXcmV3MultiLocation;
			readonly cost: XcmV3MultiassetMultiAssets;
			readonly messageId: U8aFixed;
		} & Struct;
		readonly isFeesPaid: boolean;
		readonly asFeesPaid: {
			readonly paying: StagingXcmV3MultiLocation;
			readonly fees: XcmV3MultiassetMultiAssets;
		} & Struct;
		readonly isAssetsClaimed: boolean;
		readonly asAssetsClaimed: {
			readonly hash_: H256;
			readonly origin: StagingXcmV3MultiLocation;
			readonly assets: XcmVersionedMultiAssets;
		} & Struct;
		readonly type:
			| 'Attempted'
			| 'Sent'
			| 'UnexpectedResponse'
			| 'ResponseReady'
			| 'Notified'
			| 'NotifyOverweight'
			| 'NotifyDispatchError'
			| 'NotifyDecodeFailed'
			| 'InvalidResponder'
			| 'InvalidResponderVersion'
			| 'ResponseTaken'
			| 'AssetsTrapped'
			| 'VersionChangeNotified'
			| 'SupportedVersionChanged'
			| 'NotifyTargetSendFail'
			| 'NotifyTargetMigrationFail'
			| 'InvalidQuerierVersion'
			| 'InvalidQuerier'
			| 'VersionNotifyStarted'
			| 'VersionNotifyRequested'
			| 'VersionNotifyUnrequested'
			| 'FeesPaid'
			| 'AssetsClaimed';
	}

	/** @name XcmV3TraitsOutcome (364) */
	interface XcmV3TraitsOutcome extends Enum {
		readonly isComplete: boolean;
		readonly asComplete: SpWeightsWeightV2Weight;
		readonly isIncomplete: boolean;
		readonly asIncomplete: ITuple<[SpWeightsWeightV2Weight, XcmV3TraitsError]>;
		readonly isError: boolean;
		readonly asError: XcmV3TraitsError;
		readonly type: 'Complete' | 'Incomplete' | 'Error';
	}

	/** @name CumulusPalletXcmEvent (365) */
	interface CumulusPalletXcmEvent extends Enum {
		readonly isInvalidFormat: boolean;
		readonly asInvalidFormat: U8aFixed;
		readonly isUnsupportedVersion: boolean;
		readonly asUnsupportedVersion: U8aFixed;
		readonly isExecutedDownward: boolean;
		readonly asExecutedDownward: ITuple<[U8aFixed, XcmV3TraitsOutcome]>;
		readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward';
	}

	/** @name CumulusPalletDmpQueueEvent (366) */
	interface CumulusPalletDmpQueueEvent extends Enum {
		readonly isInvalidFormat: boolean;
		readonly asInvalidFormat: {
			readonly messageHash: U8aFixed;
		} & Struct;
		readonly isUnsupportedVersion: boolean;
		readonly asUnsupportedVersion: {
			readonly messageHash: U8aFixed;
		} & Struct;
		readonly isExecutedDownward: boolean;
		readonly asExecutedDownward: {
			readonly messageHash: U8aFixed;
			readonly messageId: U8aFixed;
			readonly outcome: XcmV3TraitsOutcome;
		} & Struct;
		readonly isWeightExhausted: boolean;
		readonly asWeightExhausted: {
			readonly messageHash: U8aFixed;
			readonly messageId: U8aFixed;
			readonly remainingWeight: SpWeightsWeightV2Weight;
			readonly requiredWeight: SpWeightsWeightV2Weight;
		} & Struct;
		readonly isOverweightEnqueued: boolean;
		readonly asOverweightEnqueued: {
			readonly messageHash: U8aFixed;
			readonly messageId: U8aFixed;
			readonly overweightIndex: u64;
			readonly requiredWeight: SpWeightsWeightV2Weight;
		} & Struct;
		readonly isOverweightServiced: boolean;
		readonly asOverweightServiced: {
			readonly overweightIndex: u64;
			readonly weightUsed: SpWeightsWeightV2Weight;
		} & Struct;
		readonly isMaxMessagesExhausted: boolean;
		readonly asMaxMessagesExhausted: {
			readonly messageHash: U8aFixed;
		} & Struct;
		readonly type:
			| 'InvalidFormat'
			| 'UnsupportedVersion'
			| 'ExecutedDownward'
			| 'WeightExhausted'
			| 'OverweightEnqueued'
			| 'OverweightServiced'
			| 'MaxMessagesExhausted';
	}

	/** @name PalletUtilityEvent (367) */
	interface PalletUtilityEvent extends Enum {
		readonly isBatchInterrupted: boolean;
		readonly asBatchInterrupted: {
			readonly index: u32;
			readonly error: SpRuntimeDispatchError;
		} & Struct;
		readonly isBatchCompleted: boolean;
		readonly isBatchCompletedWithErrors: boolean;
		readonly isItemCompleted: boolean;
		readonly isItemFailed: boolean;
		readonly asItemFailed: {
			readonly error: SpRuntimeDispatchError;
		} & Struct;
		readonly isDispatchedAs: boolean;
		readonly asDispatchedAs: {
			readonly result: Result<Null, SpRuntimeDispatchError>;
		} & Struct;
		readonly type:
			| 'BatchInterrupted'
			| 'BatchCompleted'
			| 'BatchCompletedWithErrors'
			| 'ItemCompleted'
			| 'ItemFailed'
			| 'DispatchedAs';
	}

	/** @name PalletSchedulerEvent (368) */
	interface PalletSchedulerEvent extends Enum {
		readonly isScheduled: boolean;
		readonly asScheduled: {
			readonly when: u32;
			readonly index: u32;
		} & Struct;
		readonly isCanceled: boolean;
		readonly asCanceled: {
			readonly when: u32;
			readonly index: u32;
		} & Struct;
		readonly isDispatched: boolean;
		readonly asDispatched: {
			readonly task: ITuple<[u32, u32]>;
			readonly id: Option<U8aFixed>;
			readonly result: Result<Null, SpRuntimeDispatchError>;
		} & Struct;
		readonly isCallUnavailable: boolean;
		readonly asCallUnavailable: {
			readonly task: ITuple<[u32, u32]>;
			readonly id: Option<U8aFixed>;
		} & Struct;
		readonly isPeriodicFailed: boolean;
		readonly asPeriodicFailed: {
			readonly task: ITuple<[u32, u32]>;
			readonly id: Option<U8aFixed>;
		} & Struct;
		readonly isPermanentlyOverweight: boolean;
		readonly asPermanentlyOverweight: {
			readonly task: ITuple<[u32, u32]>;
			readonly id: Option<U8aFixed>;
		} & Struct;
		readonly type:
			| 'Scheduled'
			| 'Canceled'
			| 'Dispatched'
			| 'CallUnavailable'
			| 'PeriodicFailed'
			| 'PermanentlyOverweight';
	}

	/** @name PalletProxyEvent (369) */
	interface PalletProxyEvent extends Enum {
		readonly isProxyExecuted: boolean;
		readonly asProxyExecuted: {
			readonly result: Result<Null, SpRuntimeDispatchError>;
		} & Struct;
		readonly isPureCreated: boolean;
		readonly asPureCreated: {
			readonly pure: AccountId32;
			readonly who: AccountId32;
			readonly proxyType: TangleKusamaRuntimeProxyType;
			readonly disambiguationIndex: u16;
		} & Struct;
		readonly isAnnounced: boolean;
		readonly asAnnounced: {
			readonly real: AccountId32;
			readonly proxy: AccountId32;
			readonly callHash: H256;
		} & Struct;
		readonly isProxyAdded: boolean;
		readonly asProxyAdded: {
			readonly delegator: AccountId32;
			readonly delegatee: AccountId32;
			readonly proxyType: TangleKusamaRuntimeProxyType;
			readonly delay: u32;
		} & Struct;
		readonly isProxyRemoved: boolean;
		readonly asProxyRemoved: {
			readonly delegator: AccountId32;
			readonly delegatee: AccountId32;
			readonly proxyType: TangleKusamaRuntimeProxyType;
			readonly delay: u32;
		} & Struct;
		readonly type: 'ProxyExecuted' | 'PureCreated' | 'Announced' | 'ProxyAdded' | 'ProxyRemoved';
	}

	/** @name PalletMultisigEvent (370) */
	interface PalletMultisigEvent extends Enum {
		readonly isNewMultisig: boolean;
		readonly asNewMultisig: {
			readonly approving: AccountId32;
			readonly multisig: AccountId32;
			readonly callHash: U8aFixed;
		} & Struct;
		readonly isMultisigApproval: boolean;
		readonly asMultisigApproval: {
			readonly approving: AccountId32;
			readonly timepoint: PalletMultisigTimepoint;
			readonly multisig: AccountId32;
			readonly callHash: U8aFixed;
		} & Struct;
		readonly isMultisigExecuted: boolean;
		readonly asMultisigExecuted: {
			readonly approving: AccountId32;
			readonly timepoint: PalletMultisigTimepoint;
			readonly multisig: AccountId32;
			readonly callHash: U8aFixed;
			readonly result: Result<Null, SpRuntimeDispatchError>;
		} & Struct;
		readonly isMultisigCancelled: boolean;
		readonly asMultisigCancelled: {
			readonly cancelling: AccountId32;
			readonly timepoint: PalletMultisigTimepoint;
			readonly multisig: AccountId32;
			readonly callHash: U8aFixed;
		} & Struct;
		readonly type: 'NewMultisig' | 'MultisigApproval' | 'MultisigExecuted' | 'MultisigCancelled';
	}

	/** @name PalletIdentityEvent (371) */
	interface PalletIdentityEvent extends Enum {
		readonly isIdentitySet: boolean;
		readonly asIdentitySet: {
			readonly who: AccountId32;
		} & Struct;
		readonly isIdentityCleared: boolean;
		readonly asIdentityCleared: {
			readonly who: AccountId32;
			readonly deposit: u128;
		} & Struct;
		readonly isIdentityKilled: boolean;
		readonly asIdentityKilled: {
			readonly who: AccountId32;
			readonly deposit: u128;
		} & Struct;
		readonly isJudgementRequested: boolean;
		readonly asJudgementRequested: {
			readonly who: AccountId32;
			readonly registrarIndex: u32;
		} & Struct;
		readonly isJudgementUnrequested: boolean;
		readonly asJudgementUnrequested: {
			readonly who: AccountId32;
			readonly registrarIndex: u32;
		} & Struct;
		readonly isJudgementGiven: boolean;
		readonly asJudgementGiven: {
			readonly target: AccountId32;
			readonly registrarIndex: u32;
		} & Struct;
		readonly isRegistrarAdded: boolean;
		readonly asRegistrarAdded: {
			readonly registrarIndex: u32;
		} & Struct;
		readonly isSubIdentityAdded: boolean;
		readonly asSubIdentityAdded: {
			readonly sub: AccountId32;
			readonly main: AccountId32;
			readonly deposit: u128;
		} & Struct;
		readonly isSubIdentityRemoved: boolean;
		readonly asSubIdentityRemoved: {
			readonly sub: AccountId32;
			readonly main: AccountId32;
			readonly deposit: u128;
		} & Struct;
		readonly isSubIdentityRevoked: boolean;
		readonly asSubIdentityRevoked: {
			readonly sub: AccountId32;
			readonly main: AccountId32;
			readonly deposit: u128;
		} & Struct;
		readonly type:
			| 'IdentitySet'
			| 'IdentityCleared'
			| 'IdentityKilled'
			| 'JudgementRequested'
			| 'JudgementUnrequested'
			| 'JudgementGiven'
			| 'RegistrarAdded'
			| 'SubIdentityAdded'
			| 'SubIdentityRemoved'
			| 'SubIdentityRevoked';
	}

	/** @name PalletTreasuryEvent (372) */
	interface PalletTreasuryEvent extends Enum {
		readonly isProposed: boolean;
		readonly asProposed: {
			readonly proposalIndex: u32;
		} & Struct;
		readonly isSpending: boolean;
		readonly asSpending: {
			readonly budgetRemaining: u128;
		} & Struct;
		readonly isAwarded: boolean;
		readonly asAwarded: {
			readonly proposalIndex: u32;
			readonly award: u128;
			readonly account: AccountId32;
		} & Struct;
		readonly isRejected: boolean;
		readonly asRejected: {
			readonly proposalIndex: u32;
			readonly slashed: u128;
		} & Struct;
		readonly isBurnt: boolean;
		readonly asBurnt: {
			readonly burntFunds: u128;
		} & Struct;
		readonly isRollover: boolean;
		readonly asRollover: {
			readonly rolloverBalance: u128;
		} & Struct;
		readonly isDeposit: boolean;
		readonly asDeposit: {
			readonly value: u128;
		} & Struct;
		readonly isSpendApproved: boolean;
		readonly asSpendApproved: {
			readonly proposalIndex: u32;
			readonly amount: u128;
			readonly beneficiary: AccountId32;
		} & Struct;
		readonly isUpdatedInactive: boolean;
		readonly asUpdatedInactive: {
			readonly reactivated: u128;
			readonly deactivated: u128;
		} & Struct;
		readonly isAssetSpendApproved: boolean;
		readonly asAssetSpendApproved: {
			readonly index: u32;
			readonly assetKind: Null;
			readonly amount: u128;
			readonly beneficiary: AccountId32;
			readonly validFrom: u32;
			readonly expireAt: u32;
		} & Struct;
		readonly isAssetSpendVoided: boolean;
		readonly asAssetSpendVoided: {
			readonly index: u32;
		} & Struct;
		readonly isPaid: boolean;
		readonly asPaid: {
			readonly index: u32;
			readonly paymentId: Null;
		} & Struct;
		readonly isPaymentFailed: boolean;
		readonly asPaymentFailed: {
			readonly index: u32;
			readonly paymentId: Null;
		} & Struct;
		readonly isSpendProcessed: boolean;
		readonly asSpendProcessed: {
			readonly index: u32;
		} & Struct;
		readonly type:
			| 'Proposed'
			| 'Spending'
			| 'Awarded'
			| 'Rejected'
			| 'Burnt'
			| 'Rollover'
			| 'Deposit'
			| 'SpendApproved'
			| 'UpdatedInactive'
			| 'AssetSpendApproved'
			| 'AssetSpendVoided'
			| 'Paid'
			| 'PaymentFailed'
			| 'SpendProcessed';
	}

	/** @name PalletBountiesEvent (373) */
	interface PalletBountiesEvent extends Enum {
		readonly isBountyProposed: boolean;
		readonly asBountyProposed: {
			readonly index: u32;
		} & Struct;
		readonly isBountyRejected: boolean;
		readonly asBountyRejected: {
			readonly index: u32;
			readonly bond: u128;
		} & Struct;
		readonly isBountyBecameActive: boolean;
		readonly asBountyBecameActive: {
			readonly index: u32;
		} & Struct;
		readonly isBountyAwarded: boolean;
		readonly asBountyAwarded: {
			readonly index: u32;
			readonly beneficiary: AccountId32;
		} & Struct;
		readonly isBountyClaimed: boolean;
		readonly asBountyClaimed: {
			readonly index: u32;
			readonly payout: u128;
			readonly beneficiary: AccountId32;
		} & Struct;
		readonly isBountyCanceled: boolean;
		readonly asBountyCanceled: {
			readonly index: u32;
		} & Struct;
		readonly isBountyExtended: boolean;
		readonly asBountyExtended: {
			readonly index: u32;
		} & Struct;
		readonly isBountyApproved: boolean;
		readonly asBountyApproved: {
			readonly index: u32;
		} & Struct;
		readonly isCuratorProposed: boolean;
		readonly asCuratorProposed: {
			readonly bountyId: u32;
			readonly curator: AccountId32;
		} & Struct;
		readonly isCuratorUnassigned: boolean;
		readonly asCuratorUnassigned: {
			readonly bountyId: u32;
		} & Struct;
		readonly isCuratorAccepted: boolean;
		readonly asCuratorAccepted: {
			readonly bountyId: u32;
			readonly curator: AccountId32;
		} & Struct;
		readonly type:
			| 'BountyProposed'
			| 'BountyRejected'
			| 'BountyBecameActive'
			| 'BountyAwarded'
			| 'BountyClaimed'
			| 'BountyCanceled'
			| 'BountyExtended'
			| 'BountyApproved'
			| 'CuratorProposed'
			| 'CuratorUnassigned'
			| 'CuratorAccepted';
	}

	/** @name PalletTipsEvent (374) */
	interface PalletTipsEvent extends Enum {
		readonly isNewTip: boolean;
		readonly asNewTip: {
			readonly tipHash: H256;
		} & Struct;
		readonly isTipClosing: boolean;
		readonly asTipClosing: {
			readonly tipHash: H256;
		} & Struct;
		readonly isTipClosed: boolean;
		readonly asTipClosed: {
			readonly tipHash: H256;
			readonly who: AccountId32;
			readonly payout: u128;
		} & Struct;
		readonly isTipRetracted: boolean;
		readonly asTipRetracted: {
			readonly tipHash: H256;
		} & Struct;
		readonly isTipSlashed: boolean;
		readonly asTipSlashed: {
			readonly tipHash: H256;
			readonly finder: AccountId32;
			readonly deposit: u128;
		} & Struct;
		readonly type: 'NewTip' | 'TipClosing' | 'TipClosed' | 'TipRetracted' | 'TipSlashed';
	}

	/** @name PalletPreimageEvent (375) */
	interface PalletPreimageEvent extends Enum {
		readonly isNoted: boolean;
		readonly asNoted: {
			readonly hash_: H256;
		} & Struct;
		readonly isRequested: boolean;
		readonly asRequested: {
			readonly hash_: H256;
		} & Struct;
		readonly isCleared: boolean;
		readonly asCleared: {
			readonly hash_: H256;
		} & Struct;
		readonly type: 'Noted' | 'Requested' | 'Cleared';
	}

	/** @name OrmlXtokensModuleEvent (376) */
	interface OrmlXtokensModuleEvent extends Enum {
		readonly isTransferredMultiAssets: boolean;
		readonly asTransferredMultiAssets: {
			readonly sender: AccountId32;
			readonly assets: XcmV3MultiassetMultiAssets;
			readonly fee: XcmV3MultiAsset;
			readonly dest: StagingXcmV3MultiLocation;
		} & Struct;
		readonly type: 'TransferredMultiAssets';
	}

	/** @name OrmlTokensModuleEvent (377) */
	interface OrmlTokensModuleEvent extends Enum {
		readonly isEndowed: boolean;
		readonly asEndowed: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isDustLost: boolean;
		readonly asDustLost: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isTransfer: boolean;
		readonly asTransfer: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly from: AccountId32;
			readonly to: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isReserved: boolean;
		readonly asReserved: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isUnreserved: boolean;
		readonly asUnreserved: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isReserveRepatriated: boolean;
		readonly asReserveRepatriated: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly from: AccountId32;
			readonly to: AccountId32;
			readonly amount: u128;
			readonly status: FrameSupportTokensMiscBalanceStatus;
		} & Struct;
		readonly isBalanceSet: boolean;
		readonly asBalanceSet: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: AccountId32;
			readonly free: u128;
			readonly reserved: u128;
		} & Struct;
		readonly isTotalIssuanceSet: boolean;
		readonly asTotalIssuanceSet: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: u128;
		} & Struct;
		readonly isWithdrawn: boolean;
		readonly asWithdrawn: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isSlashed: boolean;
		readonly asSlashed: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: AccountId32;
			readonly freeAmount: u128;
			readonly reservedAmount: u128;
		} & Struct;
		readonly isDeposited: boolean;
		readonly asDeposited: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isLockSet: boolean;
		readonly asLockSet: {
			readonly lockId: U8aFixed;
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isLockRemoved: boolean;
		readonly asLockRemoved: {
			readonly lockId: U8aFixed;
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: AccountId32;
		} & Struct;
		readonly isLocked: boolean;
		readonly asLocked: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isUnlocked: boolean;
		readonly asUnlocked: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isIssued: boolean;
		readonly asIssued: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: u128;
		} & Struct;
		readonly isRescinded: boolean;
		readonly asRescinded: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: u128;
		} & Struct;
		readonly type:
			| 'Endowed'
			| 'DustLost'
			| 'Transfer'
			| 'Reserved'
			| 'Unreserved'
			| 'ReserveRepatriated'
			| 'BalanceSet'
			| 'TotalIssuanceSet'
			| 'Withdrawn'
			| 'Slashed'
			| 'Deposited'
			| 'LockSet'
			| 'LockRemoved'
			| 'Locked'
			| 'Unlocked'
			| 'Issued'
			| 'Rescinded';
	}

	/** @name OrmlUnknownTokensModuleEvent (378) */
	interface OrmlUnknownTokensModuleEvent extends Enum {
		readonly isDeposited: boolean;
		readonly asDeposited: {
			readonly asset: XcmV3MultiAsset;
			readonly who: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isWithdrawn: boolean;
		readonly asWithdrawn: {
			readonly asset: XcmV3MultiAsset;
			readonly who: StagingXcmV3MultiLocation;
		} & Struct;
		readonly type: 'Deposited' | 'Withdrawn';
	}

	/** @name OrmlXcmModuleEvent (379) */
	interface OrmlXcmModuleEvent extends Enum {
		readonly isSent: boolean;
		readonly asSent: {
			readonly to: StagingXcmV3MultiLocation;
			readonly message: XcmV3Xcm;
		} & Struct;
		readonly type: 'Sent';
	}

	/** @name ZenlinkProtocolEvent (380) */
	interface ZenlinkProtocolEvent extends Enum {
		readonly isTransferred: boolean;
		readonly asTransferred: ITuple<
			[ZenlinkProtocolPrimitivesAssetId, AccountId32, AccountId32, u128]
		>;
		readonly isBurned: boolean;
		readonly asBurned: ITuple<[ZenlinkProtocolPrimitivesAssetId, AccountId32, u128]>;
		readonly isMinted: boolean;
		readonly asMinted: ITuple<[ZenlinkProtocolPrimitivesAssetId, AccountId32, u128]>;
		readonly isPairCreated: boolean;
		readonly asPairCreated: ITuple<
			[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]
		>;
		readonly isLiquidityAdded: boolean;
		readonly asLiquidityAdded: ITuple<
			[
				AccountId32,
				ZenlinkProtocolPrimitivesAssetId,
				ZenlinkProtocolPrimitivesAssetId,
				u128,
				u128,
				u128,
			]
		>;
		readonly isLiquidityRemoved: boolean;
		readonly asLiquidityRemoved: ITuple<
			[
				AccountId32,
				AccountId32,
				ZenlinkProtocolPrimitivesAssetId,
				ZenlinkProtocolPrimitivesAssetId,
				u128,
				u128,
				u128,
			]
		>;
		readonly isAssetSwap: boolean;
		readonly asAssetSwap: ITuple<
			[AccountId32, AccountId32, Vec<ZenlinkProtocolPrimitivesAssetId>, Vec<u128>]
		>;
		readonly isTransferredToParachain: boolean;
		readonly asTransferredToParachain: ITuple<
			[ZenlinkProtocolPrimitivesAssetId, AccountId32, u32, AccountId32, u128, u64]
		>;
		readonly isBootstrapContribute: boolean;
		readonly asBootstrapContribute: ITuple<
			[AccountId32, ZenlinkProtocolPrimitivesAssetId, u128, ZenlinkProtocolPrimitivesAssetId, u128]
		>;
		readonly isBootstrapEnd: boolean;
		readonly asBootstrapEnd: ITuple<
			[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128]
		>;
		readonly isBootstrapCreated: boolean;
		readonly asBootstrapCreated: ITuple<
			[
				AccountId32,
				ZenlinkProtocolPrimitivesAssetId,
				ZenlinkProtocolPrimitivesAssetId,
				u128,
				u128,
				u128,
				u128,
				u32,
			]
		>;
		readonly isBootstrapClaim: boolean;
		readonly asBootstrapClaim: ITuple<
			[
				AccountId32,
				AccountId32,
				AccountId32,
				ZenlinkProtocolPrimitivesAssetId,
				ZenlinkProtocolPrimitivesAssetId,
				u128,
				u128,
				u128,
			]
		>;
		readonly isBootstrapUpdate: boolean;
		readonly asBootstrapUpdate: ITuple<
			[
				AccountId32,
				ZenlinkProtocolPrimitivesAssetId,
				ZenlinkProtocolPrimitivesAssetId,
				u128,
				u128,
				u128,
				u128,
				u32,
			]
		>;
		readonly isBootstrapRefund: boolean;
		readonly asBootstrapRefund: ITuple<
			[
				AccountId32,
				AccountId32,
				ZenlinkProtocolPrimitivesAssetId,
				ZenlinkProtocolPrimitivesAssetId,
				u128,
				u128,
			]
		>;
		readonly isDistributeReward: boolean;
		readonly asDistributeReward: ITuple<
			[
				ZenlinkProtocolPrimitivesAssetId,
				ZenlinkProtocolPrimitivesAssetId,
				AccountId32,
				Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>,
			]
		>;
		readonly isChargeReward: boolean;
		readonly asChargeReward: ITuple<
			[
				ZenlinkProtocolPrimitivesAssetId,
				ZenlinkProtocolPrimitivesAssetId,
				AccountId32,
				Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>,
			]
		>;
		readonly isWithdrawReward: boolean;
		readonly asWithdrawReward: ITuple<
			[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, AccountId32]
		>;
		readonly type:
			| 'Transferred'
			| 'Burned'
			| 'Minted'
			| 'PairCreated'
			| 'LiquidityAdded'
			| 'LiquidityRemoved'
			| 'AssetSwap'
			| 'TransferredToParachain'
			| 'BootstrapContribute'
			| 'BootstrapEnd'
			| 'BootstrapCreated'
			| 'BootstrapClaim'
			| 'BootstrapUpdate'
			| 'BootstrapRefund'
			| 'DistributeReward'
			| 'ChargeReward'
			| 'WithdrawReward';
	}

	/** @name MerkleDistributorEvent (381) */
	interface MerkleDistributorEvent extends Enum {
		readonly isCreate: boolean;
		readonly asCreate: ITuple<[u32, H256, u128]>;
		readonly isClaim: boolean;
		readonly asClaim: ITuple<[u32, AccountId32, u128]>;
		readonly isWithdraw: boolean;
		readonly asWithdraw: ITuple<[u32, AccountId32, u128]>;
		readonly isAddToWhiteList: boolean;
		readonly asAddToWhiteList: AccountId32;
		readonly isRemoveFromWhiteList: boolean;
		readonly asRemoveFromWhiteList: AccountId32;
		readonly type: 'Create' | 'Claim' | 'Withdraw' | 'AddToWhiteList' | 'RemoveFromWhiteList';
	}

	/** @name ZenlinkStableAmmEvent (382) */
	interface ZenlinkStableAmmEvent extends Enum {
		readonly isCreatePool: boolean;
		readonly asCreatePool: {
			readonly poolId: u32;
			readonly currencyIds: Vec<TanglePrimitivesCurrencyCurrencyId>;
			readonly lpCurrencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly a: u128;
			readonly account: AccountId32;
			readonly adminFeeReceiver: AccountId32;
		} & Struct;
		readonly isUpdateAdminFeeReceiver: boolean;
		readonly asUpdateAdminFeeReceiver: {
			readonly poolId: u32;
			readonly adminFeeReceiver: AccountId32;
		} & Struct;
		readonly isAddLiquidity: boolean;
		readonly asAddLiquidity: {
			readonly poolId: u32;
			readonly who: AccountId32;
			readonly to: AccountId32;
			readonly supplyAmounts: Vec<u128>;
			readonly fees: Vec<u128>;
			readonly newD: u128;
			readonly mintAmount: u128;
		} & Struct;
		readonly isCurrencyExchange: boolean;
		readonly asCurrencyExchange: {
			readonly poolId: u32;
			readonly who: AccountId32;
			readonly to: AccountId32;
			readonly inIndex: u32;
			readonly inAmount: u128;
			readonly outIndex: u32;
			readonly outAmount: u128;
		} & Struct;
		readonly isRemoveLiquidity: boolean;
		readonly asRemoveLiquidity: {
			readonly poolId: u32;
			readonly who: AccountId32;
			readonly to: AccountId32;
			readonly amounts: Vec<u128>;
			readonly fees: Vec<u128>;
			readonly newTotalSupply: u128;
		} & Struct;
		readonly isRemoveLiquidityOneCurrency: boolean;
		readonly asRemoveLiquidityOneCurrency: {
			readonly poolId: u32;
			readonly who: AccountId32;
			readonly to: AccountId32;
			readonly outIndex: u32;
			readonly burnAmount: u128;
			readonly outAmount: u128;
		} & Struct;
		readonly isRemoveLiquidityImbalance: boolean;
		readonly asRemoveLiquidityImbalance: {
			readonly poolId: u32;
			readonly who: AccountId32;
			readonly to: AccountId32;
			readonly amounts: Vec<u128>;
			readonly fees: Vec<u128>;
			readonly newD: u128;
			readonly newTotalSupply: u128;
		} & Struct;
		readonly isNewSwapFee: boolean;
		readonly asNewSwapFee: {
			readonly poolId: u32;
			readonly newSwapFee: u128;
		} & Struct;
		readonly isNewAdminFee: boolean;
		readonly asNewAdminFee: {
			readonly poolId: u32;
			readonly newAdminFee: u128;
		} & Struct;
		readonly isRampA: boolean;
		readonly asRampA: {
			readonly poolId: u32;
			readonly initialAPrecise: u128;
			readonly futureAPrecise: u128;
			readonly now: u128;
			readonly futureATime: u128;
		} & Struct;
		readonly isStopRampA: boolean;
		readonly asStopRampA: {
			readonly poolId: u32;
			readonly currentA: u128;
			readonly now: u128;
		} & Struct;
		readonly isCollectProtocolFee: boolean;
		readonly asCollectProtocolFee: {
			readonly poolId: u32;
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly feeAmount: u128;
		} & Struct;
		readonly isCurrencyExchangeUnderlying: boolean;
		readonly asCurrencyExchangeUnderlying: {
			readonly poolId: u32;
			readonly account: AccountId32;
			readonly inAmount: u128;
			readonly outAmount: u128;
			readonly currencyIndexFrom: u32;
			readonly currencyIndexTo: u32;
			readonly to: AccountId32;
		} & Struct;
		readonly type:
			| 'CreatePool'
			| 'UpdateAdminFeeReceiver'
			| 'AddLiquidity'
			| 'CurrencyExchange'
			| 'RemoveLiquidity'
			| 'RemoveLiquidityOneCurrency'
			| 'RemoveLiquidityImbalance'
			| 'NewSwapFee'
			| 'NewAdminFee'
			| 'RampA'
			| 'StopRampA'
			| 'CollectProtocolFee'
			| 'CurrencyExchangeUnderlying';
	}

	/** @name ZenlinkSwapRouterEvent (383) */
	type ZenlinkSwapRouterEvent = Null;

	/** @name TangleTokenIssuerEvent (384) */
	interface TangleTokenIssuerEvent extends Enum {
		readonly isAddedToIssueList: boolean;
		readonly asAddedToIssueList: ITuple<[AccountId32, TanglePrimitivesCurrencyCurrencyId]>;
		readonly isRemovedFromIssueList: boolean;
		readonly asRemovedFromIssueList: ITuple<[AccountId32, TanglePrimitivesCurrencyCurrencyId]>;
		readonly isAddedToTransferList: boolean;
		readonly asAddedToTransferList: ITuple<[AccountId32, TanglePrimitivesCurrencyCurrencyId]>;
		readonly isRemovedFromTransferList: boolean;
		readonly asRemovedFromTransferList: ITuple<[AccountId32, TanglePrimitivesCurrencyCurrencyId]>;
		readonly isIssued: boolean;
		readonly asIssued: ITuple<[AccountId32, TanglePrimitivesCurrencyCurrencyId, u128]>;
		readonly isTransferred: boolean;
		readonly asTransferred: ITuple<
			[AccountId32, AccountId32, TanglePrimitivesCurrencyCurrencyId, u128]
		>;
		readonly type:
			| 'AddedToIssueList'
			| 'RemovedFromIssueList'
			| 'AddedToTransferList'
			| 'RemovedFromTransferList'
			| 'Issued'
			| 'Transferred';
	}

	/** @name TangleAssetRegistryEvent (385) */
	interface TangleAssetRegistryEvent extends Enum {
		readonly isAssetRegistered: boolean;
		readonly asAssetRegistered: {
			readonly assetId: TanglePrimitivesCurrencyAssetIds;
			readonly metadata: TangleAssetRegistryAssetMetadata;
		} & Struct;
		readonly isAssetUpdated: boolean;
		readonly asAssetUpdated: {
			readonly assetId: TanglePrimitivesCurrencyAssetIds;
			readonly metadata: TangleAssetRegistryAssetMetadata;
		} & Struct;
		readonly isCurrencyIdRegistered: boolean;
		readonly asCurrencyIdRegistered: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly metadata: TangleAssetRegistryAssetMetadata;
		} & Struct;
		readonly isMultiLocationSet: boolean;
		readonly asMultiLocationSet: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly location: StagingXcmV3MultiLocation;
			readonly weight: SpWeightsWeightV2Weight;
		} & Struct;
		readonly type: 'AssetRegistered' | 'AssetUpdated' | 'CurrencyIdRegistered' | 'MultiLocationSet';
	}

	/** @name TanglePrimitivesCurrencyAssetIds (386) */
	interface TanglePrimitivesCurrencyAssetIds extends Enum {
		readonly isForeignAssetId: boolean;
		readonly asForeignAssetId: u32;
		readonly isNativeAssetId: boolean;
		readonly asNativeAssetId: TanglePrimitivesCurrencyCurrencyId;
		readonly type: 'ForeignAssetId' | 'NativeAssetId';
	}

	/** @name TangleLstMintingEvent (387) */
	interface TangleLstMintingEvent extends Enum {
		readonly isMinted: boolean;
		readonly asMinted: {
			readonly address: AccountId32;
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
			readonly tokenAmount: u128;
			readonly LstAmount: u128;
			readonly fee: u128;
			readonly remark: Bytes;
		} & Struct;
		readonly isRedeemed: boolean;
		readonly asRedeemed: {
			readonly address: AccountId32;
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
			readonly tokenAmount: u128;
			readonly LstAmount: u128;
			readonly fee: u128;
			readonly unlockId: u32;
		} & Struct;
		readonly isRedeemSuccess: boolean;
		readonly asRedeemSuccess: {
			readonly unlockId: u32;
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
			readonly to: AccountId32;
			readonly tokenAmount: u128;
		} & Struct;
		readonly isRebonded: boolean;
		readonly asRebonded: {
			readonly address: AccountId32;
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
			readonly tokenAmount: u128;
			readonly LstAmount: u128;
			readonly fee: u128;
		} & Struct;
		readonly isRebondedByUnlockId: boolean;
		readonly asRebondedByUnlockId: {
			readonly address: AccountId32;
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
			readonly tokenAmount: u128;
			readonly LstAmount: u128;
			readonly fee: u128;
			readonly unlockId: u32;
		} & Struct;
		readonly isUnlockDurationSet: boolean;
		readonly asUnlockDurationSet: {
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
			readonly unlockDuration: TanglePrimitivesTimeUnit;
		} & Struct;
		readonly isMinimumMintSet: boolean;
		readonly asMinimumMintSet: {
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: u128;
		} & Struct;
		readonly isMinimumRedeemSet: boolean;
		readonly asMinimumRedeemSet: {
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: u128;
		} & Struct;
		readonly isSupportRebondTokenAdded: boolean;
		readonly asSupportRebondTokenAdded: {
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
		} & Struct;
		readonly isSupportRebondTokenRemoved: boolean;
		readonly asSupportRebondTokenRemoved: {
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
		} & Struct;
		readonly isFeeSet: boolean;
		readonly asFeeSet: {
			readonly mintFee: Permill;
			readonly redeemFee: Permill;
		} & Struct;
		readonly isHookIterationLimitSet: boolean;
		readonly asHookIterationLimitSet: {
			readonly limit: u32;
		} & Struct;
		readonly isUnlockingTotalSet: boolean;
		readonly asUnlockingTotalSet: {
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: u128;
		} & Struct;
		readonly isMinTimeUnitSet: boolean;
		readonly asMinTimeUnitSet: {
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
			readonly timeUnit: TanglePrimitivesTimeUnit;
		} & Struct;
		readonly isFastRedeemFailed: boolean;
		readonly asFastRedeemFailed: {
			readonly err: SpRuntimeDispatchError;
		} & Struct;
		readonly isCurrencyTimeUnitRecreated: boolean;
		readonly asCurrencyTimeUnitRecreated: {
			readonly tokenId: TanglePrimitivesCurrencyCurrencyId;
			readonly timeUnit: TanglePrimitivesTimeUnit;
		} & Struct;
		readonly type:
			| 'Minted'
			| 'Redeemed'
			| 'RedeemSuccess'
			| 'Rebonded'
			| 'RebondedByUnlockId'
			| 'UnlockDurationSet'
			| 'MinimumMintSet'
			| 'MinimumRedeemSet'
			| 'SupportRebondTokenAdded'
			| 'SupportRebondTokenRemoved'
			| 'FeeSet'
			| 'HookIterationLimitSet'
			| 'UnlockingTotalSet'
			| 'MinTimeUnitSet'
			| 'FastRedeemFailed'
			| 'CurrencyTimeUnitRecreated';
	}

	/** @name TangleSlpEvent (388) */
	interface TangleSlpEvent extends Enum {
		readonly isDelegatorInitialized: boolean;
		readonly asDelegatorInitialized: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly delegatorId: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isDelegatorBonded: boolean;
		readonly asDelegatorBonded: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly delegatorId: StagingXcmV3MultiLocation;
			readonly bondedAmount: Compact<u128>;
			readonly queryId: Compact<u64>;
			readonly queryIdHash: H256;
			readonly validator: Option<StagingXcmV3MultiLocation>;
		} & Struct;
		readonly isDelegatorBondExtra: boolean;
		readonly asDelegatorBondExtra: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly delegatorId: StagingXcmV3MultiLocation;
			readonly extraBondedAmount: Compact<u128>;
			readonly queryId: Compact<u64>;
			readonly queryIdHash: H256;
			readonly validator: Option<StagingXcmV3MultiLocation>;
		} & Struct;
		readonly isDelegatorUnbond: boolean;
		readonly asDelegatorUnbond: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly delegatorId: StagingXcmV3MultiLocation;
			readonly unbondAmount: Compact<u128>;
			readonly queryId: Compact<u64>;
			readonly queryIdHash: H256;
			readonly validator: Option<StagingXcmV3MultiLocation>;
		} & Struct;
		readonly isDelegatorUnbondAll: boolean;
		readonly asDelegatorUnbondAll: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly delegatorId: StagingXcmV3MultiLocation;
			readonly queryId: Compact<u64>;
			readonly queryIdHash: H256;
		} & Struct;
		readonly isDelegatorRebond: boolean;
		readonly asDelegatorRebond: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly delegatorId: StagingXcmV3MultiLocation;
			readonly rebondAmount: Option<u128>;
			readonly queryId: Compact<u64>;
			readonly queryIdHash: H256;
			readonly validator: Option<StagingXcmV3MultiLocation>;
		} & Struct;
		readonly isDelegated: boolean;
		readonly asDelegated: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly delegatorId: StagingXcmV3MultiLocation;
			readonly targets: Option<Vec<StagingXcmV3MultiLocation>>;
			readonly queryId: Compact<u64>;
			readonly queryIdHash: H256;
		} & Struct;
		readonly isUndelegated: boolean;
		readonly asUndelegated: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly delegatorId: StagingXcmV3MultiLocation;
			readonly targets: Vec<StagingXcmV3MultiLocation>;
			readonly queryId: Compact<u64>;
			readonly queryIdHash: H256;
		} & Struct;
		readonly isPayout: boolean;
		readonly asPayout: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly validator: StagingXcmV3MultiLocation;
			readonly timeUnit: Option<TanglePrimitivesTimeUnit>;
		} & Struct;
		readonly isLiquidize: boolean;
		readonly asLiquidize: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly delegatorId: StagingXcmV3MultiLocation;
			readonly timeUnit: Option<TanglePrimitivesTimeUnit>;
			readonly queryId: Compact<u64>;
			readonly queryIdHash: H256;
			readonly amount: Option<u128>;
		} & Struct;
		readonly isChill: boolean;
		readonly asChill: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly delegatorId: StagingXcmV3MultiLocation;
			readonly queryId: Compact<u64>;
			readonly queryIdHash: H256;
		} & Struct;
		readonly isTransferBack: boolean;
		readonly asTransferBack: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly from: StagingXcmV3MultiLocation;
			readonly to: StagingXcmV3MultiLocation;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isTransferTo: boolean;
		readonly asTransferTo: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly from: StagingXcmV3MultiLocation;
			readonly to: StagingXcmV3MultiLocation;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isConvertAsset: boolean;
		readonly asConvertAsset: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isDelegatorAdded: boolean;
		readonly asDelegatorAdded: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly index: Compact<u16>;
			readonly delegatorId: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isDelegatorRemoved: boolean;
		readonly asDelegatorRemoved: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly delegatorId: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isValidatorsAdded: boolean;
		readonly asValidatorsAdded: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly validatorId: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isValidatorsRemoved: boolean;
		readonly asValidatorsRemoved: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly validatorId: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isRefund: boolean;
		readonly asRefund: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly timeUnit: TanglePrimitivesTimeUnit;
			readonly index: Compact<u32>;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isFundMoveFromExitToEntrance: boolean;
		readonly asFundMoveFromExitToEntrance: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isTimeUnitUpdated: boolean;
		readonly asTimeUnitUpdated: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly old: Option<TanglePrimitivesTimeUnit>;
			readonly new_: TanglePrimitivesTimeUnit;
		} & Struct;
		readonly isPoolTokenIncreased: boolean;
		readonly asPoolTokenIncreased: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isHostingFeeCharged: boolean;
		readonly asHostingFeeCharged: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isPoolTokenDecreased: boolean;
		readonly asPoolTokenDecreased: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isFeeSupplemented: boolean;
		readonly asFeeSupplemented: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: Compact<u128>;
			readonly from: StagingXcmV3MultiLocation;
			readonly to: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isValidatorsByDelegatorSet: boolean;
		readonly asValidatorsByDelegatorSet: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly validatorsList: Vec<StagingXcmV3MultiLocation>;
			readonly delegatorId: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isOperateOriginSet: boolean;
		readonly asOperateOriginSet: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly operator: Option<AccountId32>;
		} & Struct;
		readonly isFeeSourceSet: boolean;
		readonly asFeeSourceSet: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly whoAndFee: Option<ITuple<[StagingXcmV3MultiLocation, u128]>>;
		} & Struct;
		readonly isDelegatorLedgerSet: boolean;
		readonly asDelegatorLedgerSet: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly delegator: StagingXcmV3MultiLocation;
			readonly ledger: Option<TangleSlpPrimitivesLedger>;
		} & Struct;
		readonly isDelegatorLedgerQueryResponseConfirmed: boolean;
		readonly asDelegatorLedgerQueryResponseConfirmed: {
			readonly queryId: Compact<u64>;
			readonly entry: TangleSlpPrimitivesLedgerUpdateEntry;
		} & Struct;
		readonly isDelegatorLedgerQueryResponseFailed: boolean;
		readonly asDelegatorLedgerQueryResponseFailed: {
			readonly queryId: Compact<u64>;
		} & Struct;
		readonly isValidatorsByDelegatorQueryResponseConfirmed: boolean;
		readonly asValidatorsByDelegatorQueryResponseConfirmed: {
			readonly queryId: Compact<u64>;
			readonly entry: TangleSlpPrimitivesValidatorsByDelegatorUpdateEntry;
		} & Struct;
		readonly isValidatorsByDelegatorQueryResponseFailed: boolean;
		readonly asValidatorsByDelegatorQueryResponseFailed: {
			readonly queryId: Compact<u64>;
		} & Struct;
		readonly isMinimumsMaximumsSet: boolean;
		readonly asMinimumsMaximumsSet: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly minimumsAndMaximums: Option<TangleSlpPrimitivesMinimumsMaximums>;
		} & Struct;
		readonly isCurrencyDelaysSet: boolean;
		readonly asCurrencyDelaysSet: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly delays: Option<TangleSlpPrimitivesDelays>;
		} & Struct;
		readonly isHostingFeesSet: boolean;
		readonly asHostingFeesSet: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly fees: Option<ITuple<[Permill, StagingXcmV3MultiLocation]>>;
		} & Struct;
		readonly isCurrencyTuneExchangeRateLimitSet: boolean;
		readonly asCurrencyTuneExchangeRateLimitSet: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly tuneExchangeRateLimit: Option<ITuple<[u32, Permill]>>;
		} & Struct;
		readonly isOngoingTimeUnitUpdateIntervalSet: boolean;
		readonly asOngoingTimeUnitUpdateIntervalSet: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly interval: Option<u32>;
		} & Struct;
		readonly isSupplementFeeAccountWhitelistAdded: boolean;
		readonly asSupplementFeeAccountWhitelistAdded: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isSupplementFeeAccountWhitelistRemoved: boolean;
		readonly asSupplementFeeAccountWhitelistRemoved: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isValidatorsReset: boolean;
		readonly asValidatorsReset: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly validatorList: Vec<StagingXcmV3MultiLocation>;
		} & Struct;
		readonly isValidatorBoostListSet: boolean;
		readonly asValidatorBoostListSet: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly validatorBoostList: Vec<ITuple<[StagingXcmV3MultiLocation, u32]>>;
		} & Struct;
		readonly isValidatorBoostListAdded: boolean;
		readonly asValidatorBoostListAdded: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
			readonly dueBlockNumber: u32;
		} & Struct;
		readonly isRemovedFromBoostList: boolean;
		readonly asRemovedFromBoostList: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly who: StagingXcmV3MultiLocation;
		} & Struct;
		readonly isOutdatedValidatorBoostListCleaned: boolean;
		readonly asOutdatedValidatorBoostListCleaned: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly page: u8;
			readonly removeNum: u32;
			readonly numLeft: u32;
		} & Struct;
		readonly isBurnFeeFailed: boolean;
		readonly asBurnFeeFailed: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly amount: u128;
		} & Struct;
		readonly type:
			| 'DelegatorInitialized'
			| 'DelegatorBonded'
			| 'DelegatorBondExtra'
			| 'DelegatorUnbond'
			| 'DelegatorUnbondAll'
			| 'DelegatorRebond'
			| 'Delegated'
			| 'Undelegated'
			| 'Payout'
			| 'Liquidize'
			| 'Chill'
			| 'TransferBack'
			| 'TransferTo'
			| 'ConvertAsset'
			| 'DelegatorAdded'
			| 'DelegatorRemoved'
			| 'ValidatorsAdded'
			| 'ValidatorsRemoved'
			| 'Refund'
			| 'FundMoveFromExitToEntrance'
			| 'TimeUnitUpdated'
			| 'PoolTokenIncreased'
			| 'HostingFeeCharged'
			| 'PoolTokenDecreased'
			| 'FeeSupplemented'
			| 'ValidatorsByDelegatorSet'
			| 'OperateOriginSet'
			| 'FeeSourceSet'
			| 'DelegatorLedgerSet'
			| 'DelegatorLedgerQueryResponseConfirmed'
			| 'DelegatorLedgerQueryResponseFailed'
			| 'ValidatorsByDelegatorQueryResponseConfirmed'
			| 'ValidatorsByDelegatorQueryResponseFailed'
			| 'MinimumsMaximumsSet'
			| 'CurrencyDelaysSet'
			| 'HostingFeesSet'
			| 'CurrencyTuneExchangeRateLimitSet'
			| 'OngoingTimeUnitUpdateIntervalSet'
			| 'SupplementFeeAccountWhitelistAdded'
			| 'SupplementFeeAccountWhitelistRemoved'
			| 'ValidatorsReset'
			| 'ValidatorBoostListSet'
			| 'ValidatorBoostListAdded'
			| 'RemovedFromBoostList'
			| 'OutdatedValidatorBoostListCleaned'
			| 'BurnFeeFailed';
	}

	/** @name TangleSlpPrimitivesLedgerUpdateEntry (389) */
	interface TangleSlpPrimitivesLedgerUpdateEntry extends Enum {
		readonly isSubstrate: boolean;
		readonly asSubstrate: TangleSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateEntry;
		readonly isMoonbeam: boolean;
		readonly asMoonbeam: TangleSlpPrimitivesParachainStakingPrimitivesParachainStakingLedgerUpdateEntry;
		readonly isParachainStaking: boolean;
		readonly asParachainStaking: TangleSlpPrimitivesParachainStakingPrimitivesParachainStakingLedgerUpdateEntry;
		readonly type: 'Substrate' | 'Moonbeam' | 'ParachainStaking';
	}

	/** @name TangleSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateEntry (390) */
	interface TangleSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateEntry extends Struct {
		readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
		readonly delegatorId: StagingXcmV3MultiLocation;
		readonly updateOperation: TangleSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateOperation;
		readonly amount: Compact<u128>;
		readonly unlockTime: Option<TanglePrimitivesTimeUnit>;
	}

	/** @name TangleSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateOperation (391) */
	interface TangleSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateOperation extends Enum {
		readonly isBond: boolean;
		readonly isUnlock: boolean;
		readonly isRebond: boolean;
		readonly isLiquidize: boolean;
		readonly type: 'Bond' | 'Unlock' | 'Rebond' | 'Liquidize';
	}

	/** @name TangleSlpPrimitivesParachainStakingPrimitivesParachainStakingLedgerUpdateEntry (392) */
	interface TangleSlpPrimitivesParachainStakingPrimitivesParachainStakingLedgerUpdateEntry
		extends Struct {
		readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
		readonly delegatorId: StagingXcmV3MultiLocation;
		readonly validatorId: Option<StagingXcmV3MultiLocation>;
		readonly updateOperation: TangleSlpPrimitivesParachainStakingPrimitivesParachainStakingLedgerUpdateOperation;
		readonly amount: Compact<u128>;
		readonly unlockTime: Option<TanglePrimitivesTimeUnit>;
	}

	/** @name TangleSlpPrimitivesParachainStakingPrimitivesParachainStakingLedgerUpdateOperation (393) */
	interface TangleSlpPrimitivesParachainStakingPrimitivesParachainStakingLedgerUpdateOperation
		extends Enum {
		readonly isBond: boolean;
		readonly isBondLess: boolean;
		readonly isRevoke: boolean;
		readonly isCancelRequest: boolean;
		readonly isLeaveDelegator: boolean;
		readonly isCancelLeave: boolean;
		readonly isExecuteLeave: boolean;
		readonly isExecuteRequest: boolean;
		readonly type:
			| 'Bond'
			| 'BondLess'
			| 'Revoke'
			| 'CancelRequest'
			| 'LeaveDelegator'
			| 'CancelLeave'
			| 'ExecuteLeave'
			| 'ExecuteRequest';
	}

	/** @name TangleSlpPrimitivesValidatorsByDelegatorUpdateEntry (394) */
	interface TangleSlpPrimitivesValidatorsByDelegatorUpdateEntry extends Enum {
		readonly isSubstrate: boolean;
		readonly asSubstrate: TangleSlpPrimitivesPolkadotPrimitivesSubstrateValidatorsByDelegatorUpdateEntry;
		readonly type: 'Substrate';
	}

	/** @name TangleSlpPrimitivesPolkadotPrimitivesSubstrateValidatorsByDelegatorUpdateEntry (395) */
	interface TangleSlpPrimitivesPolkadotPrimitivesSubstrateValidatorsByDelegatorUpdateEntry
		extends Struct {
		readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
		readonly delegatorId: StagingXcmV3MultiLocation;
		readonly validators: Vec<StagingXcmV3MultiLocation>;
	}

	/** @name TangleXcmInterfaceEvent (398) */
	interface TangleXcmInterfaceEvent extends Enum {
		readonly isXcmDestWeightAndFeeUpdated: boolean;
		readonly asXcmDestWeightAndFeeUpdated: ITuple<
			[
				TanglePrimitivesXcmOperationType,
				TanglePrimitivesCurrencyCurrencyId,
				SpWeightsWeightV2Weight,
				u128,
			]
		>;
		readonly isTransferredStatemineMultiAsset: boolean;
		readonly asTransferredStatemineMultiAsset: ITuple<[AccountId32, u128]>;
		readonly type: 'XcmDestWeightAndFeeUpdated' | 'TransferredStatemineMultiAsset';
	}

	/** @name TangleSlpxEvent (399) */
	interface TangleSlpxEvent extends Enum {
		readonly isAddWhitelistAccountId: boolean;
		readonly asAddWhitelistAccountId: {
			readonly supportChain: TangleSlpxSupportChain;
			readonly evmContractAccountId: AccountId32;
		} & Struct;
		readonly isRemoveWhitelistAccountId: boolean;
		readonly asRemoveWhitelistAccountId: {
			readonly supportChain: TangleSlpxSupportChain;
			readonly evmContractAccountId: AccountId32;
		} & Struct;
		readonly isXcmMint: boolean;
		readonly asXcmMint: {
			readonly evmCaller: H160;
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly tokenAmount: u128;
			readonly targetChain: TangleSlpxTargetChain;
		} & Struct;
		readonly isXcmMintFailed: boolean;
		readonly asXcmMintFailed: {
			readonly evmCaller: H160;
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly tokenAmount: u128;
			readonly targetChain: TangleSlpxTargetChain;
		} & Struct;
		readonly isXcmZenlinkSwap: boolean;
		readonly asXcmZenlinkSwap: {
			readonly evmCaller: H160;
			readonly currencyIdIn: TanglePrimitivesCurrencyCurrencyId;
			readonly currencyIdOut: TanglePrimitivesCurrencyCurrencyId;
			readonly currencyIdOutAmount: u128;
			readonly targetChain: TangleSlpxTargetChain;
		} & Struct;
		readonly isXcmZenlinkSwapFailed: boolean;
		readonly asXcmZenlinkSwapFailed: {
			readonly evmCaller: H160;
			readonly currencyIdIn: TanglePrimitivesCurrencyCurrencyId;
			readonly currencyIdOut: TanglePrimitivesCurrencyCurrencyId;
			readonly currencyIdInAmount: u128;
			readonly targetChain: TangleSlpxTargetChain;
		} & Struct;
		readonly isXcmStablePoolSwap: boolean;
		readonly asXcmStablePoolSwap: {
			readonly evmCaller: H160;
			readonly poolTokenIndexIn: u32;
			readonly poolTokenIndexOut: u32;
			readonly currencyIdOutAmount: u128;
			readonly targetChain: TangleSlpxTargetChain;
		} & Struct;
		readonly isXcmStablePoolSwapFailed: boolean;
		readonly asXcmStablePoolSwapFailed: {
			readonly evmCaller: H160;
			readonly poolTokenIndexIn: u32;
			readonly poolTokenIndexOut: u32;
			readonly currencyIdInAmount: u128;
			readonly targetChain: TangleSlpxTargetChain;
		} & Struct;
		readonly isXcmRedeem: boolean;
		readonly asXcmRedeem: {
			readonly evmCaller: H160;
			readonly LstId: TanglePrimitivesCurrencyCurrencyId;
			readonly LstAmount: u128;
			readonly targetChain: TangleSlpxTargetChain;
		} & Struct;
		readonly isXcmRedeemFailed: boolean;
		readonly asXcmRedeemFailed: {
			readonly evmCaller: H160;
			readonly LstId: TanglePrimitivesCurrencyCurrencyId;
			readonly LstAmount: u128;
			readonly targetChain: TangleSlpxTargetChain;
		} & Struct;
		readonly isSetTransferToFee: boolean;
		readonly asSetTransferToFee: {
			readonly supportChain: TangleSlpxSupportChain;
			readonly transferToFee: u128;
		} & Struct;
		readonly isSetExecutionFee: boolean;
		readonly asSetExecutionFee: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly executionFee: u128;
		} & Struct;
		readonly isSetCurrencyEthereumCallSwitch: boolean;
		readonly asSetCurrencyEthereumCallSwitch: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly isSupport: bool;
		} & Struct;
		readonly isSetEthereumCallConfiguration: boolean;
		readonly asSetEthereumCallConfiguration: {
			readonly xcmFee: u128;
			readonly xcmWeight: SpWeightsWeightV2Weight;
			readonly period: u32;
			readonly contract: H160;
		} & Struct;
		readonly isXcmSetTokenAmount: boolean;
		readonly asXcmSetTokenAmount: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly tokenAmount: u128;
			readonly vcurrencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly LstAmount: u128;
		} & Struct;
		readonly isSetCurrencyToSupportXcmFee: boolean;
		readonly asSetCurrencyToSupportXcmFee: {
			readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
			readonly isSupport: bool;
		} & Struct;
		readonly isSetDelayBlock: boolean;
		readonly asSetDelayBlock: {
			readonly delayBlock: u32;
		} & Struct;
		readonly isCreateOrder: boolean;
		readonly asCreateOrder: {
			readonly order: TangleSlpxOrder;
		} & Struct;
		readonly isOrderHandled: boolean;
		readonly asOrderHandled: {
			readonly order: TangleSlpxOrder;
		} & Struct;
		readonly isOrderFailed: boolean;
		readonly asOrderFailed: {
			readonly order: TangleSlpxOrder;
		} & Struct;
		readonly isInsufficientAssets: boolean;
		readonly type:
			| 'AddWhitelistAccountId'
			| 'RemoveWhitelistAccountId'
			| 'XcmMint'
			| 'XcmMintFailed'
			| 'XcmZenlinkSwap'
			| 'XcmZenlinkSwapFailed'
			| 'XcmStablePoolSwap'
			| 'XcmStablePoolSwapFailed'
			| 'XcmRedeem'
			| 'XcmRedeemFailed'
			| 'SetTransferToFee'
			| 'SetExecutionFee'
			| 'SetCurrencyEthereumCallSwitch'
			| 'SetEthereumCallConfiguration'
			| 'XcmSetTokenAmount'
			| 'SetCurrencyToSupportXcmFee'
			| 'SetDelayBlock'
			| 'CreateOrder'
			| 'OrderHandled'
			| 'OrderFailed'
			| 'InsufficientAssets';
	}

	/** @name TangleSlpxOrder (400) */
	interface TangleSlpxOrder extends Struct {
		readonly sourceChainCaller: TangleSlpxOrderCaller;
		readonly tangleChainCaller: AccountId32;
		readonly derivativeAccount: AccountId32;
		readonly createBlockNumber: u32;
		readonly currencyId: TanglePrimitivesCurrencyCurrencyId;
		readonly currencyAmount: u128;
		readonly orderType: TangleSlpxOrderType;
		readonly remark: Bytes;
		readonly targetChain: TangleSlpxTargetChain;
	}

	/** @name TangleSlpxOrderCaller (401) */
	interface TangleSlpxOrderCaller extends Enum {
		readonly isSubstrate: boolean;
		readonly asSubstrate: AccountId32;
		readonly isEvm: boolean;
		readonly asEvm: H160;
		readonly type: 'Substrate' | 'Evm';
	}

	/** @name PalletRankedCollectiveEvent (402) */
	interface PalletRankedCollectiveEvent extends Enum {
		readonly isMemberAdded: boolean;
		readonly asMemberAdded: {
			readonly who: AccountId32;
		} & Struct;
		readonly isRankChanged: boolean;
		readonly asRankChanged: {
			readonly who: AccountId32;
			readonly rank: u16;
		} & Struct;
		readonly isMemberRemoved: boolean;
		readonly asMemberRemoved: {
			readonly who: AccountId32;
			readonly rank: u16;
		} & Struct;
		readonly isVoted: boolean;
		readonly asVoted: {
			readonly who: AccountId32;
			readonly poll: u32;
			readonly vote: PalletRankedCollectiveVoteRecord;
			readonly tally: PalletRankedCollectiveTally;
		} & Struct;
		readonly type: 'MemberAdded' | 'RankChanged' | 'MemberRemoved' | 'Voted';
	}

	/** @name PalletRankedCollectiveVoteRecord (403) */
	interface PalletRankedCollectiveVoteRecord extends Enum {
		readonly isAye: boolean;
		readonly asAye: u32;
		readonly isNay: boolean;
		readonly asNay: u32;
		readonly type: 'Aye' | 'Nay';
	}

	/** @name PalletRankedCollectiveTally (404) */
	interface PalletRankedCollectiveTally extends Struct {
		readonly bareAyes: u32;
		readonly ayes: u32;
		readonly nays: u32;
	}

	/** @name TangleStableAssetEvent (406) */
	interface TangleStableAssetEvent extends Enum {
		readonly isCreatePool: boolean;
		readonly asCreatePool: {
			readonly poolId: u32;
			readonly a: u128;
			readonly swapId: AccountId32;
			readonly palletId: AccountId32;
		} & Struct;
		readonly isLiquidityAdded: boolean;
		readonly asLiquidityAdded: {
			readonly minter: AccountId32;
			readonly poolId: u32;
			readonly a: u128;
			readonly inputAmounts: Vec<u128>;
			readonly minOutputAmount: u128;
			readonly balances: Vec<u128>;
			readonly totalSupply: u128;
			readonly feeAmount: u128;
			readonly outputAmount: u128;
		} & Struct;
		readonly isTokenSwapped: boolean;
		readonly asTokenSwapped: {
			readonly swapper: AccountId32;
			readonly poolId: u32;
			readonly a: u128;
			readonly inputAsset: TanglePrimitivesCurrencyCurrencyId;
			readonly outputAsset: TanglePrimitivesCurrencyCurrencyId;
			readonly inputAmount: u128;
			readonly minOutputAmount: u128;
			readonly balances: Vec<u128>;
			readonly totalSupply: u128;
			readonly outputAmount: u128;
		} & Struct;
		readonly isRedeemedProportion: boolean;
		readonly asRedeemedProportion: {
			readonly redeemer: AccountId32;
			readonly poolId: u32;
			readonly a: u128;
			readonly inputAmount: u128;
			readonly minOutputAmounts: Vec<u128>;
			readonly balances: Vec<u128>;
			readonly totalSupply: u128;
			readonly feeAmount: u128;
			readonly outputAmounts: Vec<u128>;
		} & Struct;
		readonly isRedeemedSingle: boolean;
		readonly asRedeemedSingle: {
			readonly redeemer: AccountId32;
			readonly poolId: u32;
			readonly a: u128;
			readonly inputAmount: u128;
			readonly outputAsset: TanglePrimitivesCurrencyCurrencyId;
			readonly minOutputAmount: u128;
			readonly balances: Vec<u128>;
			readonly totalSupply: u128;
			readonly feeAmount: u128;
			readonly outputAmount: u128;
		} & Struct;
		readonly isRedeemedMulti: boolean;
		readonly asRedeemedMulti: {
			readonly redeemer: AccountId32;
			readonly poolId: u32;
			readonly a: u128;
			readonly outputAmounts: Vec<u128>;
			readonly maxInputAmount: u128;
			readonly balances: Vec<u128>;
			readonly totalSupply: u128;
			readonly feeAmount: u128;
			readonly inputAmount: u128;
		} & Struct;
		readonly isBalanceUpdated: boolean;
		readonly asBalanceUpdated: {
			readonly poolId: u32;
			readonly oldBalances: Vec<u128>;
			readonly newBalances: Vec<u128>;
		} & Struct;
		readonly isYieldCollected: boolean;
		readonly asYieldCollected: {
			readonly poolId: u32;
			readonly a: u128;
			readonly oldTotalSupply: u128;
			readonly newTotalSupply: u128;
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isFeeCollected: boolean;
		readonly asFeeCollected: {
			readonly poolId: u32;
			readonly a: u128;
			readonly oldBalances: Vec<u128>;
			readonly newBalances: Vec<u128>;
			readonly oldTotalSupply: u128;
			readonly newTotalSupply: u128;
			readonly who: AccountId32;
			readonly amount: u128;
		} & Struct;
		readonly isAModified: boolean;
		readonly asAModified: {
			readonly poolId: u32;
			readonly value: u128;
			readonly time: u32;
		} & Struct;
		readonly isFeeModified: boolean;
		readonly asFeeModified: {
			readonly poolId: u32;
			readonly mintFee: u128;
			readonly swapFee: u128;
			readonly redeemFee: u128;
		} & Struct;
		readonly isRecipientModified: boolean;
		readonly asRecipientModified: {
			readonly poolId: u32;
			readonly feeRecipient: AccountId32;
			readonly yieldRecipient: AccountId32;
		} & Struct;
		readonly isTokenRateSet: boolean;
		readonly asTokenRateSet: {
			readonly poolId: u32;
			readonly tokenRate: Vec<ITuple<[TanglePrimitivesCurrencyCurrencyId, ITuple<[u128, u128]>]>>;
		} & Struct;
		readonly isTokenRateHardcapConfigured: boolean;
		readonly asTokenRateHardcapConfigured: {
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly hardcap: Permill;
		} & Struct;
		readonly isTokenRateHardcapRemoved: boolean;
		readonly asTokenRateHardcapRemoved: {
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
		} & Struct;
		readonly isTokenRateRefreshFailed: boolean;
		readonly asTokenRateRefreshFailed: {
			readonly poolId: u32;
		} & Struct;
		readonly type:
			| 'CreatePool'
			| 'LiquidityAdded'
			| 'TokenSwapped'
			| 'RedeemedProportion'
			| 'RedeemedSingle'
			| 'RedeemedMulti'
			| 'BalanceUpdated'
			| 'YieldCollected'
			| 'FeeCollected'
			| 'AModified'
			| 'FeeModified'
			| 'RecipientModified'
			| 'TokenRateSet'
			| 'TokenRateHardcapConfigured'
			| 'TokenRateHardcapRemoved'
			| 'TokenRateRefreshFailed';
	}

	/** @name TangleLstVotingEvent (407) */
	interface TangleLstVotingEvent extends Enum {
		readonly isVoted: boolean;
		readonly asVoted: {
			readonly who: AccountId32;
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly pollIndex: u32;
			readonly tokenVote: TangleLstVotingVoteAccountVote;
			readonly delegatorVote: TangleLstVotingVoteAccountVote;
		} & Struct;
		readonly isUnlocked: boolean;
		readonly asUnlocked: {
			readonly who: AccountId32;
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly pollIndex: u32;
		} & Struct;
		readonly isDelegatorVoteRemoved: boolean;
		readonly asDelegatorVoteRemoved: {
			readonly who: AccountId32;
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly derivativeIndex: u16;
		} & Struct;
		readonly isDelegatorAdded: boolean;
		readonly asDelegatorAdded: {
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly derivativeIndex: u16;
		} & Struct;
		readonly isReferendumInfoCreated: boolean;
		readonly asReferendumInfoCreated: {
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly pollIndex: u32;
			readonly info: TangleLstVotingVoteReferendumInfo;
		} & Struct;
		readonly isReferendumInfoSet: boolean;
		readonly asReferendumInfoSet: {
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly pollIndex: u32;
			readonly info: TangleLstVotingVoteReferendumInfo;
		} & Struct;
		readonly isVoteLockingPeriodSet: boolean;
		readonly asVoteLockingPeriodSet: {
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly lockingPeriod: u32;
		} & Struct;
		readonly isUndecidingTimeoutSet: boolean;
		readonly asUndecidingTimeoutSet: {
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly undecidingTimeout: u32;
		} & Struct;
		readonly isReferendumKilled: boolean;
		readonly asReferendumKilled: {
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly pollIndex: u32;
		} & Struct;
		readonly isVoteNotified: boolean;
		readonly asVoteNotified: {
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly pollIndex: u32;
			readonly success: bool;
		} & Struct;
		readonly isDelegatorVoteRemovedNotified: boolean;
		readonly asDelegatorVoteRemovedNotified: {
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly pollIndex: u32;
			readonly success: bool;
		} & Struct;
		readonly isResponseReceived: boolean;
		readonly asResponseReceived: {
			readonly responder: StagingXcmV3MultiLocation;
			readonly queryId: u64;
			readonly response: XcmV3Response;
		} & Struct;
		readonly isVoteCapRatioSet: boolean;
		readonly asVoteCapRatioSet: {
			readonly lst: TanglePrimitivesCurrencyCurrencyId;
			readonly voteCapRatio: Perbill;
		} & Struct;
		readonly type:
			| 'Voted'
			| 'Unlocked'
			| 'DelegatorVoteRemoved'
			| 'DelegatorAdded'
			| 'ReferendumInfoCreated'
			| 'ReferendumInfoSet'
			| 'VoteLockingPeriodSet'
			| 'UndecidingTimeoutSet'
			| 'ReferendumKilled'
			| 'VoteNotified'
			| 'DelegatorVoteRemovedNotified'
			| 'ResponseReceived'
			| 'VoteCapRatioSet';
	}

	/** @name PalletPricesEvent (408) */
	interface PalletPricesEvent extends Enum {
		readonly isSetPrice: boolean;
		readonly asSetPrice: ITuple<[TanglePrimitivesCurrencyCurrencyId, u128]>;
		readonly isResetPrice: boolean;
		readonly asResetPrice: TanglePrimitivesCurrencyCurrencyId;
		readonly type: 'SetPrice' | 'ResetPrice';
	}

	/** @name OrmlOracleModuleEvent (409) */
	interface OrmlOracleModuleEvent extends Enum {
		readonly isNewFeedData: boolean;
		readonly asNewFeedData: {
			readonly sender: AccountId32;
			readonly values: Vec<ITuple<[TanglePrimitivesCurrencyCurrencyId, u128]>>;
		} & Struct;
		readonly type: 'NewFeedData';
	}

	/** @name FrameSystemPhase (411) */
	interface FrameSystemPhase extends Enum {
		readonly isApplyExtrinsic: boolean;
		readonly asApplyExtrinsic: u32;
		readonly isFinalization: boolean;
		readonly isInitialization: boolean;
		readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
	}

	/** @name FrameSystemLastRuntimeUpgradeInfo (413) */
	interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
		readonly specVersion: Compact<u32>;
		readonly specName: Text;
	}

	/** @name FrameSystemLimitsBlockWeights (415) */
	interface FrameSystemLimitsBlockWeights extends Struct {
		readonly baseBlock: SpWeightsWeightV2Weight;
		readonly maxBlock: SpWeightsWeightV2Weight;
		readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
	}

	/** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (416) */
	interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
		readonly normal: FrameSystemLimitsWeightsPerClass;
		readonly operational: FrameSystemLimitsWeightsPerClass;
		readonly mandatory: FrameSystemLimitsWeightsPerClass;
	}

	/** @name FrameSystemLimitsWeightsPerClass (417) */
	interface FrameSystemLimitsWeightsPerClass extends Struct {
		readonly baseExtrinsic: SpWeightsWeightV2Weight;
		readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
		readonly maxTotal: Option<SpWeightsWeightV2Weight>;
		readonly reserved: Option<SpWeightsWeightV2Weight>;
	}

	/** @name FrameSystemLimitsBlockLength (418) */
	interface FrameSystemLimitsBlockLength extends Struct {
		readonly max: FrameSupportDispatchPerDispatchClassU32;
	}

	/** @name FrameSupportDispatchPerDispatchClassU32 (419) */
	interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
		readonly normal: u32;
		readonly operational: u32;
		readonly mandatory: u32;
	}

	/** @name SpWeightsRuntimeDbWeight (420) */
	interface SpWeightsRuntimeDbWeight extends Struct {
		readonly read: u64;
		readonly write: u64;
	}

	/** @name SpVersionRuntimeVersion (421) */
	interface SpVersionRuntimeVersion extends Struct {
		readonly specName: Text;
		readonly implName: Text;
		readonly authoringVersion: u32;
		readonly specVersion: u32;
		readonly implVersion: u32;
		readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
		readonly transactionVersion: u32;
		readonly stateVersion: u8;
	}

	/** @name FrameSystemError (425) */
	interface FrameSystemError extends Enum {
		readonly isInvalidSpecName: boolean;
		readonly isSpecVersionNeedsToIncrease: boolean;
		readonly isFailedToExtractRuntimeVersion: boolean;
		readonly isNonDefaultComposite: boolean;
		readonly isNonZeroRefCount: boolean;
		readonly isCallFiltered: boolean;
		readonly type:
			| 'InvalidSpecName'
			| 'SpecVersionNeedsToIncrease'
			| 'FailedToExtractRuntimeVersion'
			| 'NonDefaultComposite'
			| 'NonZeroRefCount'
			| 'CallFiltered';
	}

	/** @name PalletIndicesError (427) */
	interface PalletIndicesError extends Enum {
		readonly isNotAssigned: boolean;
		readonly isNotOwner: boolean;
		readonly isInUse: boolean;
		readonly isNotTransfer: boolean;
		readonly isPermanent: boolean;
		readonly type: 'NotAssigned' | 'NotOwner' | 'InUse' | 'NotTransfer' | 'Permanent';
	}

	/** @name CumulusPalletParachainSystemUnincludedSegmentAncestor (429) */
	interface CumulusPalletParachainSystemUnincludedSegmentAncestor extends Struct {
		readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
		readonly paraHeadHash: Option<H256>;
		readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV6UpgradeGoAhead>;
	}

	/** @name CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth (430) */
	interface CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth extends Struct {
		readonly umpMsgCount: u32;
		readonly umpTotalBytes: u32;
		readonly hrmpOutgoing: BTreeMap<
			u32,
			CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate
		>;
	}

	/** @name CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate (432) */
	interface CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate extends Struct {
		readonly msgCount: u32;
		readonly totalBytes: u32;
	}

	/** @name PolkadotPrimitivesV6UpgradeGoAhead (436) */
	interface PolkadotPrimitivesV6UpgradeGoAhead extends Enum {
		readonly isAbort: boolean;
		readonly isGoAhead: boolean;
		readonly type: 'Abort' | 'GoAhead';
	}

	/** @name CumulusPalletParachainSystemUnincludedSegmentSegmentTracker (437) */
	interface CumulusPalletParachainSystemUnincludedSegmentSegmentTracker extends Struct {
		readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
		readonly hrmpWatermark: Option<u32>;
		readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV6UpgradeGoAhead>;
	}

	/** @name PolkadotPrimitivesV6UpgradeRestriction (439) */
	interface PolkadotPrimitivesV6UpgradeRestriction extends Enum {
		readonly isPresent: boolean;
		readonly type: 'Present';
	}

	/** @name CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot (440) */
	interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Struct {
		readonly dmqMqcHead: H256;
		readonly relayDispatchQueueRemainingCapacity: CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity;
		readonly ingressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV6AbridgedHrmpChannel]>>;
		readonly egressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV6AbridgedHrmpChannel]>>;
	}

	/** @name CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity (441) */
	interface CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity
		extends Struct {
		readonly remainingCount: u32;
		readonly remainingSize: u32;
	}

	/** @name PolkadotPrimitivesV6AbridgedHrmpChannel (444) */
	interface PolkadotPrimitivesV6AbridgedHrmpChannel extends Struct {
		readonly maxCapacity: u32;
		readonly maxTotalSize: u32;
		readonly maxMessageSize: u32;
		readonly msgCount: u32;
		readonly totalSize: u32;
		readonly mqcHead: Option<H256>;
	}

	/** @name PolkadotPrimitivesV6AbridgedHostConfiguration (445) */
	interface PolkadotPrimitivesV6AbridgedHostConfiguration extends Struct {
		readonly maxCodeSize: u32;
		readonly maxHeadDataSize: u32;
		readonly maxUpwardQueueCount: u32;
		readonly maxUpwardQueueSize: u32;
		readonly maxUpwardMessageSize: u32;
		readonly maxUpwardMessageNumPerCandidate: u32;
		readonly hrmpMaxMessageNumPerCandidate: u32;
		readonly validationUpgradeCooldown: u32;
		readonly validationUpgradeDelay: u32;
		readonly asyncBackingParams: PolkadotPrimitivesV6AsyncBackingAsyncBackingParams;
	}

	/** @name PolkadotPrimitivesV6AsyncBackingAsyncBackingParams (446) */
	interface PolkadotPrimitivesV6AsyncBackingAsyncBackingParams extends Struct {
		readonly maxCandidateDepth: u32;
		readonly allowedAncestryLen: u32;
	}

	/** @name PolkadotCorePrimitivesOutboundHrmpMessage (452) */
	interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
		readonly recipient: u32;
		readonly data: Bytes;
	}

	/** @name CumulusPalletParachainSystemCodeUpgradeAuthorization (453) */
	interface CumulusPalletParachainSystemCodeUpgradeAuthorization extends Struct {
		readonly codeHash: H256;
		readonly checkVersion: bool;
	}

	/** @name CumulusPalletParachainSystemError (454) */
	interface CumulusPalletParachainSystemError extends Enum {
		readonly isOverlappingUpgrades: boolean;
		readonly isProhibitedByPolkadot: boolean;
		readonly isTooBig: boolean;
		readonly isValidationDataNotAvailable: boolean;
		readonly isHostConfigurationNotAvailable: boolean;
		readonly isNotScheduled: boolean;
		readonly isNothingAuthorized: boolean;
		readonly isUnauthorized: boolean;
		readonly type:
			| 'OverlappingUpgrades'
			| 'ProhibitedByPolkadot'
			| 'TooBig'
			| 'ValidationDataNotAvailable'
			| 'HostConfigurationNotAvailable'
			| 'NotScheduled'
			| 'NothingAuthorized'
			| 'Unauthorized';
	}

	/** @name PalletBalancesBalanceLock (456) */
	interface PalletBalancesBalanceLock extends Struct {
		readonly id: U8aFixed;
		readonly amount: u128;
		readonly reasons: PalletBalancesReasons;
	}

	/** @name PalletBalancesReasons (457) */
	interface PalletBalancesReasons extends Enum {
		readonly isFee: boolean;
		readonly isMisc: boolean;
		readonly isAll: boolean;
		readonly type: 'Fee' | 'Misc' | 'All';
	}

	/** @name PalletBalancesReserveData (460) */
	interface PalletBalancesReserveData extends Struct {
		readonly id: U8aFixed;
		readonly amount: u128;
	}

	/** @name TangleKusamaRuntimeRuntimeHoldReason (464) */
	interface TangleKusamaRuntimeRuntimeHoldReason extends Enum {
		readonly isPreimage: boolean;
		readonly asPreimage: PalletPreimageHoldReason;
		readonly type: 'Preimage';
	}

	/** @name PalletPreimageHoldReason (465) */
	interface PalletPreimageHoldReason extends Enum {
		readonly isPreimage: boolean;
		readonly type: 'Preimage';
	}

	/** @name PalletBalancesIdAmount (468) */
	interface PalletBalancesIdAmount extends Struct {
		readonly id: Null;
		readonly amount: u128;
	}

	/** @name PalletBalancesError (470) */
	interface PalletBalancesError extends Enum {
		readonly isVestingBalance: boolean;
		readonly isLiquidityRestrictions: boolean;
		readonly isInsufficientBalance: boolean;
		readonly isExistentialDeposit: boolean;
		readonly isExpendability: boolean;
		readonly isExistingVestingSchedule: boolean;
		readonly isDeadAccount: boolean;
		readonly isTooManyReserves: boolean;
		readonly isTooManyHolds: boolean;
		readonly isTooManyFreezes: boolean;
		readonly type:
			| 'VestingBalance'
			| 'LiquidityRestrictions'
			| 'InsufficientBalance'
			| 'ExistentialDeposit'
			| 'Expendability'
			| 'ExistingVestingSchedule'
			| 'DeadAccount'
			| 'TooManyReserves'
			| 'TooManyHolds'
			| 'TooManyFreezes';
	}

	/** @name PalletTransactionPaymentReleases (471) */
	interface PalletTransactionPaymentReleases extends Enum {
		readonly isV1Ancient: boolean;
		readonly isV2: boolean;
		readonly type: 'V1Ancient' | 'V2';
	}

	/** @name SpCoreCryptoKeyTypeId (475) */
	interface SpCoreCryptoKeyTypeId extends U8aFixed {}

	/** @name PalletSessionError (476) */
	interface PalletSessionError extends Enum {
		readonly isInvalidProof: boolean;
		readonly isNoAssociatedValidatorId: boolean;
		readonly isDuplicatedKey: boolean;
		readonly isNoKeys: boolean;
		readonly isNoAccount: boolean;
		readonly type:
			| 'InvalidProof'
			| 'NoAssociatedValidatorId'
			| 'DuplicatedKey'
			| 'NoKeys'
			| 'NoAccount';
	}

	/** @name TangleParachainStakingParachainBondConfig (481) */
	interface TangleParachainStakingParachainBondConfig extends Struct {
		readonly account: AccountId32;
		readonly percent: Percent;
		readonly paymentInRound: u128;
	}

	/** @name TangleParachainStakingRoundInfo (482) */
	interface TangleParachainStakingRoundInfo extends Struct {
		readonly current: u32;
		readonly first: u32;
		readonly length: u32;
	}

	/** @name TangleParachainStakingDelegator (483) */
	interface TangleParachainStakingDelegator extends Struct {
		readonly id: AccountId32;
		readonly delegations: TangleParachainStakingSetOrderedSet;
		readonly total: u128;
		readonly lessTotal: u128;
		readonly status: TangleParachainStakingDelegatorStatus;
	}

	/** @name TangleParachainStakingSetOrderedSet (484) */
	interface TangleParachainStakingSetOrderedSet extends Vec<TangleParachainStakingBond> {}

	/** @name TangleParachainStakingBond (485) */
	interface TangleParachainStakingBond extends Struct {
		readonly owner: AccountId32;
		readonly amount: u128;
	}

	/** @name TangleParachainStakingDelegatorStatus (487) */
	interface TangleParachainStakingDelegatorStatus extends Enum {
		readonly isActive: boolean;
		readonly isLeaving: boolean;
		readonly asLeaving: u32;
		readonly type: 'Active' | 'Leaving';
	}

	/** @name TangleParachainStakingCandidateMetadata (488) */
	interface TangleParachainStakingCandidateMetadata extends Struct {
		readonly bond: u128;
		readonly delegationCount: u32;
		readonly totalCounted: u128;
		readonly lowestTopDelegationAmount: u128;
		readonly highestBottomDelegationAmount: u128;
		readonly lowestBottomDelegationAmount: u128;
		readonly topCapacity: TangleParachainStakingCapacityStatus;
		readonly bottomCapacity: TangleParachainStakingCapacityStatus;
		readonly request: Option<TangleParachainStakingCandidateBondLessRequest>;
		readonly status: TangleParachainStakingCollatorStatus;
	}

	/** @name TangleParachainStakingCapacityStatus (489) */
	interface TangleParachainStakingCapacityStatus extends Enum {
		readonly isFull: boolean;
		readonly isEmpty: boolean;
		readonly isPartial: boolean;
		readonly type: 'Full' | 'Empty' | 'Partial';
	}

	/** @name TangleParachainStakingCandidateBondLessRequest (491) */
	interface TangleParachainStakingCandidateBondLessRequest extends Struct {
		readonly amount: u128;
		readonly whenExecutable: u32;
	}

	/** @name TangleParachainStakingCollatorStatus (492) */
	interface TangleParachainStakingCollatorStatus extends Enum {
		readonly isActive: boolean;
		readonly isIdle: boolean;
		readonly isLeaving: boolean;
		readonly asLeaving: u32;
		readonly type: 'Active' | 'Idle' | 'Leaving';
	}

	/** @name TangleParachainStakingDelegationRequestsScheduledRequest (494) */
	interface TangleParachainStakingDelegationRequestsScheduledRequest extends Struct {
		readonly delegator: AccountId32;
		readonly whenExecutable: u32;
		readonly action: TangleParachainStakingDelegationRequestsDelegationAction;
	}

	/** @name TangleParachainStakingDelegations (495) */
	interface TangleParachainStakingDelegations extends Struct {
		readonly delegations: Vec<TangleParachainStakingBond>;
		readonly total: u128;
	}

	/** @name TangleParachainStakingCollatorSnapshot (497) */
	interface TangleParachainStakingCollatorSnapshot extends Struct {
		readonly bond: u128;
		readonly delegations: Vec<TangleParachainStakingBond>;
		readonly total: u128;
	}

	/** @name TangleParachainStakingDelayedPayout (498) */
	interface TangleParachainStakingDelayedPayout extends Struct {
		readonly roundIssuance: u128;
		readonly totaLstakingReward: u128;
		readonly collatorCommission: Perbill;
	}

	/** @name TangleParachainStakingInflationInflationInfo (499) */
	interface TangleParachainStakingInflationInflationInfo extends Struct {
		readonly expect: {
			readonly min: u128;
			readonly ideal: u128;
			readonly max: u128;
		} & Struct;
		readonly annual: {
			readonly min: Perbill;
			readonly ideal: Perbill;
			readonly max: Perbill;
		} & Struct;
		readonly round: {
			readonly min: Perbill;
			readonly ideal: Perbill;
			readonly max: Perbill;
		} & Struct;
	}

	/** @name FrameSupportPalletId (500) */
	interface FrameSupportPalletId extends U8aFixed {}

	/** @name TangleParachainStakingError (501) */
	interface TangleParachainStakingError extends Enum {
		readonly isDelegatorDNE: boolean;
		readonly isDelegatorDNEinTopNorBottom: boolean;
		readonly isDelegatorDNEInDelegatorSet: boolean;
		readonly isCandidateDNE: boolean;
		readonly isDelegationDNE: boolean;
		readonly isDelegatorExists: boolean;
		readonly isCandidateExists: boolean;
		readonly isCandidateBondBelowMin: boolean;
		readonly isInsufficientBalance: boolean;
		readonly isDelegatorBondBelowMin: boolean;
		readonly isDelegationBelowMin: boolean;
		readonly isAlreadyOffline: boolean;
		readonly isAlreadyActive: boolean;
		readonly isDelegatorAlreadyLeaving: boolean;
		readonly isDelegatorNotLeaving: boolean;
		readonly isDelegatorCannotLeaveYet: boolean;
		readonly isCannotDelegateIfLeaving: boolean;
		readonly isCandidateAlreadyLeaving: boolean;
		readonly isCandidateNotLeaving: boolean;
		readonly isCandidateCannotLeaveYet: boolean;
		readonly isCannotGoOnlineIfLeaving: boolean;
		readonly isExceedMaxDelegationsPerDelegator: boolean;
		readonly isAlreadyDelegatedCandidate: boolean;
		readonly isInvalidSchedule: boolean;
		readonly isCannotSetBelowMin: boolean;
		readonly isRoundLengthMustBeAtLeastTotalSelectedCollators: boolean;
		readonly isNoWritingSameValue: boolean;
		readonly isTooLowCandidateCountWeightHintJoinCandidates: boolean;
		readonly isTooLowCandidateCountWeightHintCancelLeaveCandidates: boolean;
		readonly isTooLowCandidateCountToLeaveCandidates: boolean;
		readonly isTooLowDelegationCountToDelegate: boolean;
		readonly isTooLowCandidateDelegationCountToDelegate: boolean;
		readonly isTooLowCandidateDelegationCountToLeaveCandidates: boolean;
		readonly isTooLowDelegationCountToLeaveDelegators: boolean;
		readonly isPendingCandidateRequestsDNE: boolean;
		readonly isPendingCandidateRequestAlreadyExists: boolean;
		readonly isPendingCandidateRequestNotDueYet: boolean;
		readonly isPendingDelegationRequestDNE: boolean;
		readonly isPendingDelegationRequestAlreadyExists: boolean;
		readonly isPendingDelegationRequestNotDueYet: boolean;
		readonly isCannotDelegateLessThanOrEqualToLowestBottomWhenFull: boolean;
		readonly isPendingDelegationRevoke: boolean;
		readonly type:
			| 'DelegatorDNE'
			| 'DelegatorDNEinTopNorBottom'
			| 'DelegatorDNEInDelegatorSet'
			| 'CandidateDNE'
			| 'DelegationDNE'
			| 'DelegatorExists'
			| 'CandidateExists'
			| 'CandidateBondBelowMin'
			| 'InsufficientBalance'
			| 'DelegatorBondBelowMin'
			| 'DelegationBelowMin'
			| 'AlreadyOffline'
			| 'AlreadyActive'
			| 'DelegatorAlreadyLeaving'
			| 'DelegatorNotLeaving'
			| 'DelegatorCannotLeaveYet'
			| 'CannotDelegateIfLeaving'
			| 'CandidateAlreadyLeaving'
			| 'CandidateNotLeaving'
			| 'CandidateCannotLeaveYet'
			| 'CannotGoOnlineIfLeaving'
			| 'ExceedMaxDelegationsPerDelegator'
			| 'AlreadyDelegatedCandidate'
			| 'InvalidSchedule'
			| 'CannotSetBelowMin'
			| 'RoundLengthMustBeAtLeastTotalSelectedCollators'
			| 'NoWritingSameValue'
			| 'TooLowCandidateCountWeightHintJoinCandidates'
			| 'TooLowCandidateCountWeightHintCancelLeaveCandidates'
			| 'TooLowCandidateCountToLeaveCandidates'
			| 'TooLowDelegationCountToDelegate'
			| 'TooLowCandidateDelegationCountToDelegate'
			| 'TooLowCandidateDelegationCountToLeaveCandidates'
			| 'TooLowDelegationCountToLeaveDelegators'
			| 'PendingCandidateRequestsDNE'
			| 'PendingCandidateRequestAlreadyExists'
			| 'PendingCandidateRequestNotDueYet'
			| 'PendingDelegationRequestDNE'
			| 'PendingDelegationRequestAlreadyExists'
			| 'PendingDelegationRequestNotDueYet'
			| 'CannotDelegateLessThanOrEqualToLowestBottomWhenFull'
			| 'PendingDelegationRevoke';
	}

	/** @name PalletDemocracyReferendumInfo (507) */
	interface PalletDemocracyReferendumInfo extends Enum {
		readonly isOngoing: boolean;
		readonly asOngoing: PalletDemocracyReferendumStatus;
		readonly isFinished: boolean;
		readonly asFinished: {
			readonly approved: bool;
			readonly end: u32;
		} & Struct;
		readonly type: 'Ongoing' | 'Finished';
	}

	/** @name PalletDemocracyReferendumStatus (508) */
	interface PalletDemocracyReferendumStatus extends Struct {
		readonly end: u32;
		readonly proposal: FrameSupportPreimagesBounded;
		readonly threshold: PalletDemocracyVoteThreshold;
		readonly delay: u32;
		readonly tally: PalletDemocracyTally;
	}

	/** @name PalletDemocracyTally (509) */
	interface PalletDemocracyTally extends Struct {
		readonly ayes: u128;
		readonly nays: u128;
		readonly turnout: u128;
	}

	/** @name PalletDemocracyVoteVoting (510) */
	interface PalletDemocracyVoteVoting extends Enum {
		readonly isDirect: boolean;
		readonly asDirect: {
			readonly votes: Vec<ITuple<[u32, PalletDemocracyVoteAccountVote]>>;
			readonly delegations: PalletDemocracyDelegations;
			readonly prior: PalletDemocracyVotePriorLock;
		} & Struct;
		readonly isDelegating: boolean;
		readonly asDelegating: {
			readonly balance: u128;
			readonly target: AccountId32;
			readonly conviction: PalletDemocracyConviction;
			readonly delegations: PalletDemocracyDelegations;
			readonly prior: PalletDemocracyVotePriorLock;
		} & Struct;
		readonly type: 'Direct' | 'Delegating';
	}

	/** @name PalletDemocracyDelegations (514) */
	interface PalletDemocracyDelegations extends Struct {
		readonly votes: u128;
		readonly capital: u128;
	}

	/** @name PalletDemocracyVotePriorLock (515) */
	interface PalletDemocracyVotePriorLock extends ITuple<[u32, u128]> {}

	/** @name PalletDemocracyError (518) */
	interface PalletDemocracyError extends Enum {
		readonly isValueLow: boolean;
		readonly isProposalMissing: boolean;
		readonly isAlreadyCanceled: boolean;
		readonly isDuplicateProposal: boolean;
		readonly isProposalBlacklisted: boolean;
		readonly isNotSimpleMajority: boolean;
		readonly isInvalidHash: boolean;
		readonly isNoProposal: boolean;
		readonly isAlreadyVetoed: boolean;
		readonly isReferendumInvalid: boolean;
		readonly isNoneWaiting: boolean;
		readonly isNotVoter: boolean;
		readonly isNoPermission: boolean;
		readonly isAlreadyDelegating: boolean;
		readonly isInsufficientFunds: boolean;
		readonly isNotDelegating: boolean;
		readonly isVotesExist: boolean;
		readonly isInstantNotAllowed: boolean;
		readonly isNonsense: boolean;
		readonly isWrongUpperBound: boolean;
		readonly isMaxVotesReached: boolean;
		readonly isTooMany: boolean;
		readonly isVotingPeriodLow: boolean;
		readonly isPreimageNotExist: boolean;
		readonly type:
			| 'ValueLow'
			| 'ProposalMissing'
			| 'AlreadyCanceled'
			| 'DuplicateProposal'
			| 'ProposalBlacklisted'
			| 'NotSimpleMajority'
			| 'InvalidHash'
			| 'NoProposal'
			| 'AlreadyVetoed'
			| 'ReferendumInvalid'
			| 'NoneWaiting'
			| 'NotVoter'
			| 'NoPermission'
			| 'AlreadyDelegating'
			| 'InsufficientFunds'
			| 'NotDelegating'
			| 'VotesExist'
			| 'InstantNotAllowed'
			| 'Nonsense'
			| 'WrongUpperBound'
			| 'MaxVotesReached'
			| 'TooMany'
			| 'VotingPeriodLow'
			| 'PreimageNotExist';
	}

	/** @name PalletCollectiveVotes (520) */
	interface PalletCollectiveVotes extends Struct {
		readonly index: u32;
		readonly threshold: u32;
		readonly ayes: Vec<AccountId32>;
		readonly nays: Vec<AccountId32>;
		readonly end: u32;
	}

	/** @name PalletCollectiveError (521) */
	interface PalletCollectiveError extends Enum {
		readonly isNotMember: boolean;
		readonly isDuplicateProposal: boolean;
		readonly isProposalMissing: boolean;
		readonly isWrongIndex: boolean;
		readonly isDuplicateVote: boolean;
		readonly isAlreadyInitialized: boolean;
		readonly isTooEarly: boolean;
		readonly isTooManyProposals: boolean;
		readonly isWrongProposalWeight: boolean;
		readonly isWrongProposalLength: boolean;
		readonly isPrimeAccountNotMember: boolean;
		readonly type:
			| 'NotMember'
			| 'DuplicateProposal'
			| 'ProposalMissing'
			| 'WrongIndex'
			| 'DuplicateVote'
			| 'AlreadyInitialized'
			| 'TooEarly'
			| 'TooManyProposals'
			| 'WrongProposalWeight'
			| 'WrongProposalLength'
			| 'PrimeAccountNotMember';
	}

	/** @name PalletElectionsPhragmenSeatHolder (525) */
	interface PalletElectionsPhragmenSeatHolder extends Struct {
		readonly who: AccountId32;
		readonly stake: u128;
		readonly deposit: u128;
	}

	/** @name PalletElectionsPhragmenVoter (526) */
	interface PalletElectionsPhragmenVoter extends Struct {
		readonly votes: Vec<AccountId32>;
		readonly stake: u128;
		readonly deposit: u128;
	}

	/** @name PalletElectionsPhragmenError (527) */
	interface PalletElectionsPhragmenError extends Enum {
		readonly isUnableToVote: boolean;
		readonly isNoVotes: boolean;
		readonly isTooManyVotes: boolean;
		readonly isMaximumVotesExceeded: boolean;
		readonly isLowBalance: boolean;
		readonly isUnableToPayBond: boolean;
		readonly isMustBeVoter: boolean;
		readonly isDuplicatedCandidate: boolean;
		readonly isTooManyCandidates: boolean;
		readonly isMemberSubmit: boolean;
		readonly isRunnerUpSubmit: boolean;
		readonly isInsufficientCandidateFunds: boolean;
		readonly isNotMember: boolean;
		readonly isInvalidWitnessData: boolean;
		readonly isInvalidVoteCount: boolean;
		readonly isInvalidRenouncing: boolean;
		readonly isInvalidReplacement: boolean;
		readonly type:
			| 'UnableToVote'
			| 'NoVotes'
			| 'TooManyVotes'
			| 'MaximumVotesExceeded'
			| 'LowBalance'
			| 'UnableToPayBond'
			| 'MustBeVoter'
			| 'DuplicatedCandidate'
			| 'TooManyCandidates'
			| 'MemberSubmit'
			| 'RunnerUpSubmit'
			| 'InsufficientCandidateFunds'
			| 'NotMember'
			| 'InvalidWitnessData'
			| 'InvalidVoteCount'
			| 'InvalidRenouncing'
			| 'InvalidReplacement';
	}

	/** @name PalletMembershipError (529) */
	interface PalletMembershipError extends Enum {
		readonly isAlreadyMember: boolean;
		readonly isNotMember: boolean;
		readonly isTooManyMembers: boolean;
		readonly type: 'AlreadyMember' | 'NotMember' | 'TooManyMembers';
	}

	/** @name PalletConvictionVotingVoteVoting (533) */
	interface PalletConvictionVotingVoteVoting extends Enum {
		readonly isCasting: boolean;
		readonly asCasting: PalletConvictionVotingVoteCasting;
		readonly isDelegating: boolean;
		readonly asDelegating: PalletConvictionVotingVoteDelegating;
		readonly type: 'Casting' | 'Delegating';
	}

	/** @name PalletConvictionVotingVoteCasting (534) */
	interface PalletConvictionVotingVoteCasting extends Struct {
		readonly votes: Vec<ITuple<[u32, PalletConvictionVotingVoteAccountVote]>>;
		readonly delegations: PalletConvictionVotingDelegations;
		readonly prior: PalletConvictionVotingVotePriorLock;
	}

	/** @name PalletConvictionVotingDelegations (538) */
	interface PalletConvictionVotingDelegations extends Struct {
		readonly votes: u128;
		readonly capital: u128;
	}

	/** @name PalletConvictionVotingVotePriorLock (539) */
	interface PalletConvictionVotingVotePriorLock extends ITuple<[u32, u128]> {}

	/** @name PalletConvictionVotingVoteDelegating (540) */
	interface PalletConvictionVotingVoteDelegating extends Struct {
		readonly balance: u128;
		readonly target: AccountId32;
		readonly conviction: PalletConvictionVotingConviction;
		readonly delegations: PalletConvictionVotingDelegations;
		readonly prior: PalletConvictionVotingVotePriorLock;
	}

	/** @name PalletConvictionVotingError (544) */
	interface PalletConvictionVotingError extends Enum {
		readonly isNotOngoing: boolean;
		readonly isNotVoter: boolean;
		readonly isNoPermission: boolean;
		readonly isNoPermissionYet: boolean;
		readonly isAlreadyDelegating: boolean;
		readonly isAlreadyVoting: boolean;
		readonly isInsufficientFunds: boolean;
		readonly isNotDelegating: boolean;
		readonly isNonsense: boolean;
		readonly isMaxVotesReached: boolean;
		readonly isClassNeeded: boolean;
		readonly isBadClass: boolean;
		readonly type:
			| 'NotOngoing'
			| 'NotVoter'
			| 'NoPermission'
			| 'NoPermissionYet'
			| 'AlreadyDelegating'
			| 'AlreadyVoting'
			| 'InsufficientFunds'
			| 'NotDelegating'
			| 'Nonsense'
			| 'MaxVotesReached'
			| 'ClassNeeded'
			| 'BadClass';
	}

	/** @name PalletReferendaReferendumInfoConvictionVotingTally (545) */
	interface PalletReferendaReferendumInfoConvictionVotingTally extends Enum {
		readonly isOngoing: boolean;
		readonly asOngoing: PalletReferendaReferendumStatusConvictionVotingTally;
		readonly isApproved: boolean;
		readonly asApproved: ITuple<
			[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]
		>;
		readonly isRejected: boolean;
		readonly asRejected: ITuple<
			[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]
		>;
		readonly isCancelled: boolean;
		readonly asCancelled: ITuple<
			[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]
		>;
		readonly isTimedOut: boolean;
		readonly asTimedOut: ITuple<
			[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]
		>;
		readonly isKilled: boolean;
		readonly asKilled: u32;
		readonly type: 'Ongoing' | 'Approved' | 'Rejected' | 'Cancelled' | 'TimedOut' | 'Killed';
	}

	/** @name PalletReferendaReferendumStatusConvictionVotingTally (546) */
	interface PalletReferendaReferendumStatusConvictionVotingTally extends Struct {
		readonly track: u16;
		readonly origin: TangleKusamaRuntimeOriginCaller;
		readonly proposal: FrameSupportPreimagesBounded;
		readonly enactment: FrameSupportScheduleDispatchTime;
		readonly submitted: u32;
		readonly submissionDeposit: PalletReferendaDeposit;
		readonly decisionDeposit: Option<PalletReferendaDeposit>;
		readonly deciding: Option<PalletReferendaDecidingStatus>;
		readonly tally: PalletConvictionVotingTally;
		readonly inQueue: bool;
		readonly alarm: Option<ITuple<[u32, ITuple<[u32, u32]>]>>;
	}

	/** @name PalletReferendaDeposit (547) */
	interface PalletReferendaDeposit extends Struct {
		readonly who: AccountId32;
		readonly amount: u128;
	}

	/** @name PalletReferendaDecidingStatus (550) */
	interface PalletReferendaDecidingStatus extends Struct {
		readonly since: u32;
		readonly confirming: Option<u32>;
	}

	/** @name PalletReferendaTrackInfo (558) */
	interface PalletReferendaTrackInfo extends Struct {
		readonly name: Text;
		readonly maxDeciding: u32;
		readonly decisionDeposit: u128;
		readonly preparePeriod: u32;
		readonly decisionPeriod: u32;
		readonly confirmPeriod: u32;
		readonly minEnactmentPeriod: u32;
		readonly minApproval: PalletReferendaCurve;
		readonly minSupport: PalletReferendaCurve;
	}

	/** @name PalletReferendaCurve (559) */
	interface PalletReferendaCurve extends Enum {
		readonly isLinearDecreasing: boolean;
		readonly asLinearDecreasing: {
			readonly length: Perbill;
			readonly floor: Perbill;
			readonly ceil: Perbill;
		} & Struct;
		readonly isSteppedDecreasing: boolean;
		readonly asSteppedDecreasing: {
			readonly begin: Perbill;
			readonly end: Perbill;
			readonly step: Perbill;
			readonly period: Perbill;
		} & Struct;
		readonly isReciprocal: boolean;
		readonly asReciprocal: {
			readonly factor: i64;
			readonly xOffset: i64;
			readonly yOffset: i64;
		} & Struct;
		readonly type: 'LinearDecreasing' | 'SteppedDecreasing' | 'Reciprocal';
	}

	/** @name PalletReferendaError (562) */
	interface PalletReferendaError extends Enum {
		readonly isNotOngoing: boolean;
		readonly isHasDeposit: boolean;
		readonly isBadTrack: boolean;
		readonly isFull: boolean;
		readonly isQueueEmpty: boolean;
		readonly isBadReferendum: boolean;
		readonly isNothingToDo: boolean;
		readonly isNoTrack: boolean;
		readonly isUnfinished: boolean;
		readonly isNoPermission: boolean;
		readonly isNoDeposit: boolean;
		readonly isBadStatus: boolean;
		readonly isPreimageNotExist: boolean;
		readonly type:
			| 'NotOngoing'
			| 'HasDeposit'
			| 'BadTrack'
			| 'Full'
			| 'QueueEmpty'
			| 'BadReferendum'
			| 'NothingToDo'
			| 'NoTrack'
			| 'Unfinished'
			| 'NoPermission'
			| 'NoDeposit'
			| 'BadStatus'
			| 'PreimageNotExist';
	}

	/** @name PalletWhitelistError (563) */
	interface PalletWhitelistError extends Enum {
		readonly isUnavailablePreImage: boolean;
		readonly isUndecodableCall: boolean;
		readonly isInvalidCallWeightWitness: boolean;
		readonly isCallIsNotWhitelisted: boolean;
		readonly isCallAlreadyWhitelisted: boolean;
		readonly type:
			| 'UnavailablePreImage'
			| 'UndecodableCall'
			| 'InvalidCallWeightWitness'
			| 'CallIsNotWhitelisted'
			| 'CallAlreadyWhitelisted';
	}

	/** @name CumulusPalletXcmpQueueInboundChannelDetails (565) */
	interface CumulusPalletXcmpQueueInboundChannelDetails extends Struct {
		readonly sender: u32;
		readonly state: CumulusPalletXcmpQueueInboundState;
		readonly messageMetadata: Vec<
			ITuple<[u32, PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat]>
		>;
	}

	/** @name CumulusPalletXcmpQueueInboundState (566) */
	interface CumulusPalletXcmpQueueInboundState extends Enum {
		readonly isOk: boolean;
		readonly isSuspended: boolean;
		readonly type: 'Ok' | 'Suspended';
	}

	/** @name PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat (569) */
	interface PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat extends Enum {
		readonly isConcatenatedVersionedXcm: boolean;
		readonly isConcatenatedEncodedBlob: boolean;
		readonly isSignals: boolean;
		readonly type: 'ConcatenatedVersionedXcm' | 'ConcatenatedEncodedBlob' | 'Signals';
	}

	/** @name CumulusPalletXcmpQueueOutboundChannelDetails (572) */
	interface CumulusPalletXcmpQueueOutboundChannelDetails extends Struct {
		readonly recipient: u32;
		readonly state: CumulusPalletXcmpQueueOutboundState;
		readonly signalsExist: bool;
		readonly firstIndex: u16;
		readonly lastIndex: u16;
	}

	/** @name CumulusPalletXcmpQueueOutboundState (573) */
	interface CumulusPalletXcmpQueueOutboundState extends Enum {
		readonly isOk: boolean;
		readonly isSuspended: boolean;
		readonly type: 'Ok' | 'Suspended';
	}

	/** @name CumulusPalletXcmpQueueQueueConfigData (575) */
	interface CumulusPalletXcmpQueueQueueConfigData extends Struct {
		readonly suspendThreshold: u32;
		readonly dropThreshold: u32;
		readonly resumeThreshold: u32;
		readonly thresholdWeight: SpWeightsWeightV2Weight;
		readonly weightRestrictDecay: SpWeightsWeightV2Weight;
		readonly xcmpMaxIndividualWeight: SpWeightsWeightV2Weight;
	}

	/** @name CumulusPalletXcmpQueueError (577) */
	interface CumulusPalletXcmpQueueError extends Enum {
		readonly isFailedToSend: boolean;
		readonly isBadXcmOrigin: boolean;
		readonly isBadXcm: boolean;
		readonly isBadOverweightIndex: boolean;
		readonly isWeightOverLimit: boolean;
		readonly type:
			| 'FailedToSend'
			| 'BadXcmOrigin'
			| 'BadXcm'
			| 'BadOverweightIndex'
			| 'WeightOverLimit';
	}

	/** @name PalletXcmQueryStatus (578) */
	interface PalletXcmQueryStatus extends Enum {
		readonly isPending: boolean;
		readonly asPending: {
			readonly responder: XcmVersionedMultiLocation;
			readonly maybeMatchQuerier: Option<XcmVersionedMultiLocation>;
			readonly maybeNotify: Option<ITuple<[u8, u8]>>;
			readonly timeout: u32;
		} & Struct;
		readonly isVersionNotifier: boolean;
		readonly asVersionNotifier: {
			readonly origin: XcmVersionedMultiLocation;
			readonly isActive: bool;
		} & Struct;
		readonly isReady: boolean;
		readonly asReady: {
			readonly response: XcmVersionedResponse;
			readonly at: u32;
		} & Struct;
		readonly type: 'Pending' | 'VersionNotifier' | 'Ready';
	}

	/** @name XcmVersionedResponse (582) */
	interface XcmVersionedResponse extends Enum {
		readonly isV2: boolean;
		readonly asV2: XcmV2Response;
		readonly isV3: boolean;
		readonly asV3: XcmV3Response;
		readonly type: 'V2' | 'V3';
	}

	/** @name PalletXcmVersionMigrationStage (588) */
	interface PalletXcmVersionMigrationStage extends Enum {
		readonly isMigrateSupportedVersion: boolean;
		readonly isMigrateVersionNotifiers: boolean;
		readonly isNotifyCurrentTargets: boolean;
		readonly asNotifyCurrentTargets: Option<Bytes>;
		readonly isMigrateAndNotifyOldTargets: boolean;
		readonly type:
			| 'MigrateSupportedVersion'
			| 'MigrateVersionNotifiers'
			| 'NotifyCurrentTargets'
			| 'MigrateAndNotifyOldTargets';
	}

	/** @name XcmVersionedAssetId (591) */
	interface XcmVersionedAssetId extends Enum {
		readonly isV3: boolean;
		readonly asV3: XcmV3MultiassetAssetId;
		readonly type: 'V3';
	}

	/** @name PalletXcmRemoteLockedFungibleRecord (592) */
	interface PalletXcmRemoteLockedFungibleRecord extends Struct {
		readonly amount: u128;
		readonly owner: XcmVersionedMultiLocation;
		readonly locker: XcmVersionedMultiLocation;
		readonly consumers: Vec<ITuple<[Null, u128]>>;
	}

	/** @name PalletXcmError (599) */
	interface PalletXcmError extends Enum {
		readonly isUnreachable: boolean;
		readonly isSendFailure: boolean;
		readonly isFiltered: boolean;
		readonly isUnweighableMessage: boolean;
		readonly isDestinationNotInvertible: boolean;
		readonly isEmpty: boolean;
		readonly isCannotReanchor: boolean;
		readonly isTooManyAssets: boolean;
		readonly isInvalidOrigin: boolean;
		readonly isBadVersion: boolean;
		readonly isBadLocation: boolean;
		readonly isNoSubscription: boolean;
		readonly isAlreadySubscribed: boolean;
		readonly isInvalidAsset: boolean;
		readonly isLowBalance: boolean;
		readonly isTooManyLocks: boolean;
		readonly isAccountNotSovereign: boolean;
		readonly isFeesNotMet: boolean;
		readonly isLockNotFound: boolean;
		readonly isInUse: boolean;
		readonly type:
			| 'Unreachable'
			| 'SendFailure'
			| 'Filtered'
			| 'UnweighableMessage'
			| 'DestinationNotInvertible'
			| 'Empty'
			| 'CannotReanchor'
			| 'TooManyAssets'
			| 'InvalidOrigin'
			| 'BadVersion'
			| 'BadLocation'
			| 'NoSubscription'
			| 'AlreadySubscribed'
			| 'InvalidAsset'
			| 'LowBalance'
			| 'TooManyLocks'
			| 'AccountNotSovereign'
			| 'FeesNotMet'
			| 'LockNotFound'
			| 'InUse';
	}

	/** @name CumulusPalletXcmError (600) */
	type CumulusPalletXcmError = Null;

	/** @name CumulusPalletDmpQueueConfigData (601) */
	interface CumulusPalletDmpQueueConfigData extends Struct {
		readonly maxIndividual: SpWeightsWeightV2Weight;
	}

	/** @name CumulusPalletDmpQueuePageIndexData (602) */
	interface CumulusPalletDmpQueuePageIndexData extends Struct {
		readonly beginUsed: u32;
		readonly endUsed: u32;
		readonly overweightCount: u64;
	}

	/** @name CumulusPalletDmpQueueError (605) */
	interface CumulusPalletDmpQueueError extends Enum {
		readonly isUnknown: boolean;
		readonly isOverLimit: boolean;
		readonly type: 'Unknown' | 'OverLimit';
	}

	/** @name PalletUtilityError (606) */
	interface PalletUtilityError extends Enum {
		readonly isTooManyCalls: boolean;
		readonly type: 'TooManyCalls';
	}

	/** @name PalletSchedulerScheduled (609) */
	interface PalletSchedulerScheduled extends Struct {
		readonly maybeId: Option<U8aFixed>;
		readonly priority: u8;
		readonly call: FrameSupportPreimagesBounded;
		readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
		readonly origin: TangleKusamaRuntimeOriginCaller;
	}

	/** @name PalletSchedulerError (611) */
	interface PalletSchedulerError extends Enum {
		readonly isFailedToSchedule: boolean;
		readonly isNotFound: boolean;
		readonly isTargetBlockNumberInPast: boolean;
		readonly isRescheduleNoChange: boolean;
		readonly isNamed: boolean;
		readonly type:
			| 'FailedToSchedule'
			| 'NotFound'
			| 'TargetBlockNumberInPast'
			| 'RescheduleNoChange'
			| 'Named';
	}

	/** @name PalletProxyProxyDefinition (614) */
	interface PalletProxyProxyDefinition extends Struct {
		readonly delegate: AccountId32;
		readonly proxyType: TangleKusamaRuntimeProxyType;
		readonly delay: u32;
	}

	/** @name PalletProxyAnnouncement (618) */
	interface PalletProxyAnnouncement extends Struct {
		readonly real: AccountId32;
		readonly callHash: H256;
		readonly height: u32;
	}

	/** @name PalletProxyError (620) */
	interface PalletProxyError extends Enum {
		readonly isTooMany: boolean;
		readonly isNotFound: boolean;
		readonly isNotProxy: boolean;
		readonly isUnproxyable: boolean;
		readonly isDuplicate: boolean;
		readonly isNoPermission: boolean;
		readonly isUnannounced: boolean;
		readonly isNoSelfProxy: boolean;
		readonly type:
			| 'TooMany'
			| 'NotFound'
			| 'NotProxy'
			| 'Unproxyable'
			| 'Duplicate'
			| 'NoPermission'
			| 'Unannounced'
			| 'NoSelfProxy';
	}

	/** @name PalletMultisigMultisig (622) */
	interface PalletMultisigMultisig extends Struct {
		readonly when: PalletMultisigTimepoint;
		readonly deposit: u128;
		readonly depositor: AccountId32;
		readonly approvals: Vec<AccountId32>;
	}

	/** @name PalletMultisigError (624) */
	interface PalletMultisigError extends Enum {
		readonly isMinimumThreshold: boolean;
		readonly isAlreadyApproved: boolean;
		readonly isNoApprovalsNeeded: boolean;
		readonly isTooFewSignatories: boolean;
		readonly isTooManySignatories: boolean;
		readonly isSignatoriesOutOfOrder: boolean;
		readonly isSenderInSignatories: boolean;
		readonly isNotFound: boolean;
		readonly isNotOwner: boolean;
		readonly isNoTimepoint: boolean;
		readonly isWrongTimepoint: boolean;
		readonly isUnexpectedTimepoint: boolean;
		readonly isMaxWeightTooLow: boolean;
		readonly isAlreadyStored: boolean;
		readonly type:
			| 'MinimumThreshold'
			| 'AlreadyApproved'
			| 'NoApprovalsNeeded'
			| 'TooFewSignatories'
			| 'TooManySignatories'
			| 'SignatoriesOutOfOrder'
			| 'SenderInSignatories'
			| 'NotFound'
			| 'NotOwner'
			| 'NoTimepoint'
			| 'WrongTimepoint'
			| 'UnexpectedTimepoint'
			| 'MaxWeightTooLow'
			| 'AlreadyStored';
	}

	/** @name PalletIdentityRegistration (625) */
	interface PalletIdentityRegistration extends Struct {
		readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
		readonly deposit: u128;
		readonly info: PalletIdentitySimpleIdentityInfo;
	}

	/** @name PalletIdentityRegistrarInfo (633) */
	interface PalletIdentityRegistrarInfo extends Struct {
		readonly account: AccountId32;
		readonly fee: u128;
		readonly fields: PalletIdentityBitFlags;
	}

	/** @name PalletIdentityError (635) */
	interface PalletIdentityError extends Enum {
		readonly isTooManySubAccounts: boolean;
		readonly isNotFound: boolean;
		readonly isNotNamed: boolean;
		readonly isEmptyIndex: boolean;
		readonly isFeeChanged: boolean;
		readonly isNoIdentity: boolean;
		readonly isStickyJudgement: boolean;
		readonly isJudgementGiven: boolean;
		readonly isInvalidJudgement: boolean;
		readonly isInvalidIndex: boolean;
		readonly isInvalidTarget: boolean;
		readonly isTooManyFields: boolean;
		readonly isTooManyRegistrars: boolean;
		readonly isAlreadyClaimed: boolean;
		readonly isNotSub: boolean;
		readonly isNotOwned: boolean;
		readonly isJudgementForDifferentIdentity: boolean;
		readonly isJudgementPaymentFailed: boolean;
		readonly type:
			| 'TooManySubAccounts'
			| 'NotFound'
			| 'NotNamed'
			| 'EmptyIndex'
			| 'FeeChanged'
			| 'NoIdentity'
			| 'StickyJudgement'
			| 'JudgementGiven'
			| 'InvalidJudgement'
			| 'InvalidIndex'
			| 'InvalidTarget'
			| 'TooManyFields'
			| 'TooManyRegistrars'
			| 'AlreadyClaimed'
			| 'NotSub'
			| 'NotOwned'
			| 'JudgementForDifferentIdentity'
			| 'JudgementPaymentFailed';
	}

	/** @name PalletTreasuryProposal (636) */
	interface PalletTreasuryProposal extends Struct {
		readonly proposer: AccountId32;
		readonly value: u128;
		readonly beneficiary: AccountId32;
		readonly bond: u128;
	}

	/** @name PalletTreasurySpendStatus (638) */
	interface PalletTreasurySpendStatus extends Struct {
		readonly assetKind: Null;
		readonly amount: u128;
		readonly beneficiary: AccountId32;
		readonly validFrom: u32;
		readonly expireAt: u32;
		readonly status: PalletTreasuryPaymentState;
	}

	/** @name PalletTreasuryPaymentState (639) */
	interface PalletTreasuryPaymentState extends Enum {
		readonly isPending: boolean;
		readonly isAttempted: boolean;
		readonly asAttempted: {
			readonly id: Null;
		} & Struct;
		readonly isFailed: boolean;
		readonly type: 'Pending' | 'Attempted' | 'Failed';
	}

	/** @name PalletTreasuryError (640) */
	interface PalletTreasuryError extends Enum {
		readonly isInsufficientProposersBalance: boolean;
		readonly isInvalidIndex: boolean;
		readonly isTooManyApprovals: boolean;
		readonly isInsufficientPermission: boolean;
		readonly isProposalNotApproved: boolean;
		readonly isFailedToConvertBalance: boolean;
		readonly isSpendExpired: boolean;
		readonly isEarlyPayout: boolean;
		readonly isAlreadyAttempted: boolean;
		readonly isPayoutError: boolean;
		readonly isNotAttempted: boolean;
		readonly isInconclusive: boolean;
		readonly type:
			| 'InsufficientProposersBalance'
			| 'InvalidIndex'
			| 'TooManyApprovals'
			| 'InsufficientPermission'
			| 'ProposalNotApproved'
			| 'FailedToConvertBalance'
			| 'SpendExpired'
			| 'EarlyPayout'
			| 'AlreadyAttempted'
			| 'PayoutError'
			| 'NotAttempted'
			| 'Inconclusive';
	}

	/** @name PalletBountiesBounty (641) */
	interface PalletBountiesBounty extends Struct {
		readonly proposer: AccountId32;
		readonly value: u128;
		readonly fee: u128;
		readonly curatorDeposit: u128;
		readonly bond: u128;
		readonly status: PalletBountiesBountyStatus;
	}

	/** @name PalletBountiesBountyStatus (642) */
	interface PalletBountiesBountyStatus extends Enum {
		readonly isProposed: boolean;
		readonly isApproved: boolean;
		readonly isFunded: boolean;
		readonly isCuratorProposed: boolean;
		readonly asCuratorProposed: {
			readonly curator: AccountId32;
		} & Struct;
		readonly isActive: boolean;
		readonly asActive: {
			readonly curator: AccountId32;
			readonly updateDue: u32;
		} & Struct;
		readonly isPendingPayout: boolean;
		readonly asPendingPayout: {
			readonly curator: AccountId32;
			readonly beneficiary: AccountId32;
			readonly unlockAt: u32;
		} & Struct;
		readonly type:
			| 'Proposed'
			| 'Approved'
			| 'Funded'
			| 'CuratorProposed'
			| 'Active'
			| 'PendingPayout';
	}

	/** @name PalletBountiesError (644) */
	interface PalletBountiesError extends Enum {
		readonly isInsufficientProposersBalance: boolean;
		readonly isInvalidIndex: boolean;
		readonly isReasonTooBig: boolean;
		readonly isUnexpectedStatus: boolean;
		readonly isRequireCurator: boolean;
		readonly isInvalidValue: boolean;
		readonly isInvalidFee: boolean;
		readonly isPendingPayout: boolean;
		readonly isPremature: boolean;
		readonly isHasActiveChildBounty: boolean;
		readonly isTooManyQueued: boolean;
		readonly type:
			| 'InsufficientProposersBalance'
			| 'InvalidIndex'
			| 'ReasonTooBig'
			| 'UnexpectedStatus'
			| 'RequireCurator'
			| 'InvalidValue'
			| 'InvalidFee'
			| 'PendingPayout'
			| 'Premature'
			| 'HasActiveChildBounty'
			| 'TooManyQueued';
	}

	/** @name PalletTipsOpenTip (645) */
	interface PalletTipsOpenTip extends Struct {
		readonly reason: H256;
		readonly who: AccountId32;
		readonly finder: AccountId32;
		readonly deposit: u128;
		readonly closes: Option<u32>;
		readonly tips: Vec<ITuple<[AccountId32, u128]>>;
		readonly findersFee: bool;
	}

	/** @name PalletTipsError (646) */
	interface PalletTipsError extends Enum {
		readonly isReasonTooBig: boolean;
		readonly isAlreadyKnown: boolean;
		readonly isUnknownTip: boolean;
		readonly isMaxTipAmountExceeded: boolean;
		readonly isNotFinder: boolean;
		readonly isStillOpen: boolean;
		readonly isPremature: boolean;
		readonly type:
			| 'ReasonTooBig'
			| 'AlreadyKnown'
			| 'UnknownTip'
			| 'MaxTipAmountExceeded'
			| 'NotFinder'
			| 'StillOpen'
			| 'Premature';
	}

	/** @name PalletPreimageOldRequestStatus (647) */
	interface PalletPreimageOldRequestStatus extends Enum {
		readonly isUnrequested: boolean;
		readonly asUnrequested: {
			readonly deposit: ITuple<[AccountId32, u128]>;
			readonly len: u32;
		} & Struct;
		readonly isRequested: boolean;
		readonly asRequested: {
			readonly deposit: Option<ITuple<[AccountId32, u128]>>;
			readonly count: u32;
			readonly len: Option<u32>;
		} & Struct;
		readonly type: 'Unrequested' | 'Requested';
	}

	/** @name PalletPreimageRequestStatus (649) */
	interface PalletPreimageRequestStatus extends Enum {
		readonly isUnrequested: boolean;
		readonly asUnrequested: {
			readonly ticket: ITuple<[AccountId32, u128]>;
			readonly len: u32;
		} & Struct;
		readonly isRequested: boolean;
		readonly asRequested: {
			readonly maybeTicket: Option<ITuple<[AccountId32, u128]>>;
			readonly count: u32;
			readonly maybeLen: Option<u32>;
		} & Struct;
		readonly type: 'Unrequested' | 'Requested';
	}

	/** @name PalletPreimageError (655) */
	interface PalletPreimageError extends Enum {
		readonly isTooBig: boolean;
		readonly isAlreadyNoted: boolean;
		readonly isNotAuthorized: boolean;
		readonly isNotNoted: boolean;
		readonly isRequested: boolean;
		readonly isNotRequested: boolean;
		readonly isTooMany: boolean;
		readonly isTooFew: boolean;
		readonly type:
			| 'TooBig'
			| 'AlreadyNoted'
			| 'NotAuthorized'
			| 'NotNoted'
			| 'Requested'
			| 'NotRequested'
			| 'TooMany'
			| 'TooFew';
	}

	/** @name OrmlXtokensModuleError (656) */
	interface OrmlXtokensModuleError extends Enum {
		readonly isAssetHasNoReserve: boolean;
		readonly isNotCrossChainTransfer: boolean;
		readonly isInvalidDest: boolean;
		readonly isNotCrossChainTransferableCurrency: boolean;
		readonly isUnweighableMessage: boolean;
		readonly isXcmExecutionFailed: boolean;
		readonly isCannotReanchor: boolean;
		readonly isInvalidAncestry: boolean;
		readonly isInvalidAsset: boolean;
		readonly isDestinationNotInvertible: boolean;
		readonly isBadVersion: boolean;
		readonly isDistinctReserveForAssetAndFee: boolean;
		readonly isZeroFee: boolean;
		readonly isZeroAmount: boolean;
		readonly isTooManyAssetsBeingSent: boolean;
		readonly isAssetIndexNonExistent: boolean;
		readonly isFeeNotEnough: boolean;
		readonly isNotSupportedMultiLocation: boolean;
		readonly isMinXcmFeeNotDefined: boolean;
		readonly type:
			| 'AssetHasNoReserve'
			| 'NotCrossChainTransfer'
			| 'InvalidDest'
			| 'NotCrossChainTransferableCurrency'
			| 'UnweighableMessage'
			| 'XcmExecutionFailed'
			| 'CannotReanchor'
			| 'InvalidAncestry'
			| 'InvalidAsset'
			| 'DestinationNotInvertible'
			| 'BadVersion'
			| 'DistinctReserveForAssetAndFee'
			| 'ZeroFee'
			| 'ZeroAmount'
			| 'TooManyAssetsBeingSent'
			| 'AssetIndexNonExistent'
			| 'FeeNotEnough'
			| 'NotSupportedMultiLocation'
			| 'MinXcmFeeNotDefined';
	}

	/** @name OrmlTokensBalanceLock (659) */
	interface OrmlTokensBalanceLock extends Struct {
		readonly id: U8aFixed;
		readonly amount: u128;
	}

	/** @name OrmlTokensAccountData (661) */
	interface OrmlTokensAccountData extends Struct {
		readonly free: u128;
		readonly reserved: u128;
		readonly frozen: u128;
	}

	/** @name OrmlTokensReserveData (663) */
	interface OrmlTokensReserveData extends Struct {
		readonly id: U8aFixed;
		readonly amount: u128;
	}

	/** @name OrmlTokensModuleError (665) */
	interface OrmlTokensModuleError extends Enum {
		readonly isBalanceTooLow: boolean;
		readonly isAmountIntoBalanceFailed: boolean;
		readonly isLiquidityRestrictions: boolean;
		readonly isMaxLocksExceeded: boolean;
		readonly isKeepAlive: boolean;
		readonly isExistentialDeposit: boolean;
		readonly isDeadAccount: boolean;
		readonly isTooManyReserves: boolean;
		readonly type:
			| 'BalanceTooLow'
			| 'AmountIntoBalanceFailed'
			| 'LiquidityRestrictions'
			| 'MaxLocksExceeded'
			| 'KeepAlive'
			| 'ExistentialDeposit'
			| 'DeadAccount'
			| 'TooManyReserves';
	}

	/** @name TangleCurrenciesModuleError (666) */
	interface TangleCurrenciesModuleError extends Enum {
		readonly isAmountIntoBalanceFailed: boolean;
		readonly isBalanceTooLow: boolean;
		readonly isDepositFailed: boolean;
		readonly type: 'AmountIntoBalanceFailed' | 'BalanceTooLow' | 'DepositFailed';
	}

	/** @name OrmlUnknownTokensModuleError (669) */
	interface OrmlUnknownTokensModuleError extends Enum {
		readonly isBalanceTooLow: boolean;
		readonly isBalanceOverflow: boolean;
		readonly isUnhandledAsset: boolean;
		readonly type: 'BalanceTooLow' | 'BalanceOverflow' | 'UnhandledAsset';
	}

	/** @name OrmlXcmModuleError (670) */
	interface OrmlXcmModuleError extends Enum {
		readonly isUnreachable: boolean;
		readonly isSendFailure: boolean;
		readonly isBadVersion: boolean;
		readonly type: 'Unreachable' | 'SendFailure' | 'BadVersion';
	}

	/** @name ZenlinkProtocolPrimitivesPairStatus (677) */
	interface ZenlinkProtocolPrimitivesPairStatus extends Enum {
		readonly isTrading: boolean;
		readonly asTrading: ZenlinkProtocolPrimitivesPairMetadata;
		readonly isBootstrap: boolean;
		readonly asBootstrap: ZenlinkProtocolPrimitivesBootstrapParameter;
		readonly isDisable: boolean;
		readonly type: 'Trading' | 'Bootstrap' | 'Disable';
	}

	/** @name ZenlinkProtocolPrimitivesPairMetadata (678) */
	interface ZenlinkProtocolPrimitivesPairMetadata extends Struct {
		readonly pairAccount: AccountId32;
		readonly totalSupply: u128;
	}

	/** @name ZenlinkProtocolPrimitivesBootstrapParameter (679) */
	interface ZenlinkProtocolPrimitivesBootstrapParameter extends Struct {
		readonly targetSupply: ITuple<[u128, u128]>;
		readonly capacitySupply: ITuple<[u128, u128]>;
		readonly accumulatedSupply: ITuple<[u128, u128]>;
		readonly endBlockNumber: u32;
		readonly pairAccount: AccountId32;
	}

	/** @name ZenlinkProtocolError (682) */
	interface ZenlinkProtocolError extends Enum {
		readonly isRequireProtocolAdmin: boolean;
		readonly isRequireProtocolAdminCandidate: boolean;
		readonly isInvalidFeePoint: boolean;
		readonly isUnsupportedAssetType: boolean;
		readonly isInsufficientAssetBalance: boolean;
		readonly isNativeBalanceTooLow: boolean;
		readonly isDeniedCreatePair: boolean;
		readonly isPairAlreadyExists: boolean;
		readonly isPairNotExists: boolean;
		readonly isAssetNotExists: boolean;
		readonly isInsufficientLiquidity: boolean;
		readonly isInsufficientPairReserve: boolean;
		readonly isInsufficientTargetAmount: boolean;
		readonly isExcessiveSoldAmount: boolean;
		readonly isInvalidPath: boolean;
		readonly isIncorrectAssetAmountRange: boolean;
		readonly isOverflow: boolean;
		readonly isDeadline: boolean;
		readonly isAccountIdBadLocation: boolean;
		readonly isExecutionFailed: boolean;
		readonly isDeniedTransferToSelf: boolean;
		readonly isTargetChainNotRegistered: boolean;
		readonly isInvariantCheckFailed: boolean;
		readonly isPairCreateForbidden: boolean;
		readonly isNotInBootstrap: boolean;
		readonly isInvalidContributionAmount: boolean;
		readonly isUnqualifiedBootstrap: boolean;
		readonly isZeroContribute: boolean;
		readonly isDenyRefund: boolean;
		readonly isDisableBootstrap: boolean;
		readonly isNotQualifiedAccount: boolean;
		readonly isNoRewardTokens: boolean;
		readonly isChargeRewardParamsError: boolean;
		readonly isExistRewardsInBootstrap: boolean;
		readonly type:
			| 'RequireProtocolAdmin'
			| 'RequireProtocolAdminCandidate'
			| 'InvalidFeePoint'
			| 'UnsupportedAssetType'
			| 'InsufficientAssetBalance'
			| 'NativeBalanceTooLow'
			| 'DeniedCreatePair'
			| 'PairAlreadyExists'
			| 'PairNotExists'
			| 'AssetNotExists'
			| 'InsufficientLiquidity'
			| 'InsufficientPairReserve'
			| 'InsufficientTargetAmount'
			| 'ExcessiveSoldAmount'
			| 'InvalidPath'
			| 'IncorrectAssetAmountRange'
			| 'Overflow'
			| 'Deadline'
			| 'AccountIdBadLocation'
			| 'ExecutionFailed'
			| 'DeniedTransferToSelf'
			| 'TargetChainNotRegistered'
			| 'InvariantCheckFailed'
			| 'PairCreateForbidden'
			| 'NotInBootstrap'
			| 'InvalidContributionAmount'
			| 'UnqualifiedBootstrap'
			| 'ZeroContribute'
			| 'DenyRefund'
			| 'DisableBootstrap'
			| 'NotQualifiedAccount'
			| 'NoRewardTokens'
			| 'ChargeRewardParamsError'
			| 'ExistRewardsInBootstrap';
	}

	/** @name MerkleDistributorMerkleMetadata (683) */
	interface MerkleDistributorMerkleMetadata extends Struct {
		readonly merkleRoot: H256;
		readonly description: Bytes;
		readonly distributeCurrency: TanglePrimitivesCurrencyCurrencyId;
		readonly distributeAmount: u128;
		readonly distributeHolder: AccountId32;
		readonly charged: bool;
	}

	/** @name MerkleDistributorError (686) */
	interface MerkleDistributorError extends Enum {
		readonly isBadDescription: boolean;
		readonly isInvalidMerkleDistributorId: boolean;
		readonly isMerkleVerifyFailed: boolean;
		readonly isClaimed: boolean;
		readonly isCharged: boolean;
		readonly isWithdrawAmountExceed: boolean;
		readonly isBadChargeAccount: boolean;
		readonly isAlreadyInWhiteList: boolean;
		readonly isNotInWhiteList: boolean;
		readonly type:
			| 'BadDescription'
			| 'InvalidMerkleDistributorId'
			| 'MerkleVerifyFailed'
			| 'Claimed'
			| 'Charged'
			| 'WithdrawAmountExceed'
			| 'BadChargeAccount'
			| 'AlreadyInWhiteList'
			| 'NotInWhiteList';
	}

	/** @name ZenlinkStableAmmPrimitivesPool (687) */
	interface ZenlinkStableAmmPrimitivesPool extends Enum {
		readonly isBase: boolean;
		readonly asBase: ZenlinkStableAmmPrimitivesBasePool;
		readonly isMeta: boolean;
		readonly asMeta: ZenlinkStableAmmPrimitivesMetaPool;
		readonly type: 'Base' | 'Meta';
	}

	/** @name ZenlinkStableAmmPrimitivesBasePool (688) */
	interface ZenlinkStableAmmPrimitivesBasePool extends Struct {
		readonly currencyIds: Vec<TanglePrimitivesCurrencyCurrencyId>;
		readonly lpCurrencyId: TanglePrimitivesCurrencyCurrencyId;
		readonly tokenMultipliers: Vec<u128>;
		readonly balances: Vec<u128>;
		readonly fee: u128;
		readonly adminFee: u128;
		readonly initialA: u128;
		readonly futureA: u128;
		readonly initialATime: u128;
		readonly futureATime: u128;
		readonly account: AccountId32;
		readonly adminFeeReceiver: AccountId32;
		readonly lpCurrencySymbol: Bytes;
		readonly lpCurrencyDecimal: u8;
	}

	/** @name ZenlinkStableAmmPrimitivesMetaPool (689) */
	interface ZenlinkStableAmmPrimitivesMetaPool extends Struct {
		readonly basePoolId: u32;
		readonly baseVirtualPrice: u128;
		readonly baseCacheLastUpdated: u64;
		readonly baseCurrencies: Vec<TanglePrimitivesCurrencyCurrencyId>;
		readonly info: ZenlinkStableAmmPrimitivesBasePool;
	}

	/** @name ZenlinkStableAmmError (690) */
	interface ZenlinkStableAmmError extends Enum {
		readonly isInvalidPooledCurrency: boolean;
		readonly isInvalidLpCurrency: boolean;
		readonly isMismatchParameter: boolean;
		readonly isInvalidCurrencyDecimal: boolean;
		readonly isInvalidPoolId: boolean;
		readonly isInvalidBasePool: boolean;
		readonly isArithmetic: boolean;
		readonly isDeadline: boolean;
		readonly isInsufficientSupply: boolean;
		readonly isInsufficientReserve: boolean;
		readonly isCheckDFailed: boolean;
		readonly isAmountSlippage: boolean;
		readonly isSwapSameCurrency: boolean;
		readonly isCurrencyIndexOutRange: boolean;
		readonly isInsufficientLpReserve: boolean;
		readonly isExceedThreshold: boolean;
		readonly isRampADelay: boolean;
		readonly isMinRampTime: boolean;
		readonly isExceedMaxAChange: boolean;
		readonly isAlreadyStoppedRampA: boolean;
		readonly isExceedMaxFee: boolean;
		readonly isExceedMaxAdminFee: boolean;
		readonly isExceedMaxA: boolean;
		readonly isLpCurrencyAlreadyUsed: boolean;
		readonly isRequireAllCurrencies: boolean;
		readonly isBadPoolCurrencySymbol: boolean;
		readonly isInvalidTransaction: boolean;
		readonly isInvalidBasePoolLpCurrency: boolean;
		readonly isTokenIndexOutOfRange: boolean;
		readonly type:
			| 'InvalidPooledCurrency'
			| 'InvalidLpCurrency'
			| 'MismatchParameter'
			| 'InvalidCurrencyDecimal'
			| 'InvalidPoolId'
			| 'InvalidBasePool'
			| 'Arithmetic'
			| 'Deadline'
			| 'InsufficientSupply'
			| 'InsufficientReserve'
			| 'CheckDFailed'
			| 'AmountSlippage'
			| 'SwapSameCurrency'
			| 'CurrencyIndexOutRange'
			| 'InsufficientLpReserve'
			| 'ExceedThreshold'
			| 'RampADelay'
			| 'MinRampTime'
			| 'ExceedMaxAChange'
			| 'AlreadyStoppedRampA'
			| 'ExceedMaxFee'
			| 'ExceedMaxAdminFee'
			| 'ExceedMaxA'
			| 'LpCurrencyAlreadyUsed'
			| 'RequireAllCurrencies'
			| 'BadPoolCurrencySymbol'
			| 'InvalidTransaction'
			| 'InvalidBasePoolLpCurrency'
			| 'TokenIndexOutOfRange';
	}

	/** @name ZenlinkSwapRouterError (691) */
	interface ZenlinkSwapRouterError extends Enum {
		readonly isMismatchPoolAndCurrencyId: boolean;
		readonly isDeadline: boolean;
		readonly isInvalidRoutes: boolean;
		readonly isConvertCurrencyFailed: boolean;
		readonly isAmountSlippage: boolean;
		readonly isInvalidPath: boolean;
		readonly type:
			| 'MismatchPoolAndCurrencyId'
			| 'Deadline'
			| 'InvalidRoutes'
			| 'ConvertCurrencyFailed'
			| 'AmountSlippage'
			| 'InvalidPath';
	}

	/** @name TangleTokenIssuerError (693) */
	interface TangleTokenIssuerError extends Enum {
		readonly isNotEnoughBalance: boolean;
		readonly isNotExist: boolean;
		readonly isNotAllowed: boolean;
		readonly isConvertError: boolean;
		readonly isExceedMaxLen: boolean;
		readonly type: 'NotEnoughBalance' | 'NotExist' | 'NotAllowed' | 'ConvertError' | 'ExceedMaxLen';
	}

	/** @name TangleAssetRegistryError (694) */
	interface TangleAssetRegistryError extends Enum {
		readonly isBadLocation: boolean;
		readonly isMultiLocationExisted: boolean;
		readonly isAssetIdNotExists: boolean;
		readonly isAssetIdExisted: boolean;
		readonly isCurrencyIdNotExists: boolean;
		readonly isCurrencyIdExisted: boolean;
		readonly type:
			| 'BadLocation'
			| 'MultiLocationExisted'
			| 'AssetIdNotExists'
			| 'AssetIdExisted'
			| 'CurrencyIdNotExists'
			| 'CurrencyIdExisted';
	}

	/** @name TanglePrimitivesRedeemType (698) */
	interface TanglePrimitivesRedeemType extends Enum {
		readonly isNative: boolean;
		readonly isAstar: boolean;
		readonly asAstar: AccountId32;
		readonly isMoonbeam: boolean;
		readonly asMoonbeam: H160;
		readonly isHydradx: boolean;
		readonly asHydradx: AccountId32;
		readonly isInterlay: boolean;
		readonly asInterlay: AccountId32;
		readonly isManta: boolean;
		readonly asManta: AccountId32;
		readonly type: 'Native' | 'Astar' | 'Moonbeam' | 'Hydradx' | 'Interlay' | 'Manta';
	}

	/** @name TangleLstMintingError (704) */
	interface TangleLstMintingError extends Enum {
		readonly isBelowMinimumMint: boolean;
		readonly isBelowMinimumRedeem: boolean;
		readonly isInvalidRebondToken: boolean;
		readonly isNotSupportTokenType: boolean;
		readonly isNotEnoughBalanceToUnlock: boolean;
		readonly isTokenToRebondNotZero: boolean;
		readonly isOngoingTimeUnitNotSet: boolean;
		readonly isTokenUnlockLedgerNotFound: boolean;
		readonly isUserUnlockLedgerNotFound: boolean;
		readonly isTimeUnitUnlockLedgerNotFound: boolean;
		readonly isUnlockDurationNotFound: boolean;
		readonly isUnexpected: boolean;
		readonly isCalculationOverflow: boolean;
		readonly isExceedMaximumUnlockId: boolean;
		readonly isTooManyRedeems: boolean;
		readonly isCanNotRedeem: boolean;
		readonly isCanNotRebond: boolean;
		readonly type:
			| 'BelowMinimumMint'
			| 'BelowMinimumRedeem'
			| 'InvalidRebondToken'
			| 'NotSupportTokenType'
			| 'NotEnoughBalanceToUnlock'
			| 'TokenToRebondNotZero'
			| 'OngoingTimeUnitNotSet'
			| 'TokenUnlockLedgerNotFound'
			| 'UserUnlockLedgerNotFound'
			| 'TimeUnitUnlockLedgerNotFound'
			| 'UnlockDurationNotFound'
			| 'Unexpected'
			| 'CalculationOverflow'
			| 'ExceedMaximumUnlockId'
			| 'TooManyRedeems'
			| 'CanNotRedeem'
			| 'CanNotRebond';
	}

	/** @name TangleSlpError (714) */
	interface TangleSlpError extends Enum {
		readonly isOperateOriginNotSet: boolean;
		readonly isNotAuthorized: boolean;
		readonly isNotSupportedCurrencyId: boolean;
		readonly isFailToAddDelegator: boolean;
		readonly isOverFlow: boolean;
		readonly isUnderFlow: boolean;
		readonly isNotExist: boolean;
		readonly isLowerThanMinimum: boolean;
		readonly isGreaterThanMaximum: boolean;
		readonly isAlreadyBonded: boolean;
		readonly isAccountNotExist: boolean;
		readonly isDelegatorNotExist: boolean;
		readonly isXcmFailure: boolean;
		readonly isDelegatorNotBonded: boolean;
		readonly isExceedActiveMaximum: boolean;
		readonly isProblematicLedger: boolean;
		readonly isNotEnoughToUnbond: boolean;
		readonly isExceedUnlockingRecords: boolean;
		readonly isRebondExceedUnlockingAmount: boolean;
		readonly isDecodingError: boolean;
		readonly isEncodingError: boolean;
		readonly isVectorEmpty: boolean;
		readonly isValidatorSetNotExist: boolean;
		readonly isValidatorNotExist: boolean;
		readonly isInvalidTimeUnit: boolean;
		readonly isAmountZero: boolean;
		readonly isAmountNotZero: boolean;
		readonly isAlreadyExist: boolean;
		readonly isValidatorStillInUse: boolean;
		readonly isTimeUnitNotExist: boolean;
		readonly isFeeSourceNotExist: boolean;
		readonly isWeightAndFeeNotExists: boolean;
		readonly isMinimumsAndMaximumsNotExist: boolean;
		readonly isQueryNotExist: boolean;
		readonly isDelaysNotExist: boolean;
		readonly isUnexpected: boolean;
		readonly isQueryResponseRemoveError: boolean;
		readonly isInvalidHostingFee: boolean;
		readonly isInvalidAccount: boolean;
		readonly isIncreaseTokenPoolError: boolean;
		readonly isTuneExchangeRateLimitNotSet: boolean;
		readonly isCurrencyLatestTuneRecordNotExist: boolean;
		readonly isInvalidTransferSource: boolean;
		readonly isValidatorNotProvided: boolean;
		readonly isUnsupported: boolean;
		readonly isValidatorNotBonded: boolean;
		readonly isAlreadyRequested: boolean;
		readonly isRequestNotExist: boolean;
		readonly isAlreadyLeaving: boolean;
		readonly isDelegatorNotLeaving: boolean;
		readonly isRequestNotDue: boolean;
		readonly isLeavingNotDue: boolean;
		readonly isDelegatorSetNotExist: boolean;
		readonly isDelegatorLeaving: boolean;
		readonly isDelegatorAlreadyLeaving: boolean;
		readonly isValidatorError: boolean;
		readonly isAmountNone: boolean;
		readonly isInvalidDelays: boolean;
		readonly isOngoingTimeUnitUpdateIntervalNotExist: boolean;
		readonly isLastTimeUpdatedOngoingTimeUnitNotExist: boolean;
		readonly isTooFrequent: boolean;
		readonly isDestAccountNotValid: boolean;
		readonly isWhiteListNotExist: boolean;
		readonly isDelegatorAlreadyTuned: boolean;
		readonly isFeeTooHigh: boolean;
		readonly isNotEnoughBalance: boolean;
		readonly isVectorTooLong: boolean;
		readonly isMultiCurrencyError: boolean;
		readonly isNotDelegateValidator: boolean;
		readonly isDividedByZero: boolean;
		readonly isSharePriceNotValid: boolean;
		readonly isInvalidAmount: boolean;
		readonly isValidatorMultilocationNotvalid: boolean;
		readonly isAmountNotProvided: boolean;
		readonly isFailToConvert: boolean;
		readonly isExceedMaxLengthLimit: boolean;
		readonly isTransferToError: boolean;
		readonly isStablePoolNotFound: boolean;
		readonly isStablePoolTokenIndexNotFound: boolean;
		readonly isExceedLimit: boolean;
		readonly isInvalidPageNumber: boolean;
		readonly isNoMoreValidatorBoostListForCurrency: boolean;
		readonly type:
			| 'OperateOriginNotSet'
			| 'NotAuthorized'
			| 'NotSupportedCurrencyId'
			| 'FailToAddDelegator'
			| 'OverFlow'
			| 'UnderFlow'
			| 'NotExist'
			| 'LowerThanMinimum'
			| 'GreaterThanMaximum'
			| 'AlreadyBonded'
			| 'AccountNotExist'
			| 'DelegatorNotExist'
			| 'XcmFailure'
			| 'DelegatorNotBonded'
			| 'ExceedActiveMaximum'
			| 'ProblematicLedger'
			| 'NotEnoughToUnbond'
			| 'ExceedUnlockingRecords'
			| 'RebondExceedUnlockingAmount'
			| 'DecodingError'
			| 'EncodingError'
			| 'VectorEmpty'
			| 'ValidatorSetNotExist'
			| 'ValidatorNotExist'
			| 'InvalidTimeUnit'
			| 'AmountZero'
			| 'AmountNotZero'
			| 'AlreadyExist'
			| 'ValidatorStillInUse'
			| 'TimeUnitNotExist'
			| 'FeeSourceNotExist'
			| 'WeightAndFeeNotExists'
			| 'MinimumsAndMaximumsNotExist'
			| 'QueryNotExist'
			| 'DelaysNotExist'
			| 'Unexpected'
			| 'QueryResponseRemoveError'
			| 'InvalidHostingFee'
			| 'InvalidAccount'
			| 'IncreaseTokenPoolError'
			| 'TuneExchangeRateLimitNotSet'
			| 'CurrencyLatestTuneRecordNotExist'
			| 'InvalidTransferSource'
			| 'ValidatorNotProvided'
			| 'Unsupported'
			| 'ValidatorNotBonded'
			| 'AlreadyRequested'
			| 'RequestNotExist'
			| 'AlreadyLeaving'
			| 'DelegatorNotLeaving'
			| 'RequestNotDue'
			| 'LeavingNotDue'
			| 'DelegatorSetNotExist'
			| 'DelegatorLeaving'
			| 'DelegatorAlreadyLeaving'
			| 'ValidatorError'
			| 'AmountNone'
			| 'InvalidDelays'
			| 'OngoingTimeUnitUpdateIntervalNotExist'
			| 'LastTimeUpdatedOngoingTimeUnitNotExist'
			| 'TooFrequent'
			| 'DestAccountNotValid'
			| 'WhiteListNotExist'
			| 'DelegatorAlreadyTuned'
			| 'FeeTooHigh'
			| 'NotEnoughBalance'
			| 'VectorTooLong'
			| 'MultiCurrencyError'
			| 'NotDelegateValidator'
			| 'DividedByZero'
			| 'SharePriceNotValid'
			| 'InvalidAmount'
			| 'ValidatorMultilocationNotvalid'
			| 'AmountNotProvided'
			| 'FailToConvert'
			| 'ExceedMaxLengthLimit'
			| 'TransferToError'
			| 'StablePoolNotFound'
			| 'StablePoolTokenIndexNotFound'
			| 'ExceedLimit'
			| 'InvalidPageNumber'
			| 'NoMoreValidatorBoostListForCurrency';
	}

	/** @name TangleXcmInterfaceError (716) */
	interface TangleXcmInterfaceError extends Enum {
		readonly isFeeConvertFailed: boolean;
		readonly isXcmExecutionFailed: boolean;
		readonly isXcmSendFailed: boolean;
		readonly isOperationWeightAndFeeNotExist: boolean;
		readonly isFailToConvert: boolean;
		readonly type:
			| 'FeeConvertFailed'
			| 'XcmExecutionFailed'
			| 'XcmSendFailed'
			| 'OperationWeightAndFeeNotExist'
			| 'FailToConvert';
	}

	/** @name TangleSlpxEthereumCallConfiguration (718) */
	interface TangleSlpxEthereumCallConfiguration extends Struct {
		readonly xcmFee: u128;
		readonly xcmWeight: SpWeightsWeightV2Weight;
		readonly period: u32;
		readonly lastBlock: u32;
		readonly contract: H160;
	}

	/** @name TangleSlpxError (723) */
	interface TangleSlpxError extends Enum {
		readonly isTokenNotFoundInLstMinting: boolean;
		readonly isTokenNotFoundInZenlink: boolean;
		readonly isAccountIdAlreadyInWhitelist: boolean;
		readonly isAccountIdNotInWhitelist: boolean;
		readonly isExceededWhitelistMaxNumber: boolean;
		readonly isNotSetExecutionFee: boolean;
		readonly isFreeBalanceTooLow: boolean;
		readonly isArgumentsError: boolean;
		readonly isErrorConvertlst: boolean;
		readonly isErrorValidating: boolean;
		readonly isErrorDelivering: boolean;
		readonly isUnsupported: boolean;
		readonly type:
			| 'TokenNotFoundInLstMinting'
			| 'TokenNotFoundInZenlink'
			| 'AccountIdAlreadyInWhitelist'
			| 'AccountIdNotInWhitelist'
			| 'ExceededWhitelistMaxNumber'
			| 'NotSetExecutionFee'
			| 'FreeBalanceTooLow'
			| 'ArgumentsError'
			| 'ErrorConvertLst'
			| 'ErrorValidating'
			| 'ErrorDelivering'
			| 'Unsupported';
	}

	/** @name PalletRankedCollectiveMemberRecord (724) */
	interface PalletRankedCollectiveMemberRecord extends Struct {
		readonly rank: u16;
	}

	/** @name PalletRankedCollectiveError (728) */
	interface PalletRankedCollectiveError extends Enum {
		readonly isAlreadyMember: boolean;
		readonly isNotMember: boolean;
		readonly isNotPolling: boolean;
		readonly isOngoing: boolean;
		readonly isNoneRemaining: boolean;
		readonly isCorruption: boolean;
		readonly isRankTooLow: boolean;
		readonly isInvalidWitness: boolean;
		readonly isNoPermission: boolean;
		readonly type:
			| 'AlreadyMember'
			| 'NotMember'
			| 'NotPolling'
			| 'Ongoing'
			| 'NoneRemaining'
			| 'Corruption'
			| 'RankTooLow'
			| 'InvalidWitness'
			| 'NoPermission';
	}

	/** @name PalletReferendaReferendumInfoRankedCollectiveTally (729) */
	interface PalletReferendaReferendumInfoRankedCollectiveTally extends Enum {
		readonly isOngoing: boolean;
		readonly asOngoing: PalletReferendaReferendumStatusRankedCollectiveTally;
		readonly isApproved: boolean;
		readonly asApproved: ITuple<
			[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]
		>;
		readonly isRejected: boolean;
		readonly asRejected: ITuple<
			[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]
		>;
		readonly isCancelled: boolean;
		readonly asCancelled: ITuple<
			[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]
		>;
		readonly isTimedOut: boolean;
		readonly asTimedOut: ITuple<
			[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]
		>;
		readonly isKilled: boolean;
		readonly asKilled: u32;
		readonly type: 'Ongoing' | 'Approved' | 'Rejected' | 'Cancelled' | 'TimedOut' | 'Killed';
	}

	/** @name PalletReferendaReferendumStatusRankedCollectiveTally (730) */
	interface PalletReferendaReferendumStatusRankedCollectiveTally extends Struct {
		readonly track: u16;
		readonly origin: TangleKusamaRuntimeOriginCaller;
		readonly proposal: FrameSupportPreimagesBounded;
		readonly enactment: FrameSupportScheduleDispatchTime;
		readonly submitted: u32;
		readonly submissionDeposit: PalletReferendaDeposit;
		readonly decisionDeposit: Option<PalletReferendaDeposit>;
		readonly deciding: Option<PalletReferendaDecidingStatus>;
		readonly tally: PalletRankedCollectiveTally;
		readonly inQueue: bool;
		readonly alarm: Option<ITuple<[u32, ITuple<[u32, u32]>]>>;
	}

	/** @name TangleStableAssetStableAssetPoolInfo (733) */
	interface TangleStableAssetStableAssetPoolInfo extends Struct {
		readonly poolId: u32;
		readonly poolAsset: TanglePrimitivesCurrencyCurrencyId;
		readonly assets: Vec<TanglePrimitivesCurrencyCurrencyId>;
		readonly precisions: Vec<u128>;
		readonly mintFee: u128;
		readonly swapFee: u128;
		readonly redeemFee: u128;
		readonly totalSupply: u128;
		readonly a: u128;
		readonly aBlock: u32;
		readonly futureA: u128;
		readonly futureABlock: u32;
		readonly balances: Vec<u128>;
		readonly feeRecipient: AccountId32;
		readonly accountId: AccountId32;
		readonly yieldRecipient: AccountId32;
		readonly precision: u128;
	}

	/** @name TangleStableAssetError (735) */
	interface TangleStableAssetError extends Enum {
		readonly isInconsistentStorage: boolean;
		readonly isInvalidPoolAsset: boolean;
		readonly isArgumentsMismatch: boolean;
		readonly isArgumentsError: boolean;
		readonly isPoolNotFound: boolean;
		readonly isMath: boolean;
		readonly isInvalidPoolValue: boolean;
		readonly isMintUnderMin: boolean;
		readonly isSwapUnderMin: boolean;
		readonly isRedeemUnderMin: boolean;
		readonly isRedeemOverMax: boolean;
		readonly isTokenRateNotCleared: boolean;
		readonly type:
			| 'InconsistentStorage'
			| 'InvalidPoolAsset'
			| 'ArgumentsMismatch'
			| 'ArgumentsError'
			| 'PoolNotFound'
			| 'Math'
			| 'InvalidPoolValue'
			| 'MintUnderMin'
			| 'SwapUnderMin'
			| 'RedeemUnderMin'
			| 'RedeemOverMax'
			| 'TokenRateNotCleared';
	}

	/** @name TangleStablePoolError (736) */
	interface TangleStablePoolError extends Enum {
		readonly isSwapUnderMin: boolean;
		readonly isMintUnderMin: boolean;
		readonly isCantMint: boolean;
		readonly isRedeemOverMax: boolean;
		readonly isTokenRateNotSet: boolean;
		readonly type:
			| 'SwapUnderMin'
			| 'MintUnderMin'
			| 'CantMint'
			| 'RedeemOverMax'
			| 'TokenRateNotSet';
	}

	/** @name TangleLstVotingVoteVoting (737) */
	interface TangleLstVotingVoteVoting extends Enum {
		readonly isCasting: boolean;
		readonly asCasting: TangleLstVotingVoteCasting;
		readonly isDelegating: boolean;
		readonly asDelegating: TangleLstVotingVoteDelegating;
		readonly type: 'Casting' | 'Delegating';
	}

	/** @name TangleLstVotingVoteCasting (738) */
	interface TangleLstVotingVoteCasting extends Struct {
		readonly votes: Vec<ITuple<[u32, TangleLstVotingVoteAccountVote, u16, u128]>>;
		readonly delegations: PalletConvictionVotingDelegations;
		readonly prior: TangleLstVotingVotePriorLock;
	}

	/** @name TangleLstVotingVotePriorLock (742) */
	interface TangleLstVotingVotePriorLock extends ITuple<[u32, u128]> {}

	/** @name TangleLstVotingVoteDelegating (743) */
	interface TangleLstVotingVoteDelegating extends Struct {
		readonly balance: u128;
		readonly target: AccountId32;
		readonly conviction: PalletConvictionVotingConviction;
		readonly delegations: PalletConvictionVotingDelegations;
		readonly prior: TangleLstVotingVotePriorLock;
	}

	/** @name TangleLstVotingError (757) */
	interface TangleLstVotingError extends Enum {
		readonly isXcmFailure: boolean;
		readonly isLstNotSupport: boolean;
		readonly isDerivativeIndexOccupied: boolean;
		readonly isPendingVote: boolean;
		readonly isPendingUpdateReferendumStatus: boolean;
		readonly isNoData: boolean;
		readonly isNotOngoing: boolean;
		readonly isNotCompleted: boolean;
		readonly isNotKilled: boolean;
		readonly isNotExpired: boolean;
		readonly isNotVoter: boolean;
		readonly isNoPermission: boolean;
		readonly isNoPermissionYet: boolean;
		readonly isAlreadyDelegating: boolean;
		readonly isInsufficientFunds: boolean;
		readonly isMaxVotesReached: boolean;
		readonly isTooMany: boolean;
		readonly isNotStandardVote: boolean;
		readonly isInvalidConviction: boolean;
		readonly isOutOfRange: boolean;
		readonly type:
			| 'XcmFailure'
			| 'LstNotSupport'
			| 'DerivativeIndexOccupied'
			| 'PendingVote'
			| 'PendingUpdateReferendumStatus'
			| 'NoData'
			| 'NotOngoing'
			| 'NotCompleted'
			| 'NotKilled'
			| 'NotExpired'
			| 'NotVoter'
			| 'NoPermission'
			| 'NoPermissionYet'
			| 'AlreadyDelegating'
			| 'InsufficientFunds'
			| 'MaxVotesReached'
			| 'TooMany'
			| 'NotStandardVote'
			| 'InvalidConviction'
			| 'OutOfRange';
	}

	/** @name OrmlOracleModuleTimestampedValue (758) */
	interface OrmlOracleModuleTimestampedValue extends Struct {
		readonly value: u128;
		readonly timestamp: u64;
	}

	/** @name OrmlUtilitiesOrderedSet (759) */
	interface OrmlUtilitiesOrderedSet extends Vec<AccountId32> {}

	/** @name OrmlOracleModuleError (761) */
	interface OrmlOracleModuleError extends Enum {
		readonly isNoPermission: boolean;
		readonly isAlreadyFeeded: boolean;
		readonly type: 'NoPermission' | 'AlreadyFeeded';
	}

	/** @name SpRuntimeMultiSignature (765) */
	interface SpRuntimeMultiSignature extends Enum {
		readonly isEd25519: boolean;
		readonly asEd25519: SpCoreEd25519Signature;
		readonly isSr25519: boolean;
		readonly asSr25519: SpCoreSr25519Signature;
		readonly isEcdsa: boolean;
		readonly asEcdsa: SpCoreEcdsaSignature;
		readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
	}

	/** @name SpCoreEd25519Signature (766) */
	interface SpCoreEd25519Signature extends U8aFixed {}

	/** @name SpCoreSr25519Signature (768) */
	interface SpCoreSr25519Signature extends U8aFixed {}

	/** @name SpCoreEcdsaSignature (769) */
	interface SpCoreEcdsaSignature extends U8aFixed {}

	/** @name FrameSystemExtensionsCheckNonZeroSender (772) */
	type FrameSystemExtensionsCheckNonZeroSender = Null;

	/** @name FrameSystemExtensionsCheckSpecVersion (773) */
	type FrameSystemExtensionsCheckSpecVersion = Null;

	/** @name FrameSystemExtensionsCheckTxVersion (774) */
	type FrameSystemExtensionsCheckTxVersion = Null;

	/** @name FrameSystemExtensionsCheckGenesis (775) */
	type FrameSystemExtensionsCheckGenesis = Null;

	/** @name FrameSystemExtensionsCheckNonce (778) */
	interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

	/** @name FrameSystemExtensionsCheckWeight (779) */
	type FrameSystemExtensionsCheckWeight = Null;

	/** @name PalletTransactionPaymentChargeTransactionPayment (780) */
	interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

	/** @name TangleKusamaRuntimeRuntime (781) */
	type TangleKusamaRuntimeRuntime = Null;
} // declare module
