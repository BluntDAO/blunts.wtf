import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface IForkDAODeployerInterface extends utils.Interface {
    functions: {
        "auctionImpl()": FunctionFragment;
        "deployForkDAO(uint256,address)": FunctionFragment;
        "governorImpl()": FunctionFragment;
        "tokenImpl()": FunctionFragment;
        "treasuryImpl()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "auctionImpl" | "deployForkDAO" | "governorImpl" | "tokenImpl" | "treasuryImpl"): FunctionFragment;
    encodeFunctionData(functionFragment: "auctionImpl", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployForkDAO", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "governorImpl", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenImpl", values?: undefined): string;
    encodeFunctionData(functionFragment: "treasuryImpl", values?: undefined): string;
    decodeFunctionResult(functionFragment: "auctionImpl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployForkDAO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governorImpl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenImpl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "treasuryImpl", data: BytesLike): Result;
    events: {};
}
export interface IForkDAODeployer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IForkDAODeployerInterface;
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
        deployForkDAO(forkingPeriodEndTimestamp: BigNumberish, forkEscrowAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        governorImpl(overrides?: CallOverrides): Promise<[string]>;
        tokenImpl(overrides?: CallOverrides): Promise<[string]>;
        treasuryImpl(overrides?: CallOverrides): Promise<[string]>;
    };
    auctionImpl(overrides?: CallOverrides): Promise<string>;
    deployForkDAO(forkingPeriodEndTimestamp: BigNumberish, forkEscrowAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    governorImpl(overrides?: CallOverrides): Promise<string>;
    tokenImpl(overrides?: CallOverrides): Promise<string>;
    treasuryImpl(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        auctionImpl(overrides?: CallOverrides): Promise<string>;
        deployForkDAO(forkingPeriodEndTimestamp: BigNumberish, forkEscrowAddress: string, overrides?: CallOverrides): Promise<[string, string] & {
            treasury: string;
            token: string;
        }>;
        governorImpl(overrides?: CallOverrides): Promise<string>;
        tokenImpl(overrides?: CallOverrides): Promise<string>;
        treasuryImpl(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        auctionImpl(overrides?: CallOverrides): Promise<BigNumber>;
        deployForkDAO(forkingPeriodEndTimestamp: BigNumberish, forkEscrowAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        governorImpl(overrides?: CallOverrides): Promise<BigNumber>;
        tokenImpl(overrides?: CallOverrides): Promise<BigNumber>;
        treasuryImpl(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        auctionImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployForkDAO(forkingPeriodEndTimestamp: BigNumberish, forkEscrowAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        governorImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        treasuryImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
