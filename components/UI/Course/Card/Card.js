/** @format */

import Image from "next/image";
import Link from "next/link";

const Card = ({ course, Footer, disabled }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="flex h-full">
        <div className="h-full flex-3 w-full next-image-wrapper relative">
          <Image
            className={`object-cover ${disabled && "filter grayscale"}`}
            fill={true}
            src={course.coverImage}
            alt={course.title}
          />
        </div>
        <div className="p-8 flex-4">
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
          {Footer && <Footer />}
        </div>
      </div>
    </div>
  );
};

export default Card;
