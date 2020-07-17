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
};
