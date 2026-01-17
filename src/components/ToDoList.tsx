import React, { useCallback, useMemo, useState } from "react";
import { Todo } from "../types/todo";
import TodoItem from "./ToDoItem";
import { useTodos } from "../providers/useTodo";
import { useUser } from "../providers/useUser";
import { useNavigate } from "react-router-dom";

function TodoList() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();
  const { theme } = useUser();
  const navigate = useNavigate(); // ✅ added for navigation

  const [text, setText] = useState("");

  // const [todos, setTodos] = useState<Todo[]>([
  //   { id: 1, text: "Learn React", completed: false },
  //   { id: 2, text: "Practice TypeScript", completed: false },
  // ]);

  const [search, setSearch] = useState("");
  const [newTodo, setnewTodo] = useState("");

  // function toggleTodo(id: number) {
  //   setTodos((prev) =>
  //     prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
  //   );
  // }

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(search.toLowerCase())
    );
  }, [todos, search]);

  // const handleAdd = useCallback(() => {
  //   setTodos((prev) => [
  //     ...prev,
  //     { id: todos.length + 1, text: newTodo, completed: false },
  //   ]);
  //   setnewTodo("");
  // }, [newTodo]);

  // const handleToggle = useCallback((id: number) => {
  //   setTodos((prev) =>
  //     prev.map((todo) =>
  //       todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //     )
  //   );
  // }, []);

  return (
    <>
      <div>
        <h2>Todo List</h2>

        <input
          placeholder="Search todos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* <input
          placeholder="Add Todo.."
          value={newTodo}
          onChange={(e) => setnewTodo(e.target.value)}
        /> */}

        {/* <button
          onClick={() => {
            if (newTodo.trim().length > 0) {
              addTodo(newTodo);
              setnewTodo("");
            }
          }}
        >
          Add Todo
        </button> */}

        <ul>
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              style={{ cursor: "pointer", marginBottom: 4 }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text} {todo.completed ? "✔" : ""}
              <button
                style={{ marginLeft: 8 }}
                onClick={(e) => {
                  e.stopPropagation();
                  removeTodo(todo.id);
                }}
              >
                remove
              </button>
              <button
                style={{ marginLeft: 8 }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/todos/${todo.id}`);
                }}
              >
                View Details
              </button>
            </li>
          ))}
        </ul>

        {/* {todos.length > 0 && (
          <button onClick={() => navigate(`/todos/${todos[0].id}`)}>
            Go to First Todo Details
          </button>
        )} */}
      </div>
    </>
  );
}

export default TodoList;
