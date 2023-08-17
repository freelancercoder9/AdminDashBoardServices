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

  useEffect(() => {
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
          <h3 style={{ color: "white" }}>UPDATE APP INSTANCE</h3>
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
            <h4 style={{ width: "45%", textAlign: "start" }}>App Instance Name</h4>
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
            <h4 style={{ width: "45%", textAlign: "start" }}>App Instance Type</h4>
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
            <h4 style={{ width: "45%", textAlign: "start" }}>Last Uat Dep Date</h4>

            <div style={{ width: "47%" }}>
              <DatePicker
                dateFormat="dd-MM-yyyy"
                selected={lastUatDeployedDate}
                onChange={(date) => setLastUatDeployedDate(date)}
              />
            </div>
          </div>
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
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
            <h4 style={{ width: "45%", textAlign: "start" }}>Uat Dep Env</h4>
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
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
            <h4 style={{ width: "45%", textAlign: "start" }}>Prod Dep Env</h4>
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
                appInstanceName: appInstName,
                appInstanceType: appInstanceType,
                uatDeployedEnv: uatDepEnv,
                prodDeployedEnv: prodDepEnv,
                lastUatDeployedDate: lastUatDeployedDate,
                lastProdDeployedDate: lastProdDeployedDate,
                id: setsetselectedID,
              };
              props.onClickSave(objectData);
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
