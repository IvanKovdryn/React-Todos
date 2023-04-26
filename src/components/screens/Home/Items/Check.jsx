import React from "react";
import { BsCheckLg } from "react-icons/bs";

const Check = ({ isCompleted }) => {
  return (
    <div
      className={`border-2 flex items-center justify-center rounded-lg border-pink-400 ${
        isCompleted ? "bg-pink-400" : ""
      } w-6 h-6`}
    >
      {isCompleted && <BsCheckLg size={21} className="text-zinc-800" />}
    </div>
  );
};
export default Check;
