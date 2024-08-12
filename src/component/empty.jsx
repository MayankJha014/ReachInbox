import React from "react";
import NoMsg from "../assets/no_msg.png";

const EmptyMsgBox = () => {
  return (
    <div className="flex flex-col justify-center items-center h-4/5">
      <img src={NoMsg} alt="" />

      <h2 className="font-bold text-2xl text-white mt-9">
        It’s the beginning of a legendary sales pipeline{" "}
      </h2>
      <p className="text-white text-lg text-center mt-3">
        When you have inbound E-mails <br />
        you’ll see them here
      </p>
    </div>
  );
};

export default EmptyMsgBox;
