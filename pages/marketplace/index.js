/** @format */
import { Card, List } from "@components/UI/Course";
import { BaseLayout } from "@components/UI/Layout";
import { getAllCourses } from "@content/courses/fetcher";
import { WalletBar } from "@components/UI/Web3";
import { useAccount, useNetwork } from "@components/hooks/web3";

export default function Martketplace({ courses }) {
  const { account } = useAccount();
  const { network } = useNetwork();
  console.log(network);
  return (
    <BaseLayout>
      <div className="py-2">
        <WalletBar
          address={account}
          network={{
            data: network.data,
            targetNetwork: network.target,
            isSupported: network.isSupported,
            isFetched: network.isFetched,
          }}
        />
      </div>

      <List courses={courses}>
        {(course) => <Card course={course} key={course.id} />}
      </List>
    </BaseLayout>
  );
}

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: { courses: data },
  };
}
