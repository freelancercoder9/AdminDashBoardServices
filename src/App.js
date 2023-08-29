import React, { useMemo, useState } from "react";
import "./App.css";
import ApiListComp from "./components/ApiListComp";
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
    <div style={{ height: "100vh", width: "100%" }} className="App">
      <HeaderComp></HeaderComp>
      <div style={{ display: "flex", flexDirection: "row", width: "100%", top: 0, left: 0, right: 0, bottom: 0, position: "absolute" }}>
        <LeftNavComp onClickLeftNav={onClickLeftNav}></LeftNavComp>
        <RightNavComp onClickButton={selectedButtonValue}></RightNavComp>
      </div>
    </div>
  );
}

export default App;
