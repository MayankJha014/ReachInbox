import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="bg-[#1F1F1F] text-white flex justify-between p-5  ">
      <h3 className="text-lg font-semibold mx-8">Onebox</h3>
      <div className="text-base flex items-center gap-4">
        <div className="inline-flex items-center">
          <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
            <input
              id="switch-component"
              type="checkbox"
              className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-100 checked:bg-gray-900 peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
              defaultChecked
            />
            <label
              htmlFor="switch-component"
              className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
            >
              <div
                className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                data-ripple-dark="true"
              ></div>
            </label>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <p>Tim’s Workspace</p>
          <IoIosArrowForward className="rotate-90 mt-1" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
