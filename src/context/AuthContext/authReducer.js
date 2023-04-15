import { types } from "../types/types";

export const authReducer = (state, action) => {
  switch (action.type) {
    case types.REGISTER:
      return {
        ...state,
        user: action.payload.user,
        todos: action.payload.todos,
      };
    case types.LOGIN:
      return {
        ...state,
        user: action.payload.user,
        todos: action.payload.todos,
      };
    default:
      return state;
  }
};
