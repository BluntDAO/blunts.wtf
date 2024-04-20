import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export declare namespace INounsArt {
    type NounArtStoragePageStruct = {
        imageCount: BigNumberish;
        decompressedLength: BigNumberish;
        pointer: string;
    };
    type NounArtStoragePageStructOutput = [number, BigNumber, string] & {
        imageCount: number;
        decompressedLength: BigNumber;
        pointer: string;
    };
    type TraitStruct = {
        storagePages: INounsArt.NounArtStoragePageStruct[];
        storedImagesCount: BigNumberish;
    };
    type TraitStructOutput = [
        INounsArt.NounArtStoragePageStructOutput[],
        BigNumber
    ] & {
        storagePages: INounsArt.NounArtStoragePageStructOutput[];
        storedImagesCount: BigNumber;
    };
}
export interface NounsArtInterface extends utils.Interface {
    functions: {
        "accessories(uint256)": FunctionFragment;
        "accessoriesTrait()": FunctionFragment;
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
        "backgroundCount()": FunctionFragment;
        "backgrounds(uint256)": FunctionFragment;
        "bodies(uint256)": FunctionFragment;
        "bodiesTrait()": FunctionFragment;
        "bodyCount()": FunctionFragment;
        "descriptor()": FunctionFragment;
        "getAccessoriesTrait()": FunctionFragment;
        "getBodiesTrait()": FunctionFragment;
        "getGlassesTrait()": FunctionFragment;
        "getHeadsTrait()": FunctionFragment;
        "glasses(uint256)": FunctionFragment;
        "glassesCount()": FunctionFragment;
        "glassesTrait()": FunctionFragment;
        "headCount()": FunctionFragment;
        "heads(uint256)": FunctionFragment;
        "headsTrait()": FunctionFragment;
        "inflator()": FunctionFragment;
        "palettes(uint8)": FunctionFragment;
        "palettesPointers(uint8)": FunctionFragment;
        "setDescriptor(address)": FunctionFragment;
        "setInflator(address)": FunctionFragment;
        "setPalette(uint8,bytes)": FunctionFragment;
        "setPalettePointer(uint8,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accessories" | "accessoriesTrait" | "accessoryCount" | "addAccessories" | "addAccessoriesFromPointer" | "addBackground" | "addBodies" | "addBodiesFromPointer" | "addGlasses" | "addGlassesFromPointer" | "addHeads" | "addHeadsFromPointer" | "addManyBackgrounds" | "backgroundCount" | "backgrounds" | "bodies" | "bodiesTrait" | "bodyCount" | "descriptor" | "getAccessoriesTrait" | "getBodiesTrait" | "getGlassesTrait" | "getHeadsTrait" | "glasses" | "glassesCount" | "glassesTrait" | "headCount" | "heads" | "headsTrait" | "inflator" | "palettes" | "palettesPointers" | "setDescriptor" | "setInflator" | "setPalette" | "setPalettePointer"): FunctionFragment;
    encodeFunctionData(functionFragment: "accessories", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "accessoriesTrait", values?: undefined): string;
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
    encodeFunctionData(functionFragment: "backgroundCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "backgrounds", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "bodies", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "bodiesTrait", values?: undefined): string;
    encodeFunctionData(functionFragment: "bodyCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "descriptor", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAccessoriesTrait", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBodiesTrait", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGlassesTrait", values?: undefined): string;
    encodeFunctionData(functionFragment: "getHeadsTrait", values?: undefined): string;
    encodeFunctionData(functionFragment: "glasses", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "glassesCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "glassesTrait", values?: undefined): string;
    encodeFunctionData(functionFragment: "headCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "heads", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "headsTrait", values?: undefined): string;
    encodeFunctionData(functionFragment: "inflator", values?: undefined): string;
    encodeFunctionData(functionFragment: "palettes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "palettesPointers", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setDescriptor", values: [string]): string;
    encodeFunctionData(functionFragment: "setInflator", values: [string]): string;
    encodeFunctionData(functionFragment: "setPalette", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setPalettePointer", values: [BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "accessories", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accessoriesTrait", data: BytesLike): Result;
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
    decodeFunctionResult(functionFragment: "backgroundCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "backgrounds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bodies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bodiesTrait", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bodyCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "descriptor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccessoriesTrait", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBodiesTrait", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGlassesTrait", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getHeadsTrait", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "glasses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "glassesCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "glassesTrait", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "headCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "heads", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "headsTrait", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "inflator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "palettes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "palettesPointers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDescriptor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInflator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPalette", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPalettePointer", data: BytesLike): Result;
    events: {
        "AccessoriesAdded(uint16)": EventFragment;
        "BackgroundsAdded(uint256)": EventFragment;
        "BodiesAdded(uint16)": EventFragment;
        "DescriptorUpdated(address,address)": EventFragment;
        "GlassesAdded(uint16)": EventFragment;
        "HeadsAdded(uint16)": EventFragment;
        "InflatorUpdated(address,address)": EventFragment;
        "PaletteSet(uint8)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AccessoriesAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BackgroundsAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BodiesAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DescriptorUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GlassesAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "HeadsAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InflatorUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PaletteSet"): EventFragment;
}
export interface AccessoriesAddedEventObject {
    count: number;
}
export declare type AccessoriesAddedEvent = TypedEvent<[
    number
], AccessoriesAddedEventObject>;
export declare type AccessoriesAddedEventFilter = TypedEventFilter<AccessoriesAddedEvent>;
export interface BackgroundsAddedEventObject {
    count: BigNumber;
}
export declare type BackgroundsAddedEvent = TypedEvent<[
    BigNumber
], BackgroundsAddedEventObject>;
export declare type BackgroundsAddedEventFilter = TypedEventFilter<BackgroundsAddedEvent>;
export interface BodiesAddedEventObject {
    count: number;
}
export declare type BodiesAddedEvent = TypedEvent<[number], BodiesAddedEventObject>;
export declare type BodiesAddedEventFilter = TypedEventFilter<BodiesAddedEvent>;
export interface DescriptorUpdatedEventObject {
    oldDescriptor: string;
    newDescriptor: string;
}
export declare type DescriptorUpdatedEvent = TypedEvent<[
    string,
    string
], DescriptorUpdatedEventObject>;
export declare type DescriptorUpdatedEventFilter = TypedEventFilter<DescriptorUpdatedEvent>;
export interface GlassesAddedEventObject {
    count: number;
}
export declare type GlassesAddedEvent = TypedEvent<[number], GlassesAddedEventObject>;
export declare type GlassesAddedEventFilter = TypedEventFilter<GlassesAddedEvent>;
export interface HeadsAddedEventObject {
    count: number;
}
export declare type HeadsAddedEvent = TypedEvent<[number], HeadsAddedEventObject>;
export declare type HeadsAddedEventFilter = TypedEventFilter<HeadsAddedEvent>;
export interface InflatorUpdatedEventObject {
    oldInflator: string;
    newInflator: string;
}
export declare type InflatorUpdatedEvent = TypedEvent<[
    string,
    string
], InflatorUpdatedEventObject>;
export declare type InflatorUpdatedEventFilter = TypedEventFilter<InflatorUpdatedEvent>;
export interface PaletteSetEventObject {
    paletteIndex: number;
}
export declare type PaletteSetEvent = TypedEvent<[number], PaletteSetEventObject>;
export declare type PaletteSetEventFilter = TypedEventFilter<PaletteSetEvent>;
export interface NounsArt extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NounsArtInterface;
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
        accessoriesTrait(overrides?: CallOverrides): Promise<[BigNumber] & {
            storedImagesCount: BigNumber;
        }>;
        accessoryCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        addAccessories(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addAccessoriesFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addBackground(_background: string, overrides?: Overrides & {
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
        addManyBackgrounds(_backgrounds: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        backgroundCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        backgrounds(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        bodies(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        bodiesTrait(overrides?: CallOverrides): Promise<[BigNumber] & {
            storedImagesCount: BigNumber;
        }>;
        bodyCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        descriptor(overrides?: CallOverrides): Promise<[string]>;
        getAccessoriesTrait(overrides?: CallOverrides): Promise<[INounsArt.TraitStructOutput]>;
        getBodiesTrait(overrides?: CallOverrides): Promise<[INounsArt.TraitStructOutput]>;
        getGlassesTrait(overrides?: CallOverrides): Promise<[INounsArt.TraitStructOutput]>;
        getHeadsTrait(overrides?: CallOverrides): Promise<[INounsArt.TraitStructOutput]>;
        glasses(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        glassesCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        glassesTrait(overrides?: CallOverrides): Promise<[BigNumber] & {
            storedImagesCount: BigNumber;
        }>;
        headCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        heads(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        headsTrait(overrides?: CallOverrides): Promise<[BigNumber] & {
            storedImagesCount: BigNumber;
        }>;
        inflator(overrides?: CallOverrides): Promise<[string]>;
        palettes(paletteIndex: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        palettesPointers(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        setDescriptor(_descriptor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setInflator(_inflator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPalette(paletteIndex: BigNumberish, palette: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPalettePointer(paletteIndex: BigNumberish, pointer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    accessories(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    accessoriesTrait(overrides?: CallOverrides): Promise<BigNumber>;
    accessoryCount(overrides?: CallOverrides): Promise<BigNumber>;
    addAccessories(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addAccessoriesFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addBackground(_background: string, overrides?: Overrides & {
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
    addManyBackgrounds(_backgrounds: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    backgroundCount(overrides?: CallOverrides): Promise<BigNumber>;
    backgrounds(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    bodies(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    bodiesTrait(overrides?: CallOverrides): Promise<BigNumber>;
    bodyCount(overrides?: CallOverrides): Promise<BigNumber>;
    descriptor(overrides?: CallOverrides): Promise<string>;
    getAccessoriesTrait(overrides?: CallOverrides): Promise<INounsArt.TraitStructOutput>;
    getBodiesTrait(overrides?: CallOverrides): Promise<INounsArt.TraitStructOutput>;
    getGlassesTrait(overrides?: CallOverrides): Promise<INounsArt.TraitStructOutput>;
    getHeadsTrait(overrides?: CallOverrides): Promise<INounsArt.TraitStructOutput>;
    glasses(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    glassesCount(overrides?: CallOverrides): Promise<BigNumber>;
    glassesTrait(overrides?: CallOverrides): Promise<BigNumber>;
    headCount(overrides?: CallOverrides): Promise<BigNumber>;
    heads(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    headsTrait(overrides?: CallOverrides): Promise<BigNumber>;
    inflator(overrides?: CallOverrides): Promise<string>;
    palettes(paletteIndex: BigNumberish, overrides?: CallOverrides): Promise<string>;
    palettesPointers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    setDescriptor(_descriptor: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setInflator(_inflator: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPalette(paletteIndex: BigNumberish, palette: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPalettePointer(paletteIndex: BigNumberish, pointer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        accessories(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        accessoriesTrait(overrides?: CallOverrides): Promise<BigNumber>;
        accessoryCount(overrides?: CallOverrides): Promise<BigNumber>;
        addAccessories(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addAccessoriesFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addBackground(_background: string, overrides?: CallOverrides): Promise<void>;
        addBodies(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addBodiesFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addGlasses(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addGlassesFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addHeads(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addHeadsFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addManyBackgrounds(_backgrounds: string[], overrides?: CallOverrides): Promise<void>;
        backgroundCount(overrides?: CallOverrides): Promise<BigNumber>;
        backgrounds(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        bodies(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        bodiesTrait(overrides?: CallOverrides): Promise<BigNumber>;
        bodyCount(overrides?: CallOverrides): Promise<BigNumber>;
        descriptor(overrides?: CallOverrides): Promise<string>;
        getAccessoriesTrait(overrides?: CallOverrides): Promise<INounsArt.TraitStructOutput>;
        getBodiesTrait(overrides?: CallOverrides): Promise<INounsArt.TraitStructOutput>;
        getGlassesTrait(overrides?: CallOverrides): Promise<INounsArt.TraitStructOutput>;
        getHeadsTrait(overrides?: CallOverrides): Promise<INounsArt.TraitStructOutput>;
        glasses(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        glassesCount(overrides?: CallOverrides): Promise<BigNumber>;
        glassesTrait(overrides?: CallOverrides): Promise<BigNumber>;
        headCount(overrides?: CallOverrides): Promise<BigNumber>;
        heads(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        headsTrait(overrides?: CallOverrides): Promise<BigNumber>;
        inflator(overrides?: CallOverrides): Promise<string>;
        palettes(paletteIndex: BigNumberish, overrides?: CallOverrides): Promise<string>;
        palettesPointers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        setDescriptor(_descriptor: string, overrides?: CallOverrides): Promise<void>;
        setInflator(_inflator: string, overrides?: CallOverrides): Promise<void>;
        setPalette(paletteIndex: BigNumberish, palette: BytesLike, overrides?: CallOverrides): Promise<void>;
        setPalettePointer(paletteIndex: BigNumberish, pointer: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AccessoriesAdded(uint16)"(count?: null): AccessoriesAddedEventFilter;
        AccessoriesAdded(count?: null): AccessoriesAddedEventFilter;
        "BackgroundsAdded(uint256)"(count?: null): BackgroundsAddedEventFilter;
        BackgroundsAdded(count?: null): BackgroundsAddedEventFilter;
        "BodiesAdded(uint16)"(count?: null): BodiesAddedEventFilter;
        BodiesAdded(count?: null): BodiesAddedEventFilter;
        "DescriptorUpdated(address,address)"(oldDescriptor?: null, newDescriptor?: null): DescriptorUpdatedEventFilter;
        DescriptorUpdated(oldDescriptor?: null, newDescriptor?: null): DescriptorUpdatedEventFilter;
        "GlassesAdded(uint16)"(count?: null): GlassesAddedEventFilter;
        GlassesAdded(count?: null): GlassesAddedEventFilter;
        "HeadsAdded(uint16)"(count?: null): HeadsAddedEventFilter;
        HeadsAdded(count?: null): HeadsAddedEventFilter;
        "InflatorUpdated(address,address)"(oldInflator?: null, newInflator?: null): InflatorUpdatedEventFilter;
        InflatorUpdated(oldInflator?: null, newInflator?: null): InflatorUpdatedEventFilter;
        "PaletteSet(uint8)"(paletteIndex?: null): PaletteSetEventFilter;
        PaletteSet(paletteIndex?: null): PaletteSetEventFilter;
    };
    estimateGas: {
        accessories(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        accessoriesTrait(overrides?: CallOverrides): Promise<BigNumber>;
        accessoryCount(overrides?: CallOverrides): Promise<BigNumber>;
        addAccessories(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addAccessoriesFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addBackground(_background: string, overrides?: Overrides & {
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
        addManyBackgrounds(_backgrounds: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        backgroundCount(overrides?: CallOverrides): Promise<BigNumber>;
        backgrounds(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        bodies(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        bodiesTrait(overrides?: CallOverrides): Promise<BigNumber>;
        bodyCount(overrides?: CallOverrides): Promise<BigNumber>;
        descriptor(overrides?: CallOverrides): Promise<BigNumber>;
        getAccessoriesTrait(overrides?: CallOverrides): Promise<BigNumber>;
        getBodiesTrait(overrides?: CallOverrides): Promise<BigNumber>;
        getGlassesTrait(overrides?: CallOverrides): Promise<BigNumber>;
        getHeadsTrait(overrides?: CallOverrides): Promise<BigNumber>;
        glasses(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        glassesCount(overrides?: CallOverrides): Promise<BigNumber>;
        glassesTrait(overrides?: CallOverrides): Promise<BigNumber>;
        headCount(overrides?: CallOverrides): Promise<BigNumber>;
        heads(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        headsTrait(overrides?: CallOverrides): Promise<BigNumber>;
        inflator(overrides?: CallOverrides): Promise<BigNumber>;
        palettes(paletteIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        palettesPointers(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setDescriptor(_descriptor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setInflator(_inflator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPalette(paletteIndex: BigNumberish, palette: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPalettePointer(paletteIndex: BigNumberish, pointer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        accessories(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accessoriesTrait(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accessoryCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addAccessories(encodedCompressed: BytesLike, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addAccessoriesFromPointer(pointer: string, decompressedLength: BigNumberish, imageCount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addBackground(_background: string, overrides?: Overrides & {
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
        addManyBackgrounds(_backgrounds: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        backgroundCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        backgrounds(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bodies(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bodiesTrait(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bodyCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        descriptor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccessoriesTrait(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBodiesTrait(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGlassesTrait(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getHeadsTrait(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        glasses(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        glassesCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        glassesTrait(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        headCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        heads(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        headsTrait(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        inflator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        palettes(paletteIndex: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        palettesPointers(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDescriptor(_descriptor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setInflator(_inflator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPalette(paletteIndex: BigNumberish, palette: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPalettePointer(paletteIndex: BigNumberish, pointer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
