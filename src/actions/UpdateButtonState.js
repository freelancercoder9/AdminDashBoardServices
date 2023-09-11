export const buttonAction = (buttonVal) => {
  console.log("buttonVal action");
  return {
    type: "BUTTON_VALUE",
    payload: buttonVal,
  };
};
