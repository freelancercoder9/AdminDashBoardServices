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
import LoginComp from "./components/LoginComp";
import { useSelector } from "react-redux";

function App() {
  const loginUser = useSelector((state) => state.LoginUserReducer);
  console.log("login in app js", loginUser);

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
          <Routes>
            <Route path="/" element={<LoginComp />} />
          </Routes>
          {loginUser.login && <LeftNavComp></LeftNavComp>}

          <Routes>
            <Route path="/appListComp" element={<AppInstComp />} />
            <Route path="/clientIdListComp" element={<ClientIdListComp />} />
            <Route path="/apiListComp" element={<ApiListComp />} />
            <Route path="/consumerListComp" element={<ConsumerListComp />} />
            <Route path="/teamMembersComp" element={<TeamMembersComp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
