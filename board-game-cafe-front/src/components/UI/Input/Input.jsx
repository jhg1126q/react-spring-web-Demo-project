import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  // re-rendering 시 클래스 적용 가능
  const classNames = `${classes.input} ${props.className}`;

  return (
    <input
      className={classNames}
      value={props.value}
      disabled={props.disabled}
      type={props.type}
      onClick={props.onClick}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
