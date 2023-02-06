/** @format */

import React, { useState } from "react";

const Modal = ({ isOpen, children }) => {
  return (
    <section>
      <div
        className={`${!isOpen && "hidden"} fixed z-10 inset-0 overflow-y-auto`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          {isOpen && (
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              ariaHidden="true"
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Modal;
