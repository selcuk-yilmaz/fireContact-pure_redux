import { ADD_TODO } from "../types/todoTypes";

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
            id: new Date().getTime(),
            text: payload.name,
            number: payload.number,
            gender: payload.gender,
          },
        ],
      };

    default:
      return state;
  }
};

export default todoReducer;
