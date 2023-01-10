import { createContext } from "react";

interface IEthereumContext {
    accounts: string[]
}

export const EthereumContext = createContext<IEthereumContext>({ accounts: [] });