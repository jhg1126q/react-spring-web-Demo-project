import React from "react";
import classes from "./Badge.module.css";

const Badge = (props) => {
  const class_color = `${classes.color} ${props.isColor} `;

  return <div className={class_color}></div>;
};

export default Badge;
