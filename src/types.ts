import {SyntheticEvent} from "react";


export interface State {
    categorySelected: boolean, // False -  Please select a Category to begin working!
    // After the selection of the category, the whole page loads. Before that - an empty introductory screen, maybe?
    // List of categories will be sent to Topbar, a selected category will be sent to Main with all the information.

    // This is the list of all categories.
    categories: [{
        id: number, // ID for easy selection.
        name: string, // Name of the Category.
        color: string, // A color of the Category. Tailwind Colors will be used.
        tags: Tag[], // Each category has an array of tags associated with it.
        history: HistoryItem[] // An array of tasks.
    }],

    // We'll be sending the whole DB info to <Main> since we have complete history and chart infos.
    //  So a separation of a selected category can be done in Main with the id; and sent to related components.
    selectedCategory: { id: "" },
}

export type Time = {
    hours: number;
    minutes: number;
    seconds: number;
}

export interface Timer {
    initial: boolean,
    running: boolean,
    stopped: boolean,
    paused: boolean,
    ended: boolean,
}

export type TDisplay = {
    name: string;
    value: number;
}

export type Category = {
    title: string;
    color: string;
}

// This should be removed from here and implemented in the component itself.
export interface Category_Item extends Category {
    handleHover: (e: React.SyntheticEvent) => void;
}

export interface Category_Menu {
    categories: Category[];
    handleHover: (e: React.SyntheticEvent) => void;
}

export interface HistoryItem { // Have to Refactor into Tasks. A task consists of tags, time (Duration & Date) and a message.
    // categoryID: number  --- We also have to implement a categoryID to differentiate.
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

export interface CommitType {
    time: CommitTime;
    message: string;
}


// All buttons in the program should be able to utilised with this interface. One button component to rule them all!
export interface TButton {
    trigger?: (e: SyntheticEvent) => void
    name?: string; // Button Name
    title?: string; // To Display on the Button
    color?: string; // This color will be used for Border, Background and Text, on the component.
    textSize?: string; // Use Tailwind CSS text sizes.
    icon?: string; // Used with Material Icons. Requires icon name such as "add" or "playlist_play"...
    iconSize?: string; // Use Tailwind CSS text sizes.
    testID?: string
}