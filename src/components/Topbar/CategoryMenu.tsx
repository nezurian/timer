import React from 'react'
import CategoryItem from "./CategoryItem"

type MenuProps = {
  categories: { title: string; color: string }[];
  handleHover: (e: React.SyntheticEvent) => void;
};

// Second level child to CategoryBar. Displays Single CategoryItems as a Dropdown Menu. 
export default function CategoryDDMenu(props: MenuProps) {
  return (
    <div className="absolute w-full my-1 border-gray-300 rounded-lg shadow-xl bg-gray-100 border-gray-300 bg-gray-100">
      {/* categories are derived from CategoryBar.tsx */}
      {props.categories.map((cat) => {
        return (
          <CategoryItem
            id={cat.title}
            color={cat.color}
            handleHover={props.handleHover}
          />
        );
      })}
    </div>
  );
}
