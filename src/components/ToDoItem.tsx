import React from "react";
import { Todo } from "../types/todo";

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
}

function TodoItem({ todo, onToggle }: Props) {
  return (
    <li
      className={todo.completed ? "completed" : ""}
      onClick={() => {
        console.log("clicked with id:", todo.id);
        onToggle(todo.id);
      }}
    >
      {todo.text}
    </li>
  );
}

export default TodoItem;
