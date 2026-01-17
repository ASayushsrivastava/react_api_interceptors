import { useContext } from "react";
import { AppContext } from "./AppContext";
import { TodoContext } from "./TodoContextProvider";

export function useUser() {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useUser must be inside AppProvider");

  return {
    theme: context.theme,
    toggleTheme: context.toggleTheme,
  };
}
