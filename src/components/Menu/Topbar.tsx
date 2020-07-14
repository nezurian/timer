import React from "react";
import Button from "./Button";
import CategoryBar from "./CategoryBar";

// Selector Bar, located at the Center Top of the App. 
// Selected Categories will be used to Log new tasks for the Category and show Data for the selected Info on the Main Screen.
export default function Topbar() {
  return (
    <div className="w-full px-2 border-b-2 border-gray-300 shadow-sm bg-gray-200 flex flex-row items-center justify-between">
      <Button icon={"add"} />
      {/* Category Selector. Includes a Bar (CategoryBar), A Dropdown Menu (CategoryMenu) and Single Menu Items (CategoryItem) */}
      <CategoryBar />
      <Button icon={"settings"} />
    </div>
  );
}
