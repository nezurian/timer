import React from "react";
import Main from "./views/Main"
import Topbar from "./views/Topbar"

function App() {
  return (
    <div className="h-screen max-w-full flex flex-col">
    <Topbar />
    <Main />
    </div>
  );
}

export default App;
