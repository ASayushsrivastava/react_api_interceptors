import React, { createContext, useState } from "react";
import { Todo } from "../types/todo";

type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;

  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", text: "Learn React", completed: false },
    { id: "2", text: "Practice TypeScript", completed: false },
  ]);

  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  const addTodo = (text: string) => {
    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text, completed: false },
    ]);
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, toggleTodo, theme, toggleTheme }}
    >
      {children}
    </TodoContext.Provider>
  );
};
