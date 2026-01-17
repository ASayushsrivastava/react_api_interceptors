import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Todos from "../pages/Todos";
import TodoDetails from "../pages/TodoDetails";
import App from "../App";
import { FetchPostsAxios } from "../components/FetchPostsAxios";
import { FetchUsers } from "../components/FetchUsers";
import AxiosPosts from "../components/AxiosPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "todos", element: <Todos /> },
      { path: "todos/:id", element: <TodoDetails /> },
      // { path: "posts", element: <FetchPostsAxios /> },
      { path: "posts", element: <AxiosPosts /> },
      { path: "users", element: <FetchUsers /> },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
