import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ButtonComp = (props) => {
  const [buttonValue, setButtonValue] = useState(1);
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
      <button
        style={{
          backgroundColor: buttonValue === 1 ? "red" : "blue",
          color: "white",
          fontWeight: "bold",
          borderRadius: 5,
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
        onClick={() => {
          setButtonValue(1);
          navigate("/");
        }}
      >
        App Inst List
      </button>
      <button
        style={{
          backgroundColor: buttonValue === 3 ? "red" : "blue",
          color: "white",
          fontWeight: "bold",
          borderRadius: 5,
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
        onClick={() => {
          setButtonValue(3);
          navigate("/ApiListComp");
        }}
      >
        API List
      </button>
      <button
        style={{
          backgroundColor: buttonValue === 4 ? "red" : "blue",
          color: "white",
          fontWeight: "bold",
          borderRadius: 5,
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
        onClick={() => {
          setButtonValue(4);
          navigate("/ConsumerListComp");
        }}
      >
        Consumer List
      </button>
      <button
        style={{
          backgroundColor: buttonValue === 2 ? "red" : "blue",
          color: "white",
          fontWeight: "bold",
          borderRadius: 5,
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
        onClick={() => {
          setButtonValue(2);
          navigate("/ClientIdListComp");
        }}
      >
        Client ID API List
      </button>
      <button
        style={{
          backgroundColor: buttonValue === 5 ? "red" : "blue",
          color: "white",
          fontWeight: "bold",
          borderRadius: 5,
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
        onClick={() => {
          setButtonValue(5);
          navigate("/TeamMembersComp");
        }}
      >
        Team Members
      </button>
    </div>
  );
};

export default ButtonComp;
