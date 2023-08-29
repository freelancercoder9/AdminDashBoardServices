import React, { useState } from "react";
import "./App.css";

import HeaderComp from "./components/HeaderComp";
import "./styles.css";
import LeftNavComp from "./components/LeftNavComp";
import RightNavComp from "./components/RightNavComp";

function App() {
  const [selectedButtonValue, setSelectedButtonValue] = useState(1);
  const onClickLeftNav = (selectedButtonValue) => {
    console.log("onClickLeftNav ", selectedButtonValue);
    setSelectedButtonValue(selectedButtonValue);
  };
  return (
    <div
      style={{
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: "absolute",
        // backgroundColor: "blue",
        display: "flex",
        flexDirection: "column",
      }}
      className="App"
    >
      <HeaderComp></HeaderComp>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          flex: 1,
          // backgroundColor: "green",
        }}
      >
        <LeftNavComp onClickLeftNav={onClickLeftNav}></LeftNavComp>
        <RightNavComp onClickButton={selectedButtonValue}></RightNavComp>
      </div>
    </div>
  );
}

export default App;
