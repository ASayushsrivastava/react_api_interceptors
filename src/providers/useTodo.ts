import { useContext } from "react";
import { TodoContext } from "./TodoContextProvider";

export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useTodos must be used inside TodoProvider");

  return {
    todos: context.todos,
    addTodo: context.addTodo,
    toggleTodo: context.toggleTodo,
    removeTodo: context.removeTodo,
    theme: context.theme,
    toggleTheme: context.toggleTheme,
  };
}
