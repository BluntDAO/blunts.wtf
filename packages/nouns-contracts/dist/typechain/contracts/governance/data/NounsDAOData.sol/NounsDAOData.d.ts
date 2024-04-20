import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface NounsDAODataInterface extends utils.Interface {
    functions: {
        "PRIOR_VOTES_BLOCKS_AGO()": FunctionFragment;
        "addSignature(bytes,uint256,address,string,uint256,bytes,string)": FunctionFragment;
        "cancelProposalCandidate(string)": FunctionFragment;
        "createCandidateCost()": FunctionFragment;
        "createProposalCandidate(address[],uint256[],string[],bytes[],string,string,uint256)": FunctionFragment;
        "feeRecipient()": FunctionFragment;
        "initialize(address,uint256,uint256,address)": FunctionFragment;
        "nounsDao()": FunctionFragment;
        "nounsToken()": FunctionFragment;
        "owner()": FunctionFragment;
        "propCandidates(address,bytes32)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "sendCandidateFeedback(address,string,uint8,string)": FunctionFragment;
        "sendFeedback(uint256,uint8,string)": FunctionFragment;
        "setCreateCandidateCost(uint256)": FunctionFragment;
        "setFeeRecipient(address)": FunctionFragment;
        "setUpdateCandidateCost(uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateCandidateCost()": FunctionFragment;
        "updateProposalCandidate(address[],uint256[],string[],bytes[],string,string,uint256,string)": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "withdrawETH(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "PRIOR_VOTES_BLOCKS_AGO" | "addSignature" | "cancelProposalCandidate" | "createCandidateCost" | "createProposalCandidate" | "feeRecipient" | "initialize" | "nounsDao" | "nounsToken" | "owner" | "propCandidates" | "renounceOwnership" | "sendCandidateFeedback" | "sendFeedback" | "setCreateCandidateCost" | "setFeeRecipient" | "setUpdateCandidateCost" | "transferOwnership" | "updateCandidateCost" | "updateProposalCandidate" | "upgradeTo" | "upgradeToAndCall" | "withdrawETH"): FunctionFragment;
    encodeFunctionData(functionFragment: "PRIOR_VOTES_BLOCKS_AGO", values?: undefined): string;
    encodeFunctionData(functionFragment: "addSignature", values: [
        BytesLike,
        BigNumberish,
        string,
        string,
        BigNumberish,
        BytesLike,
        string
    ]): string;
    encodeFunctionData(functionFragment: "cancelProposalCandidate", values: [string]): string;
    encodeFunctionData(functionFragment: "createCandidateCost", values?: undefined): string;
    encodeFunctionData(functionFragment: "createProposalCandidate", values: [
        string[],
        BigNumberish[],
        string[],
        BytesLike[],
        string,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "feeRecipient", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "nounsDao", values?: undefined): string;
    encodeFunctionData(functionFragment: "nounsToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "propCandidates", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "sendCandidateFeedback", values: [string, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "sendFeedback", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "setCreateCandidateCost", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setFeeRecipient", values: [string]): string;
    encodeFunctionData(functionFragment: "setUpdateCandidateCost", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "updateCandidateCost", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateProposalCandidate", values: [
        string[],
        BigNumberish[],
        string[],
        BytesLike[],
        string,
        string,
        BigNumberish,
        string
    ]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "withdrawETH", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "PRIOR_VOTES_BLOCKS_AGO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addSignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelProposalCandidate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createCandidateCost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createProposalCandidate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nounsDao", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nounsToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "propCandidates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendCandidateFeedback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendFeedback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCreateCandidateCost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUpdateCandidateCost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCandidateCost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateProposalCandidate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawETH", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "CandidateFeedbackSent(address,address,string,uint8,string)": EventFragment;
        "CreateCandidateCostSet(uint256,uint256)": EventFragment;
        "ETHWithdrawn(address,uint256)": EventFragment;
        "FeeRecipientSet(address,address)": EventFragment;
        "FeedbackSent(address,uint256,uint8,string)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ProposalCandidateCanceled(address,string)": EventFragment;
        "ProposalCandidateCreated(address,address[],uint256[],string[],bytes[],string,string,uint256,bytes32)": EventFragment;
        "ProposalCandidateUpdated(address,address[],uint256[],string[],bytes[],string,string,uint256,bytes32,string)": EventFragment;
        "SignatureAdded(address,bytes,uint256,address,string,uint256,bytes32,bytes32,string)": EventFragment;
        "UpdateCandidateCostSet(uint256,uint256)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CandidateFeedbackSent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CreateCandidateCostSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ETHWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FeeRecipientSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FeedbackSent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCandidateCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCandidateCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCandidateUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SignatureAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateCandidateCostSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
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
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
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
export interface UpgradedEventObject {
    implementation: string;
}
export declare type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export declare type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface NounsDAOData extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NounsDAODataInterface;
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
        PRIOR_VOTES_BLOCKS_AGO(overrides?: CallOverrides): Promise<[BigNumber]>;
        addSignature(sig: BytesLike, expirationTimestamp: BigNumberish, proposer: string, slug: string, proposalIdToUpdate: BigNumberish, encodedProp: BytesLike, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cancelProposalCandidate(slug: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        createCandidateCost(overrides?: CallOverrides): Promise<[BigNumber]>;
        createProposalCandidate(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, slug: string, proposalIdToUpdate: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        feeRecipient(overrides?: CallOverrides): Promise<[string]>;
        initialize(admin: string, createCandidateCost_: BigNumberish, updateCandidateCost_: BigNumberish, feeRecipient_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        nounsDao(overrides?: CallOverrides): Promise<[string]>;
        nounsToken(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        propCandidates(arg0: string, arg1: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendCandidateFeedback(proposer: string, slug: string, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendFeedback(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setCreateCandidateCost(newCreateCandidateCost: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setFeeRecipient(newFeeRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setUpdateCandidateCost(newUpdateCandidateCost: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateCandidateCost(overrides?: CallOverrides): Promise<[BigNumber]>;
        updateProposalCandidate(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, slug: string, proposalIdToUpdate: BigNumberish, reason: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawETH(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    PRIOR_VOTES_BLOCKS_AGO(overrides?: CallOverrides): Promise<BigNumber>;
    addSignature(sig: BytesLike, expirationTimestamp: BigNumberish, proposer: string, slug: string, proposalIdToUpdate: BigNumberish, encodedProp: BytesLike, reason: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cancelProposalCandidate(slug: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    createCandidateCost(overrides?: CallOverrides): Promise<BigNumber>;
    createProposalCandidate(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, slug: string, proposalIdToUpdate: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    feeRecipient(overrides?: CallOverrides): Promise<string>;
    initialize(admin: string, createCandidateCost_: BigNumberish, updateCandidateCost_: BigNumberish, feeRecipient_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    nounsDao(overrides?: CallOverrides): Promise<string>;
    nounsToken(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    propCandidates(arg0: string, arg1: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendCandidateFeedback(proposer: string, slug: string, support: BigNumberish, reason: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendFeedback(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setCreateCandidateCost(newCreateCandidateCost: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setFeeRecipient(newFeeRecipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setUpdateCandidateCost(newUpdateCandidateCost: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateCandidateCost(overrides?: CallOverrides): Promise<BigNumber>;
    updateProposalCandidate(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, slug: string, proposalIdToUpdate: BigNumberish, reason: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawETH(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        PRIOR_VOTES_BLOCKS_AGO(overrides?: CallOverrides): Promise<BigNumber>;
        addSignature(sig: BytesLike, expirationTimestamp: BigNumberish, proposer: string, slug: string, proposalIdToUpdate: BigNumberish, encodedProp: BytesLike, reason: string, overrides?: CallOverrides): Promise<void>;
        cancelProposalCandidate(slug: string, overrides?: CallOverrides): Promise<void>;
        createCandidateCost(overrides?: CallOverrides): Promise<BigNumber>;
        createProposalCandidate(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, slug: string, proposalIdToUpdate: BigNumberish, overrides?: CallOverrides): Promise<void>;
        feeRecipient(overrides?: CallOverrides): Promise<string>;
        initialize(admin: string, createCandidateCost_: BigNumberish, updateCandidateCost_: BigNumberish, feeRecipient_: string, overrides?: CallOverrides): Promise<void>;
        nounsDao(overrides?: CallOverrides): Promise<string>;
        nounsToken(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        propCandidates(arg0: string, arg1: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        sendCandidateFeedback(proposer: string, slug: string, support: BigNumberish, reason: string, overrides?: CallOverrides): Promise<void>;
        sendFeedback(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: CallOverrides): Promise<void>;
        setCreateCandidateCost(newCreateCandidateCost: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setFeeRecipient(newFeeRecipient: string, overrides?: CallOverrides): Promise<void>;
        setUpdateCandidateCost(newUpdateCandidateCost: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        updateCandidateCost(overrides?: CallOverrides): Promise<BigNumber>;
        updateProposalCandidate(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, slug: string, proposalIdToUpdate: BigNumberish, reason: string, overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        withdrawETH(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: string | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;
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
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
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
        "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
        Upgraded(implementation?: string | null): UpgradedEventFilter;
    };
    estimateGas: {
        PRIOR_VOTES_BLOCKS_AGO(overrides?: CallOverrides): Promise<BigNumber>;
        addSignature(sig: BytesLike, expirationTimestamp: BigNumberish, proposer: string, slug: string, proposalIdToUpdate: BigNumberish, encodedProp: BytesLike, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cancelProposalCandidate(slug: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        createCandidateCost(overrides?: CallOverrides): Promise<BigNumber>;
        createProposalCandidate(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, slug: string, proposalIdToUpdate: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        feeRecipient(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(admin: string, createCandidateCost_: BigNumberish, updateCandidateCost_: BigNumberish, feeRecipient_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        nounsDao(overrides?: CallOverrides): Promise<BigNumber>;
        nounsToken(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        propCandidates(arg0: string, arg1: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendCandidateFeedback(proposer: string, slug: string, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendFeedback(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setCreateCandidateCost(newCreateCandidateCost: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setFeeRecipient(newFeeRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setUpdateCandidateCost(newUpdateCandidateCost: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateCandidateCost(overrides?: CallOverrides): Promise<BigNumber>;
        updateProposalCandidate(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, slug: string, proposalIdToUpdate: BigNumberish, reason: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawETH(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        PRIOR_VOTES_BLOCKS_AGO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addSignature(sig: BytesLike, expirationTimestamp: BigNumberish, proposer: string, slug: string, proposalIdToUpdate: BigNumberish, encodedProp: BytesLike, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cancelProposalCandidate(slug: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        createCandidateCost(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createProposalCandidate(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, slug: string, proposalIdToUpdate: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        feeRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(admin: string, createCandidateCost_: BigNumberish, updateCandidateCost_: BigNumberish, feeRecipient_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        nounsDao(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nounsToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        propCandidates(arg0: string, arg1: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendCandidateFeedback(proposer: string, slug: string, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendFeedback(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setCreateCandidateCost(newCreateCandidateCost: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setFeeRecipient(newFeeRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setUpdateCandidateCost(newUpdateCandidateCost: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateCandidateCost(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateProposalCandidate(targets: string[], values: BigNumberish[], signatures: string[], calldatas: BytesLike[], description: string, slug: string, proposalIdToUpdate: BigNumberish, reason: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawETH(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
