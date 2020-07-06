import React from "react";
import TimeInput from "../components/TimeInput";
const QuickStart = () => {
  return (
    <div className="w-full h-full bg-gray-100 flex flex-col items-center ">
      <h1 className="font-bold text-2xl antialiased text-gray-800 text-center py-10">
        Set Time
      </h1>

      <TimeInput />

      <p className="text-sm text-gray-600 antialiased font-hairline mt-2 hover:text-blue-700 border-b border-gray-200 hover:border-blue-700 cursor-pointer rounded-sm">
        Switch to Mega Mode!
      </p>
    </div>
  );
};

export default QuickStart;
