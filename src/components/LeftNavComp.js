import React, { useState } from "react";
import "../styles.css";
import ButtonComp from "./ButtonComp";

const LeftNavComp = (props) => {
  return (
    <div className="leftNav">
      <div style={{ marginTop: 130 }}></div>
      <ButtonComp onClickLeftNav={props.onClickLeftNav}></ButtonComp>
    </div>
  );
};

export default LeftNavComp;
