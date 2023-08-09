import React, { useState } from "react";

const ButtonComp = (props) => {
  const [buttonValue, setButtonValue] = useState(1);

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
      <button
        style={{
          backgroundColor: buttonValue === 1 ? "red" : "blue",
          color: "white",
          borderRadius: 5,
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
        onClick={() => {
          setButtonValue(1);
          props.onClickLeftNav(1);
        }}
      >
        Create new API
      </button>
      <button
        style={{
          backgroundColor: buttonValue === 2 ? "red" : "blue",
          color: "white",
          borderRadius: 5,
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
        onClick={() => {
          setButtonValue(2);
          props.onClickLeftNav(2);
        }}
      >
        Create new Consumer
      </button>
      <button
        style={{
          backgroundColor: buttonValue === 3 ? "red" : "blue",
          color: "white",
          borderRadius: 5,
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
        onClick={() => {
          setButtonValue(3);
          props.onClickLeftNav(3);
        }}
      >
        API List
      </button>
      <button
        style={{
          backgroundColor: buttonValue === 4 ? "red" : "blue",
          color: "white",
          borderRadius: 5,
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
        onClick={() => {
          setButtonValue(4);
          props.onClickLeftNav(4);
        }}
      >
        Consumer List
      </button>
    </div>
  );
};

export default ButtonComp;
