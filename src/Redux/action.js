import { ADD_TODO, DELETE_TODO, EDIT, REMOVE_ALL, TOGGLE } from "./actionType";

const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload
  };
};

const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload
  };
};

const removeTodo = () => {
  return {
    type: REMOVE_ALL
  };
};

const toggle = (payload) => {
  return {
    type: TOGGLE,
    payload
  };
};
const editTodo = (payload) => {
  return {
    type: EDIT,
    payload
  };
};
export { editTodo, removeTodo, deleteTodo, addTodo, toggle };
