/** @format */

import React from "react";

const List = ({ courses, children }) => {
  return (
    <section
      className="grid md:gird-cols-1
    lg:grid-cols-2 gap-4 mb-5"
    >
      {courses.map((course) => children(course))}
    </section>
  );
};

export default List;
