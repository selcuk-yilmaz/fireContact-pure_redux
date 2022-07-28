import { ADD_TODO, SET_TODO } from "../types/todoTypes";

const initialState = {
  todoList: [],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        todoList: [
          ...state.todoList,
          {
            id: payload.id,
            name: payload.name,
            number: payload.number,
            gender: payload.gender,
          },
        ],
      };
    case SET_TODO:
      return {
        todoList: payload,
      };

    default:
      return state;
  }
};

export default todoReducer;
