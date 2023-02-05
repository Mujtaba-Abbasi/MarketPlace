/** @format */
import { useEffect } from "react";
import useSWR from "swr";

const Networks = {
  1: "Ethereum Main Network",
  2: "Ropsten Test Network",
  3: "Rinkeby Test Network",
  4: "Kovan Test Network",
  5: "Goerli Test Network",
  56: "Binance Smart Chain",
  1337: "Ganache",
};

//* Checks if the metamask if connected to out desired network
const targetNetwork = Networks[process.env.NEXT_PUBLIC_TARGET_CHAIN_ID];

export const handler = (web3, provider) => () => {
  const { data, error, mutate, ...rest } = useSWR(
    () => (web3 ? "web3/network" : null),
    async () => {
      const chainId = await web3.eth.getChainId();
      return Networks[chainId];
    }
  );

  useEffect(() => {
    provider &&
      provider.on("chainChanged", (chainId) =>
        mutate(Networks[parseInt(chainId, 16)])
      );
  }, [web3]);

  return {
    network: {
      data,
      // mutate,
      isFetched: data || error,
      target: targetNetwork,
      isSupported: data === targetNetwork,
      ...rest,
    },
  };
};

// isLoading : no data, no error: The data is network loaded
