import React, { useContext, useEffect } from "react";
import NoMsg from "../assets/no_msg.png";
import { useLocation, useNavigate } from "react-router-dom";
import themeContext from "../theme/theme_context";

const EmptyMsgBox = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const theme = useContext(themeContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      Navigate("/");
    }
  }, []);
  return (
    <div className="flex max-h-full h-full">
      <div
        className={`flex flex-col justify-center items-center h-full w-full  ${
          theme.theme ? " text-white bg-black" : " text-black bg-white"
        }`}
      >
        <img src={NoMsg} alt="" />

        <h2 className="font-bold text-2xl mt-9">
          It’s the beginning of a legendary sales pipeline{" "}
        </h2>
        <p className=" text-lg text-center mt-3">
          When you have inbound E-mails <br />
          you’ll see them here
        </p>
      </div>
    </div>
  );
};

export default EmptyMsgBox;
