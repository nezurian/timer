export type Time = {
  hours: number;
  minutes: number;
  seconds: number;
}

export type TDisplay = {
  name: string;
  value: number;
}

export type Category = {
  title: string;
  color: string;
}

export interface Category_Item extends Category {
  handleHover: (e: React.SyntheticEvent) => void;
}

export interface Category_Menu {
  categories: Category[];
  handleHover: (e: React.SyntheticEvent) => void;
}

export interface HistoryItem {
  tags: Tag[];
  time: CommitTime;
  message: string;
}

export type Tag = {
  tag: string;
  color: string;
};

export type CommitTime = {
  date: string;
  duration: number;
};

export interface CommitType  {
  time: CommitTime;
  message: string;
}


// All buttons in the program should be able to utilised with this interface. One button component to rule them all!
export interface TButton {
  trigger?: VoidFunction; // To trigger component specific function.
  name?: string; // Button Name
  title?: string; // To Display on the Button
  color?: string; // This color will be used for Border, Background and Text, on the component.
  textSize?: string; // Use Tailwind CSS text sizes.
  icon?: string; // Used with Material Icons. Requires icon name such as "add" or "playlist_play"...
  iconSize?: string // Use Tailwind CSS text sizes.
}