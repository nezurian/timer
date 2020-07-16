import React from "react";

type TagProps = {
  tags: { tag: string; color: string }[];
};

// Shows Tags
export default function Tag(props: TagProps) {
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
