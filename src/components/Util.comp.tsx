import React from "react";
import {TDisplay} from "../types";
import {TButton} from "../types";

const Button = (props: TButton) => {
    const color = props.color;
    const BGColor = `bg-${color}-200`;
    const BorderColor = `border-${color}-400`
    const TextColor = `text-${color}-700`;
    const TextSize = `text-${props.textSize}`;
    const IconSize = `text-${props.iconSize}`;

    return (
        <button
            name={props.name}
            onClick={props.trigger}
            className={`border no-outline flex items-center outline-none rounded-full ${BorderColor} ${BGColor} ${TextColor} font-bold ${TextSize} shadow-xl`}
        >
            {/* If an Icon is provided, than we'll have either only an Icon button, or a button with Icon and Text, next to each other.*/}
            {props.icon ? (
                <div className="flex flex-row px-2">
                    <i className={`material-icons flex items-center ${IconSize}`}>{props.icon}</i>
                    {/* If a Title is provided along with Icon they are placed next to each other. */}
                    {props.title ? <p className={`antialiased   font-light pr-1 ${TextSize}`}> {props.title} </p> : null }
                </div>
            ) : props.title}
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
            />
        </div>
    );
};

const TimeDisplay = (props: TDisplay) => {
    return (
        <div className="flex flex-col w-full text-center">
            <p className="text-gray-600 antialiased text-md font-light">
                {props.name}
            </p>
            <p className="text-gray-800 antialiased text-4xl font-light">
                {props.value === 0
                    ? "00"
                    : props.value < 10
                        ? "0" + props.value
                        : props.value}
            </p>
        </div>
    );
};

export {Button, Input, TimeDisplay};
