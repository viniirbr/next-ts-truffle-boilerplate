import { ReactNode, useEffect, useState } from "react";
import Web3 from "web3";
import { EthereumContext } from "./EthereumContext";

interface Props {
    children: ReactNode
}

declare let window: {
    ethereum: any,
    alert: (message: string) => void
}

export function EthereumProvider({ children }: Props) {

    const [accounts, setAccounts] = useState<string[]>([])

    useEffect(() => {

        loadWeb3();

        async function loadWeb3() {
            if (window.ethereum) {
                const web3 = new Web3(Web3.givenProvider);
                setAccounts(await web3.eth.getAccounts())
            } else {
                window.alert("Download some wallet like Metamask.")
            }
        }
    }, [])

    return (
        <EthereumContext.Provider value={{ accounts }}>
            {children}
        </EthereumContext.Provider>
    )

}