import React, { useContext, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import themeContext from "../theme/theme_context";
import { FaMoon, FaSun } from "react-icons/fa6";

const Navbar = () => {
  const theme = useContext(themeContext);

  return (
    <nav
      className={`${
        theme.theme
          ? " bg-[#1F1F1F] text-white  border-[#343A40]"
          : " bg-white text-[#5B5F66] border-[#DEDEDE] "
      }  flex justify-between p-5  border-b border-l`}
    >
      <h3 className="text-lg font-bold mx-8">Onebox</h3>
      <div className="text-base flex items-center gap-4">
        <div className="inline-flex items-center">
          <div className="flex items-center mr-10">
            <button
              className={`relative w-12 h-6 bg-gray-400  rounded-full focus:outline-none`}
              onClick={() => theme.updateTheme()}
            >
              <div
                className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                  !theme.theme ? "translate-x-6" : ""
                }`}
              >
                {!theme.theme ? (
                  <FaSun className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-500" />
                ) : (
                  <FaMoon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-500" />
                )}
              </div>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-1 font-medium">
          <p>Tim’s Workspace</p>
          <IoIosArrowForward className="rotate-90 mt-1" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
