import { combineReducers } from "redux";
import { updateButtonReducer } from "./ButtonStateRecucer";
import { LoginUserReducer } from "./LoginUserReducer";
const rootReducer = combineReducers({
  selectedButton: updateButtonReducer,
  LoginUserReducer: LoginUserReducer,
});
export default rootReducer;
