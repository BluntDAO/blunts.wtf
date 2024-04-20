import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface NounsDAOExecutorV2Interface extends utils.Interface {
    functions: {
        "GRACE_PERIOD()": FunctionFragment;
        "MAXIMUM_DELAY()": FunctionFragment;
        "MINIMUM_DELAY()": FunctionFragment;
        "NAME()": FunctionFragment;
        "acceptAdmin()": FunctionFragment;
        "admin()": FunctionFragment;
        "cancelTransaction(address,uint256,string,bytes,uint256)": FunctionFragment;
        "delay()": FunctionFragment;
        "executeTransaction(address,uint256,string,bytes,uint256)": FunctionFragment;
        "initialize(address,uint256)": FunctionFragment;
        "pendingAdmin()": FunctionFragment;
        "queueTransaction(address,uint256,string,bytes,uint256)": FunctionFragment;
        "queuedTransactions(bytes32)": FunctionFragment;
        "sendERC20(address,address,uint256)": FunctionFragment;
        "sendETH(address,uint256)": FunctionFragment;
        "setDelay(uint256)": FunctionFragment;
        "setPendingAdmin(address)": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "GRACE_PERIOD" | "MAXIMUM_DELAY" | "MINIMUM_DELAY" | "NAME" | "acceptAdmin" | "admin" | "cancelTransaction" | "delay" | "executeTransaction" | "initialize" | "pendingAdmin" | "queueTransaction" | "queuedTransactions" | "sendERC20" | "sendETH" | "setDelay" | "setPendingAdmin" | "upgradeTo" | "upgradeToAndCall"): FunctionFragment;
    encodeFunctionData(functionFragment: "GRACE_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAXIMUM_DELAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "MINIMUM_DELAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
    encodeFunctionData(functionFragment: "acceptAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancelTransaction", values: [string, BigNumberish, string, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "delay", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeTransaction", values: [string, BigNumberish, string, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "pendingAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "queueTransaction", values: [string, BigNumberish, string, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "queuedTransactions", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "sendERC20", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sendETH", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setDelay", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPendingAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [string, BytesLike]): string;
    decodeFunctionResult(functionFragment: "GRACE_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAXIMUM_DELAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MINIMUM_DELAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queueTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queuedTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "CancelTransaction(bytes32,address,uint256,string,bytes,uint256)": EventFragment;
        "ERC20Sent(address,address,uint256)": EventFragment;
        "ETHSent(address,uint256)": EventFragment;
        "ExecuteTransaction(bytes32,address,uint256,string,bytes,uint256)": EventFragment;
        "NewAdmin(address)": EventFragment;
        "NewDelay(uint256)": EventFragment;
        "NewPendingAdmin(address)": EventFragment;
        "QueueTransaction(bytes32,address,uint256,string,bytes,uint256)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CancelTransaction"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ERC20Sent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ETHSent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecuteTransaction"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewDelay"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPendingAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "QueueTransaction"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}
export interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
export declare type AdminChangedEvent = TypedEvent<[
    string,
    string
], AdminChangedEventObject>;
export declare type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export interface BeaconUpgradedEventObject {
    beacon: string;
}
export declare type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
export declare type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export interface CancelTransactionEventObject {
    txHash: string;
    target: string;
    value: BigNumber;
    signature: string;
    data: string;
    eta: BigNumber;
}
export declare type CancelTransactionEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    string,
    BigNumber
], CancelTransactionEventObject>;
export declare type CancelTransactionEventFilter = TypedEventFilter<CancelTransactionEvent>;
export interface ERC20SentEventObject {
    to: string;
    erc20Token: string;
    amount: BigNumber;
}
export declare type ERC20SentEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ERC20SentEventObject>;
export declare type ERC20SentEventFilter = TypedEventFilter<ERC20SentEvent>;
export interface ETHSentEventObject {
    to: string;
    amount: BigNumber;
}
export declare type ETHSentEvent = TypedEvent<[string, BigNumber], ETHSentEventObject>;
export declare type ETHSentEventFilter = TypedEventFilter<ETHSentEvent>;
export interface ExecuteTransactionEventObject {
    txHash: string;
    target: string;
    value: BigNumber;
    signature: string;
    data: string;
    eta: BigNumber;
}
export declare type ExecuteTransactionEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    string,
    BigNumber
], ExecuteTransactionEventObject>;
export declare type ExecuteTransactionEventFilter = TypedEventFilter<ExecuteTransactionEvent>;
export interface NewAdminEventObject {
    newAdmin: string;
}
export declare type NewAdminEvent = TypedEvent<[string], NewAdminEventObject>;
export declare type NewAdminEventFilter = TypedEventFilter<NewAdminEvent>;
export interface NewDelayEventObject {
    newDelay: BigNumber;
}
export declare type NewDelayEvent = TypedEvent<[BigNumber], NewDelayEventObject>;
export declare type NewDelayEventFilter = TypedEventFilter<NewDelayEvent>;
export interface NewPendingAdminEventObject {
    newPendingAdmin: string;
}
export declare type NewPendingAdminEvent = TypedEvent<[
    string
], NewPendingAdminEventObject>;
export declare type NewPendingAdminEventFilter = TypedEventFilter<NewPendingAdminEvent>;
export interface QueueTransactionEventObject {
    txHash: string;
    target: string;
    value: BigNumber;
    signature: string;
    data: string;
    eta: BigNumber;
}
export declare type QueueTransactionEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    string,
    BigNumber
], QueueTransactionEventObject>;
export declare type QueueTransactionEventFilter = TypedEventFilter<QueueTransactionEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export declare type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export declare type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface NounsDAOExecutorV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NounsDAOExecutorV2Interface;
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
        MAXIMUM_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        MINIMUM_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;
        NAME(overrides?: CallOverrides): Promise<[string]>;
        acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        cancelTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delay(overrides?: CallOverrides): Promise<[BigNumber]>;
        executeTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(admin_: string, delay_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pendingAdmin(overrides?: CallOverrides): Promise<[string]>;
        queueTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        sendERC20(recipient: string, erc20Token: string, tokensToSend: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendETH(recipient: string, ethToSend: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDelay(delay_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPendingAdmin(pendingAdmin_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
    MAXIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
    MINIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
    NAME(overrides?: CallOverrides): Promise<string>;
    acceptAdmin(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    admin(overrides?: CallOverrides): Promise<string>;
    cancelTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delay(overrides?: CallOverrides): Promise<BigNumber>;
    executeTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(admin_: string, delay_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pendingAdmin(overrides?: CallOverrides): Promise<string>;
    queueTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    sendERC20(recipient: string, erc20Token: string, tokensToSend: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendETH(recipient: string, ethToSend: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDelay(delay_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPendingAdmin(pendingAdmin_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        MAXIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        MINIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        NAME(overrides?: CallOverrides): Promise<string>;
        acceptAdmin(overrides?: CallOverrides): Promise<void>;
        admin(overrides?: CallOverrides): Promise<string>;
        cancelTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: CallOverrides): Promise<void>;
        delay(overrides?: CallOverrides): Promise<BigNumber>;
        executeTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: CallOverrides): Promise<string>;
        initialize(admin_: string, delay_: BigNumberish, overrides?: CallOverrides): Promise<void>;
        pendingAdmin(overrides?: CallOverrides): Promise<string>;
        queueTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: CallOverrides): Promise<string>;
        queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        sendERC20(recipient: string, erc20Token: string, tokensToSend: BigNumberish, overrides?: CallOverrides): Promise<void>;
        sendETH(recipient: string, ethToSend: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setDelay(delay_: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPendingAdmin(pendingAdmin_: string, overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: string | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;
        "CancelTransaction(bytes32,address,uint256,string,bytes,uint256)"(txHash?: BytesLike | null, target?: string | null, value?: null, signature?: null, data?: null, eta?: null): CancelTransactionEventFilter;
        CancelTransaction(txHash?: BytesLike | null, target?: string | null, value?: null, signature?: null, data?: null, eta?: null): CancelTransactionEventFilter;
        "ERC20Sent(address,address,uint256)"(to?: string | null, erc20Token?: string | null, amount?: null): ERC20SentEventFilter;
        ERC20Sent(to?: string | null, erc20Token?: string | null, amount?: null): ERC20SentEventFilter;
        "ETHSent(address,uint256)"(to?: string | null, amount?: null): ETHSentEventFilter;
        ETHSent(to?: string | null, amount?: null): ETHSentEventFilter;
        "ExecuteTransaction(bytes32,address,uint256,string,bytes,uint256)"(txHash?: BytesLike | null, target?: string | null, value?: null, signature?: null, data?: null, eta?: null): ExecuteTransactionEventFilter;
        ExecuteTransaction(txHash?: BytesLike | null, target?: string | null, value?: null, signature?: null, data?: null, eta?: null): ExecuteTransactionEventFilter;
        "NewAdmin(address)"(newAdmin?: string | null): NewAdminEventFilter;
        NewAdmin(newAdmin?: string | null): NewAdminEventFilter;
        "NewDelay(uint256)"(newDelay?: BigNumberish | null): NewDelayEventFilter;
        NewDelay(newDelay?: BigNumberish | null): NewDelayEventFilter;
        "NewPendingAdmin(address)"(newPendingAdmin?: string | null): NewPendingAdminEventFilter;
        NewPendingAdmin(newPendingAdmin?: string | null): NewPendingAdminEventFilter;
        "QueueTransaction(bytes32,address,uint256,string,bytes,uint256)"(txHash?: BytesLike | null, target?: string | null, value?: null, signature?: null, data?: null, eta?: null): QueueTransactionEventFilter;
        QueueTransaction(txHash?: BytesLike | null, target?: string | null, value?: null, signature?: null, data?: null, eta?: null): QueueTransactionEventFilter;
        "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
        Upgraded(implementation?: string | null): UpgradedEventFilter;
    };
    estimateGas: {
        GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        MAXIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        MINIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;
        NAME(overrides?: CallOverrides): Promise<BigNumber>;
        acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        cancelTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delay(overrides?: CallOverrides): Promise<BigNumber>;
        executeTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(admin_: string, delay_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        queueTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        sendERC20(recipient: string, erc20Token: string, tokensToSend: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendETH(recipient: string, ethToSend: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDelay(delay_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPendingAdmin(pendingAdmin_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        GRACE_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAXIMUM_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MINIMUM_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(admin_: string, delay_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queueTransaction(target: string, value: BigNumberish, signature: string, data: BytesLike, eta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendERC20(recipient: string, erc20Token: string, tokensToSend: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendETH(recipient: string, ethToSend: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDelay(delay_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPendingAdmin(pendingAdmin_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
