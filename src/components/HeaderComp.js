import React from "react";
import "../styles.css";

const HeaderComp = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "15%", height: 30 }}></div>
      <div style={{ width: "85%" }}>
        <div className="headerComp">GAPI API Services</div>
      </div>
    </div>
  );
};

export default HeaderComp;
