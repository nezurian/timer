import React, { useState } from "react";

type Props = {
  icon: string;
};

const Button = (props: Props) => {
  return (
    <button className="rounded-lg no-outline border-gray-300 hover:border-teal-600 focus:text-teal-800 focus:border-teal-800 focus:bg-teal-100 hover:text-teal-600 hover:shadow-xl transition duration-200 ease-in bg-gray-100 border py-1 px-2 my-1 flex flex-row text-gray-700 text-normal">
      <i className="material-icons">{props.icon}</i>
    </button>
  );
};

const Category = () => {
  const [menu, setMenu] = useState<Boolean>(false);
  const func = () => {
    !menu ? setMenu(true) : setMenu(false);
  };
  return (
    <div
      onClick={func}
      className="rounded-lg relative cursor-pointer no-outline border-gray-300 bg-gray-100 w-64 border mx-64 antialiased text-center text-gray-800"
    >
      Select a Category...
      {!menu ? null : <Menu />}
    </div>
  );
};

const Menu = () => {
  return (
    <div className="absolute w-full my-1 border-gray-300 rounded-lg shadow-xl bg-gray-100 border-gray-300 bg-gray-100">
      <CategoryItem name="Category Item I" color="purple" />
      <CategoryItem name="Category Item II" color="blue" />
      <CategoryItem name="Category Item III" color="teal" />
      <CategoryItem name="Category Item V" color="green" />
      <CategoryItem name="Category Item VI" color="yellow" />
      <CategoryItem name="Category Item VII" color="orange" />
      <CategoryItem name="Category Item XI" color="red" />
    </div>
  );
};

type CategoryItem = {
  name: string;
  color: string;
};
const CategoryItem = (props: CategoryItem) => {
  return (
    <button className={`w-full flex flex-row text-gray-700 py-1 items-center antialiased font-medium hover:text-${props.color}-700 transition duration-200 ease-in border border-gray-100 hover:border-${props.color}-700 hover:bg-${props.color}-100 rounded-lg`}>
      <div
        className={`w-4 h-4 rounded-full ml-4 bg-${props.color}-500 border`}
      ></div>
      <p className="pl-2"> {props.name}</p>
    </button>
  );
};

export { Button, Category };
