import {
  ADD_TODO,

 
} from "../types/todoTypes";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload: payload };
};

