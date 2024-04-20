import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface NounsDAOV3ProposalsInterface extends utils.Interface {
    functions: {
        "DOMAIN_TYPEHASH()": FunctionFragment;
        "PROPOSAL_MAX_OPERATIONS()": FunctionFragment;
        "PROPOSAL_TYPEHASH()": FunctionFragment;
        "UPDATE_PROPOSAL_TYPEHASH()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DOMAIN_TYPEHASH" | "PROPOSAL_MAX_OPERATIONS" | "PROPOSAL_TYPEHASH" | "UPDATE_PROPOSAL_TYPEHASH"): FunctionFragment;
    encodeFunctionData(functionFragment: "DOMAIN_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "PROPOSAL_MAX_OPERATIONS", values?: undefined): string;
    encodeFunctionData(functionFragment: "PROPOSAL_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "UPDATE_PROPOSAL_TYPEHASH", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DOMAIN_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PROPOSAL_MAX_OPERATIONS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PROPOSAL_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UPDATE_PROPOSAL_TYPEHASH", data: BytesLike): Result;
    events: {
        "ProposalCanceled(uint256)": EventFragment;
        "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)": EventFragment;
        "ProposalCreatedOnTimelockV1(uint256)": EventFragment;
        "ProposalCreatedWithRequirements(uint256,address,address[],address[],uint256[],string[],bytes[],uint256,uint256,uint256,uint256,uint256,string)": EventFragment;
        "ProposalDescriptionUpdated(uint256,address,string,string)": EventFragment;
        "ProposalExecuted(uint256)": EventFragment;
        "ProposalQueued(uint256,uint256)": EventFragment;
        "ProposalTransactionsUpdated(uint256,address,address[],uint256[],string[],bytes[],string)": EventFragment;
        "ProposalUpdated(uint256,address,address[],uint256[],string[],bytes[],string,string)": EventFragment;
        "ProposalVetoed(uint256)": EventFragment;
        "SignatureCancelled(address,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ProposalCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreatedOnTimelockV1"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreatedWithRequirements"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalDescriptionUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalQueued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalTransactionsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalVetoed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SignatureCancelled"): EventFragment;
}
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
export interface ProposalCreatedWithRequirementsEventObject {
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
export declare type ProposalCreatedWithRequirementsEvent = TypedEvent<[
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
], ProposalCreatedWithRequirementsEventObject>;
export declare type ProposalCreatedWithRequirementsEventFilter = TypedEventFilter<ProposalCreatedWithRequirementsEvent>;
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
export interface ProposalQueuedEventObject {
    id: BigNumber;
    eta: BigNumber;
}
export declare type ProposalQueuedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ProposalQueuedEventObject>;
export declare type ProposalQueuedEventFilter = TypedEventFilter<ProposalQueuedEvent>;
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
export interface SignatureCancelledEventObject {
    signer: string;
    sig: string;
}
export declare type SignatureCancelledEvent = TypedEvent<[
    string,
    string
], SignatureCancelledEventObject>;
export declare type SignatureCancelledEventFilter = TypedEventFilter<SignatureCancelledEvent>;
export interface NounsDAOV3Proposals extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NounsDAOV3ProposalsInterface;
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
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        PROPOSAL_MAX_OPERATIONS(overrides?: CallOverrides): Promise<[BigNumber]>;
        PROPOSAL_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        UPDATE_PROPOSAL_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
    };
    DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    PROPOSAL_MAX_OPERATIONS(overrides?: CallOverrides): Promise<BigNumber>;
    PROPOSAL_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    UPDATE_PROPOSAL_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        PROPOSAL_MAX_OPERATIONS(overrides?: CallOverrides): Promise<BigNumber>;
        PROPOSAL_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        UPDATE_PROPOSAL_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "ProposalCanceled(uint256)"(id?: null): ProposalCanceledEventFilter;
        ProposalCanceled(id?: null): ProposalCanceledEventFilter;
        "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)"(id?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, description?: null): ProposalCreatedEventFilter;
        ProposalCreated(id?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, description?: null): ProposalCreatedEventFilter;
        "ProposalCreatedOnTimelockV1(uint256)"(id?: null): ProposalCreatedOnTimelockV1EventFilter;
        ProposalCreatedOnTimelockV1(id?: null): ProposalCreatedOnTimelockV1EventFilter;
        "ProposalCreatedWithRequirements(uint256,address,address[],address[],uint256[],string[],bytes[],uint256,uint256,uint256,uint256,uint256,string)"(id?: null, proposer?: null, signers?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, updatePeriodEndBlock?: null, proposalThreshold?: null, quorumVotes?: null, description?: null): ProposalCreatedWithRequirementsEventFilter;
        ProposalCreatedWithRequirements(id?: null, proposer?: null, signers?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, startBlock?: null, endBlock?: null, updatePeriodEndBlock?: null, proposalThreshold?: null, quorumVotes?: null, description?: null): ProposalCreatedWithRequirementsEventFilter;
        "ProposalDescriptionUpdated(uint256,address,string,string)"(id?: BigNumberish | null, proposer?: string | null, description?: null, updateMessage?: null): ProposalDescriptionUpdatedEventFilter;
        ProposalDescriptionUpdated(id?: BigNumberish | null, proposer?: string | null, description?: null, updateMessage?: null): ProposalDescriptionUpdatedEventFilter;
        "ProposalExecuted(uint256)"(id?: null): ProposalExecutedEventFilter;
        ProposalExecuted(id?: null): ProposalExecutedEventFilter;
        "ProposalQueued(uint256,uint256)"(id?: null, eta?: null): ProposalQueuedEventFilter;
        ProposalQueued(id?: null, eta?: null): ProposalQueuedEventFilter;
        "ProposalTransactionsUpdated(uint256,address,address[],uint256[],string[],bytes[],string)"(id?: BigNumberish | null, proposer?: string | null, targets?: null, values?: null, signatures?: null, calldatas?: null, updateMessage?: null): ProposalTransactionsUpdatedEventFilter;
        ProposalTransactionsUpdated(id?: BigNumberish | null, proposer?: string | null, targets?: null, values?: null, signatures?: null, calldatas?: null, updateMessage?: null): ProposalTransactionsUpdatedEventFilter;
        "ProposalUpdated(uint256,address,address[],uint256[],string[],bytes[],string,string)"(id?: BigNumberish | null, proposer?: string | null, targets?: null, values?: null, signatures?: null, calldatas?: null, description?: null, updateMessage?: null): ProposalUpdatedEventFilter;
        ProposalUpdated(id?: BigNumberish | null, proposer?: string | null, targets?: null, values?: null, signatures?: null, calldatas?: null, description?: null, updateMessage?: null): ProposalUpdatedEventFilter;
        "ProposalVetoed(uint256)"(id?: null): ProposalVetoedEventFilter;
        ProposalVetoed(id?: null): ProposalVetoedEventFilter;
        "SignatureCancelled(address,bytes)"(signer?: string | null, sig?: null): SignatureCancelledEventFilter;
        SignatureCancelled(signer?: string | null, sig?: null): SignatureCancelledEventFilter;
    };
    estimateGas: {
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        PROPOSAL_MAX_OPERATIONS(overrides?: CallOverrides): Promise<BigNumber>;
        PROPOSAL_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        UPDATE_PROPOSAL_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PROPOSAL_MAX_OPERATIONS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PROPOSAL_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UPDATE_PROPOSAL_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
