import { useReducer } from "react";
import { authReducer } from "./authReducer";
import { types } from "../types/types";
import { AuthContext } from "./AuthContex";

const initialState = () => {
  user: null;
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const register = (newUser) => {
    dispatch({ type: types.REGISTER, payload: newUser });
  };

  const login = (user) => {
    dispatch({ type: types.LOGIN, payload: user });
  };

  return (
    <AuthContext.Provider value={{ authState, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};
