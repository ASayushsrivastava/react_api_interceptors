import React from "react";
import Greeting from "./components/Greeting";
import TodoList from "./components/ToDoList";
import Counter from "./components/Counter";
import MyCounter from "./components/MyCounter";
import "./styles/app.css";
import { TodoProvider } from "./providers/TodoContextProvider";
import { useUser } from "./providers/useUser";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  const { theme } = useUser();

  const appStyle = {
    backgroundColor: theme === "light" ? "#ffff" : "#121212",
    color: theme === "light" ? "#000" : "#fff",
    transition: "all 0.3s ease",
  };

  return (
    <>
      <div style={appStyle} className="app-container">
        {/* <div>
          <h1>Hello from React + TypeScript + Webpack ⚛️</h1>
          <p>Everything works perfectly!</p>
        </div> */}
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default App;
