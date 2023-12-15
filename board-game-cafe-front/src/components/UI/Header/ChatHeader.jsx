import React from "react";
import classes from "./Header.module.css";

const ChatHeader = () => {
  return (
    <header>
      <div class="avatar">
        <img alt="avatar" src="https://goo.gl/oZRdgO" />
        <div class="color"></div>
      </div>
      <div>CHAT</div>
      <i class="material-icons">search</i>
    </header>
  );
};

export default ChatHeader;
