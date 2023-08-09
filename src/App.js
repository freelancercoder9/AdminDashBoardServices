import React, { useMemo, useState } from "react";
import "./App.css";
import ApiListComp from "./components/ApiListComp";
import HeaderComp from "./components/HeaderComp";
import "./styles.css";
import LeftNavComp from "./components/LeftNavComp";
import RightNavComp from "./components/RightNavComp";

function App() {
  const [selectedButtonValue, setSelectedButtonValue] = useState();
  const onClickLeftNav = (selectedButtonValue) => {
    console.log("onClickLeftNav ", selectedButtonValue);
    setSelectedButtonValue(selectedButtonValue);
  };
  return (
    <div style={{ height: "100vh", width: "100%" }} className="App">
      <HeaderComp></HeaderComp>
      <div style={{ display: "flex", flexDirection: "row", width: "100%", flex: 1 }}>
        <LeftNavComp onClickLeftNav={onClickLeftNav}></LeftNavComp>
        <RightNavComp onClickButton={selectedButtonValue}></RightNavComp>
      </div>
    </div>
  );
}

export default App;
