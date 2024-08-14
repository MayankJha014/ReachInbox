import React, {
  act,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteThreadsById,
  getAllListMails,
  getThreadsById,
  replyMail,
  resetMail,
} from "../redux/action/api";
import Loader from "./loader";
import dateFormat from "dateformat";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import { Editable, Slate, withReact } from "slate-react";
import { createEditor } from "slate";
import JoditEditor from "jodit-react";
import themeContext from "../theme/theme_context";
import "react-quill/dist/quill.snow.css";

const Home = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const [replyBox, setReplyBox] = useState(false);
  const [deletePop, setDeletePop] = useState(false);
  const [activeId, setactiveId] = useState(0);
  const [replyText, setReplyText] = useState("");
  const [subjectText, setSubjectText] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      Navigate("/");
    }
  }, []);

  const { isLoading, mailData, isSuccess } = useSelector(
    (state) => state.mails
  );
  const { isLoading: threadLoading, threadData } = useSelector(
    (state) => state.threads
  );

  useEffect(() => {
    console.log(replyText);
  }, [replyText]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllListMails()).then((x) => {
      if (x.payload.data.length == 0) {
        localStorage.clear();
        Navigate("/");
      } else {
        setactiveId(x.payload.data[0]);
        dispatch(getThreadsById(x.payload.data[0]?.threadId));
      }
    });
  }, []);

  useEffect(() => {
    // Add event listener for keydown when component mounts
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (event) => {
    if (event.target.closest(".ql-editor")) {
      return; // Exit the function early if the key event is from the Quill editor
    }
    if (
      event.target.tagName === "TEXTAREA" ||
      event.target.tagName === "INPUT"
    ) {
      return; // Exit the function early if the key event is from a textarea or input
    }
    if (event.key === "R" || event.key === "r") {
      setReplyBox(!replyBox);
    }

    if (event.key === "D" || event.key === "d") {
      setDeletePop(!deletePop);
    }
  };

  const theme = useContext(themeContext);

  return isLoading ? (
    <div
      className={`flex items-center justify-center w-full h-[100vh]   ${
        theme.theme ? "bg-black text-white" : "bg-black/10 text-gray-900"
      } `}
    >
      <div>
        <h1 className="text-xl md:text-7xl font-bold flex items-center">
          L
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            className="animate-spin"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z"></path>
          </svg>{" "}
          ading . . .
        </h1>
      </div>
    </div>
  ) : (
    <>
      <div
        className={`flex max-h-full h-full transition-colors ${
          theme.theme ? " bg-black text-white" : " bg-white  text-black"
        }`}
      >
        {deletePop ? (
          <DeletePopup
            deletePop={deletePop}
            setDeletePop={setDeletePop}
            dispatch={dispatch}
            activeId={activeId}
            setactiveId={setactiveId}
            theme={theme.theme}
          />
        ) : (
          <></>
        )}
        <>
          <div
            className={`flex flex-col min-w-[25rem] w-[22%]  p-3 border-r ${
              !theme.theme ? " border-r-[#E0E0E0] " : " border-r-[#33383F] "
            } `}
          >
            <div className="flex items-center justify-between w-full mx-2 ">
              <div className="flex items-center">
                <h3 className="text-2xl text-blue-700 font-bold">
                  All Inbox(s)
                </h3>
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
              <span
                className={`px-2  ${
                  !theme.theme ? " text-[#7F7F7F] " : " text-white  "
                } font-bold`}
              >
                25/25
              </span>
              Index Selected
            </div>
            <form className="flex items-center justify-center my-4 mx-1">
              <label for="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full ">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                  className={`${
                    theme.theme ? " bg-[#23272C] " : "  bg-[#F4F6F8] "
                  }  border border-white/10 text-gray-900 text-sm rounded-lg focus:outline-none block w-full pl-10 p-2  `}
                  placeholder="Search"
                  required
                />
              </div>
            </form>
            <div className="flex justify-between mb-6">
              <div>
                <p
                  className={
                    theme.theme
                      ? " font-semibold "
                      : ` font-semibold text-black`
                  }
                >
                  <span
                    className={`px-3 py-1  ${
                      theme.theme ? " bg-[#222426] " : "bg-[#ECECEC]"
                    } text-[#5C7CFA] font-bold rounded-full mr-2 `}
                  >
                    25
                  </span>
                  New Replies
                </p>
              </div>
              <div
                className={
                  theme.theme
                    ? " font-semibold flex"
                    : ` font-semibold text-black flex gap-2`
                }
              >
                <p>Newest</p>
                <IoIosArrowForward
                  size={17}
                  color={!theme.theme ? "black" : "white"}
                  stroke={10}
                  className="mt-1"
                />{" "}
              </div>
            </div>
            <div className="flex flex-col overflow-y-auto border-t border-white/20">
              {mailData?.map((x, index) => {
                return (
                  <div
                    onClick={() =>
                      dispatch(getThreadsById(x?.threadId)).then(() => {
                        setactiveId(x);
                      })
                    }
                  >
                    <ChatBox
                      email={x?.fromEmail}
                      date={dateFormat(x?.sentAt, "mmm d yyyy")}
                      msg={x.subject.split(" |")[0]}
                      theme={theme.theme}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {threadLoading ? (
            <div role="status" className="mx-auto my-auto">
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            <>
              <div className=" flex-1 flex flex-col h-[92%] relative">
                <div
                  className={`py-3 px-3 bg-grey-lighter flex flex-row justify-between items-center border-b ${
                    theme.theme ? " border-b-[#33383F]" : "border-b-[#E0E0E0]"
                  } `}
                >
                  <div className="flex items-center">
                    <div>
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
                      />
                    </div>
                    <div className="ml-4">
                      <p
                        className={`${
                          theme.theme ? " text-white " : " text-black "
                        } font-semibold`}
                      >
                        {activeId.fromName}
                      </p>
                      <p
                        className={
                          theme.theme
                            ? `text-white/50 text-sm`
                            : `text-black/50 text-sm`
                        }
                      >
                        {activeId.fromEmail}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div
                      className={`flex gap-2 px-3 py-2 ${
                        theme.theme
                          ? "bg-[#1F1F1F] "
                          : "bg-white border-[#DFE3E8]"
                      } rounded items-center border`}
                    >
                      <span className="p-2 bg-yellow-100 rounded-full w-3 h-3">
                        {/* <span className="px-1 py-0.5 bg-yellow-500 rounded-full "></span> */}
                      </span>
                      <p
                        className={
                          theme.theme
                            ? `text-[#D3D7DB] text-sm`
                            : `text-[#172B4D] text-sm`
                        }
                      >
                        Meeting Completed
                      </p>
                      <IoIosArrowForward
                        size={17}
                        color="white"
                        stroke={10}
                        className="mt-1 rotate-90"
                      />{" "}
                    </div>
                    <div
                      className={`flex gap-2 px-3 py-2 ${
                        theme.theme
                          ? "bg-[#1F1F1F] "
                          : "bg-white border-[#DFE3E8]"
                      } rounded items-center border`}
                    >
                      <p
                        className={
                          theme.theme
                            ? `text-[#D3D7DB] text-sm`
                            : `text-[#172B4D] text-sm`
                        }
                      >
                        Move
                      </p>
                      <IoIosArrowForward
                        size={17}
                        color={theme.theme ? "white" : "black"}
                        stroke={10}
                        className="mt-1 rotate-90"
                      />{" "}
                    </div>
                    <div
                      className={`flex gap-2 px-3 py-2 ${
                        theme.theme
                          ? "bg-[#1F1F1F] "
                          : "bg-white border-[#DFE3E8]"
                      } rounded items-center border`}
                    >
                      <BsThreeDots
                        size={17}
                        color={theme.theme ? "white" : "black"}
                        stroke={10}
                        className=""
                      />{" "}
                    </div>
                  </div>
                </div>
                <div
                  className={`flex flex-col h-[85%] ${
                    !theme.theme ? "bg-[#F4F6F8]" : " bg-black "
                  }`}
                >
                  <div className="flex justify-center items-center mt-1">
                    <div
                      className={`p-[0.5px] ${
                        theme.theme ? " bg-[#F8FAFC33] " : " bg-[#77777733] "
                      }  w-full`}
                    ></div>
                    <p className="px-2 py-1 text-xs bg-white/20  w-fit h-fit rounded">
                      {" "}
                      Today
                    </p>
                    <div
                      className={`p-[0.5px] ${
                        theme.theme ? " bg-[#F8FAFC33] " : " bg-[#77777733] "
                      }  w-full`}
                    ></div>
                  </div>
                  {threadData?.map((x, index) => (
                    <MsgBox thread={x} theme={theme.theme} />
                  ))}
                </div>
                {replyBox && (
                  <ReplyBox
                    replyBox={replyBox}
                    setReplyBox={setReplyBox}
                    setReplyText={setReplyText}
                    replyText={replyText}
                    activeId={activeId}
                    subjectText={subjectText}
                    setSubjectText={setSubjectText}
                    dispatch={dispatch}
                    theme={theme.theme}
                  />
                )}
                <div
                  className={
                    !theme.theme
                      ? "bg-[#F4F6F8] h-full flex"
                      : " bg-black mt-auto flex"
                  }
                >
                  <div className="mt-auto">
                    {!replyBox && (
                      <button
                        className={` text-white login_button flex  items-center px-8 py-2 gap-1 rounded mx-10 `}
                        onClick={() => setReplyBox(!replyBox)}
                      >
                        <MdOutlineReply color="white" size={22} />

                        <p>Reply</p>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </>
        <div className="w-[20%] border-l lg:flex flex-col hidden ">
          <p
            className={`py-2 px-4 ${
              theme.theme
                ? " bg-[#23272C] text-white"
                : "bg-[#ECEFF3] text-[#454F5B]"
            }  rounded-lg my-4 mx-2  font-semibold`}
          >
            Lead Details
          </p>
          <div
            className={`grid grid-cols-2 px-6 text-sm gap-6 ${
              theme.theme ? "text-white " : "text-black"
            }`}
          >
            <p className="font-medium">Name</p>
            <p
              className={`justify-self-end ${
                theme.theme ? "text-[#B9B9B9]" : "text-[#505050]"
              }`}
            >
              Orlando
            </p>
            <p className="font-medium">Contact No</p>
            <p
              className={`justify-self-end ${
                theme.theme ? "text-[#B9B9B9]" : "text-[#505050]"
              }`}
            >
              +54-9062827869
            </p>
            <p className="font-medium">Email ID</p>
            <p
              className={`justify-self-end ${
                theme.theme ? "text-[#B9B9B9]" : "text-[#505050]"
              }`}
            >
              orlando@gmail.com
            </p>
            <p className="font-medium">Linkedin</p>
            <p
              className={`justify-self-end ${
                theme.theme ? "text-[#B9B9B9]" : "text-[#505050]"
              }`}
            >
              linkedin.com/in/timvadde/
            </p>
            <p className="font-medium">Company Name</p>
            <p
              className={`justify-self-end ${
                theme.theme ? "text-[#B9B9B9]" : "text-[#505050]"
              }`}
            >
              Reachinbox{" "}
            </p>
          </div>
          <p
            className={`py-2 px-4 ${
              theme.theme
                ? " bg-[#23272C] text-white"
                : "bg-[#ECEFF3] text-[#454F5B]"
            }  rounded-lg mt-16 mb-6 mx-2  font-semibold`}
          >
            Activities
          </p>
          <p
            className={` ${
              theme.theme ? " text-white " : " text-black "
            } font-semibold    ml-10`}
          >
            Campaign Name
          </p>
          <div
            className={`flex gap-2 text-xs my-4 ml-10 ${
              theme.theme ? " text-white " : " text-[#454F5B] "
            }`}
          >
            <p className=" border-r pr-2">3 Steps</p>
            <p>5 Days in Sequence</p>
          </div>
          <div className="flex-col flex relative">
            <div className=" flex relative gap-2 ml-10 mt-2">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-9"
              >
                <rect
                  x="1.27344"
                  y="0.813721"
                  width="31"
                  height="31"
                  rx="15.5"
                  fill={theme.theme ? "#23272C" : "#EEF1F4"}
                />
                <rect
                  x="1.27344"
                  y="0.813721"
                  width="31"
                  height="31"
                  rx="15.5"
                  stroke={theme.theme ? "#41464B" : "#DFE3E8"}
                />
                <g clip-path="url(#clip0_5_2474)">
                  <mask id="path-2-inside-1_5_2474" fill="white">
                    <path d="M25.1066 11.3136C25.1066 10.397 24.3566 9.64697 23.4399 9.64697H10.1066C9.18994 9.64697 8.43994 10.397 8.43994 11.3136V21.3136C8.43994 22.2303 9.18994 22.9803 10.1066 22.9803H23.4399C24.3566 22.9803 25.1066 22.2303 25.1066 21.3136V11.3136ZM23.4399 11.3136L16.7733 15.4803L10.1066 11.3136H23.4399ZM23.4399 21.3136H10.1066V12.9803L16.7733 17.147L23.4399 12.9803V21.3136Z" />
                  </mask>
                  <path
                    d="M23.4399 11.3136L24.4999 13.0096L30.4135 9.31364H23.4399V11.3136ZM16.7733 15.4803L15.7133 17.1763L16.7733 17.8388L17.8333 17.1763L16.7733 15.4803ZM10.1066 11.3136V9.31364H3.13302L9.04661 13.0096L10.1066 11.3136ZM23.4399 21.3136V23.3136H25.4399V21.3136H23.4399ZM10.1066 21.3136H8.10661V23.3136H10.1066V21.3136ZM10.1066 12.9803L11.1666 11.2843L8.10661 9.37181V12.9803H10.1066ZM16.7733 17.147L15.7133 18.843L16.7733 19.5055L17.8333 18.843L16.7733 17.147ZM23.4399 12.9803H25.4399V9.37181L22.3799 11.2843L23.4399 12.9803ZM27.1066 11.3136C27.1066 9.2924 25.4612 7.64697 23.4399 7.64697V11.647C23.252 11.647 23.1066 11.5015 23.1066 11.3136H27.1066ZM23.4399 7.64697H10.1066V11.647H23.4399V7.64697ZM10.1066 7.64697C8.08537 7.64697 6.43994 9.2924 6.43994 11.3136H10.4399C10.4399 11.5015 10.2945 11.647 10.1066 11.647V7.64697ZM6.43994 11.3136V21.3136H10.4399V11.3136H6.43994ZM6.43994 21.3136C6.43994 23.3349 8.08537 24.9803 10.1066 24.9803V20.9803C10.2945 20.9803 10.4399 21.1257 10.4399 21.3136H6.43994ZM10.1066 24.9803H23.4399V20.9803H10.1066V24.9803ZM23.4399 24.9803C25.4612 24.9803 27.1066 23.3349 27.1066 21.3136H23.1066C23.1066 21.1257 23.252 20.9803 23.4399 20.9803V24.9803ZM27.1066 21.3136V11.3136H23.1066V21.3136H27.1066ZM22.3799 9.61764L15.7133 13.7843L17.8333 17.1763L24.4999 13.0096L22.3799 9.61764ZM17.8333 13.7843L11.1666 9.61764L9.04661 13.0096L15.7133 17.1763L17.8333 13.7843ZM10.1066 13.3136H23.4399V9.31364H10.1066V13.3136ZM23.4399 19.3136H10.1066V23.3136H23.4399V19.3136ZM12.1066 21.3136V12.9803H8.10661V21.3136H12.1066ZM9.04661 14.6763L15.7133 18.843L17.8333 15.451L11.1666 11.2843L9.04661 14.6763ZM17.8333 18.843L24.4999 14.6763L22.3799 11.2843L15.7133 15.451L17.8333 18.843ZM21.4399 12.9803V21.3136H25.4399V12.9803H21.4399Z"
                    fill="#BFBFBF"
                    mask="url(#path-2-inside-1_5_2474)"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_2474">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(6.77344 6.31372)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <p
                className={` ${
                  theme.theme ? " text-white " : " text-[#454F5B] "
                } font-semibold text-sm`}
              >
                Step 1 : Email
              </p>
              <div
                className={`h-[20px] w-[1px] absolute -bottom-5 left-[18px] ${
                  theme.theme ? "bg-white" : "bg-black"
                }`}
              ></div>
            </div>
            <div className=" flex gap-2 ml-10 mt-5 relative">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-9"
              >
                <rect
                  x="1.27344"
                  y="0.813721"
                  width="31"
                  height="31"
                  rx="15.5"
                  fill={theme.theme ? "#23272C" : "#EEF1F4"}
                />
                <rect
                  x="1.27344"
                  y="0.813721"
                  width="31"
                  height="31"
                  rx="15.5"
                  stroke={theme.theme ? "#41464B" : "#DFE3E8"}
                />
                <g clip-path="url(#clip0_5_2474)">
                  <mask id="path-2-inside-1_5_2474" fill="white">
                    <path d="M25.1066 11.3136C25.1066 10.397 24.3566 9.64697 23.4399 9.64697H10.1066C9.18994 9.64697 8.43994 10.397 8.43994 11.3136V21.3136C8.43994 22.2303 9.18994 22.9803 10.1066 22.9803H23.4399C24.3566 22.9803 25.1066 22.2303 25.1066 21.3136V11.3136ZM23.4399 11.3136L16.7733 15.4803L10.1066 11.3136H23.4399ZM23.4399 21.3136H10.1066V12.9803L16.7733 17.147L23.4399 12.9803V21.3136Z" />
                  </mask>
                  <path
                    d="M23.4399 11.3136L24.4999 13.0096L30.4135 9.31364H23.4399V11.3136ZM16.7733 15.4803L15.7133 17.1763L16.7733 17.8388L17.8333 17.1763L16.7733 15.4803ZM10.1066 11.3136V9.31364H3.13302L9.04661 13.0096L10.1066 11.3136ZM23.4399 21.3136V23.3136H25.4399V21.3136H23.4399ZM10.1066 21.3136H8.10661V23.3136H10.1066V21.3136ZM10.1066 12.9803L11.1666 11.2843L8.10661 9.37181V12.9803H10.1066ZM16.7733 17.147L15.7133 18.843L16.7733 19.5055L17.8333 18.843L16.7733 17.147ZM23.4399 12.9803H25.4399V9.37181L22.3799 11.2843L23.4399 12.9803ZM27.1066 11.3136C27.1066 9.2924 25.4612 7.64697 23.4399 7.64697V11.647C23.252 11.647 23.1066 11.5015 23.1066 11.3136H27.1066ZM23.4399 7.64697H10.1066V11.647H23.4399V7.64697ZM10.1066 7.64697C8.08537 7.64697 6.43994 9.2924 6.43994 11.3136H10.4399C10.4399 11.5015 10.2945 11.647 10.1066 11.647V7.64697ZM6.43994 11.3136V21.3136H10.4399V11.3136H6.43994ZM6.43994 21.3136C6.43994 23.3349 8.08537 24.9803 10.1066 24.9803V20.9803C10.2945 20.9803 10.4399 21.1257 10.4399 21.3136H6.43994ZM10.1066 24.9803H23.4399V20.9803H10.1066V24.9803ZM23.4399 24.9803C25.4612 24.9803 27.1066 23.3349 27.1066 21.3136H23.1066C23.1066 21.1257 23.252 20.9803 23.4399 20.9803V24.9803ZM27.1066 21.3136V11.3136H23.1066V21.3136H27.1066ZM22.3799 9.61764L15.7133 13.7843L17.8333 17.1763L24.4999 13.0096L22.3799 9.61764ZM17.8333 13.7843L11.1666 9.61764L9.04661 13.0096L15.7133 17.1763L17.8333 13.7843ZM10.1066 13.3136H23.4399V9.31364H10.1066V13.3136ZM23.4399 19.3136H10.1066V23.3136H23.4399V19.3136ZM12.1066 21.3136V12.9803H8.10661V21.3136H12.1066ZM9.04661 14.6763L15.7133 18.843L17.8333 15.451L11.1666 11.2843L9.04661 14.6763ZM17.8333 18.843L24.4999 14.6763L22.3799 11.2843L15.7133 15.451L17.8333 18.843ZM21.4399 12.9803V21.3136H25.4399V12.9803H21.4399Z"
                    fill="#BFBFBF"
                    mask="url(#path-2-inside-1_5_2474)"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_2474">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(6.77344 6.31372)"
                    />
                  </clipPath>
                </defs>
              </svg>{" "}
              <p
                className={` ${
                  theme.theme ? " text-white " : " text-[#454F5B] "
                } font-semibold text-sm`}
              >
                Step 2 : Email
              </p>
              <div
                className={`h-[20px] w-[1px] absolute -bottom-5 left-[18px] ${
                  theme.theme ? "bg-white" : "bg-black"
                }`}
              ></div>
            </div>
            <div className=" flex gap-2 ml-10 mt-5">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-9"
              >
                <rect
                  x="1.27344"
                  y="0.813721"
                  width="31"
                  height="31"
                  rx="15.5"
                  fill={theme.theme ? "#23272C" : "#EEF1F4"}
                />
                <rect
                  x="1.27344"
                  y="0.813721"
                  width="31"
                  height="31"
                  rx="15.5"
                  stroke={theme.theme ? "#41464B" : "#DFE3E8"}
                />
                <g clip-path="url(#clip0_5_2474)">
                  <mask id="path-2-inside-1_5_2474" fill="white">
                    <path d="M25.1066 11.3136C25.1066 10.397 24.3566 9.64697 23.4399 9.64697H10.1066C9.18994 9.64697 8.43994 10.397 8.43994 11.3136V21.3136C8.43994 22.2303 9.18994 22.9803 10.1066 22.9803H23.4399C24.3566 22.9803 25.1066 22.2303 25.1066 21.3136V11.3136ZM23.4399 11.3136L16.7733 15.4803L10.1066 11.3136H23.4399ZM23.4399 21.3136H10.1066V12.9803L16.7733 17.147L23.4399 12.9803V21.3136Z" />
                  </mask>
                  <path
                    d="M23.4399 11.3136L24.4999 13.0096L30.4135 9.31364H23.4399V11.3136ZM16.7733 15.4803L15.7133 17.1763L16.7733 17.8388L17.8333 17.1763L16.7733 15.4803ZM10.1066 11.3136V9.31364H3.13302L9.04661 13.0096L10.1066 11.3136ZM23.4399 21.3136V23.3136H25.4399V21.3136H23.4399ZM10.1066 21.3136H8.10661V23.3136H10.1066V21.3136ZM10.1066 12.9803L11.1666 11.2843L8.10661 9.37181V12.9803H10.1066ZM16.7733 17.147L15.7133 18.843L16.7733 19.5055L17.8333 18.843L16.7733 17.147ZM23.4399 12.9803H25.4399V9.37181L22.3799 11.2843L23.4399 12.9803ZM27.1066 11.3136C27.1066 9.2924 25.4612 7.64697 23.4399 7.64697V11.647C23.252 11.647 23.1066 11.5015 23.1066 11.3136H27.1066ZM23.4399 7.64697H10.1066V11.647H23.4399V7.64697ZM10.1066 7.64697C8.08537 7.64697 6.43994 9.2924 6.43994 11.3136H10.4399C10.4399 11.5015 10.2945 11.647 10.1066 11.647V7.64697ZM6.43994 11.3136V21.3136H10.4399V11.3136H6.43994ZM6.43994 21.3136C6.43994 23.3349 8.08537 24.9803 10.1066 24.9803V20.9803C10.2945 20.9803 10.4399 21.1257 10.4399 21.3136H6.43994ZM10.1066 24.9803H23.4399V20.9803H10.1066V24.9803ZM23.4399 24.9803C25.4612 24.9803 27.1066 23.3349 27.1066 21.3136H23.1066C23.1066 21.1257 23.252 20.9803 23.4399 20.9803V24.9803ZM27.1066 21.3136V11.3136H23.1066V21.3136H27.1066ZM22.3799 9.61764L15.7133 13.7843L17.8333 17.1763L24.4999 13.0096L22.3799 9.61764ZM17.8333 13.7843L11.1666 9.61764L9.04661 13.0096L15.7133 17.1763L17.8333 13.7843ZM10.1066 13.3136H23.4399V9.31364H10.1066V13.3136ZM23.4399 19.3136H10.1066V23.3136H23.4399V19.3136ZM12.1066 21.3136V12.9803H8.10661V21.3136H12.1066ZM9.04661 14.6763L15.7133 18.843L17.8333 15.451L11.1666 11.2843L9.04661 14.6763ZM17.8333 18.843L24.4999 14.6763L22.3799 11.2843L15.7133 15.451L17.8333 18.843ZM21.4399 12.9803V21.3136H25.4399V12.9803H21.4399Z"
                    fill="#BFBFBF"
                    mask="url(#path-2-inside-1_5_2474)"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_2474">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(6.77344 6.31372)"
                    />
                  </clipPath>
                </defs>
              </svg>{" "}
              <p
                className={` ${
                  theme.theme ? " text-white " : " text-[#454F5B] "
                } font-semibold text-sm`}
              >
                Step 4 : Email
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

const ChatBox = ({ email, date, msg, theme }) => {
  return (
    <div
      className={`flex py-3 gap-1 cursor-pointer px-2 border-b  ${
        theme ? " border-white/20 " : " border-black/20 "
      }`}
    >
      <div className="p-1.5 w-fit h-fit bg-indigo-700 rounded-full mx-2 mt-3"></div>
      <div className="flex flex-col flex-1 p-1">
        <div className="flex items-center w-full ">
          <div
            className={`flex flex-grow ${
              !theme ? " text-[#343A40] " : " text-white "
            }`}
          >
            <p className="font-semibold flex-grow">{email}</p>
            <p className={!theme ? "theme-[#919EAB] " : "text-[#FCFCFC66]"}>
              {date}
            </p>
          </div>
        </div>
        <p
          className={`${
            !theme ? " text-[#343A40] " : " text-[#E1E0E0] "
          }  mt-1 mb-1.5`}
        >
          {msg}
        </p>
        <div className="flex gap-2 flex-wrap">
          <span
            className={`inline-flex items-center mt-2 px-2 py-1 ${
              !theme ? " bg-[#F0F0F0] " : " bg-[#222426] "
            } rounded-full text-sm font-semibold`}
          >
            <div className="p-1 bg-[#57E0A6] rounded-full mx-1"></div>

            <span className="ml-1 text-[#57E0A6] whitespace-nowrap">
              Intrested{" "}
            </span>
          </span>
          <span
            className={`inline-flex items-center mt-2 px-2 py-1 ${
              !theme
                ? " bg-[#F0F0F0] text-[#637381]"
                : " bg-[#222426] text-white"
            } rounded-full text-sm font-semibold`}
          >
            {" "}
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
                fill="#AEAEAE"
              />
            </svg>
            <span className="ml-1 whitespace-nowrap">Campaign Name</span>
          </span>
        </div>
      </div>
    </div>
  );
};

const MsgBox = ({ thread, theme }) => {
  return (
    <div
      className={`w-auto ${
        theme ? " bg-[#141517] text-[#AEAEAE]" : " bg-white text-[#172B4D]"
      }  flex flex-col  p-3 mx-10 rounded-lg border border-[#343A40] mt-2`}
    >
      <div className="flex justify-between my-0.5">
        <p
          className={
            !theme ? "text-black font-semibold" : "text-white font-semibold"
          }
        >
          {thread.subject.split(" |")[0]}
        </p>
        <p className="text-sm">
          {dateFormat(thread?.sentAt, "mmmm dS, yyyy, h:MM:ss TT")}
        </p>
      </div>
      <p
        className={!theme ? " text-[#637381] my-0.5" : "my-0.5 text-[#AEAEAE]"}
      >
        from : {thread?.fromEmail} cc : {thread?.fromEmail ?? "N/A"}
      </p>
      <p
        className={!theme ? " text-[#637381] my-0.5" : "my-0.5 text-[#AEAEAE]"}
      >
        to : {thread?.toEmail}
      </p>

      <p className="mt-6 mb-2">Hi {thread?.fromName},</p>
      <p className="w-[70%]" dangerouslySetInnerHTML={{ __html: thread?.body }}>
        {/* {thread.body} */}
      </p>
    </div>
  );
};

const ReplyBox = ({
  replyBox,
  setReplyBox,
  replyText,
  setReplyText,
  activeId,
  subjectText,
  setSubjectText,
  dispatch,
  theme,
}) => {
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ font: [] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ script: "sub" }, { script: "super" }],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
          ["link", "image"],
          ["clean"],
        ],
      },
    }),
    []
  );
  var quillObj;

  const handleReply = () => {
    if (subjectText == " " || subjectText == "") {
      toast.error("Fill Subject");
      return;
    }
    if (replyText == " " || replyText == "") {
      toast.error("Fill Body");
      return;
    }
    const reply = {
      toName: activeId?.fromName,
      to: activeId?.fromEmail,
      from: activeId?.toEmail,
      fromName: "",
      subject: subjectText,
      body: replyText,
      references: [activeId?.references],
      inReplyTo: activeId?.messageId,
    };
    console.log(reply);
    // dispatch(replyMail(activeId?.threadId, reply)).then((x) => {
    //   console.log(x.payload);
    // });
  };
  return (
    <div
      className={`absolute overflow-hidden bottom-0 border w-[80%] ${
        theme
          ? " bg-[#141517] border-white/15  text-white"
          : " bg-white border-b-[#E0E0E0] text-black"
      }  rounded-xl mx-10`}
    >
      <div
        className={`flex justify-between ${
          theme ? " bg-[#23272C] " : " bg-black/40"
        }  py-2 px-6 rounded-t-lg`}
      >
        <p
          className={
            !theme
              ? `text-black/75 font-semibold `
              : `text-[#BAB9BD] font-semibold `
          }
        >
          Reply
        </p>
        <img
          src={CloseLogo}
          alt=""
          className="cursor-pointer"
          onClick={() => {
            setReplyBox(!replyBox);
          }}
        />
      </div>
      <p
        className={`py-2 px-5  ${
          theme ? "text-[#BAB9BD] " : "text-[#444444] "
        } border-b`}
      >
        To :{" "}
        <span
          className={`${
            theme ? " text-white " : "text-black "
          } font-medium pl-3`}
        >
          {" "}
          {activeId?.fromEmail}
        </span>
      </p>
      <p
        className={`py-2 px-5  ${
          theme ? "text-[#BAB9BD] " : "text-[#444444] "
        } border-b`}
      >
        {" "}
        From :{" "}
        <span
          className={`${
            theme ? " text-white " : "text-black "
          } font-medium pl-3`}
        >
          {" "}
          {activeId?.toEmail}
        </span>
      </p>
      <div className="flex gap-1 border-b ">
        <p
          className={`py-2 px-5  ${
            theme ? "text-[#BAB9BD] " : "text-[#444444] "
          } border-b`}
        >
          {" "}
          Subject :{" "}
        </p>
        <input
          type="text"
          className="flex-1 p-0  bg-transparent border-transparent focus:outline-none outline-none"
          value={subjectText}
          onChange={(e) => {
            setSubjectText(e.target.value);
          }}
        />
      </div>

      {/* <textarea
        name=""
        id=""
        rows="10"
        cols="50"
        className="bg-transparent w-full focus:outline-none resize-none  p-5"
        placeholder="Hi Jinea"
        value={replyText}
        onChange={(e) => {
          setReplyText(e.target.value);
        }}
      ></textarea> */}

      <ReactQuill
        ref={(x) => {
          quillObj = x;
        }}
        theme="snow"
        className="h-28 text"
        modules={modules}
        value={replyText}
        onChange={setReplyText}
      />
      <div className="flex gap-3 p-2 border-t ">
        <button
          onClick={handleReply}
          className="login_button flex items-center gap-4 px-8 rounded py-2 font-semibold text-white text-lg"
        >
          Send <IoMdArrowDropdown />
        </button>
        <button
          className={` flex items-center gap-3 rounded py-2 font-medium ${
            theme ? "text-[#ADADAD]" : "text-[#494949]"
          }`}
        >
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.7381 18.5C11.0667 18.5 11.3472 18.3754 11.5795 18.1261C11.8118 17.8824 12.0072 17.5567 12.1659 17.1487L17.7664 2.48867C17.8401 2.29603 17.8967 2.11756 17.9364 1.95326C17.9761 1.78895 17.9959 1.63314 17.9959 1.48584C17.9959 1.18555 17.9081 0.947592 17.7324 0.771955C17.5568 0.590652 17.3188 0.5 17.0186 0.5C16.8769 0.5 16.7211 0.522663 16.5511 0.567989C16.3812 0.607649 16.1999 0.661473 16.0072 0.729462L1.29618 6.36402C0.927907 6.50567 0.619125 6.69263 0.369834 6.92493C0.126208 7.15722 0.00439453 7.43768 0.00439453 7.76629C0.00439453 8.16856 0.140372 8.46601 0.412326 8.65864C0.684281 8.84561 1.02706 9.00142 1.44065 9.12606L5.85142 10.4773C6.14604 10.568 6.3925 10.6048 6.5908 10.5878C6.7891 10.5652 6.99306 10.4575 7.20269 10.2649L16.6616 1.49433C16.7183 1.44334 16.7778 1.41785 16.8401 1.41785C16.9081 1.41785 16.9676 1.44051 17.0186 1.48584C17.0639 1.53116 17.0865 1.58782 17.0865 1.65581C17.0865 1.71813 17.0582 1.77762 17.0016 1.83428L8.26502 11.3187C8.08371 11.5113 7.9789 11.7096 7.95057 11.9136C7.92791 12.1176 7.95907 12.3697 8.04405 12.67L9.35283 16.9873C9.48315 17.4235 9.64462 17.7833 9.83725 18.0666C10.0299 18.3555 10.3302 18.5 10.7381 18.5Z"
              fill={theme ? "#AEAEAE" : "#494949"}
            />
          </svg>
          Variables
        </button>
        <button
          className={` flex items-center gap-3 rounded py-2 font-medium ${
            theme ? "text-[#ADADAD]" : "text-[#494949]"
          }`}
        >
          {" "}
          <IoEyeOutline color={theme ? "#AEAEAE" : "#494949"} size={25} />{" "}
          Preview Email
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

const DeletePopup = ({
  deletePop,
  setDeletePop,
  dispatch,
  activeId,
  setactiveId,
  theme,
}) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 backdrop-blur-md w-full h-full flex justify-center items-center bg-[#8484847D] bg-opacity-50 z-50">
      <div
        className={`${
          theme
            ? " bg-gradient-to-b from-[#141517] to-[#232528] "
            : " bg-black/50"
        }  p-8 rounded-lg items-center flex flex-col`}
      >
        <h2 className="text-3xl font-bold text-white">Are you sure?</h2>
        <p className="text-sm my-12 px-16 text-white">
          Are you sure you want to delete this mail?
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setDeletePop(!deletePop)}
            className="bg-[#25262B] text-white px-16 py-4 rounded-md focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={() =>
              dispatch(deleteThreadsById(activeId.threadId)).then((x) => {
                setDeletePop(false);
                if (x.error) {
                  toast.error(x.error.message);
                }
                if (x.payload.message) {
                  toast.success(x.payload.message);
                }
                dispatch(getAllListMails()).then((x) => {
                  if (x.payload.data.length == 0) {
                    localStorage.clear();
                    navigate("/");
                  } else {
                    setactiveId(x.payload.data[0]);
                    dispatch(getThreadsById(x.payload.data[0]?.threadId));
                  }
                });
              })
            }
            className="bg-gradient-to-r from-[#FA5252] to-[#A91919] text-white px-16 py-4 rounded-md focus:outline-none"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
