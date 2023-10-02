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
            <div
              style={{
                width: "55%",
                height: 35,
                paddingLeft: 5,
                fontSize: 15,
                // backgroundColor: "red",
                display: "flex",
                alignItems: "center",
              }}
            >
              <label htmlFor="star">{props.selectedRowData.appInstanceName}</label>
            </div>
          </div>
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>App Inst Type</h4>
            </div>
            <div
              style={{
                width: "55%",
                height: 35,
                paddingLeft: 5,
                fontSize: 15,
                // backgroundColor: "red",
                display: "flex",
                alignItems: "center",
              }}
            >
              <label htmlFor="star">{props.selectedRowData.appInstanceType}</label>
            </div>
          </div>
        </div>
        <div className="fields-container">
          <div className="sub-fields">
            <h4 style={{ width: "45%", textAlign: "start" }}>Last Uat Dep Date</h4>
            <div
              style={{
                width: "55%",
                height: 35,
                paddingLeft: 5,
                fontSize: 15,
                // backgroundColor: "red",
                display: "flex",
                alignItems: "center",
              }}
            >
              <label htmlFor="star">{props.selectedRowData.lastUatDeployedDate}</label>
            </div>
          </div>
          <div className="sub-fields">
            <h4 style={{ width: "45%", textAlign: "start" }}>Last Prod Dep Date</h4>
            <div
              style={{
                width: "55%",
                height: 35,
                paddingLeft: 5,
                fontSize: 15,
                // backgroundColor: "red",
                display: "flex",
                alignItems: "center",
              }}
            >
              <label htmlFor="star">{props.selectedRowData.lastProdDeployedDate}</label>
            </div>
          </div>
        </div>

        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>Uat Dep Env</h4>
            </div>
            <div
              style={{
                width: "55%",
                height: 35,
                paddingLeft: 5,
                fontSize: 15,
                // backgroundColor: "red",
                display: "flex",
                alignItems: "center",
              }}
            >
              <label htmlFor="star">{props.selectedRowData.uatDeployedEnv}</label>
            </div>
          </div>
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>Prod Dep Env</h4>
            </div>
            <div
              style={{
                width: "55%",
                height: 35,
                paddingLeft: 5,
                fontSize: 15,
                // backgroundColor: "red",
                display: "flex",
                alignItems: "center",
              }}
            >
              <label htmlFor="star">{props.selectedRowData.prodDeployedEnv}</label>
            </div>
          </div>
        </div>
        <div style={{ width: "95%", marginTop: 20 }}>
          <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
            <div style={{ width: "19%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>Uat Url</h4>
            </div>

            <label
              htmlFor="star"
              style={{
                fontSize: 16,
                // backgroundColor: "yellow",
                width: "81%",
                display: "flex",
                textAlign: "left",
                padding: 5,
              }}
            >
              {props.selectedRowData.uatUrl}
            </label>
          </div>
        </div>
        <div style={{ width: "95%", marginTop: 20 }}>
          <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
            <div style={{ width: "19%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>Prod Url</h4>
            </div>
            <label
              htmlFor="star"
              style={{
                fontSize: 16,
                // backgroundColor: "yellow",
                width: "81%",
                display: "flex",
                textAlign: "left",
                padding: 5,
              }}
            >
              {props.selectedRowData.prodUrl}
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
