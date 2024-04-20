import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../../common";
export declare namespace NounsDAOStorageV1Fork {
    type ReceiptStruct = {
        hasVoted: boolean;
        support: BigNumberish;
        votes: BigNumberish;
    };
    type ReceiptStructOutput = [boolean, number, BigNumber] & {
        hasVoted: boolean;
        support: number;
        votes: BigNumber;
    };
    type ProposalCondensedStruct = {
        id: BigNumberish;
        proposer: string;
        proposalThreshold: BigNumberish;
        quorumVotes: BigNumberish;
        eta: BigNumberish;
        startBlock: BigNumberish;
        endBlock: BigNumberish;
        forVotes: BigNumberish;
        againstVotes: BigNumberish;
        abstainVotes: BigNumberish;
        canceled: boolean;
        executed: boolean;
        creationBlock: BigNumberish;
    };
    type ProposalCondensedStructOutput = [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        BigNumber
    ] & {
        id: BigNumber;
        proposer: string;
        proposalThreshold: BigNumber;
        quorumVotes: BigNumber;
        eta: BigNumber;
        startBlock: BigNumber;
        endBlock: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        abstainVotes: BigNumber;
        canceled: boolean;
        executed: boolean;
        creationBlock: BigNumber;
    };
}
export interface NounsDAOLogicV1ForkInterface extends utils.Interface {
    functions: {
        "BALLOT_TYPEHASH()": FunctionFragment;
        "DOMAIN_TYPEHASH()": FunctionFragment;
        "MAX_PROPOSAL_THRESHOLD_BPS()": FunctionFragment;
        "MAX_QUORUM_VOTES_BPS()": FunctionFragment;
        "MAX_VOTING_DELAY()": FunctionFragment;
        "MAX_VOTING_PERIOD()": FunctionFragment;
        "MIN_PROPOSAL_THRESHOLD_BPS()": FunctionFragment;
        "MIN_QUORUM_VOTES_BPS()": FunctionFragment;
        "MIN_VOTING_DELAY()": FunctionFragment;
        "MIN_VOTING_PERIOD()": FunctionFragment;
        "_acceptAdmin()": FunctionFragment;
        "_proposals(uint256)": FunctionFragment;
        "_setErc20TokensToIncludeInQuit(address[])": FunctionFragment;
        "_setPendingAdmin(address)": FunctionFragment;
        "_setProposalThresholdBPS(uint256)": FunctionFragment;
        "_setQuorumVotesBPS(uint256)": FunctionFragment;
        "_setVotingDelay(uint256)": FunctionFragment;
        "_setVotingPeriod(uint256)": FunctionFragment;
        "adjustedTotalSupply()": FunctionFragment;
        "admin()": FunctionFragment;
        "cancel(uint256)": FunctionFragment;
        "castVote(uint256,uint8)": FunctionFragment;
        "castVoteBySig(uint256,uint8,uint8,bytes32,bytes32)": FunctionFragment;
        "castVoteWithReason(uint256,uint8,string)": FunctionFragment;
        "delayedGovernanceExpirationTimestamp()": FunctionFragment;
        "erc20TokensToIncludeInQuit(uint256)": FunctionFragment;
        "erc20TokensToIncludeInQuitArray()": FunctionFragment;
        "execute(uint256)": FunctionFragment;
        "getActions(uint256)": FunctionFragment;
        "getReceipt(uint256,address)": FunctionFragment;
        "initialize(address,address,uint256,uint256,uint256,uint256,address[],uint256)": FunctionFragment;
        "latestProposalIds(address)": FunctionFragment;
        "name()": FunctionFragment;
        "nouns()": FunctionFragment;
        "pendingAdmin()": FunctionFragment;
        "proposalCount()": FunctionFragment;
        "proposalMaxOperations()": FunctionFragment;
        "proposalThreshold()": FunctionFragment;
        "proposalThresholdBPS()": FunctionFragment;
        "proposals(uint256)": FunctionFragment;
        "propose(address[],uint256[],string[],bytes[],string)": FunctionFragment;
        "queue(uint256)": FunctionFragment;
        "quit(uint256[],address[])": FunctionFragment;
        "quit(uint256[])": FunctionFragment;
        "quorumVotes()": FunctionFragment;
        "quorumVotesBPS()": FunctionFragment;
        "state(uint256)": FunctionFragment;
        "timelock()": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "votingDelay()": FunctionFragment;
        "votingPeriod()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "BALLOT_TYPEHASH" | "DOMAIN_TYPEHASH" | "MAX_PROPOSAL_THRESHOLD_BPS" | "MAX_QUORUM_VOTES_BPS" | "MAX_VOTING_DELAY" | "MAX_VOTING_PERIOD" | "MIN_PROPOSAL_THRESHOLD_BPS" | "MIN_QUORUM_VOTES_BPS" | "MIN_VOTING_DELAY" | "MIN_VOTING_PERIOD" | "_acceptAdmin" | "_proposals" | "_setErc20TokensToIncludeInQuit" | "_setPendingAdmin" | "_setProposalThresholdBPS" | "_setQuorumVotesBPS" | "_setVotingDelay" | "_setVotingPeriod" | "adjustedTotalSupply" | "admin" | "cancel" | "castVote" | "castVoteBySig" | "castVoteWithReason" | "delayedGovernanceExpirationTimestamp" | "erc20TokensToIncludeInQuit" | "erc20TokensToIncludeInQuitArray" | "execute" | "getActions" | "getReceipt" | "initialize" | "latestProposalIds" | "name" | "nouns" | "pendingAdmin" | "proposalCount" | "proposalMaxOperations" | "proposalThreshold" | "proposalThresholdBPS" | "proposals" | "propose" | "queue" | "quit(uint256[],address[])" | "quit(uint256[])" | "quorumVotes" | "quorumVotesBPS" | "state" | "timelock" | "upgradeTo" | "upgradeToAndCall" | "votingDelay" | "votingPeriod"): FunctionFragment;
    encodeFunctionData(functionFragment: "BALLOT_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "DOMAIN_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_PROPOSAL_THRESHOLD_BPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_QUORUM_VOTES_BPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_VOTING_DELAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_VOTING_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_PROPOSAL_THRESHOLD_BPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_QUORUM_VOTES_BPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_VOTING_DELAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_VOTING_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "_acceptAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "_proposals", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setErc20TokensToIncludeInQuit", values: [string[]]): string;
    encodeFunctionData(functionFragment: "_setPendingAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "_setProposalThresholdBPS", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setQuorumVotesBPS", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setVotingDelay", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setVotingPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "adjustedTotalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancel", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "castVote", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "castVoteBySig", values: [BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "castVoteWithReason", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "delayedGovernanceExpirationTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "erc20TokensToIncludeInQuit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "erc20TokensToIncludeInQuitArray", values?: undefined): string;
    encodeFunctionData(functionFragment: "execute", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getActions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getReceipt", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string[],
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "latestProposalIds", values: [string]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nouns", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalMaxOperations", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalThreshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalThresholdBPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposals", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "propose", values: [string[], BigNumberish[], string[], BytesLike[], string]): string;
    encodeFunctionData(functionFragment: "queue", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "quit(uint256[],address[])", values: [BigNumberish[], string[]]): string;
    encodeFunctionData(functionFragment: "quit(uint256[])", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "quorumVotes", values?: undefined): string;
    encodeFunctionData(functionFragment: "quorumVotesBPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "state", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "timelock", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "votingDelay", values?: undefined): string;
    encodeFunctionData(functionFragment: "votingPeriod", values?: undefined): string;
    decodeFunctionResult(functionFragment: "BALLOT_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DOMAIN_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_PROPOSAL_THRESHOLD_BPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_QUORUM_VOTES_BPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_VOTING_DELAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_VOTING_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_PROPOSAL_THRESHOLD_BPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_QUORUM_VOTES_BPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_VOTING_DELAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_VOTING_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_acceptAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_proposals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setErc20TokensToIncludeInQuit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setProposalThresholdBPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setQuorumVotesBPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setVotingDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setVotingPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adjustedTotalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVoteBySig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVoteWithReason", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delayedGovernanceExpirationTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "erc20TokensToIncludeInQuit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "erc20TokensToIncludeInQuitArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getActions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReceipt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestProposalIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nouns", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalMaxOperations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalThresholdBPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quit(uint256[],address[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quit(uint256[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorumVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorumVotesBPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timelock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingPeriod", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "ERC20TokensToIncludeInQuitSet(address[],address[])": EventFragment;
        "NewAdmin(address,address)": EventFragment;
        "NewImplementation(address,address)": EventFragment;
        "NewPendingAdmin(address,address)": EventFragment;
        "ProposalCanceled(uint256)": EventFragment;
        "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)": EventFragment;
        "ProposalCreatedWithRequirements(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,uint256,uint256,string)": EventFragment;
        "ProposalExecuted(uint256)": EventFragment;
        "ProposalQueued(uint256,uint256)": EventFragment;
        "ProposalThresholdBPSSet(uint256,uint256)": EventFragment;
        "Quit(address,uint256[])": EventFragment;
        "QuorumVotesBPSSet(uint256,uint256)": EventFragment;
        "Upgraded(address)": EventFragment;
        "VoteCast(address,uint256,uint8,uint256,string)": EventFragment;
        "VotingDelaySet(uint256,uint256)": EventFragment;
        "VotingPeriodSet(uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ERC20TokensToIncludeInQuitSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewImplementation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPendingAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreatedWithRequirements"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalQueued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalThresholdBPSSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Quit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "QuorumVotesBPSSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VoteCast"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VotingDelaySet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VotingPeriodSet"): EventFragment;
}
export interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
export declare type AdminChangedEvent = TypedEvent<[
    string,
    string
], AdminChangedEventObject>;
export declare type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export interface BeaconUpgradedEventObject {
    beacon: string;
}
export declare type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
export declare type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export interface ERC20TokensToIncludeInQuitSetEventObject {
    oldErc20Tokens: string[];
    newErc20tokens: string[];
}
export declare type ERC20TokensToIncludeInQuitSetEvent = TypedEvent<[
    string[],
    string[]
], ERC20TokensToIncludeInQuitSetEventObject>;
export declare type ERC20TokensToIncludeInQuitSetEventFilter = TypedEventFilter<ERC20TokensToIncludeInQuitSetEvent>;
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
export interface ProposalCreatedWithRequirementsEventObject {
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
export declare type ProposalCreatedWithRequirementsEvent = TypedEvent<[
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
], ProposalCreatedWithRequirementsEventObject>;
export declare type ProposalCreatedWithRequirementsEventFilter = TypedEventFilter<ProposalCreatedWithRequirementsEvent>;
export interface ProposalExecutedEventObject {
    id: BigNumber;
}
export declare type ProposalExecutedEvent = TypedEvent<[
    BigNumber
], ProposalExecutedEventObject>;
export declare type ProposalExecutedEventFilter = TypedEventFilter<ProposalExecutedEvent>;
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
export interface QuitEventObject {
    msgSender: string;
    tokenIds: BigNumber[];
}
export declare type QuitEvent = TypedEvent<[string, BigNumber[]], QuitEventObject>;
export declare type QuitEventFilter = TypedEventFilter<QuitEvent>;
export interface QuorumVotesBPSSetEventObject {
    oldQuorumVotesBPS: BigNumber;
    newQuorumVotesBPS: BigNumber;
}
export declare type QuorumVotesBPSSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], QuorumVotesBPSSetEventObject>;
export declare type QuorumVotesBPSSetEventFilter = TypedEventFilter<QuorumVotesBPSSetEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export declare type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export declare type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
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
export interface NounsDAOLogicV1Fork extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NounsDAOLogicV1ForkInterface;
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
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        MAX_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_QUORUM_VOTES_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_VOTING_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_VOTING_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;
        MIN_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MIN_QUORUM_VOTES_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MIN_VOTING_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        MIN_VOTING_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;
        _acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean,
            boolean,
            BigNumber
        ] & {
            id: BigNumber;
            proposer: string;
            proposalThreshold: BigNumber;
            quorumVotes: BigNumber;
            eta: BigNumber;
            startBlock: BigNumber;
            endBlock: BigNumber;
            forVotes: BigNumber;
            againstVotes: BigNumber;
            abstainVotes: BigNumber;
            canceled: boolean;
            executed: boolean;
            creationBlock: BigNumber;
        }>;
        _setErc20TokensToIncludeInQuit(erc20tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setProposalThresholdBPS(newProposalThresholdBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setQuorumVotesBPS(newQuorumVotesBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setVotingDelay(newVotingDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        adjustedTotalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        cancel(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        castVoteBySig(proposalId: BigNumberish, support: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delayedGovernanceExpirationTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        erc20TokensToIncludeInQuit(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        erc20TokensToIncludeInQuitArray(overrides?: CallOverrides): Promise<[string[]]>;
        execute(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[],
            string[],
            string[]
        ] & {
            targets: string[];
            values: BigNumber[];
            signatures: string[];
            calldatas: string[];
        }>;
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<[NounsDAOStorageV1Fork.ReceiptStructOutput]>;
        initialize(timelock_: string, nouns_: string, votingPeriod_: BigNumberish, votingDelay_: BigNumberish, proposalThresholdBPS_: BigNumberish, quorumVotesBPS_: BigNumberish, erc20TokensToIncludeInQuit_: string[], delayedGovernanceExpirationTimestamp_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nouns(overrides?: CallOverrides): Promise<[string]>;
        pendingAdmin(overrides?: CallOverrides): Promise<[string]>;
        proposalCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalMaxOperations(overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalThresholdBPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[NounsDAOStorageV1Fork.ProposalCondensedStructOutput]>;
        propose(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        queue(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "quit(uint256[],address[])"(tokenIds: BigNumberish[], erc20TokensToInclude: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "quit(uint256[])"(tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        quorumVotes(overrides?: CallOverrides): Promise<[BigNumber]>;
        quorumVotesBPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[number]>;
        timelock(overrides?: CallOverrides): Promise<[string]>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        votingDelay(overrides?: CallOverrides): Promise<[BigNumber]>;
        votingPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    MAX_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_QUORUM_VOTES_BPS(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_VOTING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_VOTING_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
    MIN_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
    MIN_QUORUM_VOTES_BPS(overrides?: CallOverrides): Promise<BigNumber>;
    MIN_VOTING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
    MIN_VOTING_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
    _acceptAdmin(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        BigNumber
    ] & {
        id: BigNumber;
        proposer: string;
        proposalThreshold: BigNumber;
        quorumVotes: BigNumber;
        eta: BigNumber;
        startBlock: BigNumber;
        endBlock: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        abstainVotes: BigNumber;
        canceled: boolean;
        executed: boolean;
        creationBlock: BigNumber;
    }>;
    _setErc20TokensToIncludeInQuit(erc20tokens: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setProposalThresholdBPS(newProposalThresholdBPS: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setQuorumVotesBPS(newQuorumVotesBPS: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setVotingDelay(newVotingDelay: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    adjustedTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    admin(overrides?: CallOverrides): Promise<string>;
    cancel(proposalId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    castVoteBySig(proposalId: BigNumberish, support: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delayedGovernanceExpirationTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    erc20TokensToIncludeInQuit(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    erc20TokensToIncludeInQuitArray(overrides?: CallOverrides): Promise<string[]>;
    execute(proposalId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[
        string[],
        BigNumber[],
        string[],
        string[]
    ] & {
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
    }>;
    getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<NounsDAOStorageV1Fork.ReceiptStructOutput>;
    initialize(timelock_: string, nouns_: string, votingPeriod_: BigNumberish, votingDelay_: BigNumberish, proposalThresholdBPS_: BigNumberish, quorumVotesBPS_: BigNumberish, erc20TokensToIncludeInQuit_: string[], delayedGovernanceExpirationTimestamp_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    name(overrides?: CallOverrides): Promise<string>;
    nouns(overrides?: CallOverrides): Promise<string>;
    pendingAdmin(overrides?: CallOverrides): Promise<string>;
    proposalCount(overrides?: CallOverrides): Promise<BigNumber>;
    proposalMaxOperations(overrides?: CallOverrides): Promise<BigNumber>;
    proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
    proposalThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;
    proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<NounsDAOStorageV1Fork.ProposalCondensedStructOutput>;
    propose(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    queue(proposalId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "quit(uint256[],address[])"(tokenIds: BigNumberish[], erc20TokensToInclude: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "quit(uint256[])"(tokenIds: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    quorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
    quorumVotesBPS(overrides?: CallOverrides): Promise<BigNumber>;
    state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;
    timelock(overrides?: CallOverrides): Promise<string>;
    upgradeTo(newImplementation: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
    votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        MAX_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_QUORUM_VOTES_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_VOTING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_VOTING_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_QUORUM_VOTES_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_VOTING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_VOTING_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        _acceptAdmin(overrides?: CallOverrides): Promise<void>;
        _proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean,
            boolean,
            BigNumber
        ] & {
            id: BigNumber;
            proposer: string;
            proposalThreshold: BigNumber;
            quorumVotes: BigNumber;
            eta: BigNumber;
            startBlock: BigNumber;
            endBlock: BigNumber;
            forVotes: BigNumber;
            againstVotes: BigNumber;
            abstainVotes: BigNumber;
            canceled: boolean;
            executed: boolean;
            creationBlock: BigNumber;
        }>;
        _setErc20TokensToIncludeInQuit(erc20tokens: string[], overrides?: CallOverrides): Promise<void>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: CallOverrides): Promise<void>;
        _setProposalThresholdBPS(newProposalThresholdBPS: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setQuorumVotesBPS(newQuorumVotesBPS: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setVotingDelay(newVotingDelay: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: CallOverrides): Promise<void>;
        adjustedTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<string>;
        cancel(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: CallOverrides): Promise<void>;
        castVoteBySig(proposalId: BigNumberish, support: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: CallOverrides): Promise<void>;
        delayedGovernanceExpirationTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        erc20TokensToIncludeInQuit(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        erc20TokensToIncludeInQuitArray(overrides?: CallOverrides): Promise<string[]>;
        execute(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[],
            string[],
            string[]
        ] & {
            targets: string[];
            values: BigNumber[];
            signatures: string[];
            calldatas: string[];
        }>;
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<NounsDAOStorageV1Fork.ReceiptStructOutput>;
        initialize(timelock_: string, nouns_: string, votingPeriod_: BigNumberish, votingDelay_: BigNumberish, proposalThresholdBPS_: BigNumberish, quorumVotesBPS_: BigNumberish, erc20TokensToIncludeInQuit_: string[], delayedGovernanceExpirationTimestamp_: BigNumberish, overrides?: CallOverrides): Promise<void>;
        latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        nouns(overrides?: CallOverrides): Promise<string>;
        pendingAdmin(overrides?: CallOverrides): Promise<string>;
        proposalCount(overrides?: CallOverrides): Promise<BigNumber>;
        proposalMaxOperations(overrides?: CallOverrides): Promise<BigNumber>;
        proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        proposalThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<NounsDAOStorageV1Fork.ProposalCondensedStructOutput>;
        propose(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: CallOverrides): Promise<BigNumber>;
        queue(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "quit(uint256[],address[])"(tokenIds: BigNumberish[], erc20TokensToInclude: string[], overrides?: CallOverrides): Promise<void>;
        "quit(uint256[])"(tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        quorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
        quorumVotesBPS(overrides?: CallOverrides): Promise<BigNumber>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;
        timelock(overrides?: CallOverrides): Promise<string>;
        upgradeTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
        votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: string | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;
        "ERC20TokensToIncludeInQuitSet(address[],address[])"(oldErc20Tokens?: null, newErc20tokens?: null): ERC20TokensToIncludeInQuitSetEventFilter;
        ERC20TokensToIncludeInQuitSet(oldErc20Tokens?: null, newErc20tokens?: null): ERC20TokensToIncludeInQuitSetEventFilter;
        "NewAdmin(address,address)"(oldAdmin?: string | null, newAdmin?: string | null): NewAdminEventFilter;
        NewAdmin(oldAdmin?: string | null, newAdmin?: string | null): NewAdminEventFilter;
        "NewImplementation(address,address)"(oldImplementation?: null, newImplementation?: null): NewImplementationEventFilter;
        NewImplementation(oldImplementation?: null, newImplementation?: null): NewImplementationEventFilter;
        "NewPendingAdmin(address,address)"(oldPendingAdmin?: string | null, newPendingAdmin?: string | null): NewPendingAdminEventFilter;
        NewPendingAdmin(oldPendingAdmin?: string | null, newPendingAdmin?: string | null): NewPendingAdminEventFilter;
        "ProposalCanceled(uint256)"(id?: BigNumberish | null): ProposalCanceledEventFilter;
        ProposalCanceled(id?: BigNumberish | null): ProposalCanceledEventFilter;
        "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)"(id?: BigNumberish | null, proposer?: string | null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, description?: null): ProposalCreatedEventFilter;
        ProposalCreated(id?: BigNumberish | null, proposer?: string | null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, description?: null): ProposalCreatedEventFilter;
        "ProposalCreatedWithRequirements(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,uint256,uint256,string)"(id?: BigNumberish | null, proposer?: string | null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, proposalThreshold?: null, quorumVotes?: null, description?: null): ProposalCreatedWithRequirementsEventFilter;
        ProposalCreatedWithRequirements(id?: BigNumberish | null, proposer?: string | null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, proposalThreshold?: null, quorumVotes?: null, description?: null): ProposalCreatedWithRequirementsEventFilter;
        "ProposalExecuted(uint256)"(id?: BigNumberish | null): ProposalExecutedEventFilter;
        ProposalExecuted(id?: BigNumberish | null): ProposalExecutedEventFilter;
        "ProposalQueued(uint256,uint256)"(id?: BigNumberish | null, eta?: null): ProposalQueuedEventFilter;
        ProposalQueued(id?: BigNumberish | null, eta?: null): ProposalQueuedEventFilter;
        "ProposalThresholdBPSSet(uint256,uint256)"(oldProposalThresholdBPS?: null, newProposalThresholdBPS?: null): ProposalThresholdBPSSetEventFilter;
        ProposalThresholdBPSSet(oldProposalThresholdBPS?: null, newProposalThresholdBPS?: null): ProposalThresholdBPSSetEventFilter;
        "Quit(address,uint256[])"(msgSender?: string | null, tokenIds?: null): QuitEventFilter;
        Quit(msgSender?: string | null, tokenIds?: null): QuitEventFilter;
        "QuorumVotesBPSSet(uint256,uint256)"(oldQuorumVotesBPS?: null, newQuorumVotesBPS?: null): QuorumVotesBPSSetEventFilter;
        QuorumVotesBPSSet(oldQuorumVotesBPS?: null, newQuorumVotesBPS?: null): QuorumVotesBPSSetEventFilter;
        "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
        Upgraded(implementation?: string | null): UpgradedEventFilter;
        "VoteCast(address,uint256,uint8,uint256,string)"(voter?: string | null, proposalId?: BigNumberish | null, support?: null, votes?: null, reason?: null): VoteCastEventFilter;
        VoteCast(voter?: string | null, proposalId?: BigNumberish | null, support?: null, votes?: null, reason?: null): VoteCastEventFilter;
        "VotingDelaySet(uint256,uint256)"(oldVotingDelay?: null, newVotingDelay?: null): VotingDelaySetEventFilter;
        VotingDelaySet(oldVotingDelay?: null, newVotingDelay?: null): VotingDelaySetEventFilter;
        "VotingPeriodSet(uint256,uint256)"(oldVotingPeriod?: null, newVotingPeriod?: null): VotingPeriodSetEventFilter;
        VotingPeriodSet(oldVotingPeriod?: null, newVotingPeriod?: null): VotingPeriodSetEventFilter;
    };
    estimateGas: {
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_QUORUM_VOTES_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_VOTING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_VOTING_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_QUORUM_VOTES_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_VOTING_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        MIN_VOTING_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        _acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _setErc20TokensToIncludeInQuit(erc20tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setProposalThresholdBPS(newProposalThresholdBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setQuorumVotesBPS(newQuorumVotesBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setVotingDelay(newVotingDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        adjustedTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        cancel(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        castVoteBySig(proposalId: BigNumberish, support: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delayedGovernanceExpirationTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        erc20TokensToIncludeInQuit(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        erc20TokensToIncludeInQuitArray(overrides?: CallOverrides): Promise<BigNumber>;
        execute(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(timelock_: string, nouns_: string, votingPeriod_: BigNumberish, votingDelay_: BigNumberish, proposalThresholdBPS_: BigNumberish, quorumVotesBPS_: BigNumberish, erc20TokensToIncludeInQuit_: string[], delayedGovernanceExpirationTimestamp_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nouns(overrides?: CallOverrides): Promise<BigNumber>;
        pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        proposalCount(overrides?: CallOverrides): Promise<BigNumber>;
        proposalMaxOperations(overrides?: CallOverrides): Promise<BigNumber>;
        proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        proposalThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        propose(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        queue(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "quit(uint256[],address[])"(tokenIds: BigNumberish[], erc20TokensToInclude: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "quit(uint256[])"(tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        quorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
        quorumVotesBPS(overrides?: CallOverrides): Promise<BigNumber>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        timelock(overrides?: CallOverrides): Promise<BigNumber>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
        votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_QUORUM_VOTES_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_VOTING_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_VOTING_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_PROPOSAL_THRESHOLD_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_QUORUM_VOTES_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_VOTING_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MIN_VOTING_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _setErc20TokensToIncludeInQuit(erc20tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setProposalThresholdBPS(newProposalThresholdBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setQuorumVotesBPS(newQuorumVotesBPS: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setVotingDelay(newVotingDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        adjustedTotalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancel(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        castVoteBySig(proposalId: BigNumberish, support: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delayedGovernanceExpirationTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        erc20TokensToIncludeInQuit(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        erc20TokensToIncludeInQuitArray(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(timelock_: string, nouns_: string, votingPeriod_: BigNumberish, votingDelay_: BigNumberish, proposalThresholdBPS_: BigNumberish, quorumVotesBPS_: BigNumberish, erc20TokensToIncludeInQuit_: string[], delayedGovernanceExpirationTimestamp_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nouns(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalMaxOperations(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalThresholdBPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposals(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        propose(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        queue(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "quit(uint256[],address[])"(tokenIds: BigNumberish[], erc20TokensToInclude: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "quit(uint256[])"(tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        quorumVotes(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quorumVotesBPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        timelock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        votingDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
