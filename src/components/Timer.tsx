import React, { useState, useEffect } from "react";
import { Button, Input } from "./Util.comp";

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
      else if (target.name === "minutes" || target.name === "seconds") {
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
    }, 10);
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
    <div className="flex flex-col justify-center items-center">
      <p className="text-xl text-gray-800 "> TIMER </p>
      <div className="flex flex-row">
        <Input name="hours" value={time.hours} onChange={inputValidation} />

        <Input name="minutes" value={time.minutes} onChange={inputValidation} />

        <Input name="seconds" value={time.seconds} onChange={inputValidation} />
      </div>
      <div className="w-full flex justify-center">
        {process ? (
          <Button
            name={"stop"}
            trigger={stopTimer}
            title={"STOP"}
            color={"text-gray-600"}
          />
        ) : (
          <Button
            name={"start"}
            trigger={startTimer}
            title={"START"}
            color={"text-gray-600"}
          />
        )}
      </div>
    </div>
  );
}
