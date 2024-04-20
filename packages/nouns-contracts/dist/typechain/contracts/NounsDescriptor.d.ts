import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
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
export interface NounsDescriptorInterface extends utils.Interface {
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
        "owner()": FunctionFragment;
        "palettes(uint8,uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setBaseURI(string)": FunctionFragment;
        "toggleDataURIEnabled()": FunctionFragment;
        "tokenURI(uint256,(uint48,uint48,uint48,uint48,uint48))": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accessories" | "accessoryCount" | "addAccessory" | "addBackground" | "addBody" | "addColorToPalette" | "addGlasses" | "addHead" | "addManyAccessories" | "addManyBackgrounds" | "addManyBodies" | "addManyColorsToPalette" | "addManyGlasses" | "addManyHeads" | "arePartsLocked" | "backgroundCount" | "backgrounds" | "baseURI" | "bodies" | "bodyCount" | "dataURI" | "generateSVGImage" | "genericDataURI" | "glasses" | "glassesCount" | "headCount" | "heads" | "isDataURIEnabled" | "lockParts" | "owner" | "palettes" | "renounceOwnership" | "setBaseURI" | "toggleDataURIEnabled" | "tokenURI" | "transferOwnership"): FunctionFragment;
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
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "palettes", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setBaseURI", values: [string]): string;
    encodeFunctionData(functionFragment: "toggleDataURIEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [BigNumberish, INounsSeeder.SeedStruct]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
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
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "palettes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBaseURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toggleDataURIEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "BaseURIUpdated(string)": EventFragment;
        "DataURIToggled(bool)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "PartsLocked()": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BaseURIUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DataURIToggled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
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
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PartsLockedEventObject {
}
export declare type PartsLockedEvent = TypedEvent<[], PartsLockedEventObject>;
export declare type PartsLockedEventFilter = TypedEventFilter<PartsLockedEvent>;
export interface NounsDescriptor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NounsDescriptorInterface;
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
        accessories(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        accessoryCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        addAccessory(_accessory: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addBackground(_background: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addBody(_body: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addColorToPalette(_paletteIndex: BigNumberish, _color: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addGlasses(_glasses: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addHead(_head: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addManyAccessories(_accessories: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addManyBackgrounds(_backgrounds: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addManyBodies(_bodies: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addManyColorsToPalette(paletteIndex: BigNumberish, newColors: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addManyGlasses(_glasses: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addManyHeads(_heads: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        arePartsLocked(overrides?: CallOverrides): Promise<[boolean]>;
        backgroundCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        backgrounds(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        baseURI(overrides?: CallOverrides): Promise<[string]>;
        bodies(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        bodyCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        dataURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<[string]>;
        generateSVGImage(seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<[string]>;
        genericDataURI(name: string, description: string, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<[string]>;
        glasses(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        glassesCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        headCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        heads(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        isDataURIEnabled(overrides?: CallOverrides): Promise<[boolean]>;
        lockParts(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        palettes(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setBaseURI(_baseURI: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        toggleDataURIEnabled(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        tokenURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    accessories(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    accessoryCount(overrides?: CallOverrides): Promise<BigNumber>;
    addAccessory(_accessory: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addBackground(_background: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addBody(_body: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addColorToPalette(_paletteIndex: BigNumberish, _color: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addGlasses(_glasses: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addHead(_head: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addManyAccessories(_accessories: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addManyBackgrounds(_backgrounds: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addManyBodies(_bodies: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addManyColorsToPalette(paletteIndex: BigNumberish, newColors: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addManyGlasses(_glasses: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addManyHeads(_heads: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    arePartsLocked(overrides?: CallOverrides): Promise<boolean>;
    backgroundCount(overrides?: CallOverrides): Promise<BigNumber>;
    backgrounds(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    baseURI(overrides?: CallOverrides): Promise<string>;
    bodies(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    bodyCount(overrides?: CallOverrides): Promise<BigNumber>;
    dataURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<string>;
    generateSVGImage(seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<string>;
    genericDataURI(name: string, description: string, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<string>;
    glasses(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    glassesCount(overrides?: CallOverrides): Promise<BigNumber>;
    headCount(overrides?: CallOverrides): Promise<BigNumber>;
    heads(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    isDataURIEnabled(overrides?: CallOverrides): Promise<boolean>;
    lockParts(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    palettes(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setBaseURI(_baseURI: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    toggleDataURIEnabled(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    tokenURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        accessories(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        accessoryCount(overrides?: CallOverrides): Promise<BigNumber>;
        addAccessory(_accessory: BytesLike, overrides?: CallOverrides): Promise<void>;
        addBackground(_background: string, overrides?: CallOverrides): Promise<void>;
        addBody(_body: BytesLike, overrides?: CallOverrides): Promise<void>;
        addColorToPalette(_paletteIndex: BigNumberish, _color: string, overrides?: CallOverrides): Promise<void>;
        addGlasses(_glasses: BytesLike, overrides?: CallOverrides): Promise<void>;
        addHead(_head: BytesLike, overrides?: CallOverrides): Promise<void>;
        addManyAccessories(_accessories: BytesLike[], overrides?: CallOverrides): Promise<void>;
        addManyBackgrounds(_backgrounds: string[], overrides?: CallOverrides): Promise<void>;
        addManyBodies(_bodies: BytesLike[], overrides?: CallOverrides): Promise<void>;
        addManyColorsToPalette(paletteIndex: BigNumberish, newColors: string[], overrides?: CallOverrides): Promise<void>;
        addManyGlasses(_glasses: BytesLike[], overrides?: CallOverrides): Promise<void>;
        addManyHeads(_heads: BytesLike[], overrides?: CallOverrides): Promise<void>;
        arePartsLocked(overrides?: CallOverrides): Promise<boolean>;
        backgroundCount(overrides?: CallOverrides): Promise<BigNumber>;
        backgrounds(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        baseURI(overrides?: CallOverrides): Promise<string>;
        bodies(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        bodyCount(overrides?: CallOverrides): Promise<BigNumber>;
        dataURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<string>;
        generateSVGImage(seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<string>;
        genericDataURI(name: string, description: string, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<string>;
        glasses(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        glassesCount(overrides?: CallOverrides): Promise<BigNumber>;
        headCount(overrides?: CallOverrides): Promise<BigNumber>;
        heads(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        isDataURIEnabled(overrides?: CallOverrides): Promise<boolean>;
        lockParts(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        palettes(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setBaseURI(_baseURI: string, overrides?: CallOverrides): Promise<void>;
        toggleDataURIEnabled(overrides?: CallOverrides): Promise<void>;
        tokenURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "BaseURIUpdated(string)"(baseURI?: null): BaseURIUpdatedEventFilter;
        BaseURIUpdated(baseURI?: null): BaseURIUpdatedEventFilter;
        "DataURIToggled(bool)"(enabled?: null): DataURIToggledEventFilter;
        DataURIToggled(enabled?: null): DataURIToggledEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "PartsLocked()"(): PartsLockedEventFilter;
        PartsLocked(): PartsLockedEventFilter;
    };
    estimateGas: {
        accessories(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        accessoryCount(overrides?: CallOverrides): Promise<BigNumber>;
        addAccessory(_accessory: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addBackground(_background: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addBody(_body: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addColorToPalette(_paletteIndex: BigNumberish, _color: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addGlasses(_glasses: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addHead(_head: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addManyAccessories(_accessories: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addManyBackgrounds(_backgrounds: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addManyBodies(_bodies: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addManyColorsToPalette(paletteIndex: BigNumberish, newColors: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addManyGlasses(_glasses: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addManyHeads(_heads: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        arePartsLocked(overrides?: CallOverrides): Promise<BigNumber>;
        backgroundCount(overrides?: CallOverrides): Promise<BigNumber>;
        backgrounds(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        baseURI(overrides?: CallOverrides): Promise<BigNumber>;
        bodies(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        bodyCount(overrides?: CallOverrides): Promise<BigNumber>;
        dataURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<BigNumber>;
        generateSVGImage(seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<BigNumber>;
        genericDataURI(name: string, description: string, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<BigNumber>;
        glasses(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        glassesCount(overrides?: CallOverrides): Promise<BigNumber>;
        headCount(overrides?: CallOverrides): Promise<BigNumber>;
        heads(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isDataURIEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        lockParts(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        palettes(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setBaseURI(_baseURI: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        toggleDataURIEnabled(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        tokenURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        accessories(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accessoryCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addAccessory(_accessory: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addBackground(_background: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addBody(_body: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addColorToPalette(_paletteIndex: BigNumberish, _color: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addGlasses(_glasses: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addHead(_head: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addManyAccessories(_accessories: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addManyBackgrounds(_backgrounds: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addManyBodies(_bodies: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addManyColorsToPalette(paletteIndex: BigNumberish, newColors: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addManyGlasses(_glasses: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addManyHeads(_heads: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        arePartsLocked(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        backgroundCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        backgrounds(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bodies(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bodyCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dataURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        generateSVGImage(seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        genericDataURI(name: string, description: string, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        glasses(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        glassesCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        headCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        heads(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isDataURIEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lockParts(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        palettes(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setBaseURI(_baseURI: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        toggleDataURIEnabled(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        tokenURI(tokenId: BigNumberish, seed: INounsSeeder.SeedStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
