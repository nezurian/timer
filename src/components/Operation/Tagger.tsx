import React from "react";

type TagProps = {
  tags: { tag: string; color: string }[];
};

export default function Tagger(props: TagProps) {
  return (
    <div className="w-1/2 flex flex-col overflow-auto px-2">
      <p className="text-xl text-gray-800 py-2 font-normal antialiased text-xl ">
        Select Tags...
      </p>
      <div className="flex flex-col flex-wrap">
        {props.tags.map((tag) => {
          return (
            <div className="flex flex-row items-center">
              <input type="checkbox"></input>
              <div
                className={`px-2 ml-2 py-3 h-4 my-1 mr-1 rounded-lg bg-${tag.color}-200 flex items-center justify-center text-gray-700 text-xs font-hairline`}
              >
                {tag.tag}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
