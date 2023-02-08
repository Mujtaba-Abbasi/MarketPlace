/** @format */

import { useAccount, useOwnedCourses } from "@components/hooks/web3";
import { Button } from "@components/UI/Common";
import Message from "@components/UI/Common/Message/Message";
import OwnedCourseCard from "@components/UI/Course/Card/OwnedCourseCard";
import { BaseLayout } from "@components/UI/Layout";
import { Header } from "@components/UI/Marketplace";
import React from "react";
import { getAllCourses } from "@content/courses/fetcher";
import Link from "next/link";

const OwnedCourses = ({ courses }) => {
  const { account } = useAccount();
  const { ownedCourses } = useOwnedCourses(courses, account);
  console.log(ownedCourses);
  return (
    <BaseLayout>
      <Header />
      <section className="grid grid-cols-1">
        {(!ownedCourses.data || ownedCourses?.data.length === 0) && (
          <div className="w-1/2">
            <Message type="warning">
              <div>You don't own any courses</div>
              <Link href="/marketplace" className="font-normal hover:underline">
                <i>Purchase Course</i>
              </Link>
            </Message>
          </div>
        )}
        {ownedCourses.data?.map((course) => {
          return (
            <OwnedCourseCard key={course.id} course={course}>
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
