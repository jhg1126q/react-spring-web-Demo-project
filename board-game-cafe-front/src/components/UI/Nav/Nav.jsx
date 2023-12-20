import { NavLink } from "react-router-dom";
import React from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  // end 프로퍼티는 해당 라우터로 끝나야만 활성화 가능하다고 정하는 프로퍼티입니다
  // NavLink 를 사용하 네비게이터에서 활성화되는 내비 태그에 클래스를 활성화 할 수 있습니다
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Main
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="/addUser"
            >
              addUser
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="/user"
            >
              userList
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="/task1"
            >
              task1
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="/task2"
            >
              task2
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
