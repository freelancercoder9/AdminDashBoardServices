import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUsers } from "../actions/UpdateButtonState";
import { useNavigate } from "react-router-dom";

const LoginComp = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <div className="sub-container-login">
        <div className="heading-login">
          <h3 style={{ color: "black" }}>LOGIN DETAILS</h3>
        </div>
        <div className="fields-container-login">
          <div className="sub-fields-login">
            <div style={{ width: "45%" }}>
              <h4 style={{ textAlign: "start" }}>User Name</h4>
            </div>

            <input
              type="text"
              style={{ width: "80%", height: 35, paddingLeft: 5, fontSize: 15 }}
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="sub-fields-login">
            <div style={{ width: "45%", display: "flex" }}>
              <h4 style={{ textAlign: "start" }}>Password</h4>
            </div>
            <input
              type="text"
              style={{ width: "80%", height: 35, paddingLeft: 5, fontSize: 15 }}
              value={passWord}
              onChange={(e) => {
                setPassWord(e.target.value);
              }}
            />
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <button
            style={{ padding: 7, backgroundColor: "blue", color: "white", borderRadius: 5, fontWeight: "bold" }}
            onClick={() => {
              // onClickLogin();
              if (userName === "admin" && passWord === "admin") {
                dispatch(loginUsers({ login: true }));
                navigate("/appListComp");
              } else {
                dispatch(loginUsers({ login: false }));
              }
            }}
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;