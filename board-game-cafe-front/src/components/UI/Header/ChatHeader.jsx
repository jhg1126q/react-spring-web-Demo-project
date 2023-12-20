import React from "react";
import classes from "./ChatHeader.module.css";
import Avatar from "../../Avatar/Avatar";
import { BiSolidSearch } from "react-icons/bi";

const ChatHeader = (props) => {
  return (
    <header>
      <Avatar imgSrc={props.imgSrc} isBadge={true}></Avatar>
      <div>{props.title}</div>
      <i>
        <BiSolidSearch />
      </i>
    </header>
  );
};

export default ChatHeader;
