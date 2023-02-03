/** @format */

import { Footer, Navbar } from "@components/UI/Common";
import React from "react";
import { WebProvider } from "@components/Provider";

const BaseLayout = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Navbar />
      <div className="fit">{children}</div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
