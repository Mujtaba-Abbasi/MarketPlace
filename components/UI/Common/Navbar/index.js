/** @format */

import React from "react";
import Link from "next/link";
import { useWeb3 } from "@components/Provider";

const Navbar = () => {
  const { connect, test, web3 } = useWeb3();
  console.log(web3);
  return (
    <section>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div className="flex justify-between gap-6">
              <Link
                href="/"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/marketplace"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Marketplace
              </Link>
              <Link
                href="/blogs"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Blogs
              </Link>
            </div>

            <div>
              <Link
                href="#"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Company
              </Link>

              <span
                onClick={connect}
                href="#"
                className="px-8 rounded-md py-3 border text-base font-medium  text-white bg-indigo-500 hover:bg-indigo-700"
              >
                Connect
              </span>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
