/** @format */

import { useAccount, useOwnedCourses } from "@components/hooks/web3";
import { Button } from "@components/UI/Common";
import Message from "@components/UI/Common/Message/Message";
import OwnedCourseCard from "@components/UI/Course/Card/OwnedCourseCard";
import { BaseLayout } from "@components/UI/Layout";
import { Header } from "@components/UI/Marketplace";
import React from "react";
import { getAllCourses } from "@content/courses/fetcher";

const OwnedCourses = ({ courses }) => {
  const { account } = useAccount();
  console.log(account);
  const { ownedCourses } = useOwnedCourses(courses, account);
  return (
    <BaseLayout>
      <Header />
      <section className="grid grid-cols-1">
        {ownedCourses?.map((course) => {
          return (
            <OwnedCourseCard key={course.id} course={course}>
              {/* <Message>My custom message!</Message> */}
              <Button>Watch the course</Button>
            </OwnedCourseCard>
          );
        })}
      </section>
    </BaseLayout>
  );
};

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: { courses: data },
  };
}

export default OwnedCourses;
