import {createStore,combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";
import counterReducer from "./reducers/counterReducer";

const rootReducer = combineReducers({
  counterRed: counterReducer,
  todoRed: todoReducer,
});


export const takeStore =()=>{
    const store=createStore(rootReducer)
    return store;
};