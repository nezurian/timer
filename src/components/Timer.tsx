import React, { useState, useEffect } from "react";

export default function Timer() {
  interface Time {
    hours: number;
    minutes: number;
    seconds: number;
  }

  // Default State.
  const [time, setTime] = useState<Time>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Used with UseEffect to control Starting and Stopping the timer.
  const [process, setProcess] = useState<Boolean>(false);

  // Input Validation: Hours should be Max=24, min=0, Minutes & Seconds should be max=59, min=0
  const inputValidation = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;

    // Disables non-integer inputs. Function proceeds only if input is a 'positive' number:
    const regex: RegExp = /(^[0-9]+$|^$)/;
    if (regex.test(target.value) === true) {
      // TS still complains about 'target.value' can be both String or Number. "TS2365".
      // Since I've made sure via RegExp that target.value is an Int indeed, parseInt solves the type error.
      const value: number = parseInt(target.value);
      if (target.name === "hours") {
        // Hours can not be more than 23.
        if (value > 23) {
          return;
        } else handleInput(e);
      }
      // Minutes & Seconds can not be more than 59.
      if (target.name === "minutes" || target.name === "seconds") {
        if (value > 59) {
          return;
          // If everything validates;
        } else handleInput(e);
      }
    }
  };

  // Updates State --> Time Input for Hours, Minutes and Seconds.
  const handleInput = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    setTime({ ...time, [target.name]: target.value });
  };

  // Counter Function built with setTimeout( , 1000ms)
  const counter = (h: number, m: number, s: number) => {
    setTimeout(() => {
      // Recursive function proceeds until seconds reache to 0.
      if (s !== 0) {
        setTime({ hours: h, minutes: m, seconds: s - 1 });
        // If we have minutes, then we'll have to decrease minutes when seconds reach to zero.
      } else if (s === 0 && m > 0) {
        // Seconds hit to 0, so it should display 59 a second later, and minute should be decreased.
        setTime({
          ...time,
          minutes: m - 1,
          seconds: 59,
        });
        // The same logic proceeds, only for hours this time.
      } else if (s === 0 && m === 0 && h > 0) {
        setTime({ hours: h - 1, minutes: 59, seconds: 59 });
      } else {
        setProcess(false);
        console.log("Time is up!");
      }
    }, 1000);
  };

  useEffect(() => {
    if (process) counter(time.hours, time.minutes, time.seconds);
  });

  // Starts counter function via Start Button.
  const startTimer = () => {
    setProcess(true);
  };
  // Stops the Counter.
  const stopTimer = () => {
    setProcess(false);
  };

  return (
    <div className="flex flex-col px-20">
      <div className="flex flex-row">
        <input
          name="hours"
          value={time.hours}
          onChange={inputValidation}
          className="bg-gray-100 w-1/3 mx-1 focus:border-blue-300 outline-none border border-gray-200 text-center text-gray-500 rounded-lg"
        ></input>
        <p>:</p>
        <input
          name="minutes"
          value={time.minutes}
          onChange={inputValidation}
          className="bg-gray-100 w-1/3 mx-1 outline-none focus:border-blue-300 border border-gray-200 text-center text-gray-500  rounded-lg"
        ></input>
        <p>:</p>
        <input
          name="seconds"
          value={time.seconds}
          onChange={inputValidation}
          className="bg-gray-100 w-1/3 mx-1 outline-none focus:border-blue-300 border border-gray-200 text-center text-gray-500  rounded-lg"
        ></input>
      </div>
      {process ? (
        <button
          name="Stop"
          onClick={stopTimer}
          className="px-1 h-12 border border-red-600 outline-none rounded-full bg-red-700 text-gray-200 text-xl mt-10 shadow-xl"
        >
          STOP
        </button>
      ) : (
        <button
          name="Start"
          onClick={startTimer}
          className="px-1 h-12 border border-blue-300 outline-none rounded-full bg-green-500 text-gray-200 text-xl mt-10 shadow-xl"
        >
          START
        </button>
      )}
    </div>
  );
}
