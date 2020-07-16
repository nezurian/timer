import React from "react";
import History from "./History";
import Timer from "../Timer";
import Tagger from "./Tagger";

export default function Operation() {
  // Type for the saved history events to the database. ** Duration can be calculated via Date() options.
  type CategoryHistory = {
    tags: { tag: string; color: string }[];
    time: { date: string; duration: number };
    message: string;
  };

  // A development mode DB example.
  // The whole information here will be saved to DB when the timer stops.
  const categoryHistory: CategoryHistory[] = [
    {
      tags: [
        { tag: " no:1", color: "blue" },
        { tag: "Tagiti", color: "green" },
      ],
      time: { date: "16.06.2020", duration: 150000 },
      message: "This is a testing message. 1-2-3 What'is going on?",
    },
    {
      tags: [{ tag: "Testing Tag no:2", color: "red" }],
      time: { date: "17.02.2020", duration: 765000 },
      message: "Not so important second commit message. What is going on? ",
    },
    {
      tags: [
        { tag: "Change Time", color: "yellow" },
        { tag: "Date", color: "purple" },
      ],
      time: { date: "17.02.2020", duration: 500 },
      message: " I really have to master Date(). ",
    },
  ];

  const allTags: {tag: string, color: string}[] = [];
  categoryHistory.forEach((item) => allTags.push(...item.tags));


  return (
    <section className="flex flex-row h-full shadow-xl overflow-hidden ">
      {/* Left Side - Task history for the selected Category... */}
      <section className="overflow-y-scroll px-2 flex flex-col w-1/3">
        <p className="text-lg text-bold text-gray-800">Category History</p>
        {/* History should take the complete list of Histoyry items.  */}
        {categoryHistory.map((hist) => (
          <History HistoryItem={hist} />
        ))}
      </section>

      {/* Right side - Create New Task */}
      <section className="flex w-2/3">
        <div className="flex flex-row w-full">
          <Tagger tags={allTags} />
          <Timer />
        </div>
      </section>
    </section>
  );
}
