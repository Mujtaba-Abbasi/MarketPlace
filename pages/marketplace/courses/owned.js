/** @format */

import { Button } from "@components/UI/Common";
import Message from "@components/UI/Common/Message";
import OwnedCourseCard from "@components/UI/Course/Card/OwnedCourseCard";
import { BaseLayout } from "@components/UI/Layout";
import { Header } from "@components/UI/Marketplace";
import React from "react";

const OwnedCourses = () => {
  return (
    <BaseLayout>
      <Header />
      <section className="grid grid-cols-1">
        <OwnedCourseCard>
          <Message>My custom message!</Message>
          <Button>Watch the course</Button>
        </OwnedCourseCard>
      </section>
    </BaseLayout>
  );
};

export default OwnedCourses;
