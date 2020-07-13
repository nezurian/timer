import React from "react";
import Timer from "../components/Timer";

const QuickStart = () => {
  return (
    <div className="w-full h-full bg-gray-100 flex flex-col items-center ">
      <h1 className="font-bold text-2xl antialiased text-gray-600 text-center pt-10 pb-5">
        Set Time
      </h1>
      <div className="border border-gray-400 rounded-full p-4">
        <Timer />
      </div>
    </div>
  );
};

export default QuickStart;
