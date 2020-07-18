import React, {useState} from "react";
import History from "./History";
import Counter from "../Counter";
import Tagger from "./Tagger";
import { HistoryItem } from "../../types";

export default function Operation() {

  // A development mode DB example.
  // The whole information here will be saved to DB when the timer stops.
  const categoryHistory:HistoryItem[] = [
    {
      tags: [
        { tag: "Brainstorming", color: "green" },
        { tag: "Sketching", color: "purple" },
      ],
      time: { date: "16.06.2020", duration: 150000 },
      message:
        "I have spent a few hours for brainstorming and basic sketching for the creation of application idea.",
    },
    {
      tags: [{ tag: "Coding", color: "red" }],
      time: { date: "17.02.2020", duration: 765000 },
      message: "Coded UI Layout and simple mechanics.",
    },
    {
      tags: [
        { tag: "Sketching", color: "purple" },
        { tag: "Coding", color: "red" },
      ],
      time: { date: "17.02.2020", duration: 500 },
      message: " Worked on Timer & Tagger views. ",
    },
  ];

  // For Dev Purposes. Will not be used after DB implementation.
  const allTags: { tag: string; color: string }[] = [];
  categoryHistory.forEach((item) => {
    allTags.push(...item.tags);
  });

  return (
    <section className="flex flex-row h-full shadow-xl overflow-hidden ">
      {/* Left Side - Task history for the selected Category... */}
      <section className="overflow-y-scroll px-2 flex flex-col w-1/3">
        <p className="text-lg text-bold text-gray-800">Category History</p>
       
        {/* History should take the complete list of History items.  */}
        {categoryHistory.map((hist) => (
          <History props={hist} />
        ))}
      </section>

      {/* Right side - Create New Task */}
      <section className="flex w-2/3">
        <div className="flex flex-row  justify-center w-full">
          {/*<Tagger tags={allTags} />*/}
          <Counter />
        </div>
      </section>
    </section>
  );
}
