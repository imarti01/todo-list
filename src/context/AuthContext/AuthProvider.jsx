import { useReducer } from "react";
import { authReducer } from "./authReducer";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import axios from "axios";

const initialState = {
  user: null,
  todos: null,
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const register = async (newUser) => {
    const res = await axios.post(
      "http://localhost:4000/users/register",
      newUser
    );
    if (res.data.ok) {
      dispatch({
        type: types.REGISTER,
        payload: { user: res.data.user, todos: res.data.todos },
      });
    }
  };

  const login = async (user) => {
    const res = await axios.post("http://localhost:4000/users/login", user);

    if (res.data.ok) {
      dispatch({
        type: types.LOGIN,
        payload: { user: res.data.user, todos: res.data.todos },
      });
    }
  };

  const authFirebase = async (user) => {
    const res = await axios.post(
      "http://localhost:4000/users/authFirebase",
      user
    );

    if (res.data.ok) {
      dispatch({
        type: types.LOGIN,
        payload: { user: res.data.user, todos: res.data.todos },
      });
    }
  };

  const addTodo = () => {};

  const editTodo = () => {};

  const deleteTodo = () => {};

  return (
    <AuthContext.Provider
      value={{
        authState,
        register,
        login,
        authFirebase,
        addTodo,
        editTodo,
        deleteTodo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
