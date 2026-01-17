import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useUser } from "../providers/useUser";

const Greeting: React.FC = () => {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { user, setUser, theme, toggleTheme } = useUser();

  /**
   * ⭐ useLayoutEffect — runs BEFORE the browser paints
   * This avoids flicker when focusing the input.
   */
  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // runs once on mount

  /**
   * ⭐ Runs ONLY once — simulate restoring saved name
   */
  useEffect(() => {
    console.log("Greeting mounted");

    const savedName = localStorage.getItem("name");
    if (savedName) setUser(savedName);
  }, []);

  /**
   * ⭐ Runs whenever `name` changes
   * Save the name to localStorage so it persists
   */
  useEffect(() => {}, [user]);
  useEffect(() => {
    if (user.trim().length > 0) {
      localStorage.setItem("name", user);
      console.log("Name updated:", user);
    }
    if (user.trim().length === 0) localStorage.clear();
  }, [user]);

  return (
    <div
    // style={{
    //   padding: 20,
    //   background: theme === "light" ? "#f5f5f5" : "#333",
    //   color: theme === "light" ? "#000" : "#fff",
    // }}
    >
      <h2>Welcome!</h2>

      <input
        ref={inputRef}
        placeholder="Enter your name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <button onClick={toggleTheme}>{theme}</button>

      {user && <p>Hello, {user} 👋</p>}
    </div>
  );
};

export default Greeting;
