import React from "react";
import Topbar from "../components/Menu/Topbar";
// import Module from "../components/Menu/Module";
export default function Menu() {
  return (
    <div className="flex flex-col w-full h-full">
      <Topbar />
      <div className="grid h-full grid-cols-3 flex-row flex-wrap"></div>
    </div>
  );
}
