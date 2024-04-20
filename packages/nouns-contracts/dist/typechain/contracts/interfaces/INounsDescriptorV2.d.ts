import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
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
export interface INounsDescriptorV2Interface extends utils.Interface {
    functions: {
        "accessories(uint256)": FunctionFragment;
        "accessoryCount()": FunctionFragment;
        "addAccessories(bytes,uint80,uint16)": FunctionFragment;
        "addAccessoriesFromPointer(address,uint80,uint16)": FunctionFragment;
        "addBackground(string)": FunctionFragment;
        "addBodies(bytes,uint80,uint16)": FunctionFragment;
        "addBodiesFromPointer(address,uint80,uint16)": FunctionFragment;
        "addGlasses(bytes,uint80,uint16)": FunctionFragment;
        "addGlassesFromPointer(address,uint80,uint16)": FunctionFragment;
        "addHeads(bytes,uint80,uint16)": FunctionFragment;
        "addHeadsFromPointer(address,uint80,uint16)": FunctionFragment;
        "addManyBackgrounds(string[])": FunctionFragment;
        "arePartsLocked()": FunctionFragment;
        "backgroundCount()": FunctionFragment;
        "backgrounds(uint256)": FunctionFragment;
        "baseURI()": FunctionFragment;
        "bodies(uint256)": FunctionFragment;
        "bodyCount()": FunctionFragment;
        "dataURI(uint256,(uint48,uint48,uint48,uint48,uint48))": FunctionFragment;
        "generateSVGImage((uint48,uint48,uint48,uint48,uint48))": FunctionFragment;
        "genericDataURI(string,string,(uint48,uint48,uint48,uint48,uint48))": FunctionFragment;
        "glasses(uint256)": FunctionFragment;
        "glassesCount()": FunctionFragment;
        "headCount()": FunctionFragment;
        "heads(uint256)": FunctionFragment;
        "isDataURIEnabled()": FunctionFragment;
        "lockParts()": FunctionFragment;
        "palettes(uint8)": FunctionFragment;
        "setBaseURI(string)": FunctionFragment;
        "setPalette(uint8,bytes)": FunctionFragment;
        "setPalettePointer(uint8,address)": FunctionFragment;
        "toggleDataURIEnabled()": FunctionFragment;
        "tokenURI(uint256,(uint48,uint48,uint48,uint48,uint48))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accessories" | "accessoryCount" | "addAccessories" | "addAccessoriesFromPointer" | "addBackground" | "addBodies" | "addBodiesFromPointer" | "addGlasses" | "addGlassesFromPointer" | "addHeads" | "addHeadsFromPointer" | "addManyBackgrounds" | "arePartsLocked" | "backgroundCount" | "backgrounds" | "baseURI" | "bodies" | "bodyCount" | "dataURI" | "generateSVGImage" | "genericDataURI" | "glasses" | "glassesCount" | "headCount" | "heads" | "isDataURIEnabled" | "lockParts" | "palettes" | "setBaseURI" | "setPalette" | "setPalettePointer" | "toggleDataURIEnabled" | "tokenURI"): FunctionFragment;
    encodeFunctionData(functionFragment: "accessories", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "accessoryCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "addAccessories", values: [BytesLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "addAccessoriesFromPointer", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "addBackground", values: [string]): string;
    encodeFunctionData(functionFragment: "addBodies", values: [BytesLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "addBodiesFromPointer", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "addGlasses", values: [BytesLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "addGlassesFromPointer", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "addHeads", values: [BytesLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "addHeadsFromPointer", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "addManyBackgrounds", values: [string[]]): string;
    encodeFunctionData(functionFragment: "arePartsLocked", values?: undefined): string;
    encodeFunctionData(functionFragment: "backgroundCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "backgrounds", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "baseURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "bodies", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "bodyCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "dataURI", values: [BigNumberish, INounsSeeder.SeedStruct]): string;
    encodeFunctionData(functionFragment: "generateSVGImage", values: [INounsSeeder.SeedStruct]): string;
    encodeFunctionData(functionFragment: "genericDataURI", values: [string, string, INounsSeeder.SeedStruct]): string;
    encodeFunctionData(functionFragment: "glasses", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "glassesCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "headCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "heads", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isDataURIEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "lockParts", values?: undefined): string;
    encodeFunctionData(functionFragment: "palettes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setBaseURI", values: [string]): string;
    encodeFunctionData(functionFragment: "setPalette", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setPalettePointer", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "toggleDataURIEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [BigNumberish, INounsSeeder.SeedStruct]): string;
    decodeFunctionResult(functionFragment: "accessories", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accessoryCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addAccessories", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addAccessoriesFromPointer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addBackground", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addBodies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addBodiesFromPointer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addGlasses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addGlassesFromPointer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addHeads", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addHeadsFromPointer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addManyBackgrounds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "arePartsLocked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "backgroundCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "backgrounds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bodies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bodyCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dataURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "generateSVGImage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "genericDataURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "glasses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "glassesCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "headCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "heads", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDataURIEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockParts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "palettes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBaseURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPalette", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPalettePointer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toggleDataURIEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    events: {
        "ArtUpdated(address)": EventFragment;
        "BaseURIUpdated(string)": EventFragment;
        "DataURIToggled(bool)": EventFragment;
        "PartsLocked()": EventFragment;
        "RendererUpdated(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ArtUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BaseURIUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DataURIToggled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PartsLocked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RendererUpdated"): EventFragment;
}
export interface ArtUpdatedEventObject {
    art: string;
}
export declare type ArtUpdatedEvent = TypedEvent<[string], ArtUpdatedEventObject>;
export declare type ArtUpdatedEventFilter = TypedEventFilter<ArtUpdatedEvent>;
export interface BaseURIUpdatedEventObject {
    baseURI: string;
}
export declare type BaseURIUpdatedEvent = TypedEvent<[
    string
], BaseURIUpdatedEventObject>;
export declare type BaseURIUpdatedEventFilter = TypedEventFilter<BaseURIUpdatedEvent>;
export interface DataURIToggledEventObject {
    enabled: boolean;
}
export declare type DataURIToggledEvent = TypedEvent<[
    boolean
], DataURIToggledEventObject>;
export declare type DataURIToggledEventFilter = TypedEventFilter<DataURIToggledEvent>;
export interface PartsLockedEventObject {
}
export declare type PartsLockedEvent = TypedEvent<[], PartsLockedEventObject>;
export declare type PartsLockedEventFilter = TypedEventFilter<PartsLockedEvent>;
export interface RendererUpdatedEventObject {
    renderer: string;
}
export declare type RendererUpdatedEvent = TypedEvent<[
    string
], RendererUpdatedEventObject>;
export declare type RendererUpdatedEventFilter = TypedEventFilter<RendererUpdatedEvent>;
export interface INounsDescriptorV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: INounsDescriptorV2Interface;
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
        accessories(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        accessoryCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        addAccessories(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addAccessoriesFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addBackground(background: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addBodies(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addBodiesFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addGlasses(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addGlassesFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addHeads(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addHeadsFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addManyBackgrounds(backgrounds: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        arePartsLocked(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        backgroundCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        backgrounds(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        baseURI(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        bodies(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        bodyCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        dataURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<[string]>;
        generateSVGImage(seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<[string]>;
        genericDataURI(name: string, description: string, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<[string]>;
        glasses(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        glassesCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        headCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        heads(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        isDataURIEnabled(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lockParts(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        palettes(paletteIndex: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        setBaseURI(baseURI: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPalette(paletteIndex: BigNumberish, palette: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPalettePointer(paletteIndex: BigNumberish, pointer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        toggleDataURIEnabled(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        tokenURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<[string]>;
    };
    accessories(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    accessoryCount(overrides?: CallOverrides): Promise<BigNumber>;
    addAccessories(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addAccessoriesFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addBackground(background: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addBodies(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addBodiesFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addGlasses(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addGlassesFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addHeads(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addHeadsFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addManyBackgrounds(backgrounds: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    arePartsLocked(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    backgroundCount(overrides?: CallOverrides): Promise<BigNumber>;
    backgrounds(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    baseURI(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    bodies(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    bodyCount(overrides?: CallOverrides): Promise<BigNumber>;
    dataURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<string>;
    generateSVGImage(seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<string>;
    genericDataURI(name: string, description: string, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<string>;
    glasses(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    glassesCount(overrides?: CallOverrides): Promise<BigNumber>;
    headCount(overrides?: CallOverrides): Promise<BigNumber>;
    heads(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    isDataURIEnabled(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lockParts(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    palettes(paletteIndex: BigNumberish, overrides?: CallOverrides): Promise<string>;
    setBaseURI(baseURI: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPalette(paletteIndex: BigNumberish, palette: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPalettePointer(paletteIndex: BigNumberish, pointer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    toggleDataURIEnabled(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    tokenURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        accessories(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        accessoryCount(overrides?: CallOverrides): Promise<BigNumber>;
        addAccessories(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addAccessoriesFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addBackground(background: string, overrides?: CallOverrides): Promise<void>;
        addBodies(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addBodiesFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addGlasses(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addGlassesFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addHeads(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addHeadsFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addManyBackgrounds(backgrounds: string[], overrides?: CallOverrides): Promise<void>;
        arePartsLocked(overrides?: CallOverrides): Promise<boolean>;
        backgroundCount(overrides?: CallOverrides): Promise<BigNumber>;
        backgrounds(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        baseURI(overrides?: CallOverrides): Promise<string>;
        bodies(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        bodyCount(overrides?: CallOverrides): Promise<BigNumber>;
        dataURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<string>;
        generateSVGImage(seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<string>;
        genericDataURI(name: string, description: string, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<string>;
        glasses(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        glassesCount(overrides?: CallOverrides): Promise<BigNumber>;
        headCount(overrides?: CallOverrides): Promise<BigNumber>;
        heads(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        isDataURIEnabled(overrides?: CallOverrides): Promise<boolean>;
        lockParts(overrides?: CallOverrides): Promise<void>;
        palettes(paletteIndex: BigNumberish, overrides?: CallOverrides): Promise<string>;
        setBaseURI(baseURI: string, overrides?: CallOverrides): Promise<void>;
        setPalette(paletteIndex: BigNumberish, palette: BytesLike, overrides?: CallOverrides): Promise<void>;
        setPalettePointer(paletteIndex: BigNumberish, pointer: string, overrides?: CallOverrides): Promise<void>;
        toggleDataURIEnabled(overrides?: CallOverrides): Promise<void>;
        tokenURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "ArtUpdated(address)"(art?: null): ArtUpdatedEventFilter;
        ArtUpdated(art?: null): ArtUpdatedEventFilter;
        "BaseURIUpdated(string)"(baseURI?: null): BaseURIUpdatedEventFilter;
        BaseURIUpdated(baseURI?: null): BaseURIUpdatedEventFilter;
        "DataURIToggled(bool)"(enabled?: null): DataURIToggledEventFilter;
        DataURIToggled(enabled?: null): DataURIToggledEventFilter;
        "PartsLocked()"(): PartsLockedEventFilter;
        PartsLocked(): PartsLockedEventFilter;
        "RendererUpdated(address)"(renderer?: null): RendererUpdatedEventFilter;
        RendererUpdated(renderer?: null): RendererUpdatedEventFilter;
    };
    estimateGas: {
        accessories(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        accessoryCount(overrides?: CallOverrides): Promise<BigNumber>;
        addAccessories(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addAccessoriesFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addBackground(background: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addBodies(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addBodiesFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addGlasses(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addGlassesFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addHeads(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addHeadsFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addManyBackgrounds(backgrounds: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        arePartsLocked(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        backgroundCount(overrides?: CallOverrides): Promise<BigNumber>;
        backgrounds(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        baseURI(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        bodies(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        bodyCount(overrides?: CallOverrides): Promise<BigNumber>;
        dataURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<BigNumber>;
        generateSVGImage(seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<BigNumber>;
        genericDataURI(name: string, description: string, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<BigNumber>;
        glasses(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        glassesCount(overrides?: CallOverrides): Promise<BigNumber>;
        headCount(overrides?: CallOverrides): Promise<BigNumber>;
        heads(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isDataURIEnabled(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lockParts(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        palettes(paletteIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setBaseURI(baseURI: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPalette(paletteIndex: BigNumberish, palette: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPalettePointer(paletteIndex: BigNumberish, pointer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        toggleDataURIEnabled(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        tokenURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        accessories(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accessoryCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addAccessories(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addAccessoriesFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addBackground(background: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addBodies(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addBodiesFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addGlasses(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addGlassesFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addHeads(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addHeadsFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addManyBackgrounds(backgrounds: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        arePartsLocked(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        backgroundCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        backgrounds(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseURI(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        bodies(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bodyCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dataURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        generateSVGImage(seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        genericDataURI(name: string, description: string, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        glasses(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        glassesCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        headCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        heads(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isDataURIEnabled(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lockParts(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        palettes(paletteIndex: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setBaseURI(baseURI: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPalette(paletteIndex: BigNumberish, palette: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPalettePointer(paletteIndex: BigNumberish, pointer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        toggleDataURIEnabled(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        tokenURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
