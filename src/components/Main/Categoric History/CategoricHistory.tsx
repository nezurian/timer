import React from "react"
import History from "../Operation/History";
import {HistoryItem} from "../../../types";

export default function CategoricHistory() {
    // A development mode DB example.
    // The whole information here will be saved to DB when the timer stops.
    const categoryHistory: HistoryItem[] = [
        {
            tags: [
                {tag: "Brainstorming", color: "green"},
                {tag: "Sketching", color: "purple"},
            ],
            time: {date: "16.06.2020", duration: 150000},
            message:
                "I have spent a few hours for brainstorming and basic sketching for the creation of application idea.",
        },
        {
            tags: [{tag: "Coding", color: "red"}],
            time: {date: "17.02.2020", duration: 765000},
            message: "Coded UI Layout and simple mechanics.",
        },
        {
            tags: [
                {tag: "Sketching", color: "purple"},
                {tag: "Coding", color: "red"},
            ],
            time: {date: "17.02.2020", duration: 500},
            message: " Worked on Timer & Tagger views. ",
        },
    ];

    return (
        <section className="overflow-y-scroll px-2 flex w-5/12 flex-col">
            <p className="text-lg text-bold text-gray-800">Category History</p>

            {/* History should take the complete list of History items.  */}
            {categoryHistory.map((hist) => (
                <History props={hist}/>
            ))}
        </section>
    )
}

