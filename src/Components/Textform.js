import React, { useState } from "react";
import copy from "copy-to-clipboard";
export default function Textform(props) {
  const { handleLogout } = props;
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    copy(text);
    alert("copied text");
  };
  const [text, setText] = useState("");
  return (
    <div>
      <section className="hero">
        <nav>
          <h2>Welcome </h2>
          <button onClick={handleLogout}> Logout</button>
        </nav>
      </section>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 " onClick={handleUpClick}>
          convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1 " onClick={handleLowClick}>
          convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1 " onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 " onClick={handleCopy}>
          Copy To Clipboard
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words,{text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
