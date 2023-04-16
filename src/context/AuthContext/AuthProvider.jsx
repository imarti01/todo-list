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
        type: types.AUTH,
        payload: { user: res.data.user, todos: res.data.todos },
      });
    }
  };

  const login = async (user) => {
    const res = await axios.post("http://localhost:4000/users/login", user);

    if (res.data.ok) {
      dispatch({
        type: types.AUTH,
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
        type: types.AUTH,
        payload: { user: res.data.user, todos: res.data.todos },
      });
    }
  };

  const addTodo = async (newTodo) => {
    const res = await axios.post("http://localhost:4000/todos/add", {
      todo: newTodo,
      userId: authState.user.userId,
    });
    if (res.data.ok) {
      dispatch({
        type: types.ADD_TODO,
        payload: res.data.todo,
      });
    }
  };

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
