import { useReducer } from "react";
import { authReducer } from "./authReducer";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import {
  loginFetch,
  authFirebaseFetch,
  registerFetch,
  addTodoFetch,
  editTodoFetch,
  deleteTodoFetch,
} from "../../api/utils";

const initialState = {
  user: null,
  todos: null,
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const register = async (newUser) => {
    const res = await registerFetch(newUser);
    if (res.data.ok) {
      dispatch({
        type: types.AUTH,
        payload: { user: res.data.user, todos: res.data.todos },
      });
    }
  };

  const login = async (user) => {
    const res = await loginFetch(user);
    if (res.data.ok) {
      dispatch({
        type: types.AUTH,
        payload: { user: res.data.user, todos: res.data.todos },
      });
    }
  };

  const authFirebase = async (user) => {
    const res = await authFirebaseFetch(user);
    if (res.data.ok) {
      dispatch({
        type: types.AUTH,
        payload: { user: res.data.user, todos: res.data.todos },
      });
    }
  };

  const addTodo = async (newTodo) => {
    const res = await addTodoFetch(newTodo, authState.user.userId);
    if (res.data.ok) {
      dispatch({
        type: types.ADD_TODO,
        payload: res.data.todo,
      });
    }
  };

  const editTodo = async (editedTodo) => {
    const res = await editTodoFetch(editedTodo);
    if (res.data.ok) {
      const newArrTodos = authState.todos.map((todo) =>
        todo._id === editedTodo._id ? editedTodo : todo
      );
      dispatch({
        type: types.EDIT_TODO,
        payload: newArrTodos,
      });
    }
  };

  const deleteTodo = async (todoId) => {
    const res = await deleteTodoFetch(todoId, authState.user.userId);
    if (res.data.ok) {
      const newArrTodos = authState.todos.filter((todo) => todo._id !== todoId);
      dispatch({
        type: types.DELETE_TODO,
        payload: newArrTodos,
      });
    }
  };

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
