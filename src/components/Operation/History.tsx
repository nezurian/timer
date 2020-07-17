import React from "react";
import TagRow from "./TagRow";
import Commit from "./Commit";
import { HistoryItem } from "../../types"

// This should not be necessary but I couldn't work it out. 
interface Props {
  props: HistoryItem
};

// I should be able to put Category_History as proptype. But it creates TS problems.
export default function CategoryHist(props: Props) {
  return (
    <section className="flex flex-col pt-2">
      <Commit
        time={props.props.time}
        message={props.props.message}
      />
      <TagRow tags={props.props.tags} />
      <hr className="mt-2" />
    </section>
  );
}
