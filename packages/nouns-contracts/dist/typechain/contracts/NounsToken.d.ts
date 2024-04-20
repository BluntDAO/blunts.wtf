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
export interface NounsTokenInterface extends utils.Interface {
    functions: {
        "DELEGATION_TYPEHASH()": FunctionFragment;
        "DOMAIN_TYPEHASH()": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "checkpoints(address,uint32)": FunctionFragment;
        "contractURI()": FunctionFragment;
        "dataURI(uint256)": FunctionFragment;
        "decimals()": FunctionFragment;
        "delegate(address)": FunctionFragment;
        "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "delegates(address)": FunctionFragment;
        "descriptor()": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "getCurrentVotes(address)": FunctionFragment;
        "getPriorVotes(address,uint256)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "isDescriptorLocked()": FunctionFragment;
        "isMinterLocked()": FunctionFragment;
        "isSeederLocked()": FunctionFragment;
        "lockDescriptor()": FunctionFragment;
        "lockMinter()": FunctionFragment;
        "lockSeeder()": FunctionFragment;
        "mint()": FunctionFragment;
        "minter()": FunctionFragment;
        "name()": FunctionFragment;
        "nonces(address)": FunctionFragment;
        "noundersDAO()": FunctionFragment;
        "numCheckpoints(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "proxyRegistry()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
        "seeder()": FunctionFragment;
        "seeds(uint256)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setContractURIHash(string)": FunctionFragment;
        "setDescriptor(address)": FunctionFragment;
        "setMinter(address)": FunctionFragment;
        "setNoundersDAO(address)": FunctionFragment;
        "setSeeder(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "tokenByIndex(uint256)": FunctionFragment;
        "tokenOfOwnerByIndex(address,uint256)": FunctionFragment;
        "tokenURI(uint256)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "votesToDelegate(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DELEGATION_TYPEHASH" | "DOMAIN_TYPEHASH" | "approve" | "balanceOf" | "burn" | "checkpoints" | "contractURI" | "dataURI" | "decimals" | "delegate" | "delegateBySig" | "delegates" | "descriptor" | "getApproved" | "getCurrentVotes" | "getPriorVotes" | "isApprovedForAll" | "isDescriptorLocked" | "isMinterLocked" | "isSeederLocked" | "lockDescriptor" | "lockMinter" | "lockSeeder" | "mint" | "minter" | "name" | "nonces" | "noundersDAO" | "numCheckpoints" | "owner" | "ownerOf" | "proxyRegistry" | "renounceOwnership" | "safeTransferFrom(address,address,uint256)" | "safeTransferFrom(address,address,uint256,bytes)" | "seeder" | "seeds" | "setApprovalForAll" | "setContractURIHash" | "setDescriptor" | "setMinter" | "setNoundersDAO" | "setSeeder" | "supportsInterface" | "symbol" | "tokenByIndex" | "tokenOfOwnerByIndex" | "tokenURI" | "totalSupply" | "transferFrom" | "transferOwnership" | "votesToDelegate"): FunctionFragment;
    encodeFunctionData(functionFragment: "DELEGATION_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "DOMAIN_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkpoints", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "contractURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "dataURI", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "delegate", values: [string]): string;
    encodeFunctionData(functionFragment: "delegateBySig", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "delegates", values: [string]): string;
    encodeFunctionData(functionFragment: "descriptor", values?: undefined): string;
    encodeFunctionData(functionFragment: "getApproved", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCurrentVotes", values: [string]): string;
    encodeFunctionData(functionFragment: "getPriorVotes", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isDescriptorLocked", values?: undefined): string;
    encodeFunctionData(functionFragment: "isMinterLocked", values?: undefined): string;
    encodeFunctionData(functionFragment: "isSeederLocked", values?: undefined): string;
    encodeFunctionData(functionFragment: "lockDescriptor", values?: undefined): string;
    encodeFunctionData(functionFragment: "lockMinter", values?: undefined): string;
    encodeFunctionData(functionFragment: "lockSeeder", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values?: undefined): string;
    encodeFunctionData(functionFragment: "minter", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonces", values: [string]): string;
    encodeFunctionData(functionFragment: "noundersDAO", values?: undefined): string;
    encodeFunctionData(functionFragment: "numCheckpoints", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "proxyRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256)", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "seeder", values?: undefined): string;
    encodeFunctionData(functionFragment: "seeds", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setContractURIHash", values: [string]): string;
    encodeFunctionData(functionFragment: "setDescriptor", values: [string]): string;
    encodeFunctionData(functionFragment: "setMinter", values: [string]): string;
    encodeFunctionData(functionFragment: "setNoundersDAO", values: [string]): string;
    encodeFunctionData(functionFragment: "setSeeder", values: [string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenByIndex", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "tokenOfOwnerByIndex", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "votesToDelegate", values: [string]): string;
    decodeFunctionResult(functionFragment: "DELEGATION_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DOMAIN_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkpoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dataURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegateBySig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "descriptor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriorVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDescriptorLocked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isMinterLocked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isSeederLocked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockDescriptor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockMinter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockSeeder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "noundersDAO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "numCheckpoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxyRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "seeder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "seeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setContractURIHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDescriptor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNoundersDAO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSeeder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenByIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenOfOwnerByIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votesToDelegate", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "DelegateChanged(address,address,address)": EventFragment;
        "DelegateVotesChanged(address,uint256,uint256)": EventFragment;
        "DescriptorLocked()": EventFragment;
        "DescriptorUpdated(address)": EventFragment;
        "MinterLocked()": EventFragment;
        "MinterUpdated(address)": EventFragment;
        "NounBurned(uint256)": EventFragment;
        "NounCreated(uint256,tuple)": EventFragment;
        "NoundersDAOUpdated(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "SeederLocked()": EventFragment;
        "SeederUpdated(address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DelegateChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DelegateVotesChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DescriptorLocked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DescriptorUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinterLocked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinterUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NounBurned"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NounCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NoundersDAOUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
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
export interface DelegateChangedEventObject {
    delegator: string;
    fromDelegate: string;
    toDelegate: string;
}
export declare type DelegateChangedEvent = TypedEvent<[
    string,
    string,
    string
], DelegateChangedEventObject>;
export declare type DelegateChangedEventFilter = TypedEventFilter<DelegateChangedEvent>;
export interface DelegateVotesChangedEventObject {
    delegate: string;
    previousBalance: BigNumber;
    newBalance: BigNumber;
}
export declare type DelegateVotesChangedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], DelegateVotesChangedEventObject>;
export declare type DelegateVotesChangedEventFilter = TypedEventFilter<DelegateVotesChangedEvent>;
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
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
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
export interface NounsToken extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NounsTokenInterface;
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
        DELEGATION_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(nounId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        checkpoints(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[number, BigNumber] & {
            fromBlock: number;
            votes: BigNumber;
        }>;
        contractURI(overrides?: CallOverrides): Promise<[string]>;
        dataURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        delegate(delegatee: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delegates(delegator: string, overrides?: CallOverrides): Promise<[string]>;
        descriptor(overrides?: CallOverrides): Promise<[string]>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getCurrentVotes(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPriorVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        isDescriptorLocked(overrides?: CallOverrides): Promise<[boolean]>;
        isMinterLocked(overrides?: CallOverrides): Promise<[boolean]>;
        isSeederLocked(overrides?: CallOverrides): Promise<[boolean]>;
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
        minter(overrides?: CallOverrides): Promise<[string]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nonces(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        noundersDAO(overrides?: CallOverrides): Promise<[string]>;
        numCheckpoints(arg0: string, overrides?: CallOverrides): Promise<[number]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        proxyRegistry(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        seeder(overrides?: CallOverrides): Promise<[string]>;
        seeds(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            number,
            number,
            number,
            number,
            number
        ] & {
            background: number;
            body: number;
            accessory: number;
            head: number;
            glasses: number;
        }>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setContractURIHash(newContractURIHash: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDescriptor(_descriptor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMinter(_minter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setNoundersDAO(_noundersDAO: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSeeder(_seeder: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        votesToDelegate(delegator: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    DELEGATION_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    burn(nounId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    checkpoints(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[number, BigNumber] & {
        fromBlock: number;
        votes: BigNumber;
    }>;
    contractURI(overrides?: CallOverrides): Promise<string>;
    dataURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    decimals(overrides?: CallOverrides): Promise<number>;
    delegate(delegatee: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delegates(delegator: string, overrides?: CallOverrides): Promise<string>;
    descriptor(overrides?: CallOverrides): Promise<string>;
    getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getCurrentVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    getPriorVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    isDescriptorLocked(overrides?: CallOverrides): Promise<boolean>;
    isMinterLocked(overrides?: CallOverrides): Promise<boolean>;
    isSeederLocked(overrides?: CallOverrides): Promise<boolean>;
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
    minter(overrides?: CallOverrides): Promise<string>;
    name(overrides?: CallOverrides): Promise<string>;
    nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    noundersDAO(overrides?: CallOverrides): Promise<string>;
    numCheckpoints(arg0: string, overrides?: CallOverrides): Promise<number>;
    owner(overrides?: CallOverrides): Promise<string>;
    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    proxyRegistry(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    seeder(overrides?: CallOverrides): Promise<string>;
    seeds(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
        number,
        number,
        number,
        number,
        number
    ] & {
        background: number;
        body: number;
        accessory: number;
        head: number;
        glasses: number;
    }>;
    setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setContractURIHash(newContractURIHash: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDescriptor(_descriptor: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMinter(_minter: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setNoundersDAO(_noundersDAO: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSeeder(_seeder: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    votesToDelegate(delegator: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        DELEGATION_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        approve(to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(nounId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        checkpoints(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[number, BigNumber] & {
            fromBlock: number;
            votes: BigNumber;
        }>;
        contractURI(overrides?: CallOverrides): Promise<string>;
        dataURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        decimals(overrides?: CallOverrides): Promise<number>;
        delegate(delegatee: string, overrides?: CallOverrides): Promise<void>;
        delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        delegates(delegator: string, overrides?: CallOverrides): Promise<string>;
        descriptor(overrides?: CallOverrides): Promise<string>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getCurrentVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPriorVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
        isDescriptorLocked(overrides?: CallOverrides): Promise<boolean>;
        isMinterLocked(overrides?: CallOverrides): Promise<boolean>;
        isSeederLocked(overrides?: CallOverrides): Promise<boolean>;
        lockDescriptor(overrides?: CallOverrides): Promise<void>;
        lockMinter(overrides?: CallOverrides): Promise<void>;
        lockSeeder(overrides?: CallOverrides): Promise<void>;
        mint(overrides?: CallOverrides): Promise<BigNumber>;
        minter(overrides?: CallOverrides): Promise<string>;
        name(overrides?: CallOverrides): Promise<string>;
        nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        noundersDAO(overrides?: CallOverrides): Promise<string>;
        numCheckpoints(arg0: string, overrides?: CallOverrides): Promise<number>;
        owner(overrides?: CallOverrides): Promise<string>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        proxyRegistry(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        seeder(overrides?: CallOverrides): Promise<string>;
        seeds(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            number,
            number,
            number,
            number,
            number
        ] & {
            background: number;
            body: number;
            accessory: number;
            head: number;
            glasses: number;
        }>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: CallOverrides): Promise<void>;
        setContractURIHash(newContractURIHash: string, overrides?: CallOverrides): Promise<void>;
        setDescriptor(_descriptor: string, overrides?: CallOverrides): Promise<void>;
        setMinter(_minter: string, overrides?: CallOverrides): Promise<void>;
        setNoundersDAO(_noundersDAO: string, overrides?: CallOverrides): Promise<void>;
        setSeeder(_seeder: string, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        votesToDelegate(delegator: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        Approval(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        "ApprovalForAll(address,address,bool)"(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        "DelegateChanged(address,address,address)"(delegator?: string | null, fromDelegate?: string | null, toDelegate?: string | null): DelegateChangedEventFilter;
        DelegateChanged(delegator?: string | null, fromDelegate?: string | null, toDelegate?: string | null): DelegateChangedEventFilter;
        "DelegateVotesChanged(address,uint256,uint256)"(delegate?: string | null, previousBalance?: null, newBalance?: null): DelegateVotesChangedEventFilter;
        DelegateVotesChanged(delegate?: string | null, previousBalance?: null, newBalance?: null): DelegateVotesChangedEventFilter;
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
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "SeederLocked()"(): SeederLockedEventFilter;
        SeederLocked(): SeederLockedEventFilter;
        "SeederUpdated(address)"(seeder?: null): SeederUpdatedEventFilter;
        SeederUpdated(seeder?: null): SeederUpdatedEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
    };
    estimateGas: {
        DELEGATION_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(nounId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        checkpoints(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        contractURI(overrides?: CallOverrides): Promise<BigNumber>;
        dataURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        delegate(delegatee: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delegates(delegator: string, overrides?: CallOverrides): Promise<BigNumber>;
        descriptor(overrides?: CallOverrides): Promise<BigNumber>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPriorVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        isDescriptorLocked(overrides?: CallOverrides): Promise<BigNumber>;
        isMinterLocked(overrides?: CallOverrides): Promise<BigNumber>;
        isSeederLocked(overrides?: CallOverrides): Promise<BigNumber>;
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
        minter(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        noundersDAO(overrides?: CallOverrides): Promise<BigNumber>;
        numCheckpoints(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proxyRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        seeder(overrides?: CallOverrides): Promise<BigNumber>;
        seeds(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setContractURIHash(newContractURIHash: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDescriptor(_descriptor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMinter(_minter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setNoundersDAO(_noundersDAO: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSeeder(_seeder: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        votesToDelegate(delegator: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DELEGATION_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(nounId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        checkpoints(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dataURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegate(delegatee: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delegates(delegator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        descriptor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentVotes(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPriorVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isDescriptorLocked(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isMinterLocked(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isSeederLocked(overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
        minter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonces(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        noundersDAO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        numCheckpoints(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxyRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        seeder(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        seeds(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setContractURIHash(newContractURIHash: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDescriptor(_descriptor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMinter(_minter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setNoundersDAO(_noundersDAO: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSeeder(_seeder: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        votesToDelegate(delegator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
