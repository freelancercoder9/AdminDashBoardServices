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

  const validateAndSave = (apiId, consumerId) => {
    console.log("validateAndSave");
    if (
      clientId !== null &&
      clientId !== undefined &&
      contactName !== null &&
      contactName !== undefined &&
      uatStatus !== null &&
      uatStatus !== undefined &&
      prodStatus !== null &&
      prodStatus !== undefined
    ) {
      let objectData;
      if (props.editFlowFlag === true) {
        objectData = {
          clientId: clientId,
          contactName: contactName,
          uatStatus: uatStatus,
          uatStatusDate: uatStatusDate,
          prodStatus: prodStatus,
          prodStatusDate: prodStatusDate,
          tpsValue: tpsValue,
          id: consumetClientId,
        };
      } else {
        objectData = {
          clientId: clientId,
          contactName: contactName,
          uatStatus: uatStatus,
          uatStatusDate: uatStatusDate,
          prodStatus: prodStatus,
          prodStatusDate: prodStatusDate,
          tpsValue: tpsValue,
        };
      }
      props.onClickSave(objectData, consumerId, apiId);
    } else {
      alert("Please fill all mandatory fields");
    }
  };
  return (
    <div className="main-container">
      <div className="sub-container">
        <div className="heading">
          <h3 style={{ color: "white" }}>UPDATE CLIENT</h3>
        </div>
        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>App Code</h4>
              <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
                *
              </label>
            </div>

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
          <div className="sub-fields">
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
        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>API Name</h4>
              <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
                *
              </label>
            </div>

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
          <div className="sub-fields">
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
              <h4 style={{ textAlign: "start" }}>Prod Status</h4>
              <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
                *
              </label>
            </div>

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
          <div className="sub-fields">
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
              var apiId = 0;
              apiListData.forEach((item, index) => {
                if (item.apiName === apiName) {
                  apiId = item.id;
                }
              });
              var consumerId = 0;
              consumerList.forEach((item, index) => {
                if (item.appCode === appCode) {
                  consumerId = item.id;
                }
              });
              validateAndSave(apiId, consumerId);
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
