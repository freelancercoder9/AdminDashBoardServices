import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { buttonAction } from "../actions/UpdateButtonState";

const ButtonComp = (props) => {
  const dispatch = useDispatch();
  const selectedButton = useSelector((state) => state.selectedButton);
  const navigate = useNavigate();

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
          dispatch(buttonAction(1));
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
          dispatch(buttonAction(3));
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
          dispatch(buttonAction(4));
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
          dispatch(buttonAction(2));
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
          dispatch(buttonAction(5));
          navigate("/TeamMembersComp");
        }}
      >
        Team Members
      </button>
    </div>
  );
};

export default ButtonComp;
