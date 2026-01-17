import React from "react";
import { useState } from "react";
import { useTodos } from "../providers/useTodo";
import { useNavigate } from "react-router-dom";

const TodoForm = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a todo..."
        />
        <button type="submit">Add</button>
      </form>
      {/* ⭐ NEW BUTTONS */}
      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        <button onClick={() => navigate("/users")}>Go to Users</button>
        <button onClick={() => navigate("/posts")}>Go to Posts</button>
      </div>
    </>
  );
};

export default TodoForm;
