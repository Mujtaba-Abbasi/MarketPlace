/** @format */

import React from "react";
import Link from "next/link";
import { useWeb3 } from "@components/Provider";
import Button from "../Button";
import { useAccount } from "@components/hooks/web3";
import { useRouter } from "next/router";

const Navbar = () => {
  const { connect, isLoading, isWeb3Loaded } = useWeb3();
  const { account, isAdmin } = useAccount();
  console.log(account);
  const { pathname } = useRouter();
  return (
    <section>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between items-center">
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

              {isLoading ? (
                <Button disabled={true}>Loading...</Button>
              ) : isWeb3Loaded ? (
                account ? (
                  <Button hoverable={false} className="cursor-default">
                    Hi There {isAdmin && "Admin"}
                  </Button>
                ) : (
                  <Button onClick={connect}>Connect</Button>
                )
              ) : (
                <Button
                  onClick={() => window.open("https://metamask.io/download/")}
                >
                  Install Metamask
                </Button>
              )}
            </div>
          </div>
        </nav>
      </div>
      {account && !pathname.includes("marketplace") && (
        <div className="flex justify-end pt-1 sm:px-6 lg:px-8">
          <div className="text-white bg-indigo-500 rounded-lg p-2">
            {account}
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
