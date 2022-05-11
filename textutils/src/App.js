import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1c1f22";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm
          placeholderHeading="Enter your Text to Analyze here"
          mode={mode}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
