import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { buttonSelectVal } from "../actions/UpdateButtonState";
import { useSelector } from "react-redux";

const ButtonComp = (props) => {
  const dispatch = useDispatch();
  const [buttonValue, setButtonValue] = useState(1);
  const navigate = useNavigate();
  const selectedButton = useSelector((state) => state.selectedButton);

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
      <button
        style={{
          backgroundColor: selectedButton === 1 ? "red" : "blue",
          color: "white",
          fontWeight: "bold",
          borderRadius: 5,
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
        onClick={() => {
          setButtonValue(1);
          dispatch(buttonSelectVal(1));
          navigate("/");
        }}
      >
        App Inst List
      </button>
      <button
        style={{
          backgroundColor: selectedButton === 3 ? "red" : "blue",
          color: "white",
          fontWeight: "bold",
          borderRadius: 5,
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
        onClick={() => {
          setButtonValue(3);
          dispatch(buttonSelectVal(3));
          navigate("/ApiListComp");
        }}
      >
        API List
      </button>
      <button
        style={{
          backgroundColor: selectedButton === 4 ? "red" : "blue",
          color: "white",
          fontWeight: "bold",
          borderRadius: 5,
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
        onClick={() => {
          setButtonValue(4);
          dispatch(buttonSelectVal(4));
          navigate("/ConsumerListComp");
        }}
      >
        Consumer List
      </button>
      <button
        style={{
          backgroundColor: selectedButton === 2 ? "red" : "blue",
          color: "white",
          fontWeight: "bold",
          borderRadius: 5,
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
        onClick={() => {
          setButtonValue(2);
          dispatch(buttonSelectVal(2));
          navigate("/ClientIdListComp");
        }}
      >
        Client ID API List
      </button>
      <button
        style={{
          backgroundColor: selectedButton === 5 ? "red" : "blue",
          color: "white",
          fontWeight: "bold",
          borderRadius: 5,
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
        onClick={() => {
          setButtonValue(5);
          dispatch(buttonSelectVal(5));
          navigate("/TeamMembersComp");
        }}
      >
        Team Members
      </button>
    </div>
  );
};

export default ButtonComp;
