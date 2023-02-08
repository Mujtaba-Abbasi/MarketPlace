/** @format */

import { BaseLayout } from "@components/UI/Layout";
import {
  HeroCourse,
  KeyPoints,
  Curriculum,
  Modal,
} from "@components/UI/Course";
import { getAllCourses } from "@content/courses/fetcher";
import { useAccount, useOwnedCourse } from "@components/hooks/web3";
import { Message } from "@components/UI/Common";

// ! Changes to make : Owned Course label isn't correct. Fix that.

export default function Course({ course }) {
  const { account } = useAccount();
  const { ownedCourse } = useOwnedCourse(course, account);
  console.log(ownedCourse);
  const isOwner = ownedCourse?.data ? true : false;
  const courseState = ownedCourse?.data.state;
  const isLocked = courseState === "purchased" || courseState === "deactivated";

  return (
    <BaseLayout>
      <div className="py-4">
        <HeroCourse
          isOwner={isOwner}
          title={course.title}
          description={course.description}
          image={course.coverImage}
        />
        <KeyPoints keypoints={course.wsl} />
        {courseState && (
          <div className="max-w-5xl mx-auto">
            {courseState === "purchased" && (
              <Message type="warning">
                Course is purchased and waiting for the activation. Process can
                take up to 24 hours.
                <i className="block font-normal">
                  In case of any questions, please contact
                  idkextraemail@gmail.com
                </i>
              </Message>
            )}
            {courseState === "activated" && (
              <Message type="success">
                Mujtaba wishes you happy watching of the course.
              </Message>
            )}
            {courseState === "deactivated" && (
              <Message type="danger">
                Course has been deactivated, due the incorrect purchase data.
                The functionality to watch the course has been temporaly
                disabled.
                <i className="block font-normal">
                  Please contact idkextraemail@gmail.com
                </i>
              </Message>
            )}
          </div>
        )}
        <Curriculum courseState={courseState} locked={isLocked} />
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
