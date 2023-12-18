import React from "react";
import { Outlet } from "react-router-dom";

const UserRootLayout = () => {
  return (
    <>
      <h2>User Page</h2>
      <Outlet />
    </>
  );
};

export default UserRootLayout;
