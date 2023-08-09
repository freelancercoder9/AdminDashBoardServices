import React, { useState } from "react";
import Dropdown from "react-dropdown";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles.css";

const PopUpComp = (props) => {
  const devStatusType = ["NOT_STARTED", "PENDING", "IN_PROGRESS", "COMPLETED"];
  const requestTypeDropDown = ["RPC", "POST", "DELETE", "GET", "PUT"];
  // const defaultOption = options[0];
  const [apiName, setapiName] = useState(props.selectedRowData.apiName);
  const [appInstName, setAppInstName] = useState(props.selectedRowData.appInstanceDetails.appInstanceName);
  const [apiRequestType, setApiRequestType] = useState(props.selectedRowData.apiRequestType);
  const [developerName, setDeveloperName] = useState(props.selectedRowData.developerName);
  const [devStatus, setDevStatus] = useState(props.selectedRowData.devStatus);
  const [devStatusDate, setDevStatusDate] = useState(new Date(props.selectedRowData.devCompletedDate));
  const [uatStatus, setUatStatus] = useState(props.selectedRowData.uatStatus);
  const [uatStatusDate, setUatStatusDate] = useState(new Date(props.selectedRowData.uatCompletedDate));
  const [prodStatus, setProdStatus] = useState(props.selectedRowData.prodStatus);
  const [prodStatusDate, setProdStatusDate] = useState(new Date(props.selectedRowData.prodCompletedDate));

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "50%",
          // height: "30%",

          paddingTop: 0,
          paddingBottom: 20,
          borderRadius: 10,
          borderWidth: 10,
          borderColor: "red",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: 60,
            backgroundColor: "red",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <h3 style={{ color: "white" }}>UPDATE API</h3>
        </div>
        <div style={{ width: "95%", justifyContent: "space-between", display: "flex", flexDirection: "row", marginTop: 20 }}>
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
            <h4 style={{ width: "45%", textAlign: "start" }}>API Name</h4>
            <input
              type="text"
              style={{ width: "45%", height: 35, paddingLeft: 5, fontSize: 15 }}
              value={apiName}
              onChange={(e) => {
                setapiName(e.target.value);
              }}
            />
          </div>
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
            <h4 style={{ width: "45%", textAlign: "start" }}>API Request Type</h4>
            <div style={{ width: "47%" }}>
              <Dropdown
                className="myClassName"
                options={requestTypeDropDown}
                onChange={(e) => {
                  console.log("va : ", e);
                  setApiRequestType(e);
                }}
                value={apiRequestType}
                placeholder="Select an option"
              />
            </div>
          </div>
        </div>
        <div style={{ width: "95%", justifyContent: "space-between", display: "flex", flexDirection: "row", marginTop: 15 }}>
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
            <h4 style={{ width: "45%", textAlign: "start" }}>APP Instance Details</h4>
            <input
              type="text"
              style={{ width: "45%", height: 35, paddingLeft: 5, fontSize: 15 }}
              value={appInstName}
              onChange={(e) => {
                setAppInstName(e.target.value);
              }}
            />
          </div>
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
            <h4 style={{ width: "45%", textAlign: "start" }}>Developer Name</h4>
            <input
              type="text"
              style={{ width: "45%", height: 35, paddingLeft: 5, fontSize: 15 }}
              value={developerName}
              onChange={(e) => {
                setDeveloperName(e.target.value);
              }}
            />
          </div>
        </div>

        <div style={{ width: "95%", justifyContent: "space-between", display: "flex", flexDirection: "row", marginTop: 15 }}>
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
            <h4 style={{ width: "45%", textAlign: "start" }}>DEV Status</h4>
            <div style={{ width: "47%" }}>
              <Dropdown
                className="myClassName"
                options={devStatusType}
                onChange={(e) => {
                  console.log("va : ", e);
                  setDevStatus(e);
                }}
                value={devStatus}
                placeholder="Select an option"
              />
            </div>
          </div>
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
            <h4 style={{ width: "45%", textAlign: "start" }}>DEV Status Date</h4>
            <div style={{ width: "47%" }}>
              <DatePicker dateFormat="dd/MM/yyyy" selected={devStatusDate} onChange={(date) => setDevStatusDate(date)} />
            </div>
          </div>
        </div>

        <div style={{ width: "95%", justifyContent: "space-between", display: "flex", flexDirection: "row", marginTop: 15 }}>
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
            <h4 style={{ width: "45%", textAlign: "start" }}>UAT Status</h4>
            <div style={{ width: "47%" }}>
              <Dropdown
                className="myClassName"
                options={devStatusType}
                onChange={(e) => {
                  console.log("va : ", e);
                  setUatStatus(e);
                }}
                value={uatStatus}
                placeholder="Select an option"
              />
            </div>
          </div>
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
            <h4 style={{ width: "45%", textAlign: "start" }}>UAT Status Date</h4>
            <div style={{ width: "47%" }}>
              <DatePicker dateFormat="dd/MM/yyyy" selected={uatStatusDate} onChange={(date) => setUatStatusDate(date)} />
            </div>
          </div>
        </div>

        <div style={{ width: "95%", justifyContent: "space-between", display: "flex", flexDirection: "row", marginTop: 15 }}>
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
            <h4 style={{ width: "45%", textAlign: "start" }}>PROD Status</h4>
            <div style={{ width: "47%" }}>
              <Dropdown
                className="myClassName"
                options={devStatusType}
                onChange={(e) => {
                  console.log("va : ", e);
                  setProdStatus(e);
                }}
                value={prodStatus}
                placeholder="Select an option"
              />
            </div>
          </div>
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
            <h4 style={{ width: "45%", textAlign: "start" }}>PROD Status Date</h4>
            <div style={{ width: "47%" }}>
              <DatePicker dateFormat="dd/MM/yyyy" selected={prodStatusDate} onChange={(date) => setProdStatusDate(date)} />
            </div>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <button style={{ padding: 7, backgroundColor: "red", color: "white", marginRight: 30 }} onClick={props.onClickCancel}>
            Cancel
          </button>
          <button style={{ padding: 7, backgroundColor: "blue", color: "white" }}>save</button>
        </div>
      </div>
    </div>
  );
};

export default PopUpComp;
