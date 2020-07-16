import React from "react";
import Main from "./components/Main";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="flex flex-col h-full max-w-full">
      <Topbar />
      <Main />
    </div>
  );
}

export default App;
