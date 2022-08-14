import { ADD_TODO, SET_TODO } from "../types/todoTypes";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload: payload };
};

export const setTodo = (payload) => {
  return { type: SET_TODO, payload: payload };
};
