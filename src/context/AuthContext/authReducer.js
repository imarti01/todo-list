import { types } from "../types/types";

export const authReducer = (state, action) => {
  switch (action.type) {
    case types.AUTH:
      return {
        ...state,
        user: action.payload.user,
        todos: action.payload.todos,
      };
    case types.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};
