import React from "react"
import {TimeDisplay} from "../../Util.comp";
import {Time} from "../../../types"

interface Display {
    time: Time
}

export default function Display (props: Display) {
    const time = props.time
    return (
        <div className="flex flex-row items-end mt-6 justify-between">
            <TimeDisplay name={"Hours"} value={time.hours}/>
            <p className="mb-3 antialiased text-gray-700 font-light text-2xl">
                :
            </p>
            <TimeDisplay name={"Minutes"} value={time.minutes}/>
            <p className="mb-3 antialiased text-gray-700 font-light text-2xl">
                :
            </p>
            <TimeDisplay name={"Seconds"} value={time.seconds}/>
        </div>
    )
}