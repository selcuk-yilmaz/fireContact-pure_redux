import { combineReducers } from "redux";
import todoReducer from "./todoReducer"
import counterReducer from "./counterReducer"




const rootReducer = combineReducers({
  todo: todoReducer,
  count: counterReducer,
});
export default rootReducer;