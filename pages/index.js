/** @format */
import { Hero } from "@components/UI/Common";
import { List } from "@components/UI/Course";
import { BaseLayout } from "@components/UI/Layout";
import { getAllCourses } from "@content/courses/fetcher";
import { useWeb3 } from "@components/Provider";

export default function Home({ courses }) {
  const { web3 } = useWeb3();
  console.log(web3);

  return (
    <BaseLayout>
      <Hero />
      <List courses={courses} />
    </BaseLayout>
  );
}

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: { courses: data },
  };
}
