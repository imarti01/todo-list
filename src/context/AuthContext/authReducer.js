import { types } from "../types/types";

export const authReducer = (state, action) => {
  switch (action.type) {
    case types.REGISTER:
      return { ...state, user: action.payload };
    case types.LOGIN:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};
