import React from "react";

const PopUpClientViewComp = (props) => {
  return (
    <div className="main-container">
      <div className="sub-container">
        <div className="heading">
          <h3 style={{ color: "white" }}>VIEW CLIENT</h3>
        </div>
        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>App Code</h4>
            </div>

            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.consumerDetails.appCode}
            </label>
          </div>
          <div className="sub-fields">
            <h4 style={{ width: "45%", textAlign: "start" }}>Client ID</h4>
            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.clientId}
            </label>
          </div>
        </div>
        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>API Name</h4>
            </div>

            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.apiDetails.apiName}
            </label>
          </div>
          <div className="sub-fields">
            <h4 style={{ width: "45%", textAlign: "start" }}>Contact Name</h4>
            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.contactName}
            </label>
          </div>
        </div>

        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>UAT Status</h4>
            </div>

            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.uatStatus}
            </label>
          </div>
          <div className="sub-fields">
            <h4 style={{ width: "45%", textAlign: "start" }}>UAT Status Date</h4>
            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.uatStatusDate}
            </label>
          </div>
        </div>

        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>Prod Status</h4>
            </div>

            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.prodStatus}
            </label>
          </div>
          <div className="sub-fields">
            <h4 style={{ width: "45%", textAlign: "start" }}>TPS Value</h4>
            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.tpsValue}
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

export default PopUpClientViewComp;
