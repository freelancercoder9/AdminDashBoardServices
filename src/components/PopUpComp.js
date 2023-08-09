import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const PopUpComp = (props) => {
  const devStatusType = ["NOT_STARTED", "PENDING", "IN_PROGRESS", "COMPLETED"];
  // const defaultOption = options[0];
  const [apiName, setapiName] = useState(props.selectedRowData.apiName);
  const [appInstName, setAppInstName] = useState(props.selectedRowData.appInstanceDetails.appInstanceName);
  const [apiRequestType, setApiRequestType] = useState(props.selectedRowData.apiRequestType);
  const [developerName, setDeveloperName] = useState(props.selectedRowData.developerName);
  const [devStatus, setDevStatus] = useState(props.selectedRowData.devStatus);
  const [devStatusDate, setDevStatusDate] = useState(props.selectedRowData.devCompletedDate);
  const [uatStatus, setUatStatus] = useState(props.selectedRowData.uatStatus);
  const [uatStatusDate, setUatStatusDate] = useState(props.selectedRowData.uatCompletedDate);
  const [prodStatus, setProdStatus] = useState(props.selectedRowData.prodStatus);
  const [prodStatusDate, setProdStatusDate] = useState(props.selectedRowData.prodCompletedDate);

  const dropDownData = (data) => {
    console.log("dropDownData:", data);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "40%",
          // height: "30%",
          paddingTop: 20,
          paddingBottom: 20,
          borderRadius: 10,
          borderWidth: 10,
          borderColor: "red",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginBottom: 15,
            alignItems: "center",
          }}
        >
          <h4 style={{ width: "30%", textAlign: "start" }}>API Name</h4>
          <input
            type="text"
            style={{ width: "60%", height: 20 }}
            value={apiName}
            onChange={(e) => {
              setapiName(e.target.value);
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginBottom: 15,
            alignItems: "center",
          }}
        >
          <h4 style={{ width: "30%", textAlign: "start" }}>API Request Type</h4>
          <input
            type="text"
            style={{ width: "60%", height: 20 }}
            value={apiRequestType}
            onChange={(e) => {
              setApiRequestType(e.target.value);
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginBottom: 15,
            alignItems: "center",
          }}
        >
          <h4 style={{ width: "30%", textAlign: "start" }}>APP Instance Details</h4>
          <input
            type="text"
            style={{ width: "60%", height: 20 }}
            value={appInstName}
            onChange={(e) => {
              setAppInstName(e.target.value);
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginBottom: 15,
            alignItems: "center",
          }}
        >
          <h4 style={{ width: "30%", textAlign: "start" }}>Developer Name</h4>
          <input
            type="text"
            style={{ width: "60%", height: 20 }}
            value={developerName}
            onChange={(e) => {
              setDeveloperName(e.target.value);
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginBottom: 15,
            alignItems: "center",
          }}
        >
          <h4 style={{ width: "30%", textAlign: "start", backgroundColor: "yellow" }}>Dev Status</h4>
          {/* <input
            type="text"
            style={{ width: "60%", height: 20 }}
            value={devStatus}
            onChange={(e) => {
              setDevStatus(e.target.value);
            }}
          /> */}
          <div style={{ width: "60%", height: 15 }}>
            <Dropdown
              options={devStatusType}
              onChange={dropDownData}
              value={devStatus}
              placeholder="Select an option"
            />
            ;
          </div>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginBottom: 15,
            alignItems: "center",
          }}
        >
          <h4 style={{ width: "30%", textAlign: "start" }}>Dev Status Date</h4>
          <input
            type="text"
            style={{ width: "60%", height: 20 }}
            value={devStatusDate}
            onChange={(e) => {
              setDevStatusDate(e.target.value);
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginBottom: 15,
            alignItems: "center",
          }}
        >
          <h4 style={{ width: "30%", textAlign: "start" }}>UAT Status</h4>
          <input
            type="text"
            style={{ width: "60%", height: 20 }}
            value={uatStatus}
            onChange={(e) => {
              setUatStatus(e.target.value);
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginBottom: 15,
            alignItems: "center",
          }}
        >
          <h4 style={{ width: "30%", textAlign: "start" }}>UAT Status Date</h4>
          <input
            type="text"
            style={{ width: "60%", height: 20 }}
            value={uatStatusDate}
            onChange={(e) => {
              setUatStatusDate(e.target.value);
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginBottom: 15,
            alignItems: "center",
          }}
        >
          <h4 style={{ width: "30%", textAlign: "start" }}>Prod Status</h4>
          <input
            type="text"
            style={{ width: "60%", height: 20 }}
            value={prodStatus}
            onChange={(e) => {
              setProdStatus(e.target.value);
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginBottom: 15,
            alignItems: "center",
          }}
        >
          <h4 style={{ width: "30%", textAlign: "start" }}>Prod Status Date</h4>
          <input
            type="text"
            style={{ width: "60%", height: 20 }}
            value={prodStatusDate}
            onChange={(e) => {
              setProdStatusDate(e.target.value);
            }}
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <button
            style={{ padding: 7, backgroundColor: "red", color: "white", marginRight: 30 }}
            onClick={props.onClickCancel}
          >
            Cancel
          </button>
          <button style={{ padding: 7, backgroundColor: "blue", color: "white" }}>save</button>
        </div>
      </div>
    </div>
  );
};

export default PopUpComp;
