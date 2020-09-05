import React from "react";
import {Category_Item} from "../../types";

// Third level child of CategoryBar. Displays a single Category Item to be shown.
export default function CategoryItem(props: Category_Item) {
    return (
        <button
            data-cy={"Topbar-CMenu-CItem"}
            id={props.title}
            name={props.color}
            onMouseEnter={props.handleHover}
            className={`w-full flex space-x-4 text-gray-700 py-1 items-center antialiased font-medium hover:text-${props.color}-700 transition duration-200 ease-in border border-gray-100 hover:border-${props.color}-700 hover:bg-${props.color}-100 rounded-lg`}
        >
            <div
                className={`w-4 h-4 rounded-full ml-4 mr-4 bg-${props.color}-500 border`}
            > </div>
            {props.title}
        </button>
    );
}
