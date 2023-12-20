import React from "react";
import { Outlet } from "react-router-dom";

const Task1RootLayout = () => {
  return (
    <>
      <h2>Task1</h2>
      <Outlet />
    </>
  );
};

export default Task1RootLayout;
