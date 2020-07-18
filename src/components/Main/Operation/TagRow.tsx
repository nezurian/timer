import React from "react";
import { Tag } from "../../../types";

type TagProps = {
  tags: Tag[];
};

// Shows Tags
export default function TagRow(props: TagProps) {
  return (
    <div className="flex flex-row flex-wrap">
      {props.tags.map((tag) => {
        return (
          <div
            className={`px-2 py-3 h-4 my-1 mr-1 rounded-lg bg-${tag.color}-200 flex items-center justify-center text-gray-700 text-xs font-hairline`}
          >
            {tag.tag}
          </div>
        );
      })}
    </div>
  );
}
