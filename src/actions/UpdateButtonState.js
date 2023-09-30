export const buttonSelectVal = (buttonVal) => {
  console.log("buttonVal action");
  return {
    type: "BUTTON_VALUE",
    payload: buttonVal,
  };
};

export const loginUsers = (userVal) => {
  console.log("loginUsers action");
  return {
    type: "LOGIN_USER",
    payload: userVal,
  };
};
