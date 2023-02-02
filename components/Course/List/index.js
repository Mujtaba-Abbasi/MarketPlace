/** @format */

import React from "react";
import Image from "next/image";
import Link from "next/link";

const List = ({ courses }) => {
  return (
    <section
      className="grid md:gird-cols-1
    lg:grid-cols-2 gap-4 mb-5"
    >
      {courses.map((course, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
        >
          <div className="flex h-full">
            <div className="h-full flex w-full">
              <Image
                className="object-cover"
                height="230"
                width="200"
                src={course.coverImage}
                alt={course.title}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {course.type}
              </div>
              <Link
                href={`/courses/${course.slug}`}
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                {course.title}
              </Link>
              <p className="mt-2 text-gray-500">{course.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default List;
