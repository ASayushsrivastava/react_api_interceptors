import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AppProvider } from "./providers/AppContext";
import { AppRouter } from "./router/AppRouter";
import { TodoProvider } from "./providers/TodoContextProvider";
import ReactDOM from "react-dom/client";

// const container = document.getElementById("root")!;
// const root = createRoot(container);

// root.render(
//   <React.StrictMode>
//     <TodoProvider>
//       <AppRouter />
//     </TodoProvider>
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodoProvider>
      <AppRouter />
    </TodoProvider>
  </React.StrictMode>
);
