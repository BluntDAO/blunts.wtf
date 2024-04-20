import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface INounsDAOExecutorV2Interface extends utils.Interface {
    functions: {
        "GRACE_PERIOD()": FunctionFragment;
        "acceptAdmin()": FunctionFragment;
        "cancelTransaction(address,uint256,string,bytes,uint256)": FunctionFragment;
        "delay()": FunctionFragment;
        "executeTransaction(address,uint256,string,bytes,uint256)": FunctionFragment;
        "queueTransaction(address,uint256,string,bytes,uint256)": FunctionFragment;
        "queuedTransactions(bytes32)": FunctionFragment;
        "sendERC20(address,address,uint256)": FunctionFragment;
        "sendETH(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "GRACE_PERIOD" | "acceptAdmin" | "cancelTransaction" | "delay" | "executeTransaction" | "queueTransaction" | "queuedTransactions" | "sendERC20" | "sendETH"): FunctionFragment;
    encodeFunctionData(functionFragment: "GRACE_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "acceptAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancelTransaction", values: [string, BigNumberish, string, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "delay", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeTransaction", values: [string, BigNumberish, string, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "queueTransaction", values: [string, BigNumberish, string, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "queuedTransactions", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "sendERC20", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sendETH", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "GRACE_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queueTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queuedTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendETH", data: BytesLike): Result;
    events: {};
}
export interface INounsDAOExecutorV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: INounsDAOExecutorV2Interface;
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
        GRACE_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;
        acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cancelTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delay(overrides?: CallOverrides): Promise<[BigNumber]>;
        executeTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        queueTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        queuedTransactions(hash: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        sendERC20(recipient: string, erc20Token: string, tokensToSend: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendETH(recipient: string, ethToSend: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
    acceptAdmin(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cancelTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delay(overrides?: CallOverrides): Promise<BigNumber>;
    executeTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    queueTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    queuedTransactions(hash: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    sendERC20(recipient: string, erc20Token: string, tokensToSend: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendETH(recipient: string, ethToSend: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        acceptAdmin(overrides?: CallOverrides): Promise<void>;
        cancelTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: CallOverrides): Promise<void>;
        delay(overrides?: CallOverrides): Promise<BigNumber>;
        executeTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: CallOverrides): Promise<string>;
        queueTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: CallOverrides): Promise<string>;
        queuedTransactions(hash: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        sendERC20(recipient: string, erc20Token: string, tokensToSend: BigNumberish, overrides?: CallOverrides): Promise<void>;
        sendETH(recipient: string, ethToSend: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cancelTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delay(overrides?: CallOverrides): Promise<BigNumber>;
        executeTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        queueTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        queuedTransactions(hash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        sendERC20(recipient: string, erc20Token: string, tokensToSend: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendETH(recipient: string, ethToSend: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        GRACE_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cancelTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        queueTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        queuedTransactions(hash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendERC20(recipient: string, erc20Token: string, tokensToSend: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendETH(recipient: string, ethToSend: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
