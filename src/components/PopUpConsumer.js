import React, { useState, useEffect } from "react";

import "../styles.css";

const PopUpConsumer = (props) => {
  const [appCode, setAppCode] = useState();
  const [primaryOwner, setPrimaryOwner] = useState();
  const [secondaryOwner, setSecondaryOwner] = useState();
  const [primaryOwnerEmail, setPrimaryOwnerEmail] = useState();
  const [secondaryOwnerEmail, setSecondaryOwnerEmail] = useState();
  const [setsetselectedID, setSetsetselectedID] = useState();

  useEffect(() => {
    if (props.editFlowFlag === true) {
      setAppCode(props.selectedRowData.appCode);
      setPrimaryOwner(props.selectedRowData.primaryOwner);
      setSecondaryOwner(props.selectedRowData.secondaryOwner);
      setPrimaryOwnerEmail(props.selectedRowData.primaryOwnerEmail);
      setSecondaryOwnerEmail(props.selectedRowData.secondaryOwnerEmail);
      setSetsetselectedID(props.selectedRowData.id);
    } else {
      setAppCode();
      setPrimaryOwner();
      setSecondaryOwner();
      setPrimaryOwnerEmail();
      setSecondaryOwnerEmail();
    }
  }, []);

  const validateAndSave = () => {
    console.log("validateAndSave");
    if (appCode !== null && appCode !== undefined && appCode.length > 0) {
      let objectData;
      if (props.editFlowFlag === true) {
        objectData = {
          appCode: appCode,
          primaryOwner: primaryOwner,
          primaryOwnerEmail: primaryOwnerEmail,
          secondaryOwner: secondaryOwner,
          secondaryOwnerEmail: secondaryOwnerEmail,
          id: setsetselectedID,
        };
      } else {
        objectData = {
          appCode: appCode,
          primaryOwner: primaryOwner,
          primaryOwnerEmail: primaryOwnerEmail,
          secondaryOwner: secondaryOwner,
          secondaryOwnerEmail: secondaryOwnerEmail,
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
          <h3 style={{ color: "white" }}>UPDATE CONSUMER</h3>
        </div>
        <div className="fields-container">
          <div className="sub-fields">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>App Code</h4>
              <label htmlFor="star" style={{ color: "red", fontSize: 20 }}>
                *
              </label>
            </div>

            <input
              type="text"
              style={{ width: "45%", height: 35, paddingLeft: 5, fontSize: 15 }}
              value={appCode}
              onChange={(e) => {
                setAppCode(e.target.value);
              }}
            />
          </div>
          <div className="sub-fields">
            <h4 style={{ width: "45%", textAlign: "start" }}>Primary Owner</h4>
            <input
              type="text"
              style={{ width: "45%", height: 35, paddingLeft: 5, fontSize: 15 }}
              value={primaryOwner}
              onChange={(e) => {
                setPrimaryOwner(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="fields-container">
          <div className="sub-fields">
            <h4 style={{ width: "45%", textAlign: "start" }}>Primary Owner Email</h4>
            <input
              type="text"
              style={{ width: "45%", height: 35, paddingLeft: 5, fontSize: 15 }}
              value={primaryOwnerEmail}
              onChange={(e) => {
                setPrimaryOwnerEmail(e.target.value);
              }}
            />
          </div>
          <div className="sub-fields">
            <h4 style={{ width: "45%", textAlign: "start" }}>Secondary Owner</h4>
            <input
              type="text"
              style={{ width: "45%", height: 35, paddingLeft: 5, fontSize: 15 }}
              value={secondaryOwner}
              onChange={(e) => {
                setSecondaryOwner(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="fields-container">
          <div className="sub-fields">
            <h4 style={{ width: "45%", textAlign: "start" }}>Secondary Owner Email</h4>
            <input
              type="text"
              style={{ width: "45%", height: 35, paddingLeft: 5, fontSize: 15 }}
              value={secondaryOwnerEmail}
              onChange={(e) => {
                setSecondaryOwnerEmail(e.target.value);
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

export default PopUpConsumer;
