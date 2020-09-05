import React, {useState} from "react";
import Main from "./components/Main/Main";
import Topbar from "./components/Topbar/Topbar";


function App() {
// IT can be wise to have the Categorical Info here.

    const [state, setState] = useState({
        categorySelected: false, // False -  Please select a Category to begin working!
        // After the selection of the category, the whole page loads. Before that - an empty introductory screen, maybe?
        // List of categories will be sent to Topbar, a selected category will be sent to Main with all the information.

        // This is the list of all categories.
        categories: [{
            id: 0, // ID for easy selection.
            name: "", // Name of the Category.
            color: "", // A color of the Category. Tailwind Colors will be used.
            tags: [{name: "", color: ""}], // Each category has an array of tags associated with it.
            history: [{ tags: "", date: "", duration: "", message: ""}] // An array of tasks.
        }],

        // We'll be sending the whole DB info to <Main> since we have complete history and chart infos.
        //  So a separation of a selected category can be done in Main with the id; and sent to related components.
        selectedCategory: {id: ""},
    });

    return (
        <div className="flex flex-col h-full max-w-full">
            {/*Top bar determines Main Views: New Task (?), Settings Page and Category Selection.*/}
            {/*Main component must be informed about the Selected Category.*/}
            <Topbar />
            {/* Shows both All Categorical information and Category Specific Information. */}
            <Main/>
        </div>
    );
}

export default App;
