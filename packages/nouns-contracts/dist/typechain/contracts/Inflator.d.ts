import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface InflatorInterface extends utils.Interface {
    functions: {
        "puff(bytes,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "puff"): FunctionFragment;
    encodeFunctionData(functionFragment: "puff", values: [BytesLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "puff", data: BytesLike): Result;
    events: {};
}
export interface Inflator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: InflatorInterface;
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
        puff(source: BytesLike, destlen: BigNumberish, overrides?: CallOverrides): Promise<[number, string]>;
    };
    puff(source: BytesLike, destlen: BigNumberish, overrides?: CallOverrides): Promise<[number, string]>;
    callStatic: {
        puff(source: BytesLike, destlen: BigNumberish, overrides?: CallOverrides): Promise<[number, string]>;
    };
    filters: {};
    estimateGas: {
        puff(source: BytesLike, destlen: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        puff(source: BytesLike, destlen: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
