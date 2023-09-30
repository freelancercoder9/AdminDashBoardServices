import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles.css";

const PopUpInstComp = (props) => {
  const appInstType = ["RPC", "REST", "DECODER", "NORMALIZER", "UPDATER"];
  const prodDepEnvDropDown = ["PCF", "OPEN SHIFT"];
  const uatDepEnvDropDown = ["PCF", "OPEN SHIFT"];

  const [appInstName, setAppInstName] = useState();
  const [appInstanceType, setAppInstanceType] = useState();
  const [lastUatDeployedDate, setLastUatDeployedDate] = useState();
  const [lastProdDeployedDate, setLastProdDeployedDate] = useState();
  const [uatDepEnv, setUatDepEnv] = useState();
  const [prodDepEnv, setProdDepEnv] = useState();
  const [setsetselectedID, setSetsetselectedID] = useState();
  const [uatUrl, setUatUrl] = useState("");
  const [prodUrl, setProdUrl] = useState("");

  useEffect(() => {
    console.log(" dada ", props.editFlowFlag, props.selectedRowData);
    if (props.editFlowFlag === true) {
      setAppInstName(props.selectedRowData.appInstanceName);
      setAppInstanceType(props.selectedRowData.appInstanceType);
      setLastUatDeployedDate(new Date(props.selectedRowData.lastUatDeployedDate));
      setLastProdDeployedDate(new Date(props.selectedRowData.lastProdDeployedDate));
      setUatDepEnv(props.selectedRowData.uatDeployedEnv);
      setProdDepEnv(props.selectedRowData.prodDeployedEnv);
      setSetsetselectedID(props.selectedRowData.id);
    } else {
      setAppInstName();
      setAppInstanceType();
      setLastUatDeployedDate();
      setLastProdDeployedDate();
      setUatDepEnv();
      setProdDepEnv();
    }
  }, []);

  const validateAndSave = () => {
    console.log("validateAndSave");
    if (
      appInstName !== null &&
      appInstName !== undefined &&
      appInstanceType !== null &&
      appInstanceType !== undefined &&
      uatDepEnv !== null &&
      uatDepEnv !== undefined &&
      prodDepEnv !== null &&
      prodDepEnv !== undefined &&
      setsetselectedID !== null &&
      setsetselectedID !== undefined
    ) {
      let objectData;
      if (props.editFlowFlag === true) {
        objectData = {
          appInstanceName: appInstName,
          appInstanceType: appInstanceType,
          uatDeployedEnv: uatDepEnv,
          prodDeployedEnv: prodDepEnv,
          lastUatDeployedDate: lastUatDeployedDate,
          lastProdDeployedDate: lastProdDeployedDate,
          id: setsetselectedID,
        };
      } else {
        objectData = {
          appInstanceName: appInstName,
          appInstanceType: appInstanceType,
          uatDeployedEnv: uatDepEnv,
          prodDeployedEnv: prodDepEnv,
          lastUatDeployedDate: lastUatDeployedDate,
          lastProdDeployedDate: lastProdDeployedDate,
        };
      }
      props.onClickSave(objectData);
    } else {
      alert("Please fill all mandatory fields");
    }
  };

  return (
    <div className="main-container">
      <div className="sub-container">
        <div className="heading">
          <h3 style={{ color: "white" }}>UPDATE APP INSTANCE</h3>
        </div>
        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ display: "flex", width: "45%" }}>
              <h4 style={{ textAlign: "start" }}>App Inst Name</h4>
              <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
                *
              </label>
            </div>
            <input
              type="text"
              style={{ width: "45%", height: 35, paddingLeft: 5, fontSize: 15 }}
              value={appInstName}
              onChange={(e) => {
                setAppInstName(e.target.value);
              }}
            />
          </div>
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>App Inst Type</h4>
              <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
                *
              </label>
            </div>
            <div style={{ width: "47%" }}>
              <Dropdown
                className="myClassName"
                options={appInstType}
                onChange={(e) => {
                  console.log("va : ", e);
                  setAppInstanceType(e.value);
                }}
                value={appInstanceType}
                placeholder="Select an option"
              />
            </div>
          </div>
        </div>
        <div className="fields-container">
          <div className="sub-fields">
            <h4 style={{ width: "45%", textAlign: "start" }}>Last Uat Dep Date</h4>

            <div style={{ width: "47%" }}>
              <DatePicker
                dateFormat="dd-MM-yyyy"
                selected={lastUatDeployedDate}
                onChange={(date) => setLastUatDeployedDate(date)}
              />
            </div>
          </div>
          <div className="sub-fields">
            <h4 style={{ width: "45%", textAlign: "start" }}>Last Prod Dep Date</h4>
            <div style={{ width: "47%" }}>
              <DatePicker
                dateFormat="dd-MM-yyyy"
                selected={lastProdDeployedDate}
                onChange={(date) => setLastProdDeployedDate(date)}
              />
            </div>
          </div>
        </div>

        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>Uat Dep Env</h4>
              <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
                *
              </label>
            </div>

            <div style={{ width: "47%" }}>
              <Dropdown
                className="myClassName"
                options={uatDepEnvDropDown}
                onChange={(e) => {
                  console.log("va : ", e.value);
                  setUatDepEnv(e.value);
                }}
                value={uatDepEnv}
                placeholder="Select an option"
              />
            </div>
          </div>
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>Prod Dep Env</h4>
              <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
                *
              </label>
            </div>

            <div style={{ width: "47%" }}>
              <Dropdown
                className="myClassName"
                options={prodDepEnvDropDown}
                onChange={(e) => {
                  console.log("va : ", e.value);
                  setProdDepEnv(e.value);
                }}
                value={prodDepEnv}
                placeholder="Select an option"
              />
            </div>
          </div>
          <div className="sub-fields">
            <div style={{ display: "flex", width: "45%" }}>
              <h4 style={{ textAlign: "start" }}>UAT URL</h4>
            </div>
            <input
              type="text"
              style={{ width: "70%", height: 35, paddingLeft: 5, fontSize: 15 }}
              value={uatUrl}
              onChange={(e) => {
                setUatUrl(e.target.value);
              }}
            />
          </div>
          <div className="sub-fields">
            <div style={{ display: "flex", width: "45%" }}>
              <h4 style={{ textAlign: "start" }}>PROD URL</h4>
            </div>
            <input
              type="text"
              style={{ width: "70%", height: 35, paddingLeft: 5, fontSize: 15 }}
              value={prodUrl}
              onChange={(e) => {
                setProdUrl(e.target.value);
              }}
            />
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <button
            style={{
              padding: 7,
              backgroundColor: "red",
              color: "white",
              marginRight: 30,
              borderRadius: 5,
              fontWeight: "bold",
            }}
            onClick={props.onClickCancel}
          >
            Cancel
          </button>
          <button
            style={{ padding: 7, backgroundColor: "blue", color: "white", borderRadius: 5, fontWeight: "bold" }}
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

export default PopUpInstComp;
