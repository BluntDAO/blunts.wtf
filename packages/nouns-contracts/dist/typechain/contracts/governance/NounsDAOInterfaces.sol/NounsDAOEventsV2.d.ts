import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface NounsDAOEventsV2Interface extends utils.Interface {
    functions: {};
    events: {
        "MaxQuorumVotesBPSSet(uint16,uint16)": EventFragment;
        "MinQuorumVotesBPSSet(uint16,uint16)": EventFragment;
        "NewAdmin(address,address)": EventFragment;
        "NewImplementation(address,address)": EventFragment;
        "NewPendingAdmin(address,address)": EventFragment;
        "NewPendingVetoer(address,address)": EventFragment;
        "NewVetoer(address,address)": EventFragment;
        "ProposalCanceled(uint256)": EventFragment;
        "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)": EventFragment;
        "ProposalCreatedWithRequirements(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,uint256,uint256,string)": EventFragment;
        "ProposalExecuted(uint256)": EventFragment;
        "ProposalQueued(uint256,uint256)": EventFragment;
        "ProposalThresholdBPSSet(uint256,uint256)": EventFragment;
        "ProposalVetoed(uint256)": EventFragment;
        "QuorumCoefficientSet(uint32,uint32)": EventFragment;
        "QuorumVotesBPSSet(uint256,uint256)": EventFragment;
        "RefundableVote(address,uint256,bool)": EventFragment;
        "VoteCast(address,uint256,uint8,uint256,string)": EventFragment;
        "VotingDelaySet(uint256,uint256)": EventFragment;
        "VotingPeriodSet(uint256,uint256)": EventFragment;
        "Withdraw(uint256,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MaxQuorumVotesBPSSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinQuorumVotesBPSSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewImplementation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPendingAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPendingVetoer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewVetoer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreatedWithRequirements"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalQueued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalThresholdBPSSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalVetoed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "QuorumCoefficientSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "QuorumVotesBPSSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RefundableVote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VoteCast"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VotingDelaySet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VotingPeriodSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
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
export interface WithdrawEventObject {
    amount: BigNumber;
    sent: boolean;
}
export declare type WithdrawEvent = TypedEvent<[
    BigNumber,
    boolean
], WithdrawEventObject>;
export declare type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface NounsDAOEventsV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NounsDAOEventsV2Interface;
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
        "QuorumCoefficientSet(uint32,uint32)"(oldQuorumCoefficient?: null, newQuorumCoefficient?: null): QuorumCoefficientSetEventFilter;
        QuorumCoefficientSet(oldQuorumCoefficient?: null, newQuorumCoefficient?: null): QuorumCoefficientSetEventFilter;
        "QuorumVotesBPSSet(uint256,uint256)"(oldQuorumVotesBPS?: null, newQuorumVotesBPS?: null): QuorumVotesBPSSetEventFilter;
        QuorumVotesBPSSet(oldQuorumVotesBPS?: null, newQuorumVotesBPS?: null): QuorumVotesBPSSetEventFilter;
        "RefundableVote(address,uint256,bool)"(voter?: string | null, refundAmount?: null, refundSent?: null): RefundableVoteEventFilter;
        RefundableVote(voter?: string | null, refundAmount?: null, refundSent?: null): RefundableVoteEventFilter;
        "VoteCast(address,uint256,uint8,uint256,string)"(voter?: string | null, proposalId?: null, support?: null, votes?: null, reason?: null): VoteCastEventFilter;
        VoteCast(voter?: string | null, proposalId?: null, support?: null, votes?: null, reason?: null): VoteCastEventFilter;
        "VotingDelaySet(uint256,uint256)"(oldVotingDelay?: null, newVotingDelay?: null): VotingDelaySetEventFilter;
        VotingDelaySet(oldVotingDelay?: null, newVotingDelay?: null): VotingDelaySetEventFilter;
        "VotingPeriodSet(uint256,uint256)"(oldVotingPeriod?: null, newVotingPeriod?: null): VotingPeriodSetEventFilter;
        VotingPeriodSet(oldVotingPeriod?: null, newVotingPeriod?: null): VotingPeriodSetEventFilter;
        "Withdraw(uint256,bool)"(amount?: null, sent?: null): WithdrawEventFilter;
        Withdraw(amount?: null, sent?: null): WithdrawEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
