import { ReactNode, useEffect, useState } from "react";
import Web3 from "web3";
import { Contract } from 'web3-eth-contract'
import { EthereumContext } from "./EthereumContext";
import build from '../../../truffle/build/contracts/FirstContract.json'

interface Props {
    children: ReactNode
}

declare let window: {
    ethereum: any,
    alert: (message: string) => void
}

export function EthereumProvider({ children }: Props) {

    const [accounts, setAccounts] = useState<string[]>([]);
    const [contract, setContract] = useState<Contract | undefined>();

    useEffect(() => {

        loadWeb3();

        async function loadWeb3() {
            if (window.ethereum) {
                const web3 = new Web3(Web3.givenProvider);
                setAccounts(await web3.eth.getAccounts())

                const FirstContract = new web3.eth.Contract(build.abi as any, '0x67729c0D89f71A568c005b094FE00aD3255f7372');
                setContract(FirstContract);

            } else {
                window.alert("Download some wallet like Metamask.")
            }
        }
    }, [])

    return (
        <EthereumContext.Provider value={{ accounts, contract }}>
            {children}
        </EthereumContext.Provider>
    )

}