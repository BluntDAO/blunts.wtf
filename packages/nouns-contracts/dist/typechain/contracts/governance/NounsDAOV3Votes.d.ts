import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface NounsDAOV3VotesInterface extends utils.Interface {
    functions: {
        "BALLOT_TYPEHASH()": FunctionFragment;
        "DOMAIN_TYPEHASH()": FunctionFragment;
        "MAX_REFUND_BASE_FEE()": FunctionFragment;
        "MAX_REFUND_GAS_USED()": FunctionFragment;
        "MAX_REFUND_PRIORITY_FEE()": FunctionFragment;
        "REFUND_BASE_GAS()": FunctionFragment;
        "name()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "BALLOT_TYPEHASH" | "DOMAIN_TYPEHASH" | "MAX_REFUND_BASE_FEE" | "MAX_REFUND_GAS_USED" | "MAX_REFUND_PRIORITY_FEE" | "REFUND_BASE_GAS" | "name"): FunctionFragment;
    encodeFunctionData(functionFragment: "BALLOT_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "DOMAIN_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_REFUND_BASE_FEE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_REFUND_GAS_USED", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_REFUND_PRIORITY_FEE", values?: undefined): string;
    encodeFunctionData(functionFragment: "REFUND_BASE_GAS", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    decodeFunctionResult(functionFragment: "BALLOT_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DOMAIN_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_REFUND_BASE_FEE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_REFUND_GAS_USED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_REFUND_PRIORITY_FEE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "REFUND_BASE_GAS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    events: {
        "ProposalObjectionPeriodSet(uint256,uint256)": EventFragment;
        "RefundableVote(address,uint256,bool)": EventFragment;
        "VoteCast(address,uint256,uint8,uint256,string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ProposalObjectionPeriodSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RefundableVote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VoteCast"): EventFragment;
}
export interface ProposalObjectionPeriodSetEventObject {
    id: BigNumber;
    objectionPeriodEndBlock: BigNumber;
}
export declare type ProposalObjectionPeriodSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ProposalObjectionPeriodSetEventObject>;
export declare type ProposalObjectionPeriodSetEventFilter = TypedEventFilter<ProposalObjectionPeriodSetEvent>;
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
export interface NounsDAOV3Votes extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NounsDAOV3VotesInterface;
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
        MAX_REFUND_BASE_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_REFUND_GAS_USED(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_REFUND_PRIORITY_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;
        REFUND_BASE_GAS(overrides?: CallOverrides): Promise<[BigNumber]>;
        name(overrides?: CallOverrides): Promise<[string]>;
    };
    BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    MAX_REFUND_BASE_FEE(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_REFUND_GAS_USED(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_REFUND_PRIORITY_FEE(overrides?: CallOverrides): Promise<BigNumber>;
    REFUND_BASE_GAS(overrides?: CallOverrides): Promise<BigNumber>;
    name(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        MAX_REFUND_BASE_FEE(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_REFUND_GAS_USED(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_REFUND_PRIORITY_FEE(overrides?: CallOverrides): Promise<BigNumber>;
        REFUND_BASE_GAS(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "ProposalObjectionPeriodSet(uint256,uint256)"(id?: BigNumberish | null, objectionPeriodEndBlock?: null): ProposalObjectionPeriodSetEventFilter;
        ProposalObjectionPeriodSet(id?: BigNumberish | null, objectionPeriodEndBlock?: null): ProposalObjectionPeriodSetEventFilter;
        "RefundableVote(address,uint256,bool)"(voter?: string | null, refundAmount?: null, refundSent?: null): RefundableVoteEventFilter;
        RefundableVote(voter?: string | null, refundAmount?: null, refundSent?: null): RefundableVoteEventFilter;
        "VoteCast(address,uint256,uint8,uint256,string)"(voter?: string | null, proposalId?: null, support?: null, votes?: null, reason?: null): VoteCastEventFilter;
        VoteCast(voter?: string | null, proposalId?: null, support?: null, votes?: null, reason?: null): VoteCastEventFilter;
    };
    estimateGas: {
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_REFUND_BASE_FEE(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_REFUND_GAS_USED(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_REFUND_PRIORITY_FEE(overrides?: CallOverrides): Promise<BigNumber>;
        REFUND_BASE_GAS(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_REFUND_BASE_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_REFUND_GAS_USED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_REFUND_PRIORITY_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        REFUND_BASE_GAS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
