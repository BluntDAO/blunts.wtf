import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../../common";
export interface NounsDAOStorageV1ForkInterface extends utils.Interface {
    functions: {
        "_proposals(uint256)": FunctionFragment;
        "admin()": FunctionFragment;
        "delayedGovernanceExpirationTimestamp()": FunctionFragment;
        "erc20TokensToIncludeInQuit(uint256)": FunctionFragment;
        "latestProposalIds(address)": FunctionFragment;
        "nouns()": FunctionFragment;
        "pendingAdmin()": FunctionFragment;
        "proposalCount()": FunctionFragment;
        "proposalThresholdBPS()": FunctionFragment;
        "quorumVotesBPS()": FunctionFragment;
        "timelock()": FunctionFragment;
        "votingDelay()": FunctionFragment;
        "votingPeriod()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_proposals" | "admin" | "delayedGovernanceExpirationTimestamp" | "erc20TokensToIncludeInQuit" | "latestProposalIds" | "nouns" | "pendingAdmin" | "proposalCount" | "proposalThresholdBPS" | "quorumVotesBPS" | "timelock" | "votingDelay" | "votingPeriod"): FunctionFragment;
    encodeFunctionData(functionFragment: "_proposals", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "delayedGovernanceExpirationTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "erc20TokensToIncludeInQuit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "latestProposalIds", values: [string]): string;
    encodeFunctionData(functionFragment: "nouns", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposalThresholdBPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "quorumVotesBPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "timelock", values?: undefined): string;
    encodeFunctionData(functionFragment: "votingDelay", values?: undefined): string;
    encodeFunctionData(functionFragment: "votingPeriod", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_proposals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delayedGovernanceExpirationTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "erc20TokensToIncludeInQuit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestProposalIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nouns", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalThresholdBPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorumVotesBPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timelock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingPeriod", data: BytesLike): Result;
    events: {};
}
export interface NounsDAOStorageV1Fork extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NounsDAOStorageV1ForkInterface;
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
        admin(overrides?: CallOverrides): Promise<[string]>;
        delayedGovernanceExpirationTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        erc20TokensToIncludeInQuit(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        nouns(overrides?: CallOverrides): Promise<[string]>;
        pendingAdmin(overrides?: CallOverrides): Promise<[string]>;
        proposalCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalThresholdBPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        quorumVotesBPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        timelock(overrides?: CallOverrides): Promise<[string]>;
        votingDelay(overrides?: CallOverrides): Promise<[BigNumber]>;
        votingPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
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
    admin(overrides?: CallOverrides): Promise<string>;
    delayedGovernanceExpirationTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    erc20TokensToIncludeInQuit(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    nouns(overrides?: CallOverrides): Promise<string>;
    pendingAdmin(overrides?: CallOverrides): Promise<string>;
    proposalCount(overrides?: CallOverrides): Promise<BigNumber>;
    proposalThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;
    quorumVotesBPS(overrides?: CallOverrides): Promise<BigNumber>;
    timelock(overrides?: CallOverrides): Promise<string>;
    votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
    votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
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
        admin(overrides?: CallOverrides): Promise<string>;
        delayedGovernanceExpirationTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        erc20TokensToIncludeInQuit(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        nouns(overrides?: CallOverrides): Promise<string>;
        pendingAdmin(overrides?: CallOverrides): Promise<string>;
        proposalCount(overrides?: CallOverrides): Promise<BigNumber>;
        proposalThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;
        quorumVotesBPS(overrides?: CallOverrides): Promise<BigNumber>;
        timelock(overrides?: CallOverrides): Promise<string>;
        votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
        votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        _proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        delayedGovernanceExpirationTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        erc20TokensToIncludeInQuit(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        nouns(overrides?: CallOverrides): Promise<BigNumber>;
        pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        proposalCount(overrides?: CallOverrides): Promise<BigNumber>;
        proposalThresholdBPS(overrides?: CallOverrides): Promise<BigNumber>;
        quorumVotesBPS(overrides?: CallOverrides): Promise<BigNumber>;
        timelock(overrides?: CallOverrides): Promise<BigNumber>;
        votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
        votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delayedGovernanceExpirationTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        erc20TokensToIncludeInQuit(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nouns(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalThresholdBPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quorumVotesBPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        timelock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
