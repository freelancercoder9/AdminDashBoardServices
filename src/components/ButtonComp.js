import React, { useState } from "react";
import "../styles.css";

const ButtonComp = (props) => {
  const [buttonValue, setButtonValue] = useState(1);

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
      <button
        className="left-button-option"
        style={{
          backgroundColor: buttonValue === 1 ? "red" : "blue",
        }}
        onClick={() => {
          setButtonValue(1);
          props.onClickLeftNav(1);
        }}
      >
        APP INSTANCE
      </button>
      <button
        className="left-button-option"
        style={{
          backgroundColor: buttonValue === 3 ? "red" : "blue",
        }}
        onClick={() => {
          setButtonValue(3);
          props.onClickLeftNav(3);
        }}
      >
        API List
      </button>
      <button
        className="left-button-option"
        style={{
          backgroundColor: buttonValue === 4 ? "red" : "blue",
        }}
        onClick={() => {
          setButtonValue(4);
          props.onClickLeftNav(4);
        }}
      >
        Consumer List
      </button>
      <button
        className="left-button-option"
        style={{
          backgroundColor: buttonValue === 2 ? "red" : "blue",
        }}
        onClick={() => {
          setButtonValue(2);
          props.onClickLeftNav(2);
        }}
      >
        Client ID API List
      </button>
      <button
        className="left-button-option"
        style={{
          backgroundColor: buttonValue === 5 ? "red" : "blue",
        }}
        onClick={() => {
          setButtonValue(5);
          props.onClickLeftNav(5);
        }}
      >
        Team Members
      </button>
    </div>
  );
};

export default ButtonComp;
