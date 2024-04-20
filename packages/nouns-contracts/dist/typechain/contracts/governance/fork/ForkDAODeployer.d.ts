import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface ForkDAODeployerInterface extends utils.Interface {
    functions: {
        "auctionImpl()": FunctionFragment;
        "delayedGovernanceMaxDuration()": FunctionFragment;
        "deployForkDAO(uint256,address)": FunctionFragment;
        "governorImpl()": FunctionFragment;
        "initialProposalThresholdBPS()": FunctionFragment;
        "initialQuorumVotesBPS()": FunctionFragment;
        "initialVotingDelay()": FunctionFragment;
        "initialVotingPeriod()": FunctionFragment;
        "tokenImpl()": FunctionFragment;
        "treasuryImpl()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "auctionImpl" | "delayedGovernanceMaxDuration" | "deployForkDAO" | "governorImpl" | "initialProposalThresholdBPS" | "initialQuorumVotesBPS" | "initialVotingDelay" | "initialVotingPeriod" | "tokenImpl" | "treasuryImpl"): FunctionFragment;
    encodeFunctionData(functionFragment: "auctionImpl", values?: undefined): string;
    encodeFunctionData(functionFragment: "delayedGovernanceMaxDuration", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployForkDAO", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "governorImpl", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialProposalThresholdBPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialQuorumVotesBPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialVotingDelay", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialVotingPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenImpl", values?: undefined): string;
    encodeFunctionData(functionFragment: "treasuryImpl", values?: undefined): string;
    decodeFunctionResult(functionFragment: "auctionImpl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delayedGovernanceMaxDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployForkDAO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governorImpl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialProposalThresholdBPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialQuorumVotesBPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialVotingDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialVotingPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenImpl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "treasuryImpl", data: BytesLike): Result;
    events: {
        "DAODeployed(address,address,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DAODeployed"): EventFragment;
}
export interface DAODeployedEventObject {
    token: string;
    auction: string;
    governor: string;
    treasury: string;
}
export declare type DAODeployedEvent = TypedEvent<[
    string,
    string,
    string,
    string
], DAODeployedEventObject>;
export declare type DAODeployedEventFilter = TypedEventFilter<DAODeployedEvent>;
export interface ForkDAODeployer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ForkDAODeployerInterface;
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
        auctionImpl(overrides?: CallOverrides): Promise<[string]>;
        delayedGovernanceMaxDuration(overrides?: CallOverrides): Promise<[BigNumber]>;
        deployForkDAO(forkingPeriodEndTimestamp: BigNumberish, forkEscrow: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        governorImpl(overrides?: CallOverrides): Promise<[string]>;
        initialProposalThresholdBPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialQuorumVotesBPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialVotingDelay(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialVotingPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenImpl(overrides?: CallOverrides): Promise<[string]>;
        treasuryImpl(overrides?: CallOverrides): Promise<[string]>;
    };
    auctionImpl(overrides?: CallOverrides): Promise<string>;
    delayedGovernanceMaxDuration(overrides?: CallOverrides): Promise<BigNumber>;
    deployForkDAO(forkingPeriodEndTimestamp: BigNumberish, forkEscrow: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    governorImpl(overrides?: CallOverrides): Promise<string>;
    initialProposalThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;
    initialQuorumVotesBPS(overrides?: CallOverrides): Promise<BigNumber>;
    initialVotingDelay(overrides?: CallOverrides): Promise<BigNumber>;
    initialVotingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    tokenImpl(overrides?: CallOverrides): Promise<string>;
    treasuryImpl(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        auctionImpl(overrides?: CallOverrides): Promise<string>;
        delayedGovernanceMaxDuration(overrides?: CallOverrides): Promise<BigNumber>;
        deployForkDAO(forkingPeriodEndTimestamp: BigNumberish, forkEscrow: string, overrides?: CallOverrides): Promise<[string, string] & {
            treasury: string;
            token: string;
        }>;
        governorImpl(overrides?: CallOverrides): Promise<string>;
        initialProposalThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;
        initialQuorumVotesBPS(overrides?: CallOverrides): Promise<BigNumber>;
        initialVotingDelay(overrides?: CallOverrides): Promise<BigNumber>;
        initialVotingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        tokenImpl(overrides?: CallOverrides): Promise<string>;
        treasuryImpl(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "DAODeployed(address,address,address,address)"(token?: null, auction?: null, governor?: null, treasury?: null): DAODeployedEventFilter;
        DAODeployed(token?: null, auction?: null, governor?: null, treasury?: null): DAODeployedEventFilter;
    };
    estimateGas: {
        auctionImpl(overrides?: CallOverrides): Promise<BigNumber>;
        delayedGovernanceMaxDuration(overrides?: CallOverrides): Promise<BigNumber>;
        deployForkDAO(forkingPeriodEndTimestamp: BigNumberish, forkEscrow: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        governorImpl(overrides?: CallOverrides): Promise<BigNumber>;
        initialProposalThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;
        initialQuorumVotesBPS(overrides?: CallOverrides): Promise<BigNumber>;
        initialVotingDelay(overrides?: CallOverrides): Promise<BigNumber>;
        initialVotingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        tokenImpl(overrides?: CallOverrides): Promise<BigNumber>;
        treasuryImpl(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        auctionImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delayedGovernanceMaxDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployForkDAO(forkingPeriodEndTimestamp: BigNumberish, forkEscrow: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        governorImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialProposalThresholdBPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialQuorumVotesBPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialVotingDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialVotingPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        treasuryImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
