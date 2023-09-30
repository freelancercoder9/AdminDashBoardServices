import React, { useState } from "react";
import "../styles.css";

const PopUpInstViewComp = (props) => {
  return (
    <div className="main-container">
      <div className="sub-container">
        <div className="heading">
          <h3 style={{ color: "white" }}>VIEW APP INSTANCE</h3>
        </div>
        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ display: "flex", width: "45%" }}>
              <h4 style={{ textAlign: "start" }}>App Inst Name</h4>
            </div>
            <label htmlFor="star" style={{ fontSize: 20 }}>
              {props.selectedRowData.appInstanceName}
            </label>
          </div>
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>App Inst Type</h4>
            </div>
            <label htmlFor="star" style={{ fontSize: 20 }}>
              {props.selectedRowData.appInstanceType}
            </label>
          </div>
        </div>
        <div className="fields-container">
          <div className="sub-fields">
            <h4 style={{ width: "45%", textAlign: "start" }}>Last Uat Dep Date</h4>
            <label htmlFor="star" style={{ fontSize: 20 }}>
              {props.selectedRowData.lastUatDeployedDate}
            </label>
          </div>
          <div className="sub-fields">
            <h4 style={{ width: "45%", textAlign: "start" }}>Last Prod Dep Date</h4>
            <label htmlFor="star" style={{ fontSize: 20 }}>
              {props.selectedRowData.lastProdDeployedDate}
            </label>
          </div>
        </div>

        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>Uat Dep Env</h4>
            </div>
            <label htmlFor="star" style={{ fontSize: 20 }}>
              {props.selectedRowData.uatDeployedEnv}
            </label>
          </div>
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>Prod Dep Env</h4>
            </div>
            <label htmlFor="star" style={{ fontSize: 20 }}>
              {props.selectedRowData.prodDeployedEnv}
            </label>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <button
            style={{ padding: 7, backgroundColor: "blue", color: "white", borderRadius: 5, fontWeight: "bold" }}
            onClick={() => {
              props.onClickOk();
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpInstViewComp;
