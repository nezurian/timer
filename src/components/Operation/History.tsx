import React from "react";
import Tag from "./Tag";
import Commit from "./Commit";

type Props = {
  HistoryItem: {
    tags: { tag: string; color: string }[];
    time: { date: string; duration: number };
    message: string;
  };
};

export default function CategoryHist(props: Props) {
  return (
    <section className="flex flex-col pt-2">
      {/* Tags stay in a row */}
      <div className="flex flex-row items-center space-x-1">
        <Tag tags={props.HistoryItem.tags} />
      </div>
      {/* Time and Commit */}
      <Commit
        time={props.HistoryItem.time}
        message={props.HistoryItem.message}
      />

      <hr />
    </section>
  );
}
