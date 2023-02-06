/** @format */

import { Button } from "@components/UI/Common";
import { CourseFilter } from "@components/UI/Course";
import OwnedCourseCard from "@components/UI/Course/Card/OwnedCourseCard";
import { BaseLayout } from "@components/UI/Layout";
import { Header } from "@components/UI/Marketplace";

const ManageCourses = () => {
  return (
    <BaseLayout>
      <Header />
      <CourseFilter />
      <section className="grid grid-cols-1">
        <OwnedCourseCard>
          <div className="flex gap-2 mr-2 relative rounded-md">
            <input
              type="text"
              name="account"
              id="account"
              className="w-96 border focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
              placeholder="0x2341ab..."
            />
            <Button>Verify</Button>
          </div>
        </OwnedCourseCard>
      </section>
    </BaseLayout>
  );
};

ManageCourses.Layout = BaseLayout;

export default ManageCourses;
