import { createContext } from "react";
import { Contract } from 'web3-eth-contract'

interface IEthereumContext {
    accounts: string[],
    contract: Contract | undefined
}

export const EthereumContext = createContext<IEthereumContext>({ accounts: [], contract: undefined });