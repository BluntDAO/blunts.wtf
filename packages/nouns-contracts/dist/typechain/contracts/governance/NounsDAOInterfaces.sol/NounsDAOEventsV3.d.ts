import type { BaseContract, BigNumber, BigNumberish, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface NounsDAOEventsV3Interface extends utils.Interface {
    functions: {};
    events: {
        "DAONounsSupplyIncreasedFromEscrow(uint256,address)": EventFragment;
        "DAOWithdrawNounsFromEscrow(uint256[],address)": EventFragment;
        "ERC20TokensToIncludeInForkSet(address[],address[])": EventFragment;
        "EscrowedToFork(uint32,address,uint256[],uint256[],string)": EventFragment;
        "ExecuteFork(uint32,address,address,uint256,uint256)": EventFragment;
        "ForkDAODeployerSet(address,address)": EventFragment;
        "ForkPeriodSet(uint256,uint256)": EventFragment;
        "ForkThresholdSet(uint256,uint256)": EventFragment;
        "JoinFork(uint32,address,uint256[],uint256[],string)": EventFragment;
        "LastMinuteWindowSet(uint32,uint32)": EventFragment;
        "MaxQuorumVotesBPSSet(uint16,uint16)": EventFragment;
        "MinQuorumVotesBPSSet(uint16,uint16)": EventFragment;
        "NewAdmin(address,address)": EventFragment;
        "NewImplementation(address,address)": EventFragment;
        "NewPendingAdmin(address,address)": EventFragment;
        "NewPendingVetoer(address,address)": EventFragment;
        "NewVetoer(address,address)": EventFragment;
        "ObjectionPeriodDurationSet(uint32,uint32)": EventFragment;
        "ProposalCanceled(uint256)": EventFragment;
        "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)": EventFragment;
        "ProposalCreatedOnTimelockV1(uint256)": EventFragment;
        "ProposalCreatedWithRequirements(uint256,address,address[],address[],uint256[],string[],bytes[],uint256,uint256,uint256,uint256,uint256,string)": EventFragment;
        "ProposalCreatedWithRequirements(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,uint256,uint256,string)": EventFragment;
        "ProposalDescriptionUpdated(uint256,address,string,string)": EventFragment;
        "ProposalExecuted(uint256)": EventFragment;
        "ProposalObjectionPeriodSet(uint256,uint256)": EventFragment;
        "ProposalQueued(uint256,uint256)": EventFragment;
        "ProposalThresholdBPSSet(uint256,uint256)": EventFragment;
        "ProposalTransactionsUpdated(uint256,address,address[],uint256[],string[],bytes[],string)": EventFragment;
        "ProposalUpdatablePeriodSet(uint32,uint32)": EventFragment;
        "ProposalUpdated(uint256,address,address[],uint256[],string[],bytes[],string,string)": EventFragment;
        "ProposalVetoed(uint256)": EventFragment;
        "QuorumCoefficientSet(uint32,uint32)": EventFragment;
        "QuorumVotesBPSSet(uint256,uint256)": EventFragment;
        "RefundableVote(address,uint256,bool)": EventFragment;
        "SignatureCancelled(address,bytes)": EventFragment;
        "TimelocksAndAdminSet(address,address,address)": EventFragment;
        "VoteCast(address,uint256,uint8,uint256,string)": EventFragment;
        "VoteSnapshotBlockSwitchProposalIdSet(uint256,uint256)": EventFragment;
        "VotingDelaySet(uint256,uint256)": EventFragment;
        "VotingPeriodSet(uint256,uint256)": EventFragment;
        "Withdraw(uint256,bool)": EventFragment;
        "WithdrawFromForkEscrow(uint32,address,uint256[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DAONounsSupplyIncreasedFromEscrow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DAOWithdrawNounsFromEscrow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ERC20TokensToIncludeInForkSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EscrowedToFork"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecuteFork"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ForkDAODeployerSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ForkPeriodSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ForkThresholdSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "JoinFork"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LastMinuteWindowSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxQuorumVotesBPSSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinQuorumVotesBPSSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewImplementation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPendingAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPendingVetoer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewVetoer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ObjectionPeriodDurationSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreatedOnTimelockV1"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreatedWithRequirements(uint256,address,address[],address[],uint256[],string[],bytes[],uint256,uint256,uint256,uint256,uint256,string)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreatedWithRequirements(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,uint256,uint256,string)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalDescriptionUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalObjectionPeriodSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalQueued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalThresholdBPSSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalTransactionsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalUpdatablePeriodSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalVetoed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "QuorumCoefficientSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "QuorumVotesBPSSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RefundableVote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SignatureCancelled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TimelocksAndAdminSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VoteCast"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VoteSnapshotBlockSwitchProposalIdSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VotingDelaySet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VotingPeriodSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawFromForkEscrow"): EventFragment;
}
export interface DAONounsSupplyIncreasedFromEscrowEventObject {
    numTokens: BigNumber;
    to: string;
}
export declare type DAONounsSupplyIncreasedFromEscrowEvent = TypedEvent<[
    BigNumber,
    string
], DAONounsSupplyIncreasedFromEscrowEventObject>;
export declare type DAONounsSupplyIncreasedFromEscrowEventFilter = TypedEventFilter<DAONounsSupplyIncreasedFromEscrowEvent>;
export interface DAOWithdrawNounsFromEscrowEventObject {
    tokenIds: BigNumber[];
    to: string;
}
export declare type DAOWithdrawNounsFromEscrowEvent = TypedEvent<[
    BigNumber[],
    string
], DAOWithdrawNounsFromEscrowEventObject>;
export declare type DAOWithdrawNounsFromEscrowEventFilter = TypedEventFilter<DAOWithdrawNounsFromEscrowEvent>;
export interface ERC20TokensToIncludeInForkSetEventObject {
    oldErc20Tokens: string[];
    newErc20tokens: string[];
}
export declare type ERC20TokensToIncludeInForkSetEvent = TypedEvent<[
    string[],
    string[]
], ERC20TokensToIncludeInForkSetEventObject>;
export declare type ERC20TokensToIncludeInForkSetEventFilter = TypedEventFilter<ERC20TokensToIncludeInForkSetEvent>;
export interface EscrowedToForkEventObject {
    forkId: number;
    owner: string;
    tokenIds: BigNumber[];
    proposalIds: BigNumber[];
    reason: string;
}
export declare type EscrowedToForkEvent = TypedEvent<[
    number,
    string,
    BigNumber[],
    BigNumber[],
    string
], EscrowedToForkEventObject>;
export declare type EscrowedToForkEventFilter = TypedEventFilter<EscrowedToForkEvent>;
export interface ExecuteForkEventObject {
    forkId: number;
    forkTreasury: string;
    forkToken: string;
    forkEndTimestamp: BigNumber;
    tokensInEscrow: BigNumber;
}
export declare type ExecuteForkEvent = TypedEvent<[
    number,
    string,
    string,
    BigNumber,
    BigNumber
], ExecuteForkEventObject>;
export declare type ExecuteForkEventFilter = TypedEventFilter<ExecuteForkEvent>;
export interface ForkDAODeployerSetEventObject {
    oldForkDAODeployer: string;
    newForkDAODeployer: string;
}
export declare type ForkDAODeployerSetEvent = TypedEvent<[
    string,
    string
], ForkDAODeployerSetEventObject>;
export declare type ForkDAODeployerSetEventFilter = TypedEventFilter<ForkDAODeployerSetEvent>;
export interface ForkPeriodSetEventObject {
    oldForkPeriod: BigNumber;
    newForkPeriod: BigNumber;
}
export declare type ForkPeriodSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ForkPeriodSetEventObject>;
export declare type ForkPeriodSetEventFilter = TypedEventFilter<ForkPeriodSetEvent>;
export interface ForkThresholdSetEventObject {
    oldForkThreshold: BigNumber;
    newForkThreshold: BigNumber;
}
export declare type ForkThresholdSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ForkThresholdSetEventObject>;
export declare type ForkThresholdSetEventFilter = TypedEventFilter<ForkThresholdSetEvent>;
export interface JoinForkEventObject {
    forkId: number;
    owner: string;
    tokenIds: BigNumber[];
    proposalIds: BigNumber[];
    reason: string;
}
export declare type JoinForkEvent = TypedEvent<[
    number,
    string,
    BigNumber[],
    BigNumber[],
    string
], JoinForkEventObject>;
export declare type JoinForkEventFilter = TypedEventFilter<JoinForkEvent>;
export interface LastMinuteWindowSetEventObject {
    oldLastMinuteWindowInBlocks: number;
    newLastMinuteWindowInBlocks: number;
}
export declare type LastMinuteWindowSetEvent = TypedEvent<[
    number,
    number
], LastMinuteWindowSetEventObject>;
export declare type LastMinuteWindowSetEventFilter = TypedEventFilter<LastMinuteWindowSetEvent>;
export interface MaxQuorumVotesBPSSetEventObject {
    oldMaxQuorumVotesBPS: number;
    newMaxQuorumVotesBPS: number;
}
export declare type MaxQuorumVotesBPSSetEvent = TypedEvent<[
    number,
    number
], MaxQuorumVotesBPSSetEventObject>;
export declare type MaxQuorumVotesBPSSetEventFilter = TypedEventFilter<MaxQuorumVotesBPSSetEvent>;
export interface MinQuorumVotesBPSSetEventObject {
    oldMinQuorumVotesBPS: number;
    newMinQuorumVotesBPS: number;
}
export declare type MinQuorumVotesBPSSetEvent = TypedEvent<[
    number,
    number
], MinQuorumVotesBPSSetEventObject>;
export declare type MinQuorumVotesBPSSetEventFilter = TypedEventFilter<MinQuorumVotesBPSSetEvent>;
export interface NewAdminEventObject {
    oldAdmin: string;
    newAdmin: string;
}
export declare type NewAdminEvent = TypedEvent<[string, string], NewAdminEventObject>;
export declare type NewAdminEventFilter = TypedEventFilter<NewAdminEvent>;
export interface NewImplementationEventObject {
    oldImplementation: string;
    newImplementation: string;
}
export declare type NewImplementationEvent = TypedEvent<[
    string,
    string
], NewImplementationEventObject>;
export declare type NewImplementationEventFilter = TypedEventFilter<NewImplementationEvent>;
export interface NewPendingAdminEventObject {
    oldPendingAdmin: string;
    newPendingAdmin: string;
}
export declare type NewPendingAdminEvent = TypedEvent<[
    string,
    string
], NewPendingAdminEventObject>;
export declare type NewPendingAdminEventFilter = TypedEventFilter<NewPendingAdminEvent>;
export interface NewPendingVetoerEventObject {
    oldPendingVetoer: string;
    newPendingVetoer: string;
}
export declare type NewPendingVetoerEvent = TypedEvent<[
    string,
    string
], NewPendingVetoerEventObject>;
export declare type NewPendingVetoerEventFilter = TypedEventFilter<NewPendingVetoerEvent>;
export interface NewVetoerEventObject {
    oldVetoer: string;
    newVetoer: string;
}
export declare type NewVetoerEvent = TypedEvent<[string, string], NewVetoerEventObject>;
export declare type NewVetoerEventFilter = TypedEventFilter<NewVetoerEvent>;
export interface ObjectionPeriodDurationSetEventObject {
    oldObjectionPeriodDurationInBlocks: number;
    newObjectionPeriodDurationInBlocks: number;
}
export declare type ObjectionPeriodDurationSetEvent = TypedEvent<[
    number,
    number
], ObjectionPeriodDurationSetEventObject>;
export declare type ObjectionPeriodDurationSetEventFilter = TypedEventFilter<ObjectionPeriodDurationSetEvent>;
export interface ProposalCanceledEventObject {
    id: BigNumber;
}
export declare type ProposalCanceledEvent = TypedEvent<[
    BigNumber
], ProposalCanceledEventObject>;
export declare type ProposalCanceledEventFilter = TypedEventFilter<ProposalCanceledEvent>;
export interface ProposalCreatedEventObject {
    id: BigNumber;
    proposer: string;
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    startBlock: BigNumber;
    endBlock: BigNumber;
    description: string;
}
export declare type ProposalCreatedEvent = TypedEvent<[
    BigNumber,
    string,
    string[],
    BigNumber[],
    string[],
    string[],
    BigNumber,
    BigNumber,
    string
], ProposalCreatedEventObject>;
export declare type ProposalCreatedEventFilter = TypedEventFilter<ProposalCreatedEvent>;
export interface ProposalCreatedOnTimelockV1EventObject {
    id: BigNumber;
}
export declare type ProposalCreatedOnTimelockV1Event = TypedEvent<[
    BigNumber
], ProposalCreatedOnTimelockV1EventObject>;
export declare type ProposalCreatedOnTimelockV1EventFilter = TypedEventFilter<ProposalCreatedOnTimelockV1Event>;
export interface ProposalCreatedWithRequirements_uint256_address_address_array_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_uint256_string_EventObject {
    id: BigNumber;
    proposer: string;
    signers: string[];
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    startBlock: BigNumber;
    endBlock: BigNumber;
    updatePeriodEndBlock: BigNumber;
    proposalThreshold: BigNumber;
    quorumVotes: BigNumber;
    description: string;
}
export declare type ProposalCreatedWithRequirements_uint256_address_address_array_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_uint256_string_Event = TypedEvent<[
    BigNumber,
    string,
    string[],
    string[],
    BigNumber[],
    string[],
    string[],
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
], ProposalCreatedWithRequirements_uint256_address_address_array_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_uint256_string_EventObject>;
export declare type ProposalCreatedWithRequirements_uint256_address_address_array_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_uint256_string_EventFilter = TypedEventFilter<ProposalCreatedWithRequirements_uint256_address_address_array_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_uint256_string_Event>;
export interface ProposalCreatedWithRequirements_uint256_address_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_string_EventObject {
    id: BigNumber;
    proposer: string;
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    startBlock: BigNumber;
    endBlock: BigNumber;
    proposalThreshold: BigNumber;
    quorumVotes: BigNumber;
    description: string;
}
export declare type ProposalCreatedWithRequirements_uint256_address_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_string_Event = TypedEvent<[
    BigNumber,
    string,
    string[],
    BigNumber[],
    string[],
    string[],
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
], ProposalCreatedWithRequirements_uint256_address_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_string_EventObject>;
export declare type ProposalCreatedWithRequirements_uint256_address_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_string_EventFilter = TypedEventFilter<ProposalCreatedWithRequirements_uint256_address_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_string_Event>;
export interface ProposalDescriptionUpdatedEventObject {
    id: BigNumber;
    proposer: string;
    description: string;
    updateMessage: string;
}
export declare type ProposalDescriptionUpdatedEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    string
], ProposalDescriptionUpdatedEventObject>;
export declare type ProposalDescriptionUpdatedEventFilter = TypedEventFilter<ProposalDescriptionUpdatedEvent>;
export interface ProposalExecutedEventObject {
    id: BigNumber;
}
export declare type ProposalExecutedEvent = TypedEvent<[
    BigNumber
], ProposalExecutedEventObject>;
export declare type ProposalExecutedEventFilter = TypedEventFilter<ProposalExecutedEvent>;
export interface ProposalObjectionPeriodSetEventObject {
    id: BigNumber;
    objectionPeriodEndBlock: BigNumber;
}
export declare type ProposalObjectionPeriodSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ProposalObjectionPeriodSetEventObject>;
export declare type ProposalObjectionPeriodSetEventFilter = TypedEventFilter<ProposalObjectionPeriodSetEvent>;
export interface ProposalQueuedEventObject {
    id: BigNumber;
    eta: BigNumber;
}
export declare type ProposalQueuedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ProposalQueuedEventObject>;
export declare type ProposalQueuedEventFilter = TypedEventFilter<ProposalQueuedEvent>;
export interface ProposalThresholdBPSSetEventObject {
    oldProposalThresholdBPS: BigNumber;
    newProposalThresholdBPS: BigNumber;
}
export declare type ProposalThresholdBPSSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ProposalThresholdBPSSetEventObject>;
export declare type ProposalThresholdBPSSetEventFilter = TypedEventFilter<ProposalThresholdBPSSetEvent>;
export interface ProposalTransactionsUpdatedEventObject {
    id: BigNumber;
    proposer: string;
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    updateMessage: string;
}
export declare type ProposalTransactionsUpdatedEvent = TypedEvent<[
    BigNumber,
    string,
    string[],
    BigNumber[],
    string[],
    string[],
    string
], ProposalTransactionsUpdatedEventObject>;
export declare type ProposalTransactionsUpdatedEventFilter = TypedEventFilter<ProposalTransactionsUpdatedEvent>;
export interface ProposalUpdatablePeriodSetEventObject {
    oldProposalUpdatablePeriodInBlocks: number;
    newProposalUpdatablePeriodInBlocks: number;
}
export declare type ProposalUpdatablePeriodSetEvent = TypedEvent<[
    number,
    number
], ProposalUpdatablePeriodSetEventObject>;
export declare type ProposalUpdatablePeriodSetEventFilter = TypedEventFilter<ProposalUpdatablePeriodSetEvent>;
export interface ProposalUpdatedEventObject {
    id: BigNumber;
    proposer: string;
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    description: string;
    updateMessage: string;
}
export declare type ProposalUpdatedEvent = TypedEvent<[
    BigNumber,
    string,
    string[],
    BigNumber[],
    string[],
    string[],
    string,
    string
], ProposalUpdatedEventObject>;
export declare type ProposalUpdatedEventFilter = TypedEventFilter<ProposalUpdatedEvent>;
export interface ProposalVetoedEventObject {
    id: BigNumber;
}
export declare type ProposalVetoedEvent = TypedEvent<[
    BigNumber
], ProposalVetoedEventObject>;
export declare type ProposalVetoedEventFilter = TypedEventFilter<ProposalVetoedEvent>;
export interface QuorumCoefficientSetEventObject {
    oldQuorumCoefficient: number;
    newQuorumCoefficient: number;
}
export declare type QuorumCoefficientSetEvent = TypedEvent<[
    number,
    number
], QuorumCoefficientSetEventObject>;
export declare type QuorumCoefficientSetEventFilter = TypedEventFilter<QuorumCoefficientSetEvent>;
export interface QuorumVotesBPSSetEventObject {
    oldQuorumVotesBPS: BigNumber;
    newQuorumVotesBPS: BigNumber;
}
export declare type QuorumVotesBPSSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], QuorumVotesBPSSetEventObject>;
export declare type QuorumVotesBPSSetEventFilter = TypedEventFilter<QuorumVotesBPSSetEvent>;
export interface RefundableVoteEventObject {
    voter: string;
    refundAmount: BigNumber;
    refundSent: boolean;
}
export declare type RefundableVoteEvent = TypedEvent<[
    string,
    BigNumber,
    boolean
], RefundableVoteEventObject>;
export declare type RefundableVoteEventFilter = TypedEventFilter<RefundableVoteEvent>;
export interface SignatureCancelledEventObject {
    signer: string;
    sig: string;
}
export declare type SignatureCancelledEvent = TypedEvent<[
    string,
    string
], SignatureCancelledEventObject>;
export declare type SignatureCancelledEventFilter = TypedEventFilter<SignatureCancelledEvent>;
export interface TimelocksAndAdminSetEventObject {
    timelock: string;
    timelockV1: string;
    admin: string;
}
export declare type TimelocksAndAdminSetEvent = TypedEvent<[
    string,
    string,
    string
], TimelocksAndAdminSetEventObject>;
export declare type TimelocksAndAdminSetEventFilter = TypedEventFilter<TimelocksAndAdminSetEvent>;
export interface VoteCastEventObject {
    voter: string;
    proposalId: BigNumber;
    support: number;
    votes: BigNumber;
    reason: string;
}
export declare type VoteCastEvent = TypedEvent<[
    string,
    BigNumber,
    number,
    BigNumber,
    string
], VoteCastEventObject>;
export declare type VoteCastEventFilter = TypedEventFilter<VoteCastEvent>;
export interface VoteSnapshotBlockSwitchProposalIdSetEventObject {
    oldVoteSnapshotBlockSwitchProposalId: BigNumber;
    newVoteSnapshotBlockSwitchProposalId: BigNumber;
}
export declare type VoteSnapshotBlockSwitchProposalIdSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], VoteSnapshotBlockSwitchProposalIdSetEventObject>;
export declare type VoteSnapshotBlockSwitchProposalIdSetEventFilter = TypedEventFilter<VoteSnapshotBlockSwitchProposalIdSetEvent>;
export interface VotingDelaySetEventObject {
    oldVotingDelay: BigNumber;
    newVotingDelay: BigNumber;
}
export declare type VotingDelaySetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], VotingDelaySetEventObject>;
export declare type VotingDelaySetEventFilter = TypedEventFilter<VotingDelaySetEvent>;
export interface VotingPeriodSetEventObject {
    oldVotingPeriod: BigNumber;
    newVotingPeriod: BigNumber;
}
export declare type VotingPeriodSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], VotingPeriodSetEventObject>;
export declare type VotingPeriodSetEventFilter = TypedEventFilter<VotingPeriodSetEvent>;
export interface WithdrawEventObject {
    amount: BigNumber;
    sent: boolean;
}
export declare type WithdrawEvent = TypedEvent<[
    BigNumber,
    boolean
], WithdrawEventObject>;
export declare type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface WithdrawFromForkEscrowEventObject {
    forkId: number;
    owner: string;
    tokenIds: BigNumber[];
}
export declare type WithdrawFromForkEscrowEvent = TypedEvent<[
    number,
    string,
    BigNumber[]
], WithdrawFromForkEscrowEventObject>;
export declare type WithdrawFromForkEscrowEventFilter = TypedEventFilter<WithdrawFromForkEscrowEvent>;
export interface NounsDAOEventsV3 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NounsDAOEventsV3Interface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {};
    callStatic: {};
    filters: {
        "DAONounsSupplyIncreasedFromEscrow(uint256,address)"(numTokens?: null, to?: null): DAONounsSupplyIncreasedFromEscrowEventFilter;
        DAONounsSupplyIncreasedFromEscrow(numTokens?: null, to?: null): DAONounsSupplyIncreasedFromEscrowEventFilter;
        "DAOWithdrawNounsFromEscrow(uint256[],address)"(tokenIds?: null, to?: null): DAOWithdrawNounsFromEscrowEventFilter;
        DAOWithdrawNounsFromEscrow(tokenIds?: null, to?: null): DAOWithdrawNounsFromEscrowEventFilter;
        "ERC20TokensToIncludeInForkSet(address[],address[])"(oldErc20Tokens?: null, newErc20tokens?: null): ERC20TokensToIncludeInForkSetEventFilter;
        ERC20TokensToIncludeInForkSet(oldErc20Tokens?: null, newErc20tokens?: null): ERC20TokensToIncludeInForkSetEventFilter;
        "EscrowedToFork(uint32,address,uint256[],uint256[],string)"(forkId?: BigNumberish | null, owner?: string | null, tokenIds?: null, proposalIds?: null, reason?: null): EscrowedToForkEventFilter;
        EscrowedToFork(forkId?: BigNumberish | null, owner?: string | null, tokenIds?: null, proposalIds?: null, reason?: null): EscrowedToForkEventFilter;
        "ExecuteFork(uint32,address,address,uint256,uint256)"(forkId?: BigNumberish | null, forkTreasury?: null, forkToken?: null, forkEndTimestamp?: null, tokensInEscrow?: null): ExecuteForkEventFilter;
        ExecuteFork(forkId?: BigNumberish | null, forkTreasury?: null, forkToken?: null, forkEndTimestamp?: null, tokensInEscrow?: null): ExecuteForkEventFilter;
        "ForkDAODeployerSet(address,address)"(oldForkDAODeployer?: null, newForkDAODeployer?: null): ForkDAODeployerSetEventFilter;
        ForkDAODeployerSet(oldForkDAODeployer?: null, newForkDAODeployer?: null): ForkDAODeployerSetEventFilter;
        "ForkPeriodSet(uint256,uint256)"(oldForkPeriod?: null, newForkPeriod?: null): ForkPeriodSetEventFilter;
        ForkPeriodSet(oldForkPeriod?: null, newForkPeriod?: null): ForkPeriodSetEventFilter;
        "ForkThresholdSet(uint256,uint256)"(oldForkThreshold?: null, newForkThreshold?: null): ForkThresholdSetEventFilter;
        ForkThresholdSet(oldForkThreshold?: null, newForkThreshold?: null): ForkThresholdSetEventFilter;
        "JoinFork(uint32,address,uint256[],uint256[],string)"(forkId?: BigNumberish | null, owner?: string | null, tokenIds?: null, proposalIds?: null, reason?: null): JoinForkEventFilter;
        JoinFork(forkId?: BigNumberish | null, owner?: string | null, tokenIds?: null, proposalIds?: null, reason?: null): JoinForkEventFilter;
        "LastMinuteWindowSet(uint32,uint32)"(oldLastMinuteWindowInBlocks?: null, newLastMinuteWindowInBlocks?: null): LastMinuteWindowSetEventFilter;
        LastMinuteWindowSet(oldLastMinuteWindowInBlocks?: null, newLastMinuteWindowInBlocks?: null): LastMinuteWindowSetEventFilter;
        "MaxQuorumVotesBPSSet(uint16,uint16)"(oldMaxQuorumVotesBPS?: null, newMaxQuorumVotesBPS?: null): MaxQuorumVotesBPSSetEventFilter;
        MaxQuorumVotesBPSSet(oldMaxQuorumVotesBPS?: null, newMaxQuorumVotesBPS?: null): MaxQuorumVotesBPSSetEventFilter;
        "MinQuorumVotesBPSSet(uint16,uint16)"(oldMinQuorumVotesBPS?: null, newMinQuorumVotesBPS?: null): MinQuorumVotesBPSSetEventFilter;
        MinQuorumVotesBPSSet(oldMinQuorumVotesBPS?: null, newMinQuorumVotesBPS?: null): MinQuorumVotesBPSSetEventFilter;
        "NewAdmin(address,address)"(oldAdmin?: null, newAdmin?: null): NewAdminEventFilter;
        NewAdmin(oldAdmin?: null, newAdmin?: null): NewAdminEventFilter;
        "NewImplementation(address,address)"(oldImplementation?: null, newImplementation?: null): NewImplementationEventFilter;
        NewImplementation(oldImplementation?: null, newImplementation?: null): NewImplementationEventFilter;
        "NewPendingAdmin(address,address)"(oldPendingAdmin?: null, newPendingAdmin?: null): NewPendingAdminEventFilter;
        NewPendingAdmin(oldPendingAdmin?: null, newPendingAdmin?: null): NewPendingAdminEventFilter;
        "NewPendingVetoer(address,address)"(oldPendingVetoer?: null, newPendingVetoer?: null): NewPendingVetoerEventFilter;
        NewPendingVetoer(oldPendingVetoer?: null, newPendingVetoer?: null): NewPendingVetoerEventFilter;
        "NewVetoer(address,address)"(oldVetoer?: null, newVetoer?: null): NewVetoerEventFilter;
        NewVetoer(oldVetoer?: null, newVetoer?: null): NewVetoerEventFilter;
        "ObjectionPeriodDurationSet(uint32,uint32)"(oldObjectionPeriodDurationInBlocks?: null, newObjectionPeriodDurationInBlocks?: null): ObjectionPeriodDurationSetEventFilter;
        ObjectionPeriodDurationSet(oldObjectionPeriodDurationInBlocks?: null, newObjectionPeriodDurationInBlocks?: null): ObjectionPeriodDurationSetEventFilter;
        "ProposalCanceled(uint256)"(id?: null): ProposalCanceledEventFilter;
        ProposalCanceled(id?: null): ProposalCanceledEventFilter;
        "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)"(id?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, description?: null): ProposalCreatedEventFilter;
        ProposalCreated(id?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, description?: null): ProposalCreatedEventFilter;
        "ProposalCreatedOnTimelockV1(uint256)"(id?: null): ProposalCreatedOnTimelockV1EventFilter;
        ProposalCreatedOnTimelockV1(id?: null): ProposalCreatedOnTimelockV1EventFilter;
        "ProposalCreatedWithRequirements(uint256,address,address[],address[],uint256[],string[],bytes[],uint256,uint256,uint256,uint256,uint256,string)"(id?: null, proposer?: null, signers?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, updatePeriodEndBlock?: null, proposalThreshold?: null, quorumVotes?: null, description?: null): ProposalCreatedWithRequirements_uint256_address_address_array_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_uint256_string_EventFilter;
        "ProposalCreatedWithRequirements(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,uint256,uint256,string)"(id?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, proposalThreshold?: null, quorumVotes?: null, description?: null): ProposalCreatedWithRequirements_uint256_address_address_array_uint256_array_string_array_bytes_array_uint256_uint256_uint256_uint256_string_EventFilter;
        "ProposalDescriptionUpdated(uint256,address,string,string)"(id?: BigNumberish | null, proposer?: string | null, description?: null, updateMessage?: null): ProposalDescriptionUpdatedEventFilter;
        ProposalDescriptionUpdated(id?: BigNumberish | null, proposer?: string | null, description?: null, updateMessage?: null): ProposalDescriptionUpdatedEventFilter;
        "ProposalExecuted(uint256)"(id?: null): ProposalExecutedEventFilter;
        ProposalExecuted(id?: null): ProposalExecutedEventFilter;
        "ProposalObjectionPeriodSet(uint256,uint256)"(id?: BigNumberish | null, objectionPeriodEndBlock?: null): ProposalObjectionPeriodSetEventFilter;
        ProposalObjectionPeriodSet(id?: BigNumberish | null, objectionPeriodEndBlock?: null): ProposalObjectionPeriodSetEventFilter;
        "ProposalQueued(uint256,uint256)"(id?: null, eta?: null): ProposalQueuedEventFilter;
        ProposalQueued(id?: null, eta?: null): ProposalQueuedEventFilter;
        "ProposalThresholdBPSSet(uint256,uint256)"(oldProposalThresholdBPS?: null, newProposalThresholdBPS?: null): ProposalThresholdBPSSetEventFilter;
        ProposalThresholdBPSSet(oldProposalThresholdBPS?: null, newProposalThresholdBPS?: null): ProposalThresholdBPSSetEventFilter;
        "ProposalTransactionsUpdated(uint256,address,address[],uint256[],string[],bytes[],string)"(id?: BigNumberish | null, proposer?: string | null, targets?: null, values?: null, signatures?: null, calldatas?: null, updateMessage?: null): ProposalTransactionsUpdatedEventFilter;
        ProposalTransactionsUpdated(id?: BigNumberish | null, proposer?: string | null, targets?: null, values?: null, signatures?: null, calldatas?: null, updateMessage?: null): ProposalTransactionsUpdatedEventFilter;
        "ProposalUpdatablePeriodSet(uint32,uint32)"(oldProposalUpdatablePeriodInBlocks?: null, newProposalUpdatablePeriodInBlocks?: null): ProposalUpdatablePeriodSetEventFilter;
        ProposalUpdatablePeriodSet(oldProposalUpdatablePeriodInBlocks?: null, newProposalUpdatablePeriodInBlocks?: null): ProposalUpdatablePeriodSetEventFilter;
        "ProposalUpdated(uint256,address,address[],uint256[],string[],bytes[],string,string)"(id?: BigNumberish | null, proposer?: string | null, targets?: null, values?: null, signatures?: null, calldatas?: null, description?: null, updateMessage?: null): ProposalUpdatedEventFilter;
        ProposalUpdated(id?: BigNumberish | null, proposer?: string | null, targets?: null, values?: null, signatures?: null, calldatas?: null, description?: null, updateMessage?: null): ProposalUpdatedEventFilter;
        "ProposalVetoed(uint256)"(id?: null): ProposalVetoedEventFilter;
        ProposalVetoed(id?: null): ProposalVetoedEventFilter;
        "QuorumCoefficientSet(uint32,uint32)"(oldQuorumCoefficient?: null, newQuorumCoefficient?: null): QuorumCoefficientSetEventFilter;
        QuorumCoefficientSet(oldQuorumCoefficient?: null, newQuorumCoefficient?: null): QuorumCoefficientSetEventFilter;
        "QuorumVotesBPSSet(uint256,uint256)"(oldQuorumVotesBPS?: null, newQuorumVotesBPS?: null): QuorumVotesBPSSetEventFilter;
        QuorumVotesBPSSet(oldQuorumVotesBPS?: null, newQuorumVotesBPS?: null): QuorumVotesBPSSetEventFilter;
        "RefundableVote(address,uint256,bool)"(voter?: string | null, refundAmount?: null, refundSent?: null): RefundableVoteEventFilter;
        RefundableVote(voter?: string | null, refundAmount?: null, refundSent?: null): RefundableVoteEventFilter;
        "SignatureCancelled(address,bytes)"(signer?: string | null, sig?: null): SignatureCancelledEventFilter;
        SignatureCancelled(signer?: string | null, sig?: null): SignatureCancelledEventFilter;
        "TimelocksAndAdminSet(address,address,address)"(timelock?: null, timelockV1?: null, admin?: null): TimelocksAndAdminSetEventFilter;
        TimelocksAndAdminSet(timelock?: null, timelockV1?: null, admin?: null): TimelocksAndAdminSetEventFilter;
        "VoteCast(address,uint256,uint8,uint256,string)"(voter?: string | null, proposalId?: null, support?: null, votes?: null, reason?: null): VoteCastEventFilter;
        VoteCast(voter?: string | null, proposalId?: null, support?: null, votes?: null, reason?: null): VoteCastEventFilter;
        "VoteSnapshotBlockSwitchProposalIdSet(uint256,uint256)"(oldVoteSnapshotBlockSwitchProposalId?: null, newVoteSnapshotBlockSwitchProposalId?: null): VoteSnapshotBlockSwitchProposalIdSetEventFilter;
        VoteSnapshotBlockSwitchProposalIdSet(oldVoteSnapshotBlockSwitchProposalId?: null, newVoteSnapshotBlockSwitchProposalId?: null): VoteSnapshotBlockSwitchProposalIdSetEventFilter;
        "VotingDelaySet(uint256,uint256)"(oldVotingDelay?: null, newVotingDelay?: null): VotingDelaySetEventFilter;
        VotingDelaySet(oldVotingDelay?: null, newVotingDelay?: null): VotingDelaySetEventFilter;
        "VotingPeriodSet(uint256,uint256)"(oldVotingPeriod?: null, newVotingPeriod?: null): VotingPeriodSetEventFilter;
        VotingPeriodSet(oldVotingPeriod?: null, newVotingPeriod?: null): VotingPeriodSetEventFilter;
        "Withdraw(uint256,bool)"(amount?: null, sent?: null): WithdrawEventFilter;
        Withdraw(amount?: null, sent?: null): WithdrawEventFilter;
        "WithdrawFromForkEscrow(uint32,address,uint256[])"(forkId?: BigNumberish | null, owner?: string | null, tokenIds?: null): WithdrawFromForkEscrowEventFilter;
        WithdrawFromForkEscrow(forkId?: BigNumberish | null, owner?: string | null, tokenIds?: null): WithdrawFromForkEscrowEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
