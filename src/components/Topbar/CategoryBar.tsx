import React, { useState } from "react";
import CategoryMenu from "./CategoryMenu";
import { Category } from "../../types";

// Main Component for the Category Selection. It shows Category Title, and Category Color on hover.
// Informs Main View on the selected category to display category information and task management.

export default function CategoryBar() {
  // Dropdown Menu Handle.
  const [menu, setMenu] = useState<Boolean>(false);
  const handleDropdown = () => {
    !menu ? setMenu(true) : setMenu(false);
  };

  // Categories are currently consisted of only names and colors. The state of category displays these information on the bar.
  const [category, setCategory] = useState<Category>({
    title: "Select a Category",
    color: "gray",
  });

  // For UI purposes: Hovering a single category displays the name and the color on the top bar.
  const handleHover = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLButtonElement;

    // Currently clicking on a menu item doesn't have an effect, since the states are updated via hovering:
    setCategory({ title: target.id, color: target.name });
  };

  // For Dev purposes. On the production the categories will be derived from a DB, along with statistical data they contain.
  const categories: Category[] = [
    { title: "Study & Academics", color: "purple" },
    { title: "Research & Prototyping", color: "blue" },
    { title: "Sports & Excercise", color: "teal" },
    { title: "Leisure", color: "green" },
    { title: "Internet & Memes", color: "yellow" },
    { title: "Coding", color: "orange" },
    { title: "Project: Timer App", color: "red" },
  ];

  // For Tailwind CSS Purge functionality.
  // Info: https://tailwindcss.com/docs/controlling-file-size/ ---> "Don't use string concatenation to create class names"
  const BGcolor = `bg-${category.color}-200`;
  const BorderColor = `border-${category.color}-400`;

  return (
    <div
      onClick={handleDropdown}
      className={`rounded-lg relative ${BGcolor} ${BorderColor} cursor-pointer transition duration-300 ease-in no-outline w-64 border mx-64 antialiased text-center text-gray-800`}
    >
      {category.title}
      {!menu ? null : (
        <CategoryMenu handleHover={handleHover} categories={categories} />
      )}
    </div>
  );
}
