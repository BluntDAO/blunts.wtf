import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface NounsDAODataEventsInterface extends utils.Interface {
    functions: {};
    events: {
        "CandidateFeedbackSent(address,address,string,uint8,string)": EventFragment;
        "CreateCandidateCostSet(uint256,uint256)": EventFragment;
        "ETHWithdrawn(address,uint256)": EventFragment;
        "FeeRecipientSet(address,address)": EventFragment;
        "FeedbackSent(address,uint256,uint8,string)": EventFragment;
        "ProposalCandidateCanceled(address,string)": EventFragment;
        "ProposalCandidateCreated(address,address[],uint256[],string[],bytes[],string,string,uint256,bytes32)": EventFragment;
        "ProposalCandidateUpdated(address,address[],uint256[],string[],bytes[],string,string,uint256,bytes32,string)": EventFragment;
        "SignatureAdded(address,bytes,uint256,address,string,uint256,bytes32,bytes32,string)": EventFragment;
        "UpdateCandidateCostSet(uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CandidateFeedbackSent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CreateCandidateCostSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ETHWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FeeRecipientSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FeedbackSent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCandidateCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCandidateCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCandidateUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SignatureAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateCandidateCostSet"): EventFragment;
}
export interface CandidateFeedbackSentEventObject {
    msgSender: string;
    proposer: string;
    slug: string;
    support: number;
    reason: string;
}
export declare type CandidateFeedbackSentEvent = TypedEvent<[
    string,
    string,
    string,
    number,
    string
], CandidateFeedbackSentEventObject>;
export declare type CandidateFeedbackSentEventFilter = TypedEventFilter<CandidateFeedbackSentEvent>;
export interface CreateCandidateCostSetEventObject {
    oldCreateCandidateCost: BigNumber;
    newCreateCandidateCost: BigNumber;
}
export declare type CreateCandidateCostSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], CreateCandidateCostSetEventObject>;
export declare type CreateCandidateCostSetEventFilter = TypedEventFilter<CreateCandidateCostSetEvent>;
export interface ETHWithdrawnEventObject {
    to: string;
    amount: BigNumber;
}
export declare type ETHWithdrawnEvent = TypedEvent<[
    string,
    BigNumber
], ETHWithdrawnEventObject>;
export declare type ETHWithdrawnEventFilter = TypedEventFilter<ETHWithdrawnEvent>;
export interface FeeRecipientSetEventObject {
    oldFeeRecipient: string;
    newFeeRecipient: string;
}
export declare type FeeRecipientSetEvent = TypedEvent<[
    string,
    string
], FeeRecipientSetEventObject>;
export declare type FeeRecipientSetEventFilter = TypedEventFilter<FeeRecipientSetEvent>;
export interface FeedbackSentEventObject {
    msgSender: string;
    proposalId: BigNumber;
    support: number;
    reason: string;
}
export declare type FeedbackSentEvent = TypedEvent<[
    string,
    BigNumber,
    number,
    string
], FeedbackSentEventObject>;
export declare type FeedbackSentEventFilter = TypedEventFilter<FeedbackSentEvent>;
export interface ProposalCandidateCanceledEventObject {
    msgSender: string;
    slug: string;
}
export declare type ProposalCandidateCanceledEvent = TypedEvent<[
    string,
    string
], ProposalCandidateCanceledEventObject>;
export declare type ProposalCandidateCanceledEventFilter = TypedEventFilter<ProposalCandidateCanceledEvent>;
export interface ProposalCandidateCreatedEventObject {
    msgSender: string;
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    description: string;
    slug: string;
    proposalIdToUpdate: BigNumber;
    encodedProposalHash: string;
}
export declare type ProposalCandidateCreatedEvent = TypedEvent<[
    string,
    string[],
    BigNumber[],
    string[],
    string[],
    string,
    string,
    BigNumber,
    string
], ProposalCandidateCreatedEventObject>;
export declare type ProposalCandidateCreatedEventFilter = TypedEventFilter<ProposalCandidateCreatedEvent>;
export interface ProposalCandidateUpdatedEventObject {
    msgSender: string;
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    description: string;
    slug: string;
    proposalIdToUpdate: BigNumber;
    encodedProposalHash: string;
    reason: string;
}
export declare type ProposalCandidateUpdatedEvent = TypedEvent<[
    string,
    string[],
    BigNumber[],
    string[],
    string[],
    string,
    string,
    BigNumber,
    string,
    string
], ProposalCandidateUpdatedEventObject>;
export declare type ProposalCandidateUpdatedEventFilter = TypedEventFilter<ProposalCandidateUpdatedEvent>;
export interface SignatureAddedEventObject {
    signer: string;
    sig: string;
    expirationTimestamp: BigNumber;
    proposer: string;
    slug: string;
    proposalIdToUpdate: BigNumber;
    encodedPropHash: string;
    sigDigest: string;
    reason: string;
}
export declare type SignatureAddedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    string,
    BigNumber,
    string,
    string,
    string
], SignatureAddedEventObject>;
export declare type SignatureAddedEventFilter = TypedEventFilter<SignatureAddedEvent>;
export interface UpdateCandidateCostSetEventObject {
    oldUpdateCandidateCost: BigNumber;
    newUpdateCandidateCost: BigNumber;
}
export declare type UpdateCandidateCostSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], UpdateCandidateCostSetEventObject>;
export declare type UpdateCandidateCostSetEventFilter = TypedEventFilter<UpdateCandidateCostSetEvent>;
export interface NounsDAODataEvents extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NounsDAODataEventsInterface;
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
        "CandidateFeedbackSent(address,address,string,uint8,string)"(msgSender?: string | null, proposer?: string | null, slug?: null, support?: null, reason?: null): CandidateFeedbackSentEventFilter;
        CandidateFeedbackSent(msgSender?: string | null, proposer?: string | null, slug?: null, support?: null, reason?: null): CandidateFeedbackSentEventFilter;
        "CreateCandidateCostSet(uint256,uint256)"(oldCreateCandidateCost?: null, newCreateCandidateCost?: null): CreateCandidateCostSetEventFilter;
        CreateCandidateCostSet(oldCreateCandidateCost?: null, newCreateCandidateCost?: null): CreateCandidateCostSetEventFilter;
        "ETHWithdrawn(address,uint256)"(to?: string | null, amount?: null): ETHWithdrawnEventFilter;
        ETHWithdrawn(to?: string | null, amount?: null): ETHWithdrawnEventFilter;
        "FeeRecipientSet(address,address)"(oldFeeRecipient?: string | null, newFeeRecipient?: string | null): FeeRecipientSetEventFilter;
        FeeRecipientSet(oldFeeRecipient?: string | null, newFeeRecipient?: string | null): FeeRecipientSetEventFilter;
        "FeedbackSent(address,uint256,uint8,string)"(msgSender?: string | null, proposalId?: null, support?: null, reason?: null): FeedbackSentEventFilter;
        FeedbackSent(msgSender?: string | null, proposalId?: null, support?: null, reason?: null): FeedbackSentEventFilter;
        "ProposalCandidateCanceled(address,string)"(msgSender?: string | null, slug?: null): ProposalCandidateCanceledEventFilter;
        ProposalCandidateCanceled(msgSender?: string | null, slug?: null): ProposalCandidateCanceledEventFilter;
        "ProposalCandidateCreated(address,address[],uint256[],string[],bytes[],string,string,uint256,bytes32)"(msgSender?: string | null, targets?: null, values?: null, signatures?: null, calldatas?: null, description?: null, slug?: null, proposalIdToUpdate?: null, encodedProposalHash?: null): ProposalCandidateCreatedEventFilter;
        ProposalCandidateCreated(msgSender?: string | null, targets?: null, values?: null, signatures?: null, calldatas?: null, description?: null, slug?: null, proposalIdToUpdate?: null, encodedProposalHash?: null): ProposalCandidateCreatedEventFilter;
        "ProposalCandidateUpdated(address,address[],uint256[],string[],bytes[],string,string,uint256,bytes32,string)"(msgSender?: string | null, targets?: null, values?: null, signatures?: null, calldatas?: null, description?: null, slug?: null, proposalIdToUpdate?: null, encodedProposalHash?: null, reason?: null): ProposalCandidateUpdatedEventFilter;
        ProposalCandidateUpdated(msgSender?: string | null, targets?: null, values?: null, signatures?: null, calldatas?: null, description?: null, slug?: null, proposalIdToUpdate?: null, encodedProposalHash?: null, reason?: null): ProposalCandidateUpdatedEventFilter;
        "SignatureAdded(address,bytes,uint256,address,string,uint256,bytes32,bytes32,string)"(signer?: string | null, sig?: null, expirationTimestamp?: null, proposer?: null, slug?: null, proposalIdToUpdate?: null, encodedPropHash?: null, sigDigest?: null, reason?: null): SignatureAddedEventFilter;
        SignatureAdded(signer?: string | null, sig?: null, expirationTimestamp?: null, proposer?: null, slug?: null, proposalIdToUpdate?: null, encodedPropHash?: null, sigDigest?: null, reason?: null): SignatureAddedEventFilter;
        "UpdateCandidateCostSet(uint256,uint256)"(oldUpdateCandidateCost?: null, newUpdateCandidateCost?: null): UpdateCandidateCostSetEventFilter;
        UpdateCandidateCostSet(oldUpdateCandidateCost?: null, newUpdateCandidateCost?: null): UpdateCandidateCostSetEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
