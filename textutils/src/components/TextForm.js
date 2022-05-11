import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newTextUp = text.toUpperCase();
    setText(newTextUp);
  };

  const handleLowClick = () => {
    let newTextLow = text.toLowerCase();
    setText(newTextLow);
  };

  const handleCapClick = () => {
    let capText = text.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
    setText(capText);
  };

  const handleClearClick = () => {
    let newTextLow = "";
    setText(newTextLow);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  //other programmers logic to add new functionalities

  const CopyBtn = () => {
    let textFromTextArea = document.getElementById("my-box");
    textFromTextArea.select();
    navigator.clipboard.writeText(textFromTextArea.value);
  };

  const RmBtn = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1 className="my-3">Enter text to Analyze</h1>

          <textarea
            className="form-control"
            id="my-box"
            rows="8"
            value={text}
            onChange={handleOnChange}
            placeholder={props.placeholderHeading}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCapClick}>
          Capitalize First Letter
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>
          Clear Text
        </button>

        {/* Integrating others logic */}
        <button className="btn btn-primary mx-3" onClick={CopyBtn}>
          Copy Text
        </button>

        <button className="btn btn-primary mx-3" onClick={RmBtn}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container">
        <h2 className="my-3 ">Text Summary</h2>
        <p className="mx-3">
          Your text has {text.split(" ").length} words and {text.length}{" "}
          characters.
        </p>
        <p className="mx-3">
          It is an {0.008 * text.split(" ").length} minutes read.
        </p>

        <h2 className="my-3 ">Preview of Text</h2>
        <p className="mx-3 ">{text}</p>
      </div>
    </>
  );
}

export default TextForm;
