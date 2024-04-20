import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace ISVGRenderer {
    type PartStruct = {
        image: BytesLike;
        palette: BytesLike;
    };
    type PartStructOutput = [string, string] & {
        image: string;
        palette: string;
    };
    type SVGParamsStruct = {
        parts: ISVGRenderer.PartStruct[];
        background: string;
    };
    type SVGParamsStructOutput = [
        ISVGRenderer.PartStructOutput[],
        string
    ] & {
        parts: ISVGRenderer.PartStructOutput[];
        background: string;
    };
}
export declare namespace NFTDescriptorV2 {
    type TokenURIParamsStruct = {
        name: string;
        description: string;
        background: string;
        parts: ISVGRenderer.PartStruct[];
    };
    type TokenURIParamsStructOutput = [
        string,
        string,
        string,
        ISVGRenderer.PartStructOutput[]
    ] & {
        name: string;
        description: string;
        background: string;
        parts: ISVGRenderer.PartStructOutput[];
    };
}
export interface NFTDescriptorV2Interface extends utils.Interface {
    functions: {
        "constructTokenURI(ISVGRenderer,(string,string,string,(bytes,bytes)[]))": FunctionFragment;
        "generateSVGImage(ISVGRenderer,((bytes,bytes)[],string))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "constructTokenURI" | "generateSVGImage"): FunctionFragment;
    encodeFunctionData(functionFragment: "constructTokenURI", values: [string, NFTDescriptorV2.TokenURIParamsStruct]): string;
    encodeFunctionData(functionFragment: "generateSVGImage", values: [string, ISVGRenderer.SVGParamsStruct]): string;
    decodeFunctionResult(functionFragment: "constructTokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "generateSVGImage", data: BytesLike): Result;
    events: {};
}
export interface NFTDescriptorV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NFTDescriptorV2Interface;
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
        constructTokenURI(renderer: string, params: NFTDescriptorV2.TokenURIParamsStruct, overrides?: CallOverrides): Promise<[string]>;
        generateSVGImage(renderer: string, params: ISVGRenderer.SVGParamsStruct, overrides?: CallOverrides): Promise<[string] & {
            svg: string;
        }>;
    };
    constructTokenURI(renderer: string, params: NFTDescriptorV2.TokenURIParamsStruct, overrides?: CallOverrides): Promise<string>;
    generateSVGImage(renderer: string, params: ISVGRenderer.SVGParamsStruct, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        constructTokenURI(renderer: string, params: NFTDescriptorV2.TokenURIParamsStruct, overrides?: CallOverrides): Promise<string>;
        generateSVGImage(renderer: string, params: ISVGRenderer.SVGParamsStruct, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        constructTokenURI(renderer: string, params: NFTDescriptorV2.TokenURIParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        generateSVGImage(renderer: string, params: ISVGRenderer.SVGParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        constructTokenURI(renderer: string, params: NFTDescriptorV2.TokenURIParamsStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        generateSVGImage(renderer: string, params: ISVGRenderer.SVGParamsStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
