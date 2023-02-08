/** @format */
import { useHooks } from "@components/Provider/Web3";

export const useAccount = () => {
  return useHooks((hooks) => hooks.useAccount());
};

export const useNetwork = () => {
  return useHooks((hooks) => hooks.useNetwork());
};

export const useOwnedCourses = (...args) => {
  const swrRes = useHooks((hooks) => hooks.useOwnedCourses(...args));
  return {
    ownedCourses: swrRes,
  };
};

export const useOwnedCourse = (...args) => {
  const swrRes = useHooks((hooks) => hooks.useOwnedCourse(...args));
  console.log(swrRes);
  return {
    ownedCourse: swrRes,
  };
};

export const useWalletInfo = () => {
  const { account } = useAccount();
  const { network } = useNetwork();
  const canPurchaseCourse = !!(account && network.isSupported);

  return {
    account,
    network,
    canPurchaseCourse,
  };
};
