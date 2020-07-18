import React from "react";
import ChartA from "./ChartA/ChartA";
import ChartB from "./ChartB/ChartB";
import History from "./History/History";
import Counter from "./Operation/Counter";
import CategoricHistory from "./Categoric History/CategoricHistory"

export default function Main() {
    return (
        // Main Frame
        <div className="flex flex-row px-2 h-full">
            <div className="flex flex-col py-1 h-full w-3/4">
                {/* Top Bar */}
                <section className="flex flex-row h-full shadow-xl overflow-hidden ">

                    <CategoricHistory/>

                    <Counter/>

                </section>

                {/*Bottom Bar*/}
                <section className="flex flex-row  py-4 shadow-xl h-full">
                    <ChartA/>
                    <ChartB/>
                </section>
            </div>

            {/*Left Side Bar: History*/}
            <section className="flex py-1 w-1/4">
                <History/>
            </section>
        </div>
    );
}
