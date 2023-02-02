/** @format */

import { BaseLayout } from "@components/Layout";
import { HeroCourse, KeyPoints, Curriculum, Modal } from "@components/Course";
import { getAllCourses } from "@content/courses/fetcher";

export default function Course({ course }) {
  return (
    <BaseLayout>
      <div className="py-4">
        <HeroCourse
          title={course.title}
          description={course.description}
          image={course.coverImage}
        />
        <KeyPoints keypoints={course.wsl} />
        <Curriculum locked={true} />
        <Modal />
      </div>
    </BaseLayout>
  );
}

/*
 * Checks for the number of slugs there will be based on the data : Transforming an array of objects into array of params
 *This will return an object that will have slug value. Returns the slug path.
 */
export function getStaticPaths() {
  const { data } = getAllCourses();
  return {
    paths: data.map((course) => ({
      params: {
        slug: course.slug,
      },
    })),
    fallback: false,
  };
}

// * Checks for the slug from the data and returns the course that matches with the slug

export function getStaticProps({ params }) {
  const { data } = getAllCourses();
  const course = data.filter((course) => course.slug === params.slug)[0];
  return {
    props: {
      course,
    },
  };
}
