import React from "react";

interface Button {
  trigger: VoidFunction;
  name: string;
  title: string;
  BGcolor: string;
  HovBGcolor: string;
}

const Button = (props: Button) => {
  return (
    <button
      name="props.name"
      onClick={props.trigger}
      className={`px-3 h-10 outline-none rounded-full ${props.BGcolor} ${props.HovBGcolor} text-gray-200 text-xl mt-10 shadow-xl`}
    >
      {props.title}
    </button>
  );
};

interface Input {
  onChange: (e: React.SyntheticEvent) => void;
  name: string;
  value: number;
}

const Input = (props: Input) => {
  return (
    <input
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      className="bg-gray-100 w-1/3 mx-1 outline-none focus:border-blue-300 border border-gray-200 text-center text-gray-500  rounded-lg"
    ></input>
  );
};

export { Button, Input };
