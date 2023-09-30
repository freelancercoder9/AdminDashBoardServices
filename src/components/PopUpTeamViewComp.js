import React from "react";

const PopUpTeamViewComp = (props) => {
  return (
    <div className="main-container">
      <div className="sub-container">
        <div className="heading">
          <h3 style={{ color: "white" }}>VIEW MEMBER</h3>
        </div>
        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>Member Name</h4>
            </div>

            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.memberName}
            </label>
          </div>
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>Location Name</h4>
            </div>

            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.locationName}
            </label>
          </div>
        </div>
        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>Role</h4>
            </div>

            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.memberRole}
            </label>
          </div>
          <div className="sub-fields">
            <h4 style={{ width: "45%", textAlign: "start" }}>Contact Number</h4>
            <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
              {props.selectedRowData.contactNumber}
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

export default PopUpTeamViewComp;
