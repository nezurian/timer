import React from "react";
import Operation from "./Operation/Operation";
import ChartA from "./ChartA/ChartA";
import ChartB from "./ChartB/ChartB";
import History from "./History/History";

export default function Main() {
  return (
    // Main Frame
    <div className="flex flex-row px-2  h-full">
      <div className="flex flex-col py-1 h-full w-3/4">
        <Operation />
        
        <div className="flex flex-row  py-4 shadow-xl h-full">
          <ChartA />
          <ChartB />
        </div>
      
      </div>
      
      <div className="flex py-1 w-1/4">
        <History />
      </div>
    </div>
  );
}
