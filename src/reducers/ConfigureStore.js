import { combineReducers, createStore } from "redux";
import { updateButtonReducer } from "./ButtonStateRecucer";

const rootReducers = combineReducers({
  updateButtonReducer: updateButtonReducer,
});
console.log(" In Main Reducer 111111222222");
const configureStore = createStore(rootReducers);

export default configureStore;
