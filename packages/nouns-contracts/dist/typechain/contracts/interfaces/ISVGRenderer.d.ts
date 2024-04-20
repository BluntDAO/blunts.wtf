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
export interface ISVGRendererInterface extends utils.Interface {
    functions: {
        "generateSVG(((bytes,bytes)[],string))": FunctionFragment;
        "generateSVGPart((bytes,bytes))": FunctionFragment;
        "generateSVGParts((bytes,bytes)[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "generateSVG" | "generateSVGPart" | "generateSVGParts"): FunctionFragment;
    encodeFunctionData(functionFragment: "generateSVG", values: [ISVGRenderer.SVGParamsStruct]): string;
    encodeFunctionData(functionFragment: "generateSVGPart", values: [ISVGRenderer.PartStruct]): string;
    encodeFunctionData(functionFragment: "generateSVGParts", values: [ISVGRenderer.PartStruct[]]): string;
    decodeFunctionResult(functionFragment: "generateSVG", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "generateSVGPart", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "generateSVGParts", data: BytesLike): Result;
    events: {};
}
export interface ISVGRenderer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISVGRendererInterface;
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
        generateSVG(params: ISVGRenderer.SVGParamsStruct, overrides?: CallOverrides): Promise<[string] & {
            svg: string;
        }>;
        generateSVGPart(part: ISVGRenderer.PartStruct, overrides?: CallOverrides): Promise<[string] & {
            partialSVG: string;
        }>;
        generateSVGParts(parts: ISVGRenderer.PartStruct[], overrides?: CallOverrides): Promise<[string] & {
            partialSVG: string;
        }>;
    };
    generateSVG(params: ISVGRenderer.SVGParamsStruct, overrides?: CallOverrides): Promise<string>;
    generateSVGPart(part: ISVGRenderer.PartStruct, overrides?: CallOverrides): Promise<string>;
    generateSVGParts(parts: ISVGRenderer.PartStruct[], overrides?: CallOverrides): Promise<string>;
    callStatic: {
        generateSVG(params: ISVGRenderer.SVGParamsStruct, overrides?: CallOverrides): Promise<string>;
        generateSVGPart(part: ISVGRenderer.PartStruct, overrides?: CallOverrides): Promise<string>;
        generateSVGParts(parts: ISVGRenderer.PartStruct[], overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        generateSVG(params: ISVGRenderer.SVGParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        generateSVGPart(part: ISVGRenderer.PartStruct, overrides?: CallOverrides): Promise<BigNumber>;
        generateSVGParts(parts: ISVGRenderer.PartStruct[], overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        generateSVG(params: ISVGRenderer.SVGParamsStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        generateSVGPart(part: ISVGRenderer.PartStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        generateSVGParts(parts: ISVGRenderer.PartStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
