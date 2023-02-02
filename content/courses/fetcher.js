/** @format */

import courses from "./index.json";

export const getAllCourses = () => {
  return {
    data: courses,
    courseMap: courses.reduce(
      (a, c, i) => {
        a[c.id] = c;
        a[c.id].index = i;
        console.log(a);
        return a;
      },
      { a }
    ),
  };
};
