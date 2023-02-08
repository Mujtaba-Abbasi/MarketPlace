/** @format */

import { useEffect } from "react";
import useSWR from "swr";

// const adminAddress = "0xE7D2d414a6Ff6B7Cb85C233dc896c00231d8f52e";
const adminAddresses = {
  "0xe9045a96b5b7b9828ed463bc228bc21cebe8a53b7a15c89351ad89b03784d33e": true,
};

export const handler = (web3, provider) => () => {
  const { data, mutate, ...rest } = useSWR(
    () => (web3 ? "web3/accounts" : null),
    async () => {
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      console.log("UseAccount is called : ", account);
      if (!account) {
        throw new Error(
          "Cannot retreive an account. Please refresh the browser."
        );
      }
      return account;
    }
  );

  useEffect(() => {
    const mutator = (accounts) => mutate(accounts[0] ?? null);
    provider?.on("accountsChanged", mutator);

    return () => {
      provider?.removeListener("accountsChanged", mutator);
    };
  }, [provider]);

  return {
    account: data,
    isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
    mutate,
    ...rest,
  };
};

/*
 * Another way to handle this is to pass down provider from the context file
 * to the setuphook call the setup hooks and then pass the provider to the createAccount
 * and then check for the provider in the above useEffect()
 */
