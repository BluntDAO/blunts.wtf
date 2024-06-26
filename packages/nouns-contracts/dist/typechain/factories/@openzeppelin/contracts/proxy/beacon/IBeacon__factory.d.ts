import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBeacon, IBeaconInterface } from "../../../../../@openzeppelin/contracts/proxy/beacon/IBeacon";
export declare class IBeacon__factory {
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IBeaconInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBeacon;
}
