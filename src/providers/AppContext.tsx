import React, { createContext, useState } from "react";

type AppContextType = {
  user: string;
  setUser: (name: string) => void;

  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
