/** @format */

import useSWR from "swr";

const URL =
  "https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false";
const CoursePrice = 15;

const fetcher = async (url) => {
  let data = await fetch(url);
  data = await data.json();
  return data.market_data.current_price.usd ?? null;
};

export const useEthPrice = () => {
  const { data, ...rest } = useSWR(URL, fetcher, { refreshInterval: 10000 });

  const perItem = (data && (CoursePrice / Number(data)).toFixed(6)) ?? null;

  return { eth: { data, perItem, ...rest } };
};
