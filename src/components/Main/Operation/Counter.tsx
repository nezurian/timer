import React, {useState, useEffect} from "react";
import {Time, Timer} from "../../../types";
import Controller from "./Counter.Controller"
import Display from "./Counter.Display"
import EndTask from "./EndTask";


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

    // To pass down to Counter.Controller
    const controllerFunction = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLButtonElement
        const name = target.name

        if (name === "reset") resetTimer();
        else if (name === "start") startTimer();
        else if (name === "pause") pauseTimer();
        else if (name === "stop") stopTimer();
        else if (name === "end") endTimer();
    }

    return (
        <div className="flex flex-col w-7/12">
            <p className="text-xl text-gray-800 text-center antialiased font-normal text-3xl ">
                {timer.running ? "Running Timer..." : timer.initial ? "Start Timing!" : timer.paused ? "Paused!" : timer.stopped ? "Stopped!" : null}
            </p>
           <Display time={time} />


            <div className="w-full flex mt-4 justify-center">
                <Controller timer={timer} controllerFunction={controllerFunction}/>
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
