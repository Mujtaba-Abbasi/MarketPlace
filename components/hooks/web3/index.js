/** @format */
import { useHooks } from "@components/Provider/Web3";

export const useAccount = () => {
  return useHooks((hooks) => hooks.useAccount());
};

export const useNetwork = () => {
  return useHooks((hooks) => hooks.useNetwork());
};
