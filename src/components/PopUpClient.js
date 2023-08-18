import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles.css";
import { getAllApiDetails, consumer_getAllConsumers } from "../services/ApiServiceDetails";

const PopUpClient = (props) => {
  const uatStatusType = ["NOT_STARTED", "PENDING", "IN_PROGRESS", "COMPLETED"];
  const prodStatusType = ["NOT_STARTED", "PENDING", "IN_PROGRESS", "COMPLETED"];
  const [appCode, setAppCode] = useState();
  const [clientId, setClientId] = useState();
  const [apiName, setApiName] = useState();
  const [contactName, setContactName] = useState();
  const [uatStatus, setUatStatus] = useState();
  const [uatStatusDate, setUatStatusDate] = useState();
  const [prodStatus, setProdStatus] = useState();
  const [prodStatusDate, setProdStatusDate] = useState();
  const [tpsValue, setTpsValue] = useState();
  const [consumetClientId, setConsumetClientId] = useState();
  const [apiListData, setapiListData] = useState();
  const [apiNameList, setApiNameList] = useState();
  const [consumerList, setConsumerList] = useState();
  const [consumerAppCodeList, setConsumerAppCodeList] = useState();

  useEffect(() => {
    getAllApiDetails_services();
    consumer_getAllConsumers_service();

    if (props.editFlowFlag === true) {
      setAppCode(props.selectedRowData.consumerDetails.appCode);
      setClientId(props.selectedRowData.clientId);
      setApiName(props.selectedRowData.apiDetails.apiName);
      setContactName(props.selectedRowData.contactName);
      setUatStatus(props.selectedRowData.uatStatus);
      setUatStatusDate(new Date(props.selectedRowData.uatStatusDate));
      setProdStatus(props.selectedRowData.prodStatus);
      setProdStatusDate(new Date(props.selectedRowData.prodStatusDate));

      setTpsValue(props.selectedRowData.tpsValue);
      setConsumetClientId(props.selectedRowData.id);
    } else {
      setAppCode();
      setClientId();
      setApiName();
      setContactName();
      setUatStatus();
      setUatStatusDate();
      setProdStatus();
      setProdStatusDate();
      setTpsValue();
    }
  }, []);

  const getAllApiDetails_services = async () => {
    console.log("getAllApiDetails in popup in client");
    const response = await getAllApiDetails();
    if (response !== null && response.data !== null) {
      console.log("response getAllApiDetails:", response.data);
      setapiListData(response.data.getAllApiDetails);
      var tempData = [];
      response.data.getAllApiDetails.forEach((item, index) => {
        tempData.push(item.apiName);
      });
      console.log("tempData : ", tempData);
      setApiNameList(tempData);
    }
  };
  const consumer_getAllConsumers_service = async () => {
    console.log("consumer_getAllConsumers in popup client");
    const response = await consumer_getAllConsumers();
    console.log("response for consumer_getAllConsumers:", response);
    if (response !== null && response.data !== null) {
      console.log("response in consumer_getAllConsumers:", response.data);
      setConsumerList(response.data.consumer_getAllConsumers);
      var tempData = [];
      response.data.consumer_getAllConsumers.forEach((item, index) => {
        tempData.push(item.appCode);
      });
      setConsumerAppCodeList(tempData);
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
          <h3 style={{ color: "white" }}>UPDATE CLIENT</h3>
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
            <h4 style={{ width: "45%", textAlign: "start" }}>APP Code</h4>
            {/* <input
              type="text"
              style={{ width: "45%", height: 35, paddingLeft: 5, fontSize: 15 }}
              value={appCode}
              onChange={(e) => {
                setAppCode(e.target.value);
              }}
            /> */}
            <div style={{ width: "47%" }}>
              {consumerAppCodeList && (
                <Dropdown
                  className="myClassName"
                  options={consumerAppCodeList}
                  onChange={(e) => {
                    console.log("va : ", e.value);
                    setAppCode(e.value);
                  }}
                  value={appCode}
                  placeholder="Select an option"
                />
              )}
            </div>
          </div>
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
            <h4 style={{ width: "45%", textAlign: "start" }}>Client ID</h4>
            <input
              type="text"
              style={{ width: "45%", height: 35, paddingLeft: 5, fontSize: 15 }}
              value={clientId}
              onChange={(e) => {
                setClientId(e.target.value);
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
            <h4 style={{ width: "45%", textAlign: "start" }}>API Name</h4>
            {/* <input
              type="text"
              style={{ width: "45%", height: 35, paddingLeft: 5, fontSize: 15 }}
              value={apiName}
              onChange={(e) => {
                setApiName(e.target.value);
              }}
            /> */}
            <div style={{ width: "47%" }}>
              {apiNameList && (
                <Dropdown
                  className="myClassName"
                  options={apiNameList}
                  onChange={(e) => {
                    console.log("va : ", e.value);
                    setApiName(e.value);
                  }}
                  value={apiName}
                  placeholder="Select an option"
                />
              )}
            </div>
          </div>
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
            <h4 style={{ width: "45%", textAlign: "start" }}>Contact Name</h4>
            <input
              type="text"
              style={{ width: "45%", height: 35, paddingLeft: 5, fontSize: 15 }}
              value={contactName}
              onChange={(e) => {
                setContactName(e.target.value);
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
            <h4 style={{ width: "45%", textAlign: "start" }}>UAT Status</h4>
            <div style={{ width: "47%" }}>
              <Dropdown
                className="myClassName"
                options={uatStatusType}
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
            <h4 style={{ width: "45%", textAlign: "start" }}>Prod Status</h4>
            <div style={{ width: "47%" }}>
              <Dropdown
                className="myClassName"
                options={prodStatusType}
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
            <h4 style={{ width: "45%", textAlign: "start" }}>TPS Value</h4>
            <input
              type="text"
              style={{ width: "45%", height: 35, paddingLeft: 5, fontSize: 15 }}
              value={tpsValue}
              onChange={(e) => {
                setTpsValue(e.target.value);
              }}
            />
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
                appCode: appCode,
                clientId: clientId,
                apiName: apiName,
                contactName: contactName,
                uatStatus: uatStatus,
                uatStatusDate: uatStatusDate,
                prodStatus: prodStatus,
                prodStatusDate: prodStatusDate,
                tpsValue: tpsValue,
                id: consumetClientId,
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

export default PopUpClient;
