/** @format */

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";

export const Web3Context = createContext(null);

export default function WebProvider({ children }) {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
    isLoading: true,
  });

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();

      if (provider) {
        setWeb3Api({
          provider: provider,
          web3: new Web3(provider),
          contract: null,
          isLoading: false,
        });
      } else {
        setWeb3Api((prevState) => ({
          ...prevState,
          isLoading: false,
        }));
      }
    };
    loadProvider();
  }, []);

  const _web3Api = useMemo(() => {
    return {
      ...web3Api,
      connect: () => console.log("Trying to connect"),
      test: () => console.log("Hellow World"),
    };
  }, [web3Api]);

  return (
    <Web3Context.Provider value={_web3Api}>{children}</Web3Context.Provider>
  );
}

export function useWeb3() {
  return useContext(Web3Context);
}
