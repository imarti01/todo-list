import axios from "axios";

const API_URL = "http://localhost:4000";

//AUTH

export const registerFetch = async (user) => {
  return await axios.post(`${API_URL}/users/register`, user);
};

export const loginFetch = async (user) => {
  return await axios.post(`${API_URL}/users/login`, user);
};

export const authFirebaseFetch = async (user) => {
  return await axios.post(`${API_URL}/users/authFirebase`, user);
};

//TODOS

export const addTodoFetch = async (todo, userId) => {
  return await axios.post(`${API_URL}/todos/add`, {
    todo,
    userId,
  });
};

export const editTodoFetch = async (todo) => {
  return await axios.post("http://localhost:4000/todos/edit", todo);
};

export const deleteTodoFetch = async (todoId, userId) => {
  return await axios.post(`${API_URL}/todos/delete`, {
    todoId,
    userId,
  });
};
