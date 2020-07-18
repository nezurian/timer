import React from "react";
import {Tag} from "../../types";
import {Button} from "../Util.comp"

interface Props {
    tags: Tag[];
}

export default function Tagger(props: Props) {
    return (
        <div className="w-1/2 flex flex-col overflow-auto px-2">
            <p className="text-xl text-gray-800 py-2 font-normal antialiased text-xl ">
                Select Tags...
            </p>
            <div className="flex flex-col flex-wrap">
                {props.tags.map((tag) => {
                    return (
                        <div className="flex flex-row items-center">
                            <input type="checkbox"/>
                            <div
                                className={`px-2 ml-2 py-3 h-4 my-1 mr-1 rounded-lg bg-${tag.color}-200 flex items-center justify-center text-gray-700 text-xs font-hairline`}
                            >
                                {tag.tag}</div>
                        </div>
                    );
                })}
                <div className="flex flex-row w-full justify-between space-x-1 items-center">
                    <div className="flex items-center flex-row">
                        <input type="checkbox"/>
                        <input
                            type="text"
                            className=" ml-2 w-24 text-gray-800 px-1 font-hairline text-sm antialiased h-7 no-outline focus:border-teal-500 border rounded-lg"
                        />
                    </div>
                    <div className="flex space-x-1 flex-row">
                        <Button name="pick-color" icon="color_lens" color={"teal"} iconSize={"md"}/>
                        <Button name="add-tag" icon="add" iconSize={"md"} color={"teal"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
