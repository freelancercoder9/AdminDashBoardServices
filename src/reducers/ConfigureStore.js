import { combineReducers } from "redux";
import { updateButtonReducer } from "./ButtonStateRecucer";
const rootReducer = combineReducers({
  selectedButton: updateButtonReducer,
});
export default rootReducer;
