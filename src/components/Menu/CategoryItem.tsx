import React from "react";
type CategoryItem = {
  id: string;
  color: string;
  handleHover: (e: React.SyntheticEvent) => void;
};
// Third level child of CategoryBar. Displays a single Category Item to be shown. 
export default function CategoryItem(props: CategoryItem) {
  return (
    <button
      id={props.id}
      name={props.color}
      onMouseEnter={props.handleHover}
      className={`w-full flex flex-row text-gray-700 py-1 items-center antialiased font-medium hover:text-${props.color}-700 transition duration-200 ease-in border border-gray-100 hover:border-${props.color}-700 hover:bg-${props.color}-100 rounded-lg`}
    >
      <div
        className={`w-4 h-4 rounded-full ml-4 bg-${props.color}-500 border`}
      ></div>
      <p className="pl-2"> {props.id}</p>
    </button>
  );
}
