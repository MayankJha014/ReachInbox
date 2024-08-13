import React from "react";
import EmptyMsgBox from "./empty";
import { IoIosArrowForward } from "react-icons/io";
import { FaRotateRight } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <div className="flex max-h-full h-full">
        <div className="flex flex-col w-[22%] mt-2 p-3">
          <div className="flex items-center justify-between w-full mx-2 ">
            <div className="flex items-center">
              <h3 className="text-2xl text-blue-700 font-bold">All Inbox(s)</h3>
              <IoIosArrowForward
                size={17}
                color="white"
                stroke={10}
                className="mt-1"
              />{" "}
            </div>
            <div className="p-3 bg-white/20 mx-2 w-10 rounded-lg">
              <FaRotateRight color="white" />
            </div>
          </div>
          <div className="text-[#7F7F7F] ">
            <span className="px-2 text-white font-semibold">25/25</span>Index
            Selected
          </div>
          <form class="flex items-center justify-center my-4 mx-1">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full ">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-[#23272C] border border-white/10 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2  "
                placeholder="Search"
                required
              />
            </div>
          </form>
          <div className="flex justify-between mb-6">
            <div>
              <p className="text-white font-semibold">
                <span className="px-3 py-1 bg-[#222426] text-[#5C7CFA] font-bold rounded-full mr-2 ">
                  25
                </span>
                New Replies
              </p>
            </div>
            <div className="flex text-white font-semibold gap-4">
              <p>Newest</p>
              <IoIosArrowForward
                size={17}
                color="white"
                stroke={10}
                className="mt-1"
              />{" "}
            </div>
          </div>
          <div className="flex flex-col overflow-y-auto border-t border-white/20">
            <ChatBox
              email={"Beata@gmail.com"}
              date={"Mar 7"}
              msg={"I tried a lot and ."}
              badges={[{ title: "Default bages" }, { title: "Default" }]}
            />
            <ChatBox
              email={"Beata@gmail.com"}
              date={"Mar 7"}
              msg={"I tried a lot and ."}
              badges={[{ title: "Default bages" }, { title: "Default" }]}
            />
            <ChatBox
              email={"Beata@gmail.com"}
              date={"Mar 7"}
              msg={"I tried a lot and ."}
              badges={[{ title: "Default bages" }, { title: "Default" }]}
            />
          </div>
        </div>
        <div className="bg-white flex-1"></div>
      </div>
    </>
  );
};

export default Home;

const ChatBox = ({ email, date, msg, badges }) => {
  return (
    <div className="flex py-3 gap-1 px-2 border-b border-white/20">
      <div className="p-1.5 w-fit h-fit bg-indigo-700 rounded-full mx-2 mt-3"></div>
      <div className="flex flex-col flex-1 p-1">
        <div className="flex items-center w-full ">
          <div className="flex flex-grow">
            <p className="text-sb flex-grow">{email}</p>
            <p className="text-[#FCFCFC66]">{date}</p>
          </div>
        </div>
        <p className="text-[#E1E0E0] mt-1 mb-1.5">{msg}</p>
        <div className="flex gap-2 flex-wrap">
          {badges.map((x, index) => (
            <span class="inline-flex items-center mt-2 px-2 py-1 bg-[#222426]  rounded-full text-sm font-semibold">
              <svg
                width="15"
                height="16"
                viewBox="0 0 18 19"
                fill="none"
                className="mr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7381 18.5C11.0667 18.5 11.3472 18.3754 11.5795 18.1261C11.8118 17.8824 12.0072 17.5567 12.1659 17.1487L17.7664 2.48867C17.8401 2.29603 17.8967 2.11756 17.9364 1.95326C17.9761 1.78895 17.9959 1.63314 17.9959 1.48584C17.9959 1.18555 17.9081 0.947592 17.7324 0.771955C17.5568 0.590652 17.3188 0.5 17.0186 0.5C16.8769 0.5 16.7211 0.522663 16.5511 0.567989C16.3812 0.607649 16.1999 0.661473 16.0072 0.729462L1.29618 6.36402C0.927907 6.50567 0.619125 6.69263 0.369834 6.92493C0.126208 7.15722 0.00439453 7.43768 0.00439453 7.76629C0.00439453 8.16856 0.140372 8.46601 0.412326 8.65864C0.684281 8.84561 1.02706 9.00142 1.44065 9.12606L5.85142 10.4773C6.14604 10.568 6.3925 10.6048 6.5908 10.5878C6.7891 10.5652 6.99306 10.4575 7.20269 10.2649L16.6616 1.49433C16.7183 1.44334 16.7778 1.41785 16.8401 1.41785C16.9081 1.41785 16.9676 1.44051 17.0186 1.48584C17.0639 1.53116 17.0865 1.58782 17.0865 1.65581C17.0865 1.71813 17.0582 1.77762 17.0016 1.83428L8.26502 11.3187C8.08371 11.5113 7.9789 11.7096 7.95057 11.9136C7.92791 12.1176 7.95907 12.3697 8.04405 12.67L9.35283 16.9873C9.48315 17.4235 9.64462 17.7833 9.83725 18.0666C10.0299 18.3555 10.3302 18.5 10.7381 18.5Z"
                  fill="#57E0A6"
                />
              </svg>

              <span class="ml-1 text-[#57E0A6] whitespace-nowrap">
                {x.title}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
