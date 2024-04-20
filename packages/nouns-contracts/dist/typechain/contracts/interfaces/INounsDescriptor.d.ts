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
export interface INounsDescriptorInterface extends utils.Interface {
    functions: {
        "accessories(uint256)": FunctionFragment;
        "accessoryCount()": FunctionFragment;
        "addAccessory(bytes)": FunctionFragment;
        "addBackground(string)": FunctionFragment;
        "addBody(bytes)": FunctionFragment;
        "addColorToPalette(uint8,string)": FunctionFragment;
        "addGlasses(bytes)": FunctionFragment;
        "addHead(bytes)": FunctionFragment;
        "addManyAccessories(bytes[])": FunctionFragment;
        "addManyBackgrounds(string[])": FunctionFragment;
        "addManyBodies(bytes[])": FunctionFragment;
        "addManyColorsToPalette(uint8,string[])": FunctionFragment;
        "addManyGlasses(bytes[])": FunctionFragment;
        "addManyHeads(bytes[])": FunctionFragment;
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
        "palettes(uint8,uint256)": FunctionFragment;
        "setBaseURI(string)": FunctionFragment;
        "toggleDataURIEnabled()": FunctionFragment;
        "tokenURI(uint256,(uint48,uint48,uint48,uint48,uint48))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accessories" | "accessoryCount" | "addAccessory" | "addBackground" | "addBody" | "addColorToPalette" | "addGlasses" | "addHead" | "addManyAccessories" | "addManyBackgrounds" | "addManyBodies" | "addManyColorsToPalette" | "addManyGlasses" | "addManyHeads" | "arePartsLocked" | "backgroundCount" | "backgrounds" | "baseURI" | "bodies" | "bodyCount" | "dataURI" | "generateSVGImage" | "genericDataURI" | "glasses" | "glassesCount" | "headCount" | "heads" | "isDataURIEnabled" | "lockParts" | "palettes" | "setBaseURI" | "toggleDataURIEnabled" | "tokenURI"): FunctionFragment;
    encodeFunctionData(functionFragment: "accessories", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "accessoryCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "addAccessory", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "addBackground", values: [string]): string;
    encodeFunctionData(functionFragment: "addBody", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "addColorToPalette", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "addGlasses", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "addHead", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "addManyAccessories", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "addManyBackgrounds", values: [string[]]): string;
    encodeFunctionData(functionFragment: "addManyBodies", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "addManyColorsToPalette", values: [BigNumberish, string[]]): string;
    encodeFunctionData(functionFragment: "addManyGlasses", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "addManyHeads", values: [BytesLike[]]): string;
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
    encodeFunctionData(functionFragment: "palettes", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setBaseURI", values: [string]): string;
    encodeFunctionData(functionFragment: "toggleDataURIEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [BigNumberish, INounsSeeder.SeedStruct]): string;
    decodeFunctionResult(functionFragment: "accessories", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accessoryCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addAccessory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addBackground", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addBody", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addColorToPalette", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addGlasses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addHead", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addManyAccessories", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addManyBackgrounds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addManyBodies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addManyColorsToPalette", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addManyGlasses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addManyHeads", data: BytesLike): Result;
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
    decodeFunctionResult(functionFragment: "toggleDataURIEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    events: {
        "BaseURIUpdated(string)": EventFragment;
        "DataURIToggled(bool)": EventFragment;
        "PartsLocked()": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BaseURIUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DataURIToggled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PartsLocked"): EventFragment;
}
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
export interface INounsDescriptor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: INounsDescriptorInterface;
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
        addAccessory(accessory: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addBackground(background: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addBody(body: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addColorToPalette(paletteIndex: BigNumberish, color: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addGlasses(glasses: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addHead(head: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addManyAccessories(accessories: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addManyBackgrounds(backgrounds: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addManyBodies(bodies: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addManyColorsToPalette(paletteIndex: BigNumberish, newColors: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addManyGlasses(glasses: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addManyHeads(heads: BytesLike[], overrides?: Overrides & {
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
        palettes(paletteIndex: BigNumberish, colorIndex: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        setBaseURI(baseURI: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        toggleDataURIEnabled(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        tokenURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<[string]>;
    };
    accessories(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    accessoryCount(overrides?: CallOverrides): Promise<BigNumber>;
    addAccessory(accessory: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addBackground(background: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addBody(body: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addColorToPalette(paletteIndex: BigNumberish, color: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addGlasses(glasses: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addHead(head: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addManyAccessories(accessories: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addManyBackgrounds(backgrounds: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addManyBodies(bodies: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addManyColorsToPalette(paletteIndex: BigNumberish, newColors: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addManyGlasses(glasses: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addManyHeads(heads: BytesLike[], overrides?: Overrides & {
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
    palettes(paletteIndex: BigNumberish, colorIndex: BigNumberish, overrides?: CallOverrides): Promise<string>;
    setBaseURI(baseURI: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    toggleDataURIEnabled(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    tokenURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        accessories(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        accessoryCount(overrides?: CallOverrides): Promise<BigNumber>;
        addAccessory(accessory: BytesLike, overrides?: CallOverrides): Promise<void>;
        addBackground(background: string, overrides?: CallOverrides): Promise<void>;
        addBody(body: BytesLike, overrides?: CallOverrides): Promise<void>;
        addColorToPalette(paletteIndex: BigNumberish, color: string, overrides?: CallOverrides): Promise<void>;
        addGlasses(glasses: BytesLike, overrides?: CallOverrides): Promise<void>;
        addHead(head: BytesLike, overrides?: CallOverrides): Promise<void>;
        addManyAccessories(accessories: BytesLike[], overrides?: CallOverrides): Promise<void>;
        addManyBackgrounds(backgrounds: string[], overrides?: CallOverrides): Promise<void>;
        addManyBodies(bodies: BytesLike[], overrides?: CallOverrides): Promise<void>;
        addManyColorsToPalette(paletteIndex: BigNumberish, newColors: string[], overrides?: CallOverrides): Promise<void>;
        addManyGlasses(glasses: BytesLike[], overrides?: CallOverrides): Promise<void>;
        addManyHeads(heads: BytesLike[], overrides?: CallOverrides): Promise<void>;
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
        palettes(paletteIndex: BigNumberish, colorIndex: BigNumberish, overrides?: CallOverrides): Promise<string>;
        setBaseURI(baseURI: string, overrides?: CallOverrides): Promise<void>;
        toggleDataURIEnabled(overrides?: CallOverrides): Promise<void>;
        tokenURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "BaseURIUpdated(string)"(baseURI?: null): BaseURIUpdatedEventFilter;
        BaseURIUpdated(baseURI?: null): BaseURIUpdatedEventFilter;
        "DataURIToggled(bool)"(enabled?: null): DataURIToggledEventFilter;
        DataURIToggled(enabled?: null): DataURIToggledEventFilter;
        "PartsLocked()"(): PartsLockedEventFilter;
        PartsLocked(): PartsLockedEventFilter;
    };
    estimateGas: {
        accessories(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        accessoryCount(overrides?: CallOverrides): Promise<BigNumber>;
        addAccessory(accessory: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addBackground(background: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addBody(body: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addColorToPalette(paletteIndex: BigNumberish, color: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addGlasses(glasses: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addHead(head: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addManyAccessories(accessories: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addManyBackgrounds(backgrounds: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addManyBodies(bodies: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addManyColorsToPalette(paletteIndex: BigNumberish, newColors: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addManyGlasses(glasses: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addManyHeads(heads: BytesLike[], overrides?: Overrides & {
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
        palettes(paletteIndex: BigNumberish, colorIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setBaseURI(baseURI: string, overrides?: Overrides & {
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
        addAccessory(accessory: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addBackground(background: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addBody(body: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addColorToPalette(paletteIndex: BigNumberish, color: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addGlasses(glasses: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addHead(head: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addManyAccessories(accessories: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addManyBackgrounds(backgrounds: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addManyBodies(bodies: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addManyColorsToPalette(paletteIndex: BigNumberish, newColors: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addManyGlasses(glasses: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addManyHeads(heads: BytesLike[], overrides?: Overrides & {
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
        palettes(paletteIndex: BigNumberish, colorIndex: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setBaseURI(baseURI: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        toggleDataURIEnabled(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        tokenURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
