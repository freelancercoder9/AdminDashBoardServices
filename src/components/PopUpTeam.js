import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import "react-datepicker/dist/react-datepicker.css";
import "../styles.css";

const PopUpTeam = (props) => {
  const locationNameList = ["SG", "DTI", "OTHERS"];
  const roleList = ["DEVELOPER", "SCRUM_MASTER", "TESTER"];
  const [memberName, setMemberName] = useState();
  const [role, setRole] = useState();
  const [locationName, setLocationName] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [memberID, setMemberID] = useState();

  useEffect(() => {
    if (props.editFlowFlag === true) {
      setMemberName(props.selectedRowData.memberName);
      setRole(props.selectedRowData.memberRole);
      setContactNumber(props.selectedRowData.contactNumber);
      setLocationName(props.selectedRowData.locationName);
      setMemberID(props.selectedRowData.id);
    } else {
      setMemberName();
      setRole();
      setLocationName();
      setContactNumber();
    }
  }, []);

  const validateAndSave = () => {
    console.log("validateAndSave");
    if (
      memberName !== null &&
      memberName !== undefined &&
      memberName.length > 0 &&
      role !== null &&
      role !== undefined &&
      locationName !== null &&
      locationName !== undefined &&
      memberID !== null &&
      memberID !== undefined
    ) {
      let objectData;
      if (props.editFlowFlag === true) {
        objectData = {
          memberName: memberName,
          memberRole: role,
          locationName: locationName,
          contactNumber: contactNumber,
          id: memberID,
        };
      } else {
        objectData = {
          memberName: memberName,
          memberRole: role,
          locationName: locationName,
          contactNumber: contactNumber,
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
          <h3 style={{ color: "white" }}>UPDATE MEMBER</h3>
        </div>
        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>Member Name</h4>
              <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
                *
              </label>
            </div>

            <input
              type="text"
              style={{ width: "45%", height: 35, paddingLeft: 5, fontSize: 15 }}
              value={memberName}
              onChange={(e) => {
                setMemberName(e.target.value);
              }}
            />
          </div>
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>Location Name</h4>
              <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
                *
              </label>
            </div>

            <div style={{ width: "47%" }}>
              <Dropdown
                className="myClassName"
                options={locationNameList}
                onChange={(e) => {
                  console.log("va : ", e);
                  setLocationName(e.value);
                }}
                value={locationName}
                placeholder="Select an option"
              />
            </div>
          </div>
        </div>
        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>Role</h4>
              <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
                *
              </label>
            </div>

            <div style={{ width: "47%" }}>
              <Dropdown
                className="myClassName"
                options={roleList}
                onChange={(e) => {
                  console.log("va : ", e);
                  setRole(e.value);
                }}
                value={role}
                placeholder="Select an option"
              />
            </div>
          </div>
          <div className="sub-fields">
            <h4 style={{ width: "45%", textAlign: "start" }}>Contact Number</h4>
            <input
              type="text"
              style={{ width: "45%", height: 35, paddingLeft: 5, fontSize: 15 }}
              value={contactNumber}
              onChange={(e) => {
                setContactNumber(e.target.value);
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

export default PopUpTeam;
