import React from "react";
import classes from "./Avatar.module.css";
import Badge from "../Badge/Badge";

const Avatar = (props) => {
  return (
    <div
      className={
        props.imgPosition !== "right" ? classes.avatar : classes.avatar_right
      }
    >
      <img alt="avatar" src={props.imgSrc} />
      {props.isBadge && <Badge />}
    </div>
  );
};

export default Avatar;
