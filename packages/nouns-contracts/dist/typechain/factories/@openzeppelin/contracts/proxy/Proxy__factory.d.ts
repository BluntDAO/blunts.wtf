import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Proxy, ProxyInterface } from "../../../../@openzeppelin/contracts/proxy/Proxy";
export declare class Proxy__factory {
    static readonly abi: {
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Proxy;
}
