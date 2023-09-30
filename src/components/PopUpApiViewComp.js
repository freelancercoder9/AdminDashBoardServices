import React from "react";

const PopUpApiViewComp = (props) => {
  return (
    <div className="main-container">
      <div className="sub-container">
        <div className="heading">
          <h3 style={{ color: "white" }}>View API</h3>
        </div>
        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>API Name</h4>
            </div>
            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.apiName}
            </label>
          </div>
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>API Request Type</h4>
            </div>

            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.apiRequestType}
            </label>
          </div>
        </div>

        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>APP Inst Detail</h4>
            </div>

            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.appInstanceDetails.appInstanceName}
            </label>
          </div>
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>Developer Name</h4>
            </div>

            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.developerDetails.memberName}
            </label>
          </div>
        </div>

        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>DEV Status</h4>
            </div>

            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.devStatus}
            </label>
          </div>
          <div className="sub-fields">
            <h4 style={{ width: "45%", textAlign: "start" }}>DEV Status Date</h4>
            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.devStatusDate}
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
              <h4 style={{ textAlign: "start" }}>PROD Status</h4>
            </div>

            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.prodStatus}
            </label>
          </div>
          <div className="sub-fields">
            <h4 style={{ width: "45%", textAlign: "start" }}>PROD Status Date</h4>
            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.prodStatusDate}
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

export default PopUpApiViewComp;
