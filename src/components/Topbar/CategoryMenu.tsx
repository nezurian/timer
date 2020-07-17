import React from 'react'
import CategoryItem from "./CategoryItem"
import { Category_Menu } from "../../types";



// Second level child to CategoryBar. Displays Single CategoryItems as a Dropdown Menu. 
export default function CategoryMenu(props: Category_Menu) {
  return (
    <div className="absolute w-full my-1 border-gray-300 rounded-lg shadow-xl bg-gray-100 border-gray-300 bg-gray-100">
      {/* categories are derived from CategoryBar.tsx */}
      {props.categories.map((cat) => {
        return (
          <CategoryItem
            title={cat.title}
            color={cat.color}
            handleHover={props.handleHover}
          />
        );
      })}
    </div>
  );
}
