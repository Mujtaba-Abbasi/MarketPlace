/** @format */
import { Hero } from "@components/UI/Common";
import { Card, List } from "@components/UI/Course";
import { BaseLayout } from "@components/UI/Layout";
import { getAllCourses } from "@content/courses/fetcher";

export default function Home({ courses }) {
  return (
    <BaseLayout>
      <Hero />
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
