import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace INounsSeeder {
    type SeedStruct = {
        background: BigNumberish;
        body: BigNumberish;
        accessory: BigNumberish;
        head: BigNumberish;
        glasses: BigNumberish;
    };
    type SeedStructOutput = [number, number, number, number, number] & {
        background: number;
        body: number;
        accessory: number;
        head: number;
        glasses: number;
    };
}
export interface INounsDescriptorMinimalInterface extends utils.Interface {
    functions: {
        "accessoryCount()": FunctionFragment;
        "backgroundCount()": FunctionFragment;
        "bodyCount()": FunctionFragment;
        "dataURI(uint256,(uint48,uint48,uint48,uint48,uint48))": FunctionFragment;
        "glassesCount()": FunctionFragment;
        "headCount()": FunctionFragment;
        "tokenURI(uint256,(uint48,uint48,uint48,uint48,uint48))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accessoryCount" | "backgroundCount" | "bodyCount" | "dataURI" | "glassesCount" | "headCount" | "tokenURI"): FunctionFragment;
    encodeFunctionData(functionFragment: "accessoryCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "backgroundCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "bodyCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "dataURI", values: [BigNumberish, INounsSeeder.SeedStruct]): string;
    encodeFunctionData(functionFragment: "glassesCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "headCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [BigNumberish, INounsSeeder.SeedStruct]): string;
    decodeFunctionResult(functionFragment: "accessoryCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "backgroundCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bodyCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dataURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "glassesCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "headCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    events: {};
}
export interface INounsDescriptorMinimal extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: INounsDescriptorMinimalInterface;
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
        accessoryCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        backgroundCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        bodyCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        dataURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<[string]>;
        glassesCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        headCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<[string]>;
    };
    accessoryCount(overrides?: CallOverrides): Promise<BigNumber>;
    backgroundCount(overrides?: CallOverrides): Promise<BigNumber>;
    bodyCount(overrides?: CallOverrides): Promise<BigNumber>;
    dataURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<string>;
    glassesCount(overrides?: CallOverrides): Promise<BigNumber>;
    headCount(overrides?: CallOverrides): Promise<BigNumber>;
    tokenURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        accessoryCount(overrides?: CallOverrides): Promise<BigNumber>;
        backgroundCount(overrides?: CallOverrides): Promise<BigNumber>;
        bodyCount(overrides?: CallOverrides): Promise<BigNumber>;
        dataURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<string>;
        glassesCount(overrides?: CallOverrides): Promise<BigNumber>;
        headCount(overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        accessoryCount(overrides?: CallOverrides): Promise<BigNumber>;
        backgroundCount(overrides?: CallOverrides): Promise<BigNumber>;
        bodyCount(overrides?: CallOverrides): Promise<BigNumber>;
        dataURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<BigNumber>;
        glassesCount(overrides?: CallOverrides): Promise<BigNumber>;
        headCount(overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        accessoryCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        backgroundCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bodyCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dataURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        glassesCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        headCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
