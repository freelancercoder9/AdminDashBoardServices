export function LoginUserReducer(state = { login: false }, action) {
  console.log("LoginUserReducer in reducer");
  switch (action.type) {
    case "LOGIN_USER":
      console.log("LOGIN_USER value:", action.payload);
      state = action.payload;
      return state;
    default:
      return state;
  }
}
