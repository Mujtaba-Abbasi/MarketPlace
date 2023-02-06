/** @format */

// * Checks for the slug from the data and returns the course that matches with the slug
import courses from "./index.json";

export const getAllCourses = () => {
  return {
    data: courses,
    courseMap: courses.reduce((accumulator, currentItem, index) => {
      accumulator[currentItem.id] = currentItem;
      accumulator[currentItem.id].index = index;
      return accumulator;
    }, {}),
  };
};

export function getStaticProps({ params }) {
  const { data } = getAllCourses();
  const course = data.filter((course) => course.slug === params.slug)[0];
  return {
    props: {
      course,
    },
  };
}
