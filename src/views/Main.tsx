import React from "react";
import Operation from "../components/Main/Operation";
import ChartA from "../components/Main/ChartA";
import ChartB from "../components/Main/ChartB";
import History from "../components/Main/History";

export default function Main() {
  return (
    // Main Frame
    <section className="grid grid-cols-6 grid-rows-2 gap-2 py-2 px-2 border-2 border-teal-500 h-full">
      <Operation />
      <History />
      <ChartA />
      <ChartB />
      
    </section>
  );
}

