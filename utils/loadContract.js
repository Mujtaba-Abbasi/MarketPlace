/** @format */

import Web3 from "web3";

const NETWORK_ID = processs.env.NEXT_PUBLIC_NETWORK_ID;

export const loadContract = async (name, provider) => {
  const res = await fetch(`/contracts/${name}.json`);
  const artifact = await res.json();
  let deployedContract = null;
  const web3 = new Web3(provider);
  try {
    deployedContract = new web3.eth.Contract(
      artifact.abi,
      artifact.networks[NETWORK_ID].address
    );
  } catch (error) {
    console.log(`${name} cannot be loaded!`);
  }
  return deployedContract;
};
