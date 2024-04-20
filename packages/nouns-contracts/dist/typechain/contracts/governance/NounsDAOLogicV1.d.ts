import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace NounsDAOStorageV1 {
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
}
export interface NounsDAOLogicV1Interface extends utils.Interface {
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
        "_burnVetoPower()": FunctionFragment;
        "_setPendingAdmin(address)": FunctionFragment;
        "_setProposalThresholdBPS(uint256)": FunctionFragment;
        "_setQuorumVotesBPS(uint256)": FunctionFragment;
        "_setVetoer(address)": FunctionFragment;
        "_setVotingDelay(uint256)": FunctionFragment;
        "_setVotingPeriod(uint256)": FunctionFragment;
        "admin()": FunctionFragment;
        "cancel(uint256)": FunctionFragment;
        "castVote(uint256,uint8)": FunctionFragment;
        "castVoteBySig(uint256,uint8,uint8,bytes32,bytes32)": FunctionFragment;
        "castVoteWithReason(uint256,uint8,string)": FunctionFragment;
        "execute(uint256)": FunctionFragment;
        "getActions(uint256)": FunctionFragment;
        "getReceipt(uint256,address)": FunctionFragment;
        "implementation()": FunctionFragment;
        "initialize(address,address,address,uint256,uint256,uint256,uint256)": FunctionFragment;
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
        "quorumVotes()": FunctionFragment;
        "quorumVotesBPS()": FunctionFragment;
        "state(uint256)": FunctionFragment;
        "timelock()": FunctionFragment;
        "veto(uint256)": FunctionFragment;
        "vetoer()": FunctionFragment;
        "votingDelay()": FunctionFragment;
        "votingPeriod()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "BALLOT_TYPEHASH" | "DOMAIN_TYPEHASH" | "MAX_PROPOSAL_THRESHOLD_BPS" | "MAX_QUORUM_VOTES_BPS" | "MAX_VOTING_DELAY" | "MAX_VOTING_PERIOD" | "MIN_PROPOSAL_THRESHOLD_BPS" | "MIN_QUORUM_VOTES_BPS" | "MIN_VOTING_DELAY" | "MIN_VOTING_PERIOD" | "_acceptAdmin" | "_burnVetoPower" | "_setPendingAdmin" | "_setProposalThresholdBPS" | "_setQuorumVotesBPS" | "_setVetoer" | "_setVotingDelay" | "_setVotingPeriod" | "admin" | "cancel" | "castVote" | "castVoteBySig" | "castVoteWithReason" | "execute" | "getActions" | "getReceipt" | "implementation" | "initialize" | "latestProposalIds" | "name" | "nouns" | "pendingAdmin" | "proposalCount" | "proposalMaxOperations" | "proposalThreshold" | "proposalThresholdBPS" | "proposals" | "propose" | "queue" | "quorumVotes" | "quorumVotesBPS" | "state" | "timelock" | "veto" | "vetoer" | "votingDelay" | "votingPeriod"): FunctionFragment;
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
    encodeFunctionData(functionFragment: "_burnVetoPower", values?: undefined): string;
    encodeFunctionData(functionFragment: "_setPendingAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "_setProposalThresholdBPS", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setQuorumVotesBPS", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setVetoer", values: [string]): string;
    encodeFunctionData(functionFragment: "_setVotingDelay", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setVotingPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancel", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "castVote", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "castVoteBySig", values: [BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "castVoteWithReason", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "execute", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getActions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getReceipt", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
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
    encodeFunctionData(functionFragment: "quorumVotes", values?: undefined): string;
    encodeFunctionData(functionFragment: "quorumVotesBPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "state", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "timelock", values?: undefined): string;
    encodeFunctionData(functionFragment: "veto", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "vetoer", values?: undefined): string;
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
    decodeFunctionResult(functionFragment: "_burnVetoPower", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setProposalThresholdBPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setQuorumVotesBPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setVetoer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setVotingDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setVotingPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVoteBySig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVoteWithReason", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getActions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReceipt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
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
    decodeFunctionResult(functionFragment: "quorumVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorumVotesBPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timelock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "veto", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vetoer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingPeriod", data: BytesLike): Result;
    events: {
        "NewAdmin(address,address)": EventFragment;
        "NewImplementation(address,address)": EventFragment;
        "NewPendingAdmin(address,address)": EventFragment;
        "NewVetoer(address,address)": EventFragment;
        "ProposalCanceled(uint256)": EventFragment;
        "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)": EventFragment;
        "ProposalCreatedWithRequirements(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,uint256,uint256,string)": EventFragment;
        "ProposalExecuted(uint256)": EventFragment;
        "ProposalQueued(uint256,uint256)": EventFragment;
        "ProposalThresholdBPSSet(uint256,uint256)": EventFragment;
        "ProposalVetoed(uint256)": EventFragment;
        "QuorumVotesBPSSet(uint256,uint256)": EventFragment;
        "VoteCast(address,uint256,uint8,uint256,string)": EventFragment;
        "VotingDelaySet(uint256,uint256)": EventFragment;
        "VotingPeriodSet(uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "NewAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewImplementation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPendingAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewVetoer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreatedWithRequirements"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalQueued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalThresholdBPSSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalVetoed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "QuorumVotesBPSSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VoteCast"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VotingDelaySet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VotingPeriodSet"): EventFragment;
}
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
export interface NewVetoerEventObject {
    oldVetoer: string;
    newVetoer: string;
}
export declare type NewVetoerEvent = TypedEvent<[string, string], NewVetoerEventObject>;
export declare type NewVetoerEventFilter = TypedEventFilter<NewVetoerEvent>;
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
export interface ProposalVetoedEventObject {
    id: BigNumber;
}
export declare type ProposalVetoedEvent = TypedEvent<[
    BigNumber
], ProposalVetoedEventObject>;
export declare type ProposalVetoedEventFilter = TypedEventFilter<ProposalVetoedEvent>;
export interface QuorumVotesBPSSetEventObject {
    oldQuorumVotesBPS: BigNumber;
    newQuorumVotesBPS: BigNumber;
}
export declare type QuorumVotesBPSSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], QuorumVotesBPSSetEventObject>;
export declare type QuorumVotesBPSSetEventFilter = TypedEventFilter<QuorumVotesBPSSetEvent>;
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
export interface NounsDAOLogicV1 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NounsDAOLogicV1Interface;
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
        _burnVetoPower(overrides?: Overrides & {
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
        _setVetoer(newVetoer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setVotingDelay(newVotingDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
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
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<[NounsDAOStorageV1.ReceiptStructOutput]>;
        implementation(overrides?: CallOverrides): Promise<[string]>;
        initialize(timelock_: string, nouns_: string, vetoer_: string, votingPeriod_: BigNumberish, votingDelay_: BigNumberish, proposalThresholdBPS_: BigNumberish, quorumVotesBPS_: BigNumberish, overrides?: Overrides & {
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
        proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
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
            boolean
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
            vetoed: boolean;
            executed: boolean;
        }>;
        propose(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        queue(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        quorumVotes(overrides?: CallOverrides): Promise<[BigNumber]>;
        quorumVotesBPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[number]>;
        timelock(overrides?: CallOverrides): Promise<[string]>;
        veto(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        vetoer(overrides?: CallOverrides): Promise<[string]>;
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
    _burnVetoPower(overrides?: Overrides & {
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
    _setVetoer(newVetoer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setVotingDelay(newVotingDelay: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
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
    getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<NounsDAOStorageV1.ReceiptStructOutput>;
    implementation(overrides?: CallOverrides): Promise<string>;
    initialize(timelock_: string, nouns_: string, vetoer_: string, votingPeriod_: BigNumberish, votingDelay_: BigNumberish, proposalThresholdBPS_: BigNumberish, quorumVotesBPS_: BigNumberish, overrides?: Overrides & {
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
    proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
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
        boolean
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
        vetoed: boolean;
        executed: boolean;
    }>;
    propose(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    queue(proposalId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    quorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
    quorumVotesBPS(overrides?: CallOverrides): Promise<BigNumber>;
    state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;
    timelock(overrides?: CallOverrides): Promise<string>;
    veto(proposalId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    vetoer(overrides?: CallOverrides): Promise<string>;
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
        _burnVetoPower(overrides?: CallOverrides): Promise<void>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: CallOverrides): Promise<void>;
        _setProposalThresholdBPS(newProposalThresholdBPS: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setQuorumVotesBPS(newQuorumVotesBPS: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setVetoer(newVetoer: string, overrides?: CallOverrides): Promise<void>;
        _setVotingDelay(newVotingDelay: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: CallOverrides): Promise<void>;
        admin(overrides?: CallOverrides): Promise<string>;
        cancel(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: CallOverrides): Promise<void>;
        castVoteBySig(proposalId: BigNumberish, support: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: CallOverrides): Promise<void>;
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
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<NounsDAOStorageV1.ReceiptStructOutput>;
        implementation(overrides?: CallOverrides): Promise<string>;
        initialize(timelock_: string, nouns_: string, vetoer_: string, votingPeriod_: BigNumberish, votingDelay_: BigNumberish, proposalThresholdBPS_: BigNumberish, quorumVotesBPS_: BigNumberish, overrides?: CallOverrides): Promise<void>;
        latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        nouns(overrides?: CallOverrides): Promise<string>;
        pendingAdmin(overrides?: CallOverrides): Promise<string>;
        proposalCount(overrides?: CallOverrides): Promise<BigNumber>;
        proposalMaxOperations(overrides?: CallOverrides): Promise<BigNumber>;
        proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        proposalThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;
        proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
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
            boolean
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
            vetoed: boolean;
            executed: boolean;
        }>;
        propose(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: CallOverrides): Promise<BigNumber>;
        queue(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        quorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
        quorumVotesBPS(overrides?: CallOverrides): Promise<BigNumber>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;
        timelock(overrides?: CallOverrides): Promise<string>;
        veto(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        vetoer(overrides?: CallOverrides): Promise<string>;
        votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
        votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "NewAdmin(address,address)"(oldAdmin?: null, newAdmin?: null): NewAdminEventFilter;
        NewAdmin(oldAdmin?: null, newAdmin?: null): NewAdminEventFilter;
        "NewImplementation(address,address)"(oldImplementation?: null, newImplementation?: null): NewImplementationEventFilter;
        NewImplementation(oldImplementation?: null, newImplementation?: null): NewImplementationEventFilter;
        "NewPendingAdmin(address,address)"(oldPendingAdmin?: null, newPendingAdmin?: null): NewPendingAdminEventFilter;
        NewPendingAdmin(oldPendingAdmin?: null, newPendingAdmin?: null): NewPendingAdminEventFilter;
        "NewVetoer(address,address)"(oldVetoer?: null, newVetoer?: null): NewVetoerEventFilter;
        NewVetoer(oldVetoer?: null, newVetoer?: null): NewVetoerEventFilter;
        "ProposalCanceled(uint256)"(id?: null): ProposalCanceledEventFilter;
        ProposalCanceled(id?: null): ProposalCanceledEventFilter;
        "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)"(id?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, description?: null): ProposalCreatedEventFilter;
        ProposalCreated(id?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, description?: null): ProposalCreatedEventFilter;
        "ProposalCreatedWithRequirements(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,uint256,uint256,string)"(id?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, proposalThreshold?: null, quorumVotes?: null, description?: null): ProposalCreatedWithRequirementsEventFilter;
        ProposalCreatedWithRequirements(id?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, proposalThreshold?: null, quorumVotes?: null, description?: null): ProposalCreatedWithRequirementsEventFilter;
        "ProposalExecuted(uint256)"(id?: null): ProposalExecutedEventFilter;
        ProposalExecuted(id?: null): ProposalExecutedEventFilter;
        "ProposalQueued(uint256,uint256)"(id?: null, eta?: null): ProposalQueuedEventFilter;
        ProposalQueued(id?: null, eta?: null): ProposalQueuedEventFilter;
        "ProposalThresholdBPSSet(uint256,uint256)"(oldProposalThresholdBPS?: null, newProposalThresholdBPS?: null): ProposalThresholdBPSSetEventFilter;
        ProposalThresholdBPSSet(oldProposalThresholdBPS?: null, newProposalThresholdBPS?: null): ProposalThresholdBPSSetEventFilter;
        "ProposalVetoed(uint256)"(id?: null): ProposalVetoedEventFilter;
        ProposalVetoed(id?: null): ProposalVetoedEventFilter;
        "QuorumVotesBPSSet(uint256,uint256)"(oldQuorumVotesBPS?: null, newQuorumVotesBPS?: null): QuorumVotesBPSSetEventFilter;
        QuorumVotesBPSSet(oldQuorumVotesBPS?: null, newQuorumVotesBPS?: null): QuorumVotesBPSSetEventFilter;
        "VoteCast(address,uint256,uint8,uint256,string)"(voter?: string | null, proposalId?: null, support?: null, votes?: null, reason?: null): VoteCastEventFilter;
        VoteCast(voter?: string | null, proposalId?: null, support?: null, votes?: null, reason?: null): VoteCastEventFilter;
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
        _burnVetoPower(overrides?: Overrides & {
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
        _setVetoer(newVetoer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setVotingDelay(newVotingDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
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
        execute(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<BigNumber>;
        implementation(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(timelock_: string, nouns_: string, vetoer_: string, votingPeriod_: BigNumberish, votingDelay_: BigNumberish, proposalThresholdBPS_: BigNumberish, quorumVotesBPS_: BigNumberish, overrides?: Overrides & {
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
        proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        propose(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        queue(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        quorumVotes(overrides?: CallOverrides): Promise<BigNumber>;
        quorumVotesBPS(overrides?: CallOverrides): Promise<BigNumber>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        timelock(overrides?: CallOverrides): Promise<BigNumber>;
        veto(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        vetoer(overrides?: CallOverrides): Promise<BigNumber>;
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
        _burnVetoPower(overrides?: Overrides & {
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
        _setVetoer(newVetoer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setVotingDelay(newVotingDelay: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setVotingPeriod(newVotingPeriod: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
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
        execute(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getActions(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReceipt(proposalId: BigNumberish, voter: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(timelock_: string, nouns_: string, vetoer_: string, votingPeriod_: BigNumberish, votingDelay_: BigNumberish, proposalThresholdBPS_: BigNumberish, quorumVotesBPS_: BigNumberish, overrides?: Overrides & {
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
        proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        propose(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        queue(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        quorumVotes(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quorumVotesBPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        timelock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        veto(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        vetoer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
