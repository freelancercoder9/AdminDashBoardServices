import React, { useState } from "react";
import "./App.css";

import HeaderComp from "./components/HeaderComp";
import "./styles.css";
import LeftNavComp from "./components/LeftNavComp";
import RightNavComp from "./components/RightNavComp";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppInstComp from "./components/AppInstComp";
import ClientIdListComp from "./components/ClientIdListComp";
import ApiListComp from "./components/ApiListComp";
import ConsumerListComp from "./components/ConsumerListComp";
import TeamMembersComp from "./components/TeamMembersComp";

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
        <BrowserRouter>
          {/* <TestSideBar /> */}
          <LeftNavComp onClickLeftNav={onClickLeftNav}></LeftNavComp>

          <Routes>
            <Route path="/" element={<AppInstComp />} />
            <Route path="/clientIdListComp" element={<ClientIdListComp />} />
            <Route path="/apiListComp" element={<ApiListComp />} />
            <Route path="/consumerListComp" element={<ConsumerListComp />} />
            <Route path="/teamMembersComp" element={<TeamMembersComp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
    // <div
    // style={{
    //   left: 0,
    //   right: 0,
    //   top: 0,
    //   bottom: 0,
    //   position: "absolute",
    //   // backgroundColor: "blue",
    //   display: "flex",
    //   flexDirection: "column",
    // }}
    // className="App"
    // >
    //   <HeaderComp></HeaderComp>
    //   <div
    // style={{
    //   display: "flex",
    //   flexDirection: "row",
    //   width: "100%",
    //   flex: 1,
    //   // backgroundColor: "green",
    // }}
    //   >
    //     <LeftNavComp onClickLeftNav={onClickLeftNav}></LeftNavComp>
    //     <RightNavComp onClickButton={selectedButtonValue}></RightNavComp>
    //   </div>
    // </div>
  );
}

export default App;
