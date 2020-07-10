import React from "react";
import Timer from "../components/Timer";

const QuickStart = () => {
  return (
    <div className="w-full h-full bg-gray-100 flex flex-col items-center ">
      <h1 className="font-bold text-2xl antialiased text-gray-800 text-center py-10">
        Set Time
      </h1>
      <Timer />
    </div>
  );
};

export default QuickStart;
