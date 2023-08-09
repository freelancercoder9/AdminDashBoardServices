import React, { useState } from "react";
import "../styles.css";
import ButtonComp from "./ButtonComp";

const LeftNavComp = (props) => {
  return (
    <div className="leftNav">
      <ButtonComp onClickLeftNav={props.onClickLeftNav}></ButtonComp>
    </div>
  );
};

export default LeftNavComp;
