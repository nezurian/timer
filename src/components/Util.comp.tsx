import React from "react";

interface Button {
  trigger: VoidFunction;
  name: string;
  title: string;
  color: string;
}

const Button = (props: Button) => {
  return (
    <button
      name="props.name"
      onClick={props.trigger}
      className={`px-8 h-10 outline-none rounded-full ${props.color} bg-gray-400 font-bold text-xl mt-10 shadow-xl`}
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
    <div className="flex flex-col w-1/3 items-center justify-center">
      <p className="text-lg text-gray-400 font-hairline capitalize">
        {props.name}
      </p>
      <input
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className="bg-gray-100 w-1/3 mx-1 outline-none text-3xl text-center text-gray-500  rounded-lg"
      ></input>
    </div>
  );
};

interface TDisplay {
  name: string;
  value: number;
}

const TimeDisplay = (props: TDisplay) => {

  

  return (
    <div className="flex flex-col text-center">
      <p className="text-gray-600 antialiased text-sm font-light">{props.name}</p>
      <p className="text-gray-800 antialiased text-2xl font-light">{props.value === 0 ? "00" : props.value < 10 ? "0" + (props.value) : props.value}</p>
    </div>
  );
};

export { Button, Input, TimeDisplay };
