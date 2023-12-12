import task1Router from "./Task1/task1Router";
import task2Router from "./Task1/task2Router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

createBrowserRouter([
  { path: "/", element: <Main></Main> },
  { path: "/task1", element: <task1Page></task1Page> },
  { path: "/task2", element: <task1Page></task1Page> },
  { path: "/login", element: <p></p> },
]);
