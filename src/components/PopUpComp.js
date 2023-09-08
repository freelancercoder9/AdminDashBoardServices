import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles.css";
import { getAllAppInstances, getAllMembers } from "../services/ApiServiceDetails";
import { validAttribute } from "../util/validationUtil";

const PopUpComp = (props) => {
  const devStatusType = ["NOT_STARTED", "PENDING", "IN_PROGRESS", "COMPLETED"];
  const requestTypeDropDown = ["RPC", "POST", "DELETE", "GET", "PUT"];
  // const defaultOption = options[0];
  const [apiName, setapiName] = useState();
  const [appInstName, setAppInstName] = useState({});
  const [apiRequestType, setApiRequestType] = useState();
  const [developerName, setDeveloperName] = useState({});
  const [devStatus, setDevStatus] = useState();
  const [devStatusDate, setDevStatusDate] = useState();
  const [uatStatus, setUatStatus] = useState();
  const [uatStatusDate, setUatStatusDate] = useState();
  const [prodStatus, setProdStatus] = useState();
  const [prodStatusDate, setProdStatusDate] = useState();

  const apiID = props.selectedRowData.id;
  const [appInstList, setAppInstList] = useState([]);

  const [memberNameList, setMemberNameList] = useState([]);

  useEffect(() => {
    getAllAppInstances_service();
    getAllMembers_service();
    if (props.editFlowFlag === true) {
      setapiName(props.selectedRowData.apiName);
      // setAppInstName(props.selectedRowData.appInstanceDetails.appInstanceName);
      setAppInstName({
        value: props.selectedRowData.appInstanceDetails.id,
        label: props.selectedRowData.appInstanceDetails.appInstanceName,
      });
      setApiRequestType(props.selectedRowData.apiRequestType);
      setDeveloperName(props.selectedRowData.developerDetails.memberName);
      setDeveloperName({
        value: props.selectedRowData.developerDetails.id,
        label: props.selectedRowData.developerDetails.memberName,
      });
      setDevStatus(props.selectedRowData.devStatus);
      setDevStatusDate(new Date(props.selectedRowData.devStatusDate));
      setUatStatus(props.selectedRowData.uatStatus);
      setUatStatusDate(new Date(props.selectedRowData.uatStatusDate));
      setProdStatus(props.selectedRowData.prodStatus);
      setProdStatusDate(new Date(props.selectedRowData.prodStatusDate));
    } else {
      setapiName();
      setAppInstName({});
      setApiRequestType();
      setDeveloperName({});
      setDevStatus();
      setDevStatusDate();
      setUatStatus();
      setUatStatusDate();
      setProdStatus();
      setProdStatusDate();
    }
  }, []);

  const getAllAppInstances_service = async () => {
    console.log("getAllAppInstances in screen");
    const response = await getAllAppInstances();
    console.log("response for getAllAppInstances:", response);
    if (response !== null && response.data !== null) {
      console.log("response:", response.data.getAllAppInstances);

      var dataTemp = [];
      response.data.getAllAppInstances.forEach((item, index) => {
        var obj = { value: item.id, label: item.appInstanceName };
        dataTemp.push(obj);
      });
      setAppInstList(dataTemp);
    }
  };

  const getAllMembers_service = async () => {
    console.log("getAllMembers_service in popup");

    const response = await getAllMembers();
    console.log("response for getAllMembers");
    if (response !== null && response.data !== null) {
      var dataTemp = [];
      response.data.getAllMembers.forEach((item, index) => {
        var obj = { value: item.id, label: item.memberName };
        dataTemp.push(obj);
      });
      setMemberNameList(dataTemp);
    }
  };

  const validateAndSave = () => {
    console.log("validateAndSave");

    if (
      validAttribute(apiName) &&
      validAttribute(appInstName) &&
      validAttribute(apiRequestType) &&
      validAttribute(developerName) &&
      validAttribute(devStatus) &&
      validAttribute(uatStatus) &&
      validAttribute(uatStatus) &&
      validAttribute(prodStatus)
    ) {
      let objectData;
      if (props.editFlowFlag === true) {
        objectData = {
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
      } else {
        objectData = {
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
        };
      }
      props.onClickSave(objectData, appInstName.value, developerName.value);
    } else {
      alert("Please fill all mandatory fields");
      console.log("attributes:", apiName, appInstName, apiRequestType, developerName, uatStatus, prodStatus, devStatus);
    }
  };
  return (
    <div className="main-container">
      <div className="sub-container">
        <div className="heading">
          <h3 style={{ color: "white" }}>UPDATE API</h3>
        </div>
        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>API Name</h4>
              <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
                *
              </label>
            </div>

            <input
              type="text"
              style={{ width: "45%", height: 35, paddingLeft: 5, fontSize: 15 }}
              value={apiName}
              onChange={(e) => {
                setapiName(e.target.value);
              }}
            />
          </div>
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>API Request Type</h4>
              <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
                *
              </label>
            </div>

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

        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>APP Inst Detail</h4>
              <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
                *
              </label>
            </div>

            <div style={{ width: "47%" }}>
              <Dropdown
                className="myClassName"
                options={appInstList}
                onChange={(e) => {
                  console.log("va : ", e);
                  setAppInstName(e);
                }}
                value={appInstName}
                placeholder="Select an option"
              />
            </div>
          </div>
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>Developer Name</h4>
              <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
                *
              </label>
            </div>

            <div style={{ width: "47%" }}>
              <Dropdown
                className="myClassName"
                options={memberNameList}
                onChange={(e) => {
                  console.log("va : ", e);
                  setDeveloperName(e);
                }}
                value={developerName}
                placeholder="Select an option"
              />
            </div>
          </div>
        </div>

        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>DEV Status</h4>
              <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
                *
              </label>
            </div>

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
          <div className="sub-fields">
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

        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>UAT Status</h4>
              <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
                *
              </label>
            </div>

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
          <div className="sub-fields">
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

        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>PROD Status</h4>
              <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
                *
              </label>
            </div>

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
          <div className="sub-fields">
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
              validateAndSave();
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
