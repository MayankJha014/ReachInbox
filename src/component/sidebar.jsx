import React, { useContext } from "react";
import Logo from "../assets/side_logo.png";
import HomeImg from "../assets/home.svg";
import List from "../assets/list.svg";
import Box from "../assets/box.svg";
import Bar from "../assets/bar.svg";
import Msg from "../assets/email.svg";
import Search from "../assets/search.svg";
import Tele from "../assets/tele.svg";

import { TbReport } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import themeContext from "../theme/theme_context";

const Sidebar = ({ children }) => {
  const theme = useContext(themeContext);

  const navIndex = [
    {
      icon: (
        <div className="h-6">
          <svg
            width="16"
            height="19"
            viewBox="0 0 16 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.307831 6.75731C0 7.4266 0 8.18802 0 9.71085V14.4668C0 16.5817 0 17.6391 0.657007 18.2961C1.26684 18.906 2.22167 18.9497 4.04689 18.9529C4.04688 18.9513 4.04688 18.9498 4.04688 18.9482V13.3403C4.04688 12.1686 4.99674 11.2188 6.16846 11.2188H9.5332C10.7049 11.2188 11.6548 12.1686 11.6548 13.3403V18.9482C11.6548 18.9498 11.6548 18.9513 11.6548 18.9529C13.4803 18.9497 14.4352 18.906 15.0451 18.2961C15.7021 17.6391 15.7021 16.5817 15.7021 14.4668V9.71085C15.7021 8.18802 15.7021 7.4266 15.3943 6.75731C15.0865 6.08802 14.5084 5.59249 13.3521 4.60145L12.2306 3.64009C10.1407 1.84878 9.09577 0.953125 7.85107 0.953125C6.60637 0.953125 5.56144 1.84878 3.47158 3.64009L3.47158 3.64009L2.35 4.60145C1.19377 5.59249 0.615662 6.08802 0.307831 6.75731ZM9.65479 18.9531C9.65479 18.9515 9.65478 18.9499 9.65478 18.9482V13.3403C9.65478 13.2732 9.60035 13.2188 9.5332 13.2188H6.16846C6.10131 13.2188 6.04688 13.2732 6.04688 13.3403V18.9482C6.04688 18.9499 6.04687 18.9515 6.04686 18.9531H9.65479Z"
              fill="#AEAEAE"
            />
          </svg>
        </div>
      ),
      link: "/dash/home",
    },
    {
      icon: (
        <div className="h-6">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
              fill="#AEAEAE"
            />
            <path
              d="M8.35 10.01C5.62 9.91 0 11.27 0 14V16H9.54C7.07 13.24 8.31 10.11 8.35 10.01Z"
              fill="#AEAEAE"
            />
            <path
              d="M17.43 14.02C17.79 13.43 18 12.74 18 12C18 9.79 16.21 8 14 8C11.79 8 10 9.79 10 12C10 14.21 11.79 16 14 16C14.74 16 15.43 15.78 16.02 15.43L18.59 18L20 16.59L17.43 14.02ZM14 14C12.9 14 12 13.1 12 12C12 10.9 12.9 10 14 10C15.1 10 16 10.9 16 12C16 13.1 15.1 14 14 14Z"
              fill="#AEAEAE"
            />
          </svg>
        </div>
      ),
      link: "/dash/search",
    },
    {
      icon: (
        <div className="h-6">
          <svg
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.2 0.5H1.8C0.81 0.5 0.00899999 1.31 0.00899999 2.3L0 13.1C0 14.09 0.81 14.9 1.8 14.9H16.2C17.19 14.9 18 14.09 18 13.1V2.3C18 1.31 17.19 0.5 16.2 0.5ZM16.2 4.1L9 8.6L1.8 4.1V2.3L9 6.8L16.2 2.3V4.1Z"
              fill="#AEAEAE"
            />
          </svg>
        </div>
      ),
      link: "/dash/msg",
    },
    {
      icon: (
        <div className="h-6">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.7381 18.5C11.0667 18.5 11.3472 18.3754 11.5795 18.1261C11.8118 17.8824 12.0072 17.5567 12.1659 17.1487L17.7664 2.48867C17.8401 2.29603 17.8967 2.11756 17.9364 1.95326C17.9761 1.78895 17.9959 1.63314 17.9959 1.48584C17.9959 1.18555 17.9081 0.947592 17.7324 0.771955C17.5568 0.590652 17.3188 0.5 17.0186 0.5C16.8769 0.5 16.7211 0.522663 16.5511 0.567989C16.3812 0.607649 16.1999 0.661473 16.0072 0.729462L1.29618 6.36402C0.927907 6.50567 0.619125 6.69263 0.369834 6.92493C0.126208 7.15722 0.00439453 7.43768 0.00439453 7.76629C0.00439453 8.16856 0.140372 8.46601 0.412326 8.65864C0.684281 8.84561 1.02706 9.00142 1.44065 9.12606L5.85142 10.4773C6.14604 10.568 6.3925 10.6048 6.5908 10.5878C6.7891 10.5652 6.99306 10.4575 7.20269 10.2649L16.6616 1.49433C16.7183 1.44334 16.7778 1.41785 16.8401 1.41785C16.9081 1.41785 16.9676 1.44051 17.0186 1.48584C17.0639 1.53116 17.0865 1.58782 17.0865 1.65581C17.0865 1.71813 17.0582 1.77762 17.0016 1.83428L8.26502 11.3187C8.08371 11.5113 7.9789 11.7096 7.95057 11.9136C7.92791 12.1176 7.95907 12.3697 8.04405 12.67L9.35283 16.9873C9.48315 17.4235 9.64462 17.7833 9.83725 18.0666C10.0299 18.3555 10.3302 18.5 10.7381 18.5Z"
              fill="#AEAEAE"
            />
          </svg>
        </div>
      ),
      link: "/dash/tele",
    },
    {
      icon: (
        <div className="h-6">
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 9H4V5H0V9ZM0 14H4V10H0V14ZM0 4H4V0H0V4ZM5 9H18V5H5V9ZM5 14H18V10H5V14ZM5 0V4H18V0H5Z"
              fill="#AEAEAE"
            />
          </svg>
        </div>
      ),
      link: "/dash/list",
    },
    {
      icon: (
        <div className="h-6">
          <svg
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.7691 14.7857H17.2225C18.1399 14.7857 18.8321 14.5619 19.2993 14.1144C19.7664 13.6669 20 13.0038 20 12.1251V7.54871C20 7.24853 19.9803 6.99475 19.9409 6.78735C19.9071 6.57996 19.848 6.39439 19.7636 6.23066C19.6848 6.06693 19.5751 5.89228 19.4344 5.70671L16.6568 2.11277C16.3304 1.68707 16.0349 1.3596 15.7704 1.13037C15.5058 0.895688 15.2104 0.731955 14.8839 0.639173C14.5575 0.546391 14.141 0.5 13.6344 0.5H6.36555C5.85338 0.5 5.43408 0.546391 5.10764 0.639173C4.78683 0.731955 4.49416 0.895688 4.22963 1.13037C3.9651 1.3596 3.66962 1.68707 3.34318 2.11277L0.565639 5.70671C0.424933 5.89228 0.312368 6.06693 0.227944 6.23066C0.14352 6.39439 0.0844238 6.57996 0.0506543 6.78735C0.0168848 6.99475 0 7.24853 0 7.54871V12.1251C0 13.0038 0.233573 13.6669 0.700718 14.1144C1.16786 14.5619 1.85732 14.7857 2.7691 14.7857ZM9.99578 9.77548C9.57366 9.77548 9.20501 9.67997 8.88983 9.48895C8.58027 9.29247 8.34107 9.04141 8.17222 8.73578C8.00338 8.42468 7.91895 8.09722 7.91895 7.75338V7.69607C7.91895 7.51051 7.85986 7.34404 7.74166 7.19668C7.62347 7.04387 7.44337 6.96746 7.20135 6.96746H2.09371C1.94175 6.96746 1.84888 6.91834 1.81511 6.8201C1.78134 6.72186 1.80386 6.62089 1.88265 6.51719L4.95568 2.50573C5.14141 2.26559 5.34684 2.0964 5.57197 1.99816C5.80273 1.89446 6.05882 1.84261 6.34023 1.84261H13.6513C13.944 1.84261 14.2029 1.89446 14.428 1.99816C14.6532 2.0964 14.8558 2.26559 15.0359 2.50573L18.1173 6.51719C18.1849 6.62089 18.2018 6.72186 18.168 6.8201C18.1399 6.91834 18.0498 6.96746 17.8978 6.96746H12.7986C12.5566 6.96746 12.3765 7.04387 12.2583 7.19668C12.1458 7.34404 12.0895 7.51051 12.0895 7.69607V7.75338C12.0895 8.09722 12.0023 8.42468 11.8278 8.73578C11.6589 9.04141 11.4169 9.29247 11.1017 9.48895C10.7922 9.67997 10.4235 9.77548 9.99578 9.77548Z"
              fill="#AEAEAE"
            />
          </svg>
        </div>
      ),
      link: "/dash/box",
    },
    {
      icon: (
        <div className="h-6">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.33317 6.28573H0.666504V19.1191H5.33317V6.28573Z"
              fill="#AEAEAE"
            />
            <path
              d="M19.3332 10.9524H14.6665V19.1191H19.3332V10.9524Z"
              fill="#AEAEAE"
            />
            <path
              d="M12.3332 0.452393H7.6665V19.1191H12.3332V0.452393Z"
              fill="#AEAEAE"
            />
          </svg>
        </div>
      ),
      link: "/dash/stats",
    },
  ];

  return (
    <>
      <div className="w-full h-screen  flex">
        <div
          className={`absolute right-5 top-5 sm:hidden ${
            theme.theme
              ? " bg-[#1F1F1F] text-white"
              : " bg-white text-[#5B5F66]"
          }   shadow-lg w-6 h-6 rounded-full text-center`}
        >
          X
        </div>
        <div
          className={` ${
            theme.theme
              ? " bg-[#101113] text-white border-[#343A40]"
              : " bg-[#FAFAFA] text-[#5B5F66] border-[#DEDEDE]"
          }  h-full transition-all duration-300  w-12  border`}
        >
          <div className="flex flex-col min-h-full ">
            <div className="basis-16 flex justify-center items-center">
              <img src={Logo} alt="logo" className="px-2.5" />
            </div>
            <div
              className={`text-stone-500 flex-grow text-xs font-medium w-4/5 mx-auto flex items-center flex-col`}
            >
              <div className="mb-5 mt-8">
                {navIndex.map((x, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={x.link}
                      className={({ isActive }) =>
                        isActive
                          ? theme.theme
                            ? "active"
                            : "activeB"
                          : "contents"
                      }
                    >
                      <div className="flex items-center py-6 mx-auto w-full object-scale-down aspect-videoe">
                        {x.icon}
                      </div>
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <div className="mb-5">
              <p className="p-2  bg-red-500 rounded-full mx-1.5 text-center">
                M
              </p>
            </div>
          </div>
        </div>
        <div
          className={`w-full relative block  flex-1 min-h-full  scroll-smooth overflow-hidden`}
        >
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
