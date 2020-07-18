import React, {useState, useEffect} from "react";
import {TimeDisplay} from "./Util.comp";
import {Time, Timer} from "../types";
import {Button} from "./Util.comp"

export default function Counter() {
    // Default State.
    const [time, setTime] = useState<Time>({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Used with UseEffect to control Starting and Stopping the timer.
    const [timer, setTimer] = useState<Timer>({
        initial: true,
        running: false,
        paused: false,
        stopped: false,
        ended: false
    })

    // Counter Function built with setTimeout( , 1000ms)
    const counter = (h: number, m: number, s: number) => {
        setTimeout(() => {
            // Recursive function proceeds until seconds reach to 0.
            if (s < 59) {
                setTime({hours: h, minutes: m, seconds: s + 1});
                // If we have minutes, then we'll have to decrease minutes when seconds reach to zero.
            } else if (s === 59 && m < 59) {
                // Seconds hit to 0, so it should display 59 a second later, and minute should be decreased.
                setTime({
                    ...time,
                    minutes: m + 1,
                    seconds: 0,
                });
                // The same logic proceeds, only for hours this time.
            } else if (s === 59 && m === 59) {
                setTime({hours: h + 1, minutes: 0, seconds: 0});
            }
        }, 1000);
    };

    useEffect(() => {
        if (timer.running) counter(time.hours, time.minutes, time.seconds);
    });


    // Resets the counter.
    const resetTimer = () => {
        setTimer({initial: true, running: false, paused: false, stopped: false, ended: false});
    }
    // Starts the Timer function.
    const startTimer = () => {
        setTimer({initial: false, running: true, paused: false, stopped: false, ended: false});
    };
    // Pauses the Counter.
    const pauseTimer = () => {
        setTimer({initial: false, running: false, paused: true, stopped: false, ended: false});
    };
    // Stops the Counter.
    const stopTimer = () => {
        setTimer({initial: false, running: false, paused: false, stopped: true, ended: false});
    };
    // Ends the countdown & resets timer.
    const endTimer = () => {
        setTimer({initial: false, running: false, paused: false, stopped: false, ended: true});
    }

    const controller = () => {
        if (timer.running) {
            return (
                <div className={"flex flex-row space-x-2"}>
                    <Button
                        name={"stop"}
                        trigger={stopTimer}
                        color={"teal"}
                        iconSize={"3xl"}
                        icon={"stop"}
                    />
                    <Button
                        name={"pause"}
                        trigger={pauseTimer}
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
                        <Button name={"yes"} trigger={endTimer} color={"red"} icon={"check"} iconSize={"md"}/>
                        <Button name={"no"} trigger={pauseTimer} color={"red"} icon={"block"} iconSize={"md"}/>
                    </div>
                </div>
            )
        } else {
            return (
                <Button
                    name={"start"}
                    trigger={startTimer}
                    color={"teal"}
                    iconSize={"3xl"}
                    icon={"play_arrow"}

                />
            )
        }
    }

    return (
        <div className="flex flex-col w-1/2">
            <p className="text-xl text-gray-800 text-center antialiased font-normal text-3xl ">
                {timer.running ? "Running Timer..." : timer.initial ? "Start Timing!" : timer.paused ? "Paused!" : timer.stopped ? "Stopped!" : null}
            </p>
            <div className="flex flex-row items-end mt-2 justify-between">
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
            <div className="w-full flex mt-4 justify-center">
                {controller()}
            </div>
        </div>
    );
}

// INPUT VALIDATION & INPUT DEPRECATED.

//  // Updates State --> Time Input for Hours, Minutes and Seconds.
// const handleInput = (e: React.SyntheticEvent) => {
//   let target = e.target as HTMLInputElement;
//   setTime({ ...time, [target.name]: target.value });
// };

// // Input Validation: Hours should be Max=24, min=0, Minutes & Seconds should be max=59, min=0
// const inputValidation = (e: React.SyntheticEvent) => {
//   const target = e.target as HTMLInputElement;

//   // Disables non-integer inputs. Function proceeds only if input is a 'positive' number:
//   const regex: RegExp = /(^[0-9]+$|^$)/;
//   if (regex.test(target.value) === true) {
//     // TS still complains about 'target.value' can be both String or Number. "TS2365".
//     // Since I've made sure via RegExp that target.value is an Int indeed, parseInt solves the type error.
//     const value: number = parseInt(target.value);
//     if (target.name === "hours") {
//       // Hours can not be more than 23.
//       if (value > 23) {
//         return;
//       } else handleInput(e);
//     }
//     // Minutes & Seconds can not be more than 59.
//     else if (target.name === "minutes" || target.name === "seconds") {
//       if (value > 59) {
//         return;
//         // If everything validates;
//       } else handleInput(e);
//     }
//   }
// };
