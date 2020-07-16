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
      <Commit
        time={props.HistoryItem.time}
        message={props.HistoryItem.message}
      />
      <Tag tags={props.HistoryItem.tags} />
      <hr className="mt-2" />
    </section>
  );
}
