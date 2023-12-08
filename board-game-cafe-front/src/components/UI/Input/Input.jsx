import React from "react";
import classes from "Input.module.css";

const Input = (props) => {
  const classNames = `${classes.input} ${props.className}`;

  return (
    <input
      className={classNames}
      value={props.value}
      disabled={props.disabled}
      type={props.type}
    />
  );
};

export default Input;
