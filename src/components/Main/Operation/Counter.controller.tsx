import React from "react"
import {Button} from "../../Util.comp";
import {Timer} from "../../../types";

interface Controller {
    timer: Timer
    controllerFunction: (e: React.SyntheticEvent) => void
}

export default function Controller(props: Controller) {
    const timer = props.timer;

    if (timer.running) {
        return (
            <div className={"flex flex-row space-x-2"}>
                <Button
                    name={"stop"}
                    trigger={props.controllerFunction}
                    color={"teal"}
                    iconSize={"3xl"}
                    icon={"stop"}
                />
                <Button
                    name={"pause"}
                    trigger={props.controllerFunction}
                    color={"teal"}
                    iconSize={"3xl"}
                    icon={"pause"}
                />
            </div>
        )
    } else if (timer.stopped) {
        return (
            <div
                className={"w-full border border-red-500 rounded-lg border-l-4 border-r-4 bg-red-200 items-center justify-center"}>
                <p className={"text-gray-800 antialiased text-center my-1 font-light text-red-800 text-md"}>Are you
                    sure you want to end the counter?</p>
                <div className={"flex flex-row space-x-1 my-2 justify-center"}>
                    <Button name={"end"} color={"red"} trigger={props.controllerFunction} icon={"check"}
                            iconSize={"md"}/>
                    <Button name={"pause"} color={"red"} trigger={props.controllerFunction} icon={"block"}
                            iconSize={"md"}/>
                </div>
            </div>
        )
    } else {
        return (
            <Button
                name={"start"}
                trigger={props.controllerFunction}
                color={"teal"}
                iconSize={"3xl"}
                icon={"play_arrow"}

            />
        )
    }
}