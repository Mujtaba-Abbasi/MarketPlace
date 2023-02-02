/** @format */

import { Footer, Navbar } from "@/components/Common";
import React from "react";

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
