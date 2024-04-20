import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface NounsDAOForkEscrowInterface extends utils.Interface {
    functions: {
        "closeEscrow()": FunctionFragment;
        "currentOwnerOf(uint256)": FunctionFragment;
        "dao()": FunctionFragment;
        "escrowedTokensByForkId(uint32,uint256)": FunctionFragment;
        "forkId()": FunctionFragment;
        "nounsToken()": FunctionFragment;
        "numTokensInEscrow()": FunctionFragment;
        "numTokensOwnedByDAO()": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "ownerOfEscrowedToken(uint32,uint256)": FunctionFragment;
        "returnTokensToOwner(address,uint256[])": FunctionFragment;
        "withdrawTokens(uint256[],address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "closeEscrow" | "currentOwnerOf" | "dao" | "escrowedTokensByForkId" | "forkId" | "nounsToken" | "numTokensInEscrow" | "numTokensOwnedByDAO" | "onERC721Received" | "ownerOfEscrowedToken" | "returnTokensToOwner" | "withdrawTokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "closeEscrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "currentOwnerOf", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "dao", values?: undefined): string;
    encodeFunctionData(functionFragment: "escrowedTokensByForkId", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "forkId", values?: undefined): string;
    encodeFunctionData(functionFragment: "nounsToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "numTokensInEscrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "numTokensOwnedByDAO", values?: undefined): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "ownerOfEscrowedToken", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "returnTokensToOwner", values: [string, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "withdrawTokens", values: [BigNumberish[], string]): string;
    decodeFunctionResult(functionFragment: "closeEscrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentOwnerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dao", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "escrowedTokensByForkId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forkId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nounsToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "numTokensInEscrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "numTokensOwnedByDAO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOfEscrowedToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "returnTokensToOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTokens", data: BytesLike): Result;
    events: {};
}
export interface NounsDAOForkEscrow extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NounsDAOForkEscrowInterface;
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
        closeEscrow(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        currentOwnerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        dao(overrides?: CallOverrides): Promise<[string]>;
        escrowedTokensByForkId(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        forkId(overrides?: CallOverrides): Promise<[number]>;
        nounsToken(overrides?: CallOverrides): Promise<[string]>;
        numTokensInEscrow(overrides?: CallOverrides): Promise<[BigNumber]>;
        numTokensOwnedByDAO(overrides?: CallOverrides): Promise<[BigNumber]>;
        onERC721Received(operator: string, from: string, tokenId: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        ownerOfEscrowedToken(forkId_: BigNumberish, tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        returnTokensToOwner(owner: string, tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawTokens(tokenIds: BigNumberish[], to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    closeEscrow(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    currentOwnerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    dao(overrides?: CallOverrides): Promise<string>;
    escrowedTokensByForkId(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<string>;
    forkId(overrides?: CallOverrides): Promise<number>;
    nounsToken(overrides?: CallOverrides): Promise<string>;
    numTokensInEscrow(overrides?: CallOverrides): Promise<BigNumber>;
    numTokensOwnedByDAO(overrides?: CallOverrides): Promise<BigNumber>;
    onERC721Received(operator: string, from: string, tokenId: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    ownerOfEscrowedToken(forkId_: BigNumberish, tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    returnTokensToOwner(owner: string, tokenIds: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawTokens(tokenIds: BigNumberish[], to: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        closeEscrow(overrides?: CallOverrides): Promise<number>;
        currentOwnerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        dao(overrides?: CallOverrides): Promise<string>;
        escrowedTokensByForkId(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<string>;
        forkId(overrides?: CallOverrides): Promise<number>;
        nounsToken(overrides?: CallOverrides): Promise<string>;
        numTokensInEscrow(overrides?: CallOverrides): Promise<BigNumber>;
        numTokensOwnedByDAO(overrides?: CallOverrides): Promise<BigNumber>;
        onERC721Received(operator: string, from: string, tokenId: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<string>;
        ownerOfEscrowedToken(forkId_: BigNumberish, tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        returnTokensToOwner(owner: string, tokenIds: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        withdrawTokens(tokenIds: BigNumberish[], to: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        closeEscrow(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        currentOwnerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        dao(overrides?: CallOverrides): Promise<BigNumber>;
        escrowedTokensByForkId(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        forkId(overrides?: CallOverrides): Promise<BigNumber>;
        nounsToken(overrides?: CallOverrides): Promise<BigNumber>;
        numTokensInEscrow(overrides?: CallOverrides): Promise<BigNumber>;
        numTokensOwnedByDAO(overrides?: CallOverrides): Promise<BigNumber>;
        onERC721Received(operator: string, from: string, tokenId: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        ownerOfEscrowedToken(forkId_: BigNumberish, tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        returnTokensToOwner(owner: string, tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawTokens(tokenIds: BigNumberish[], to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        closeEscrow(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        currentOwnerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dao(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        escrowedTokensByForkId(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forkId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nounsToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        numTokensInEscrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        numTokensOwnedByDAO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC721Received(operator: string, from: string, tokenId: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        ownerOfEscrowedToken(forkId_: BigNumberish, tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        returnTokensToOwner(owner: string, tokenIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawTokens(tokenIds: BigNumberish[], to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
