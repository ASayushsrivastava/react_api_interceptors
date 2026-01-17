import { useTodos } from "./useTodo";

export const useFilteredTodos = (status?: "completed" | "pending") => {
  const { todos } = useTodos();

  if (!status) return todos;
  return todos.filter((todo) =>
    status === "completed" ? todo.completed : !todo.completed
  );
};
