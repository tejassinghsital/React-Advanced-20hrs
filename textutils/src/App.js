import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#1c1f22";
  //     showAlert("Dark Mode has been enabled", "success");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light Mode has been enabled", "success");
  //   }
  // };

  //different mode themes

  const lightToggle = () => {
    setMode("light");
    document.body.style.backgroundColor = "white";
    showAlert("Light Mode has been enabled", "success");
    document.title = "TextUtils - Light Mode";
  };

  const darkToggle = () => {
    setMode("dark");
    document.body.style.backgroundColor = "#1c1f22";
    showAlert("Dark Mode has been enabled", "success");
    document.title = "TextUtils - Dark Mode";
  };

  const blueToggle = () => {
    setMode("blue");
    document.body.style.backgroundColor = "#0c1e34";
    showAlert("Blue Mode has been enabled", "success");
    document.title = "TextUtils - Blue Mode";
  };

  const greenToggle = () => {
    setMode("green");
    document.body.style.backgroundColor = "#104647";
    showAlert("Green Mode has been enabled", "success");
    document.title = "TextUtils - Green Mode";
  };

  return (
    <>
      <Navbar
        title="TEXTUTILS"
        mode={mode}
        // toggleMode={toggleMode}
        lightToggle={lightToggle}
        darkToggle={darkToggle}
        blueToggle={blueToggle}
        greenToggle={greenToggle}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          placeholderHeading="Enter your Text to Analyze here"
          mode={mode}
          showAlert={showAlert}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
