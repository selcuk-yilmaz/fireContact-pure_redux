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
            text: payload.name,
            number: payload.number,
            gender: payload.gender,
          },
        ],
      };
    case SET_TODO:
      return {
        payload.map((data)=>({
        id: data.id,
            text:data.name,
            number: data.number,
            gender: data.gender,
        }))

      };

    default:
      return state;
  }
};

export default todoReducer;
