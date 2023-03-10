/** @format */

import React from "react";

const Button = ({
  onClick,
  children,
  hoverable = true,
  variant = "purple",
  className,
  ...rest
}) => {
  const variants = {
    purple: ` text-white bg-indigo-500 ${hoverable && "hover:bg-indigo-700"}`,
    red: ` text-white bg-red-600 ${hoverable && "hover:bg-red-700"}`,
    lightBlue: ` text-indigo-700 bg-indigo-200 ${
      hoverable && "hover:bg-indigo-100"
    }`,
  };

  return (
    <button
      onClick={onClick}
      {...rest}
      className={`disabled:opacity-50 cursor:opacity-50 px-8 rounded-md py-3 border text-base font-medium ${className} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
