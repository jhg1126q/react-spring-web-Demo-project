import React from "react";
import classes from "./Input.module.css";

const InputLabel = (props) => {
  const classNames = `${classes.input} ${props.className}`;

  return (
    <>
      <label className={classNames} htmlFor="target"></label>
      <input onChange={props.onChange} ref="target" />
    </>
  );
};

export default InputLabel;
