import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
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
          <h3 style={{ color: "white" }}>UPDATE CONSUMER</h3>
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
            <h4 style={{ width: "45%", textAlign: "start" }}>App Code</h4>
            <input
              type="text"
              style={{ width: "45%", height: 35, paddingLeft: 5, fontSize: 15 }}
              value={appCode}
              onChange={(e) => {
                setAppCode(e.target.value);
              }}
            />
          </div>
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
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
          <div style={{ width: "42%", justifyContent: "space-between", alignItems: "center", display: "flex" }}>
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
                primaryOwner: primaryOwner,
                primaryOwnerEmail: primaryOwnerEmail,
                secondaryOwner: secondaryOwner,
                secondaryOwnerEmail: secondaryOwnerEmail,
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

export default PopUpConsumer;
