import React, { useState } from "react";
import EmptyMsgBox from "./empty";
import { IoIosArrowForward } from "react-icons/io";
import { FaRotateRight } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineReply } from "react-icons/md";
import MsgLogo from "../assets/msg.svg";
import CloseLogo from "../assets/close.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import BoldImg from "../assets/bold.svg";
import LinkImg from "../assets/link.svg";
import PhotoImg from "../assets/photo.svg";
import EmojiImg from "../assets/emoji.svg";
import FrndImg from "../assets/frnd.svg";
import CodeImg from "../assets/code.svg";

const Home = () => {
  const [replyBox, setReplyBox] = useState(false);
  return (
    <>
      <div className="flex max-h-full h-full">
        <div className="flex flex-col w-[22%] mt-2 p-3 border-r border-r-[#33383F]">
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
        <div className=" flex-1 flex flex-col h-[92%] relative">
          <div class="py-3 px-3 bg-grey-lighter flex flex-row justify-between items-center border-b border-b-[#33383F]">
            <div class="flex items-center">
              <div>
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
                />
              </div>
              <div class="ml-4">
                <p class="text-white">Orlando</p>
                <p class="text-white/50 text-sm">orladom@gmail.com</p>
              </div>
            </div>

            <div class="flex gap-3">
              <div className="flex gap-2 px-3 py-2 bg-[#1F1F1F] rounded items-center">
                <span className="p-2 bg-yellow-100 rounded-full w-3 h-3">
                  {/* <span className="px-1 py-0.5 bg-yellow-500 rounded-full "></span> */}
                </span>
                <p className="text-[#D3D7DB] text-sm">Meeting Completed</p>
                <IoIosArrowForward
                  size={17}
                  color="white"
                  stroke={10}
                  className="mt-1 rotate-90"
                />{" "}
              </div>
              <div className="flex gap-2 px-3 py-2 bg-[#1F1F1F] rounded items-center">
                <p className="text-[#D3D7DB] text-sm">Move</p>
                <IoIosArrowForward
                  size={17}
                  color="white"
                  stroke={10}
                  className="mt-1 rotate-90"
                />{" "}
              </div>
              <div className="flex gap-2 px-3 py-2 bg-[#1F1F1F] rounded items-center">
                <BsThreeDots size={17} color="white" stroke={10} className="" />{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col h-[85%]">
            <div className="flex justify-center items-center mt-1">
              <div className="p-[0.5px] bg-[#F8FAFC33] w-full"></div>
              <p className="px-2 py-1 text-xs bg-white/20 text-white w-fit h-fit rounded">
                {" "}
                Today
              </p>
              <div className="p-[0.5px] bg-[#F8FAFC33] w-full"></div>
            </div>
            <MsgBox />
          </div>
          {replyBox && (
            <ReplyBox replyBox={replyBox} setReplyBox={setReplyBox} />
          )}

          <div className="mt-auto">
            <div>
              {!replyBox && (
                <button
                  className="text-white login_button flex  items-center px-8 py-2 gap-1 rounded mx-10 "
                  onClick={() => {
                    setReplyBox(!replyBox);
                  }}
                >
                  <MdOutlineReply color="white" size={22} />

                  <p>Reply</p>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="w-[20%] border-l flex flex-col">
          <p className="py-2 px-4 bg-[#23272C] rounded-lg my-4 mx-2 text-white font-semibold">
            Lead Details
          </p>
          <div className="grid grid-cols-2 text-white px-6 text-sm gap-6">
            <p>Name</p>
            <p className="justify-self-end text-[#B9B9B9]">Orlando</p>
            <p>Contact No</p>
            <p className="justify-self-end text-[#B9B9B9]">+54-9062827869</p>
            <p>Email ID</p>
            <p className="justify-self-end text-[#B9B9B9]">orlando@gmail.com</p>
            <p>Linkedin</p>
            <p className="justify-self-end text-[#B9B9B9] ">
              linkedin.com/in/timvadde/
            </p>
            <p>Company Name</p>
            <p className="justify-self-end text-[#B9B9B9] ">Reachinbox </p>
          </div>
          <p className="py-2 px-4 bg-[#23272C] rounded-lg mt-16 mb-6 mx-2 text-white font-semibold">
            Activities
          </p>
          <p className="font-semibold text-white ml-10">Campaign Name</p>
          <div className="flex gap-2 text-white text-xs my-4 ml-10">
            <p className=" border-r pr-2">3 Steps</p>
            <p>5 Days in Sequence</p>
          </div>
          <div className="flex-col flex relative">
            <div className="text-white flex relative gap-2 ml-10 mt-2">
              <img src={MsgLogo} alt="" className="w-9" />
              <p className="text-sm">Step 1 : Email</p>
              <div className="h-[20px] w-[1px] absolute -bottom-5 left-[18px] bg-white"></div>
            </div>
            <div className="text-white flex gap-2 ml-10 mt-5 relative">
              <img src={MsgLogo} alt="" className="w-9" />
              <p className="text-sm">Step 2 : Email</p>
              <div className="h-[20px] w-[1px] absolute -bottom-5 left-[18px] bg-white"></div>
            </div>
            <div className="text-white flex gap-2 ml-10 mt-5">
              <img src={MsgLogo} alt="" className="w-9" />
              <p className="text-sm">Step 4 : Email</p>
            </div>
          </div>
        </div>
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

const MsgBox = () => {
  return (
    <div className="w-auto bg-[#141517] flex flex-col text-[#AEAEAE] p-3 mx-10 rounded-lg border border-[#343A40] mt-2">
      <div className="flex justify-between my-0.5">
        <p className="text-white font-semibold">New Product launched</p>
        <p className="text-sm">20 june 2022 : 9:16AM</p>
      </div>
      <p className="my-0.5">from : jeanne@icloud.com cc : lennon.j@mail.com</p>
      <p className="my-0.5">to : lennon.j@mail.com</p>

      <p className="mt-6 mb-4">Hi FIRST_NAME,</p>
      <p className="w-[70%]">
        I would like to introduce you to SaaSgrow, a productized design service
        specifically tailored for saas startups. Our aim is to help you enhance
        the user experience and boost the visual appeal of your software
        products.
      </p>
    </div>
  );
};

const ReplyBox = ({ replyBox, setReplyBox }) => {
  return (
    <div className="absolute overflow-hidden bottom-0 w-[80%] bg-[#141517] rounded-xl mx-10">
      <div className="flex justify-between bg-[#23272C] py-2 px-6 rounded-t-lg">
        <p className="text-[#BAB9BD] font-semibold ">Reply</p>
        <img
          src={CloseLogo}
          alt=""
          className="cursor-pointer"
          onClick={() => {
            setReplyBox(!replyBox);
          }}
        />
      </div>
      <p className="py-2 px-5 text-[#BAB9BD] border-b border-b-[#34383D]">
        To :{" "}
        <span className="text-white font-medium pl-3"> jeanne@icloud.com</span>
      </p>
      <p className="py-2 px-5 text-[#BAB9BD] border-b border-b-[#34383D]">
        From :{" "}
        <span className="text-white font-medium pl-3">
          {" "}
          peter@reachinbox.com{" "}
        </span>
      </p>
      <p className="py-2 px-5 text-[#BAB9BD] border-b border-b-[#34383D]">
        Subject :{" "}
        <span className="text-white font-medium pl-3"> Warmup Welcome </span>
      </p>
      <textarea
        name=""
        id=""
        rows="10"
        cols="50"
        className="bg-transparent w-full focus:outline-none resize-none text-white p-5"
        placeholder="Hi Jinea"
      ></textarea>
      <div className="flex gap-3 p-2 border-t border-[#2E3236]">
        <button className="login_button flex items-center gap-4 px-8 rounded py-2 font-semibold text-white text-lg">
          Send <IoMdArrowDropdown />
        </button>
        <button className=" flex items-center gap-3 rounded py-2 font-medium text-[#ADADAD]">
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
          Variables
        </button>
        <button className=" flex items-center gap-3 whitespace-nowrap rounded py-2 font-medium text-[#ADADAD]">
          <IoEyeOutline color="#ADADAD" size={25} /> Preview Email
        </button>
        <img src={BoldImg} alt="" />
        <img src={LinkImg} alt="" />
        <img src={PhotoImg} alt="" />
        <img src={EmojiImg} alt="" />
        <img src={FrndImg} alt="" />
        <img src={CodeImg} alt="" />
      </div>
    </div>
  );
};
