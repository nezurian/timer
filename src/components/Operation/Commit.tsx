import React from "react";

type CommitProps = {
  time: { date: string; duration: number };
  message: string;
};

// Needs Time Modifications.
export default function Commit(props: CommitProps) {
  return (
    <div className="flex flex-col my-2">
      <div className="flex flex-row space-x-2">
        <p className="text-xs font-light antialiased text-gray-700 ">
          {props.time.date}
        </p>
        <p className="text-xs font-light antialiased text-gray-700">
          {props.time.duration} ms
        </p>
      </div>
      <p className="text-xs font-normal antialiased text-gray-800">
        {props.message}
      </p>
    </div>
  );
}
