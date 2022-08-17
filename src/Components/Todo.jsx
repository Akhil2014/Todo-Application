import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../Redux/action";
import { TodoList } from "./TodoList";
import "./todo.css";

export const Todo = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const handleAdd = () => {
    if (data) {
      const payload = {
        id: Math.random(),
        task: data,
        status: false
      };
      dispatch(addTodo(payload));
      setData("");
    } else {
      alert("enter some text");
    }
  };
  const handleAll = () => {
    dispatch(removeTodo());
  };
  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };
  return (
    <div>
      <div style={{ backgroundColor: "black" }} id="myDIV" class="header">
        <h1>TODO TASK LIST</h1>
      </div>
      <div className="flex">
        <input
          id="myInput"
          placeholder="Title..."
          onKeyPress={handleKey}
          value={data}
          onChange={(e) => setData(e.target.value)}
          type="text"
          name=""
        />
        <button className="addBtn" onClick={handleAdd}>
          AddTask
        </button>
      </div>

      <TodoList />
      <button
        className="addBtn"
        style={{
          marginTop: "20px",
          marginLeft: "40%",
          color: "white",
          background: "red"
        }}
        onClick={handleAll}
      >
        Remove All
      </button>
    </div>
  );
};
