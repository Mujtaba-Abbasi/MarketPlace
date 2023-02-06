/** @format */

import { useRouter } from "next/router";
import React from "react";

const Breadcrumbs = ({ items }) => {
  const { pathname } = useRouter();
  // const active = pathname === items.href;
  // console.log("Pathname", pathname);
  // console.log("Href", items.href);
  // console.log(items);
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex leading-none text-indigo-600 divide-x divide-indigo-400">
        {items.map((item, i) => (
          <li
            key={item.href}
            className={`  font-medium text-gray-500 hover:text-gray-900 ${
              i == 0 ? "pr-4" : "px-4"
            } ${pathname === item.href && "text-indigo-600"}`}
          >
            <a href={item.href}>{item.value}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
