import React from "react";


import CategoryBar from "./CategoryBar";
import {Button} from "../Util.comp";

// Main Bar, located at the Top of the application.
// Selected Categories will be used to Log new tasks for the Category and show Data for the selected Info on the Main Screen.
export default function Topbar() {
    return (
        <div
            className="w-full px-2 py-1 border-b-2 border-gray-300 shadow-sm bg-gray-200 flex flex-row items-center justify-between">
            <Button name="pick-color" icon="add" color={"gray"} iconSize={"md"}/>
            {/* Category Selector. Includes a Bar (CategoryBar), A Dropdown Menu (CategoryMenu) and Single Menu Items (CategoryItem) */}
            <CategoryBar/>
            <Button name="pick-color" icon="settings" color={"gray"} iconSize={"md"}/>

        </div>
    );
}
