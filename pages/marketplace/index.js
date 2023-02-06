/** @format */
import { Card, List } from "@components/UI/Course";
import { BaseLayout } from "@components/UI/Layout";
import { getAllCourses } from "@content/courses/fetcher";
import { Button } from "@components/UI/Common";
import OrderModal from "@components/UI/Course/OrderModel";
import { useState } from "react";
import { useWalletInfo } from "@components/hooks/web3";
import { Header } from "@components/UI/Marketplace";

export default function Martketplace({ courses }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { canPurchaseCourse } = useWalletInfo();
  return (
    <BaseLayout>
      <Header />
      <List courses={courses}>
        {(course) => (
          <Card
            course={course}
            key={course.id}
            disabled={!canPurchaseCourse}
            Footer={() => (
              <div className="mt-3">
                <Button
                  disabled={!canPurchaseCourse}
                  onClick={() => setSelectedCourse(course)}
                  variant="lightBlue"
                >
                  Purchase
                </Button>
              </div>
            )}
          />
        )}
      </List>
      {selectedCourse && (
        <OrderModal
          course={selectedCourse}
          close={() => setSelectedCourse(null)}
        />
      )}
    </BaseLayout>
  );
}

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: { courses: data },
  };
}
