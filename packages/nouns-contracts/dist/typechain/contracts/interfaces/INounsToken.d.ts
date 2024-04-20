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
export interface INounsTokenInterface extends utils.Interface {
    functions: {
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "dataURI(uint256)": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "lockDescriptor()": FunctionFragment;
        "lockMinter()": FunctionFragment;
        "lockSeeder()": FunctionFragment;
        "mint()": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setDescriptor(address)": FunctionFragment;
        "setMinter(address)": FunctionFragment;
        "setSeeder(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "approve" | "balanceOf" | "burn" | "dataURI" | "getApproved" | "isApprovedForAll" | "lockDescriptor" | "lockMinter" | "lockSeeder" | "mint" | "ownerOf" | "safeTransferFrom(address,address,uint256)" | "safeTransferFrom(address,address,uint256,bytes)" | "setApprovalForAll" | "setDescriptor" | "setMinter" | "setSeeder" | "supportsInterface" | "transferFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "dataURI", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getApproved", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [string, string]): string;
    encodeFunctionData(functionFragment: "lockDescriptor", values?: undefined): string;
    encodeFunctionData(functionFragment: "lockMinter", values?: undefined): string;
    encodeFunctionData(functionFragment: "lockSeeder", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256)", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setDescriptor", values: [string]): string;
    encodeFunctionData(functionFragment: "setMinter", values: [string]): string;
    encodeFunctionData(functionFragment: "setSeeder", values: [string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dataURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockDescriptor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockMinter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockSeeder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDescriptor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSeeder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "DescriptorLocked()": EventFragment;
        "DescriptorUpdated(address)": EventFragment;
        "MinterLocked()": EventFragment;
        "MinterUpdated(address)": EventFragment;
        "NounBurned(uint256)": EventFragment;
        "NounCreated(uint256,tuple)": EventFragment;
        "NoundersDAOUpdated(address)": EventFragment;
        "SeederLocked()": EventFragment;
        "SeederUpdated(address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DescriptorLocked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DescriptorUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinterLocked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinterUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NounBurned"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NounCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NoundersDAOUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SeederLocked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SeederUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    approved: string;
    tokenId: BigNumber;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface ApprovalForAllEventObject {
    owner: string;
    operator: string;
    approved: boolean;
}
export declare type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject>;
export declare type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export interface DescriptorLockedEventObject {
}
export declare type DescriptorLockedEvent = TypedEvent<[], DescriptorLockedEventObject>;
export declare type DescriptorLockedEventFilter = TypedEventFilter<DescriptorLockedEvent>;
export interface DescriptorUpdatedEventObject {
    descriptor: string;
}
export declare type DescriptorUpdatedEvent = TypedEvent<[
    string
], DescriptorUpdatedEventObject>;
export declare type DescriptorUpdatedEventFilter = TypedEventFilter<DescriptorUpdatedEvent>;
export interface MinterLockedEventObject {
}
export declare type MinterLockedEvent = TypedEvent<[], MinterLockedEventObject>;
export declare type MinterLockedEventFilter = TypedEventFilter<MinterLockedEvent>;
export interface MinterUpdatedEventObject {
    minter: string;
}
export declare type MinterUpdatedEvent = TypedEvent<[string], MinterUpdatedEventObject>;
export declare type MinterUpdatedEventFilter = TypedEventFilter<MinterUpdatedEvent>;
export interface NounBurnedEventObject {
    tokenId: BigNumber;
}
export declare type NounBurnedEvent = TypedEvent<[BigNumber], NounBurnedEventObject>;
export declare type NounBurnedEventFilter = TypedEventFilter<NounBurnedEvent>;
export interface NounCreatedEventObject {
    tokenId: BigNumber;
    seed: INounsSeeder.SeedStructOutput;
}
export declare type NounCreatedEvent = TypedEvent<[
    BigNumber,
    INounsSeeder.SeedStructOutput
], NounCreatedEventObject>;
export declare type NounCreatedEventFilter = TypedEventFilter<NounCreatedEvent>;
export interface NoundersDAOUpdatedEventObject {
    noundersDAO: string;
}
export declare type NoundersDAOUpdatedEvent = TypedEvent<[
    string
], NoundersDAOUpdatedEventObject>;
export declare type NoundersDAOUpdatedEventFilter = TypedEventFilter<NoundersDAOUpdatedEvent>;
export interface SeederLockedEventObject {
}
export declare type SeederLockedEvent = TypedEvent<[], SeederLockedEventObject>;
export declare type SeederLockedEventFilter = TypedEventFilter<SeederLockedEvent>;
export interface SeederUpdatedEventObject {
    seeder: string;
}
export declare type SeederUpdatedEvent = TypedEvent<[string], SeederUpdatedEventObject>;
export declare type SeederUpdatedEventFilter = TypedEventFilter<SeederUpdatedEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    tokenId: BigNumber;
}
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface INounsToken extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: INounsTokenInterface;
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
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            balance: BigNumber;
        }>;
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        dataURI(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            operator: string;
        }>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        lockDescriptor(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lockMinter(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lockSeeder(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mint(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            owner: string;
        }>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: string, _approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDescriptor(descriptor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMinter(minter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSeeder(seeder: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    burn(tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    dataURI(tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    lockDescriptor(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lockMinter(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lockSeeder(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mint(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: string, _approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDescriptor(descriptor: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMinter(minter: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSeeder(seeder: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        approve(to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        dataURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
        lockDescriptor(overrides?: CallOverrides): Promise<void>;
        lockMinter(overrides?: CallOverrides): Promise<void>;
        lockSeeder(overrides?: CallOverrides): Promise<void>;
        mint(overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: string, _approved: boolean, overrides?: CallOverrides): Promise<void>;
        setDescriptor(descriptor: string, overrides?: CallOverrides): Promise<void>;
        setMinter(minter: string, overrides?: CallOverrides): Promise<void>;
        setSeeder(seeder: string, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        Approval(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        "ApprovalForAll(address,address,bool)"(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        "DescriptorLocked()"(): DescriptorLockedEventFilter;
        DescriptorLocked(): DescriptorLockedEventFilter;
        "DescriptorUpdated(address)"(descriptor?: null): DescriptorUpdatedEventFilter;
        DescriptorUpdated(descriptor?: null): DescriptorUpdatedEventFilter;
        "MinterLocked()"(): MinterLockedEventFilter;
        MinterLocked(): MinterLockedEventFilter;
        "MinterUpdated(address)"(minter?: null): MinterUpdatedEventFilter;
        MinterUpdated(minter?: null): MinterUpdatedEventFilter;
        "NounBurned(uint256)"(tokenId?: BigNumberish | null): NounBurnedEventFilter;
        NounBurned(tokenId?: BigNumberish | null): NounBurnedEventFilter;
        "NounCreated(uint256,tuple)"(tokenId?: BigNumberish | null, seed?: null): NounCreatedEventFilter;
        NounCreated(tokenId?: BigNumberish | null, seed?: null): NounCreatedEventFilter;
        "NoundersDAOUpdated(address)"(noundersDAO?: null): NoundersDAOUpdatedEventFilter;
        NoundersDAOUpdated(noundersDAO?: null): NoundersDAOUpdatedEventFilter;
        "SeederLocked()"(): SeederLockedEventFilter;
        SeederLocked(): SeederLockedEventFilter;
        "SeederUpdated(address)"(seeder?: null): SeederUpdatedEventFilter;
        SeederUpdated(seeder?: null): SeederUpdatedEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
    };
    estimateGas: {
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        dataURI(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        lockDescriptor(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lockMinter(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lockSeeder(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mint(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: string, _approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDescriptor(descriptor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMinter(minter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSeeder(seeder: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        dataURI(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lockDescriptor(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lockMinter(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lockSeeder(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mint(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: string, _approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDescriptor(descriptor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMinter(minter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSeeder(seeder: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
