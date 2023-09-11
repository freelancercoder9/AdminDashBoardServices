export function updateButtonReducer(state, action) {
  console.log("updateButtonReducer in reducer");
  switch (action.type) {
    case "BUTTON_VALUE":
      console.log("button value:", action.payload);
      state = action.payload;
      return state;
    default:
      return state;
  }
}
