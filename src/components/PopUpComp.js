import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles.css";
import { getAllAppInstances } from "../services/ApiServiceDetails";

const PopUpComp = (props) => {
  const devStatusType = ["NOT_STARTED", "PENDING", "IN_PROGRESS", "COMPLETED"];
  const requestTypeDropDown = ["RPC", "POST", "DELETE", "GET", "PUT"];
  // const defaultOption = options[0];
  const [apiName, setapiName] = useState();
  const [appInstName, setAppInstName] = useState();
  const [apiRequestType, setApiRequestType] = useState();
  const [developerName, setDeveloperName] = useState();
  const [devStatus, setDevStatus] = useState();
  const [devStatusDate, setDevStatusDate] = useState();
  const [uatStatus, setUatStatus] = useState();
  const [uatStatusDate, setUatStatusDate] = useState();
  const [prodStatus, setProdStatus] = useState();
  const [prodStatusDate, setProdStatusDate] = useState();
  const [appInstanceID, setAppInstanceID] = useState();
  const apiID = props.selectedRowData.id;
  const [appInstList, setAppInstList] = useState([]);
  const [appInstDetailsList, setAppInstDetailsList] = useState([]);

  useEffect(() => {
    getAllAppInstances_service();
    if (props.editFlowFlag === true) {
      setapiName(props.selectedRowData.apiName);
      setAppInstName(props.selectedRowData.appInstanceDetails.appInstanceName);
      setApiRequestType(props.selectedRowData.apiRequestType);
      setDeveloperName(props.selectedRowData.developerName);
      setDevStatus(props.selectedRowData.devStatus);
      setDevStatusDate(new Date(props.selectedRowData.devStatusDate));
      setUatStatus(props.selectedRowData.uatStatus);
      setUatStatusDate(new Date(props.selectedRowData.uatStatusDate));
      setProdStatus(props.selectedRowData.prodStatus);
      setProdStatusDate(new Date(props.selectedRowData.prodStatusDate));
      setAppInstanceID(props.selectedRowData.appInstanceDetails.id);
    } else {
      setapiName();
      setAppInstName();
      setApiRequestType();
      setDeveloperName();
      setDevStatus();
      setDevStatusDate();
      setUatStatus();
      setUatStatusDate();
      setProdStatus();
      setProdStatusDate();
      setAppInstanceID();
    }
  }, []);

  const getAllAppInstances_service = async () => {
    console.log("getAllAppInstances in screen");
    const response = await getAllAppInstances();
    console.log("response for getAllAppInstances:", response);
    if (response !== null && response.data !== null) {
      console.log("response:", response.data.getAllAppInstances);
      setAppInstDetailsList(response.data.getAllAppInstances);
      var dataTemp = [];
      response.data.getAllAppInstances.forEach((item, index) => {
        dataTemp.push(item.appInstanceName);
      });
      setAppInstList(dataTemp);
    }
  };

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
          width: "60%",
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
        <div
          style={{
            width: "95%",
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
            marginTop: 20,
          }}
        >
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
            {/* <div style={{ width: "47%" }}>
              <Dropdown
                className="myClassName"
                options={apiName}
                onChange={(e) => {
                  console.log("va : ", e.value);
                  setapiName(e.value);
                }}
                value={apiName}
                placeholder="Select an option"
              />
            </div> */}
          </div>
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
            <h4 style={{ width: "45%", textAlign: "start" }}>API Request Type</h4>
            <div style={{ width: "47%" }}>
              <Dropdown
                className="myClassName"
                options={requestTypeDropDown}
                onChange={(e) => {
                  console.log("va : ", e);
                  setApiRequestType(e.value);
                }}
                value={apiRequestType}
                placeholder="Select an option"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            width: "95%",
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
            marginTop: 15,
          }}
        >
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
            <h4 style={{ width: "45%", textAlign: "start" }}>APP Instance Details</h4>
            {/* <input
              type="text"
              style={{ width: "45%", height: 35, paddingLeft: 5, fontSize: 15 }}
              value={appInstName}
              onChange={(e) => {
                setAppInstName(e.target.value);
              }}
            /> */}
            <div style={{ width: "47%" }}>
              <Dropdown
                className="myClassName"
                options={appInstList}
                onChange={(e) => {
                  console.log("va : ", e.value);
                  setAppInstName(e.value);
                  appInstDetailsList.forEach((item, index) => {
                    if (item.appInstanceName === e.value) {
                      setAppInstanceID(item.id);
                    }
                  });
                }}
                value={appInstName}
                placeholder="Select an option"
              />
            </div>
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

        <div
          style={{
            width: "95%",
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
            marginTop: 15,
          }}
        >
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
            <h4 style={{ width: "45%", textAlign: "start" }}>DEV Status</h4>
            <div style={{ width: "47%" }}>
              <Dropdown
                className="myClassName"
                options={devStatusType}
                onChange={(e) => {
                  console.log("va : ", e.value);
                  setDevStatus(e.value);
                }}
                value={devStatus}
                placeholder="Select an option"
              />
            </div>
          </div>
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
            <h4 style={{ width: "45%", textAlign: "start" }}>DEV Status Date</h4>
            <div style={{ width: "47%" }}>
              <DatePicker
                dateFormat="dd-MM-yyyy"
                selected={devStatusDate}
                onChange={(date) => setDevStatusDate(date)}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            width: "95%",
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
            marginTop: 15,
          }}
        >
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
            <h4 style={{ width: "45%", textAlign: "start" }}>UAT Status</h4>
            <div style={{ width: "47%" }}>
              <Dropdown
                className="myClassName"
                options={devStatusType}
                onChange={(e) => {
                  console.log("va : ", e.value);
                  setUatStatus(e.value);
                }}
                value={uatStatus}
                placeholder="Select an option"
              />
            </div>
          </div>
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
            <h4 style={{ width: "45%", textAlign: "start" }}>UAT Status Date</h4>
            <div style={{ width: "47%" }}>
              <DatePicker
                dateFormat="dd-MM-yyyy"
                selected={uatStatusDate}
                onChange={(date) => setUatStatusDate(date)}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            width: "95%",
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
            marginTop: 15,
          }}
        >
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
            <h4 style={{ width: "45%", textAlign: "start" }}>PROD Status</h4>
            <div style={{ width: "47%" }}>
              <Dropdown
                className="myClassName"
                options={devStatusType}
                onChange={(e) => {
                  console.log("va : ", e.value);
                  setProdStatus(e.value);
                }}
                value={prodStatus}
                placeholder="Select an option"
              />
            </div>
          </div>
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
            <h4 style={{ width: "45%", textAlign: "start" }}>PROD Status Date</h4>
            <div style={{ width: "47%" }}>
              <DatePicker
                dateFormat="dd-MM-yyyy"
                selected={prodStatusDate}
                onChange={(date) => setProdStatusDate(date)}
              />
            </div>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <button
            style={{ padding: 7, backgroundColor: "red", color: "white", marginRight: 30, borderRadius: 5 }}
            onClick={props.onClickCancel}
          >
            Cancel
          </button>
          <button
            style={{ padding: 7, backgroundColor: "blue", color: "white", borderRadius: 5 }}
            onClick={() => {
              const objectData = {
                apiName: apiName,
                appInstName: appInstName,
                apiRequestType: apiRequestType,
                developerName: developerName,
                devStatus: devStatus,
                devStatusDate: devStatusDate,
                uatStatus: uatStatus,
                uatStatusDate: uatStatusDate,
                prodStatus: prodStatus,
                prodStatusDate: prodStatusDate,
                id: apiID,
              };
              props.onClickSave(objectData, appInstanceID);
            }}
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpComp;
