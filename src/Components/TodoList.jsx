import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo, toggle } from "../Redux/action";
import "./todo.css";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((s) => s.todos);
  const handleRemove = (payload) => {
    dispatch(deleteTodo(payload));
  };
  const handleToggle = (i) => {
    dispatch(toggle(i));
  };
  const active = {
    background: "#d9d9d9",
    color: "red"
  };
  const nonactive = {
    background: "#d9d9d9"
  };

  const handleEdit = (payload, task) => {
    var x = prompt("Please enter your name", task);
    if (x) {
      const lo = {
        payload,
        name: x
      };
      dispatch(editTodo(lo));
    }
  };
  return (
    <div>
      {todos.map(({ id, task, status }, i) => {
        return (
          <div className="flexlist" style={{ marginTop: "10px" }}>
            <h1 key={id}>{task}</h1>
            <button className="addBtn" onClick={() => handleRemove(id)}>
              Remove
            </button>{" "}
            <button
              className="addBtn"
              style={status === true ? active : nonactive}
              onClick={() => handleToggle(i)}
            >
              {status === true ? "Done" : "Not Done"}
            </button>
            <button className="addBtn" onClick={() => handleEdit(i, task)}>
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export { TodoList };
