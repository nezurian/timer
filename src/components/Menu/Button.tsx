import React from "react";

type Props = {
  icon: string;
};

// Buttons located at the top left and top right of the Topbar. Lacks OnClick functionality.
export default function Button(props: Props) {
  return (
    <button className="rounded-lg no-outline border-gray-300 hover:border-teal-600 focus:text-teal-800 focus:border-teal-800 focus:bg-teal-100 hover:text-teal-600 hover:shadow-xl transition duration-200 ease-in bg-gray-100 border py-1 px-2 my-1 flex flex-row text-gray-700 text-normal">
      <i className="material-icons">{props.icon}</i>
    </button>
  );
}
