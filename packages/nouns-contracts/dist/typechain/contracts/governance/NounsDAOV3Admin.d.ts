import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface NounsDAOV3AdminInterface extends utils.Interface {
    functions: {
        "MAX_FORK_PERIOD()": FunctionFragment;
        "MAX_OBJECTION_PERIOD_BLOCKS()": FunctionFragment;
        "MAX_PROPOSAL_THRESHOLD_BPS()": FunctionFragment;
        "MAX_QUORUM_VOTES_BPS_UPPER_BOUND()": FunctionFragment;
        "MAX_UPDATABLE_PERIOD_BLOCKS()": FunctionFragment;
        "MAX_VOTING_DELAY_BLOCKS()": FunctionFragment;
        "MAX_VOTING_PERIOD_BLOCKS()": FunctionFragment;
        "MIN_FORK_PERIOD()": FunctionFragment;
        "MIN_PROPOSAL_THRESHOLD_BPS()": FunctionFragment;
        "MIN_QUORUM_VOTES_BPS_LOWER_BOUND()": FunctionFragment;
        "MIN_QUORUM_VOTES_BPS_UPPER_BOUND()": FunctionFragment;
        "MIN_VOTING_DELAY_BLOCKS()": FunctionFragment;
        "MIN_VOTING_PERIOD_BLOCKS()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "MAX_FORK_PERIOD" | "MAX_OBJECTION_PERIOD_BLOCKS" | "MAX_PROPOSAL_THRESHOLD_BPS" | "MAX_QUORUM_VOTES_BPS_UPPER_BOUND" | "MAX_UPDATABLE_PERIOD_BLOCKS" | "MAX_VOTING_DELAY_BLOCKS" | "MAX_VOTING_PERIOD_BLOCKS" | "MIN_FORK_PERIOD" | "MIN_PROPOSAL_THRESHOLD_BPS" | "MIN_QUORUM_VOTES_BPS_LOWER_BOUND" | "MIN_QUORUM_VOTES_BPS_UPPER_BOUND" | "MIN_VOTING_DELAY_BLOCKS" | "MIN_VOTING_PERIOD_BLOCKS"): FunctionFragment;
    encodeFunctionData(functionFragment: "MAX_FORK_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_OBJECTION_PERIOD_BLOCKS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_PROPOSAL_THRESHOLD_BPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_QUORUM_VOTES_BPS_UPPER_BOUND", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_UPDATABLE_PERIOD_BLOCKS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_VOTING_DELAY_BLOCKS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_VOTING_PERIOD_BLOCKS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_FORK_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_PROPOSAL_THRESHOLD_BPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_QUORUM_VOTES_BPS_LOWER_BOUND", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_QUORUM_VOTES_BPS_UPPER_BOUND", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_VOTING_DELAY_BLOCKS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_VOTING_PERIOD_BLOCKS", values?: undefined): string;
    decodeFunctionResult(functionFragment: "MAX_FORK_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_OBJECTION_PERIOD_BLOCKS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_PROPOSAL_THRESHOLD_BPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_QUORUM_VOTES_BPS_UPPER_BOUND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_UPDATABLE_PERIOD_BLOCKS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_VOTING_DELAY_BLOCKS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_VOTING_PERIOD_BLOCKS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_FORK_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_PROPOSAL_THRESHOLD_BPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_QUORUM_VOTES_BPS_LOWER_BOUND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_QUORUM_VOTES_BPS_UPPER_BOUND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_VOTING_DELAY_BLOCKS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_VOTING_PERIOD_BLOCKS", data: BytesLike): Result;
    events: {
        "ERC20TokensToIncludeInForkSet(address[],address[])": EventFragment;
        "ForkDAODeployerSet(address,address)": EventFragment;
        "ForkEscrowSet(address,address)": EventFragment;
        "ForkPeriodSet(uint256,uint256)": EventFragment;
        "ForkThresholdSet(uint256,uint256)": EventFragment;
        "LastMinuteWindowSet(uint32,uint32)": EventFragment;
        "MaxQuorumVotesBPSSet(uint16,uint16)": EventFragment;
        "MinQuorumVotesBPSSet(uint16,uint16)": EventFragment;
        "NewAdmin(address,address)": EventFragment;
        "NewPendingAdmin(address,address)": EventFragment;
        "NewPendingVetoer(address,address)": EventFragment;
        "NewVetoer(address,address)": EventFragment;
        "ObjectionPeriodDurationSet(uint32,uint32)": EventFragment;
        "ProposalThresholdBPSSet(uint256,uint256)": EventFragment;
        "ProposalUpdatablePeriodSet(uint32,uint32)": EventFragment;
        "QuorumCoefficientSet(uint32,uint32)": EventFragment;
        "TimelocksAndAdminSet(address,address,address)": EventFragment;
        "VoteSnapshotBlockSwitchProposalIdSet(uint256,uint256)": EventFragment;
        "VotingDelaySet(uint256,uint256)": EventFragment;
        "VotingPeriodSet(uint256,uint256)": EventFragment;
        "Withdraw(uint256,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ERC20TokensToIncludeInForkSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ForkDAODeployerSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ForkEscrowSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ForkPeriodSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ForkThresholdSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LastMinuteWindowSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxQuorumVotesBPSSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinQuorumVotesBPSSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPendingAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPendingVetoer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewVetoer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ObjectionPeriodDurationSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalThresholdBPSSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalUpdatablePeriodSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "QuorumCoefficientSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TimelocksAndAdminSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VoteSnapshotBlockSwitchProposalIdSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VotingDelaySet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VotingPeriodSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
export interface ERC20TokensToIncludeInForkSetEventObject {
    oldErc20Tokens: string[];
    newErc20tokens: string[];
}
export declare type ERC20TokensToIncludeInForkSetEvent = TypedEvent<[
    string[],
    string[]
], ERC20TokensToIncludeInForkSetEventObject>;
export declare type ERC20TokensToIncludeInForkSetEventFilter = TypedEventFilter<ERC20TokensToIncludeInForkSetEvent>;
export interface ForkDAODeployerSetEventObject {
    oldForkDAODeployer: string;
    newForkDAODeployer: string;
}
export declare type ForkDAODeployerSetEvent = TypedEvent<[
    string,
    string
], ForkDAODeployerSetEventObject>;
export declare type ForkDAODeployerSetEventFilter = TypedEventFilter<ForkDAODeployerSetEvent>;
export interface ForkEscrowSetEventObject {
    oldForkEscrow: string;
    newForkEscrow: string;
}
export declare type ForkEscrowSetEvent = TypedEvent<[
    string,
    string
], ForkEscrowSetEventObject>;
export declare type ForkEscrowSetEventFilter = TypedEventFilter<ForkEscrowSetEvent>;
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
export interface ProposalThresholdBPSSetEventObject {
    oldProposalThresholdBPS: BigNumber;
    newProposalThresholdBPS: BigNumber;
}
export declare type ProposalThresholdBPSSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ProposalThresholdBPSSetEventObject>;
export declare type ProposalThresholdBPSSetEventFilter = TypedEventFilter<ProposalThresholdBPSSetEvent>;
export interface ProposalUpdatablePeriodSetEventObject {
    oldProposalUpdatablePeriodInBlocks: number;
    newProposalUpdatablePeriodInBlocks: number;
}
export declare type ProposalUpdatablePeriodSetEvent = TypedEvent<[
    number,
    number
], ProposalUpdatablePeriodSetEventObject>;
export declare type ProposalUpdatablePeriodSetEventFilter = TypedEventFilter<ProposalUpdatablePeriodSetEvent>;
export interface QuorumCoefficientSetEventObject {
    oldQuorumCoefficient: number;
    newQuorumCoefficient: number;
}
export declare type QuorumCoefficientSetEvent = TypedEvent<[
    number,
    number
], QuorumCoefficientSetEventObject>;
export declare type QuorumCoefficientSetEventFilter = TypedEventFilter<QuorumCoefficientSetEvent>;
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
export interface NounsDAOV3Admin extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NounsDAOV3AdminInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        MAX_FORK_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_OBJECTION_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_QUORUM_VOTES_BPS_UPPER_BOUND(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_UPDATABLE_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_VOTING_DELAY_BLOCKS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_VOTING_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MIN_FORK_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;
        MIN_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MIN_QUORUM_VOTES_BPS_LOWER_BOUND(overrides?: CallOverrides): Promise<[BigNumber]>;
        MIN_QUORUM_VOTES_BPS_UPPER_BOUND(overrides?: CallOverrides): Promise<[BigNumber]>;
        MIN_VOTING_DELAY_BLOCKS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MIN_VOTING_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    MAX_FORK_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_OBJECTION_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_QUORUM_VOTES_BPS_UPPER_BOUND(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_UPDATABLE_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_VOTING_DELAY_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_VOTING_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
    MIN_FORK_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
    MIN_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
    MIN_QUORUM_VOTES_BPS_LOWER_BOUND(overrides?: CallOverrides): Promise<BigNumber>;
    MIN_QUORUM_VOTES_BPS_UPPER_BOUND(overrides?: CallOverrides): Promise<BigNumber>;
    MIN_VOTING_DELAY_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
    MIN_VOTING_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        MAX_FORK_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_OBJECTION_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_QUORUM_VOTES_BPS_UPPER_BOUND(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_UPDATABLE_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_VOTING_DELAY_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_VOTING_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_FORK_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_QUORUM_VOTES_BPS_LOWER_BOUND(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_QUORUM_VOTES_BPS_UPPER_BOUND(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_VOTING_DELAY_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_VOTING_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "ERC20TokensToIncludeInForkSet(address[],address[])"(oldErc20Tokens?: null, newErc20tokens?: null): ERC20TokensToIncludeInForkSetEventFilter;
        ERC20TokensToIncludeInForkSet(oldErc20Tokens?: null, newErc20tokens?: null): ERC20TokensToIncludeInForkSetEventFilter;
        "ForkDAODeployerSet(address,address)"(oldForkDAODeployer?: null, newForkDAODeployer?: null): ForkDAODeployerSetEventFilter;
        ForkDAODeployerSet(oldForkDAODeployer?: null, newForkDAODeployer?: null): ForkDAODeployerSetEventFilter;
        "ForkEscrowSet(address,address)"(oldForkEscrow?: null, newForkEscrow?: null): ForkEscrowSetEventFilter;
        ForkEscrowSet(oldForkEscrow?: null, newForkEscrow?: null): ForkEscrowSetEventFilter;
        "ForkPeriodSet(uint256,uint256)"(oldForkPeriod?: null, newForkPeriod?: null): ForkPeriodSetEventFilter;
        ForkPeriodSet(oldForkPeriod?: null, newForkPeriod?: null): ForkPeriodSetEventFilter;
        "ForkThresholdSet(uint256,uint256)"(oldForkThreshold?: null, newForkThreshold?: null): ForkThresholdSetEventFilter;
        ForkThresholdSet(oldForkThreshold?: null, newForkThreshold?: null): ForkThresholdSetEventFilter;
        "LastMinuteWindowSet(uint32,uint32)"(oldLastMinuteWindowInBlocks?: null, newLastMinuteWindowInBlocks?: null): LastMinuteWindowSetEventFilter;
        LastMinuteWindowSet(oldLastMinuteWindowInBlocks?: null, newLastMinuteWindowInBlocks?: null): LastMinuteWindowSetEventFilter;
        "MaxQuorumVotesBPSSet(uint16,uint16)"(oldMaxQuorumVotesBPS?: null, newMaxQuorumVotesBPS?: null): MaxQuorumVotesBPSSetEventFilter;
        MaxQuorumVotesBPSSet(oldMaxQuorumVotesBPS?: null, newMaxQuorumVotesBPS?: null): MaxQuorumVotesBPSSetEventFilter;
        "MinQuorumVotesBPSSet(uint16,uint16)"(oldMinQuorumVotesBPS?: null, newMinQuorumVotesBPS?: null): MinQuorumVotesBPSSetEventFilter;
        MinQuorumVotesBPSSet(oldMinQuorumVotesBPS?: null, newMinQuorumVotesBPS?: null): MinQuorumVotesBPSSetEventFilter;
        "NewAdmin(address,address)"(oldAdmin?: null, newAdmin?: null): NewAdminEventFilter;
        NewAdmin(oldAdmin?: null, newAdmin?: null): NewAdminEventFilter;
        "NewPendingAdmin(address,address)"(oldPendingAdmin?: null, newPendingAdmin?: null): NewPendingAdminEventFilter;
        NewPendingAdmin(oldPendingAdmin?: null, newPendingAdmin?: null): NewPendingAdminEventFilter;
        "NewPendingVetoer(address,address)"(oldPendingVetoer?: null, newPendingVetoer?: null): NewPendingVetoerEventFilter;
        NewPendingVetoer(oldPendingVetoer?: null, newPendingVetoer?: null): NewPendingVetoerEventFilter;
        "NewVetoer(address,address)"(oldVetoer?: null, newVetoer?: null): NewVetoerEventFilter;
        NewVetoer(oldVetoer?: null, newVetoer?: null): NewVetoerEventFilter;
        "ObjectionPeriodDurationSet(uint32,uint32)"(oldObjectionPeriodDurationInBlocks?: null, newObjectionPeriodDurationInBlocks?: null): ObjectionPeriodDurationSetEventFilter;
        ObjectionPeriodDurationSet(oldObjectionPeriodDurationInBlocks?: null, newObjectionPeriodDurationInBlocks?: null): ObjectionPeriodDurationSetEventFilter;
        "ProposalThresholdBPSSet(uint256,uint256)"(oldProposalThresholdBPS?: null, newProposalThresholdBPS?: null): ProposalThresholdBPSSetEventFilter;
        ProposalThresholdBPSSet(oldProposalThresholdBPS?: null, newProposalThresholdBPS?: null): ProposalThresholdBPSSetEventFilter;
        "ProposalUpdatablePeriodSet(uint32,uint32)"(oldProposalUpdatablePeriodInBlocks?: null, newProposalUpdatablePeriodInBlocks?: null): ProposalUpdatablePeriodSetEventFilter;
        ProposalUpdatablePeriodSet(oldProposalUpdatablePeriodInBlocks?: null, newProposalUpdatablePeriodInBlocks?: null): ProposalUpdatablePeriodSetEventFilter;
        "QuorumCoefficientSet(uint32,uint32)"(oldQuorumCoefficient?: null, newQuorumCoefficient?: null): QuorumCoefficientSetEventFilter;
        QuorumCoefficientSet(oldQuorumCoefficient?: null, newQuorumCoefficient?: null): QuorumCoefficientSetEventFilter;
        "TimelocksAndAdminSet(address,address,address)"(timelock?: null, timelockV1?: null, admin?: null): TimelocksAndAdminSetEventFilter;
        TimelocksAndAdminSet(timelock?: null, timelockV1?: null, admin?: null): TimelocksAndAdminSetEventFilter;
        "VoteSnapshotBlockSwitchProposalIdSet(uint256,uint256)"(oldVoteSnapshotBlockSwitchProposalId?: null, newVoteSnapshotBlockSwitchProposalId?: null): VoteSnapshotBlockSwitchProposalIdSetEventFilter;
        VoteSnapshotBlockSwitchProposalIdSet(oldVoteSnapshotBlockSwitchProposalId?: null, newVoteSnapshotBlockSwitchProposalId?: null): VoteSnapshotBlockSwitchProposalIdSetEventFilter;
        "VotingDelaySet(uint256,uint256)"(oldVotingDelay?: null, newVotingDelay?: null): VotingDelaySetEventFilter;
        VotingDelaySet(oldVotingDelay?: null, newVotingDelay?: null): VotingDelaySetEventFilter;
        "VotingPeriodSet(uint256,uint256)"(oldVotingPeriod?: null, newVotingPeriod?: null): VotingPeriodSetEventFilter;
        VotingPeriodSet(oldVotingPeriod?: null, newVotingPeriod?: null): VotingPeriodSetEventFilter;
        "Withdraw(uint256,bool)"(amount?: null, sent?: null): WithdrawEventFilter;
        Withdraw(amount?: null, sent?: null): WithdrawEventFilter;
    };
    estimateGas: {
        MAX_FORK_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_OBJECTION_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_QUORUM_VOTES_BPS_UPPER_BOUND(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_UPDATABLE_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_VOTING_DELAY_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_VOTING_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_FORK_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_QUORUM_VOTES_BPS_LOWER_BOUND(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_QUORUM_VOTES_BPS_UPPER_BOUND(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_VOTING_DELAY_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_VOTING_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        MAX_FORK_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_OBJECTION_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_QUORUM_VOTES_BPS_UPPER_BOUND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_UPDATABLE_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_VOTING_DELAY_BLOCKS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_VOTING_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_FORK_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_QUORUM_VOTES_BPS_LOWER_BOUND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_QUORUM_VOTES_BPS_UPPER_BOUND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_VOTING_DELAY_BLOCKS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_VOTING_PERIOD_BLOCKS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
