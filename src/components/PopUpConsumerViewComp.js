import React from "react";

const PopUpConsumerViewComp = (props) => {
  return (
    <div className="main-container">
      <div className="sub-container">
        <div className="heading">
          <h3 style={{ color: "white" }}>VIEW CONSUMER</h3>
        </div>
        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>App Code</h4>
            </div>

            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.appCode}
            </label>
          </div>
          <div className="sub-fields">
            <h4 style={{ width: "45%", textAlign: "start" }}>Primary Owner</h4>
            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.primaryOwner}
            </label>
          </div>
        </div>

        <div className="fields-container">
          <div className="sub-fields">
            <h4 style={{ width: "45%", textAlign: "start" }}>Primary Owner Email</h4>
            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.primaryOwnerEmail}
            </label>
          </div>
          <div className="sub-fields">
            <h4 style={{ width: "45%", textAlign: "start" }}>Secondary Owner</h4>
            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.secondaryOwner}
            </label>
          </div>
        </div>
        <div className="fields-container">
          <div className="sub-fields">
            <h4 style={{ width: "45%", textAlign: "start" }}>Secondary Owner Email</h4>
            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.secondaryOwnerEmail}
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

export default PopUpConsumerViewComp;
