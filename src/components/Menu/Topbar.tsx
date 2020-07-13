import React from "react";
import { Button, Category } from "./Button";

export default function Topbar() {
  return (
    <div className="w-full px-2 border-b-2 border-gray-300 shadow-sm bg-gray-200 flex flex-row items-center justify-between">
      <Button icon={"add"} />
      <Category />
      <Button icon={"settings"} />
    </div>
  );
}
