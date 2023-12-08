import React from "react";
import classes from "./SimpleButton.module.css";

const Button = (props) => {
  const onClickHandler = (event) => {
    event.preventDefault();
    console.log("click!");
    props.onClick();
  };
  const btnClass = "";

  return (
    <button
      className={classes.button}
      onClick={onClickHandler}
      disabled={props.disabled}
    >
      {props.btnText}
    </button>
  );
};

export default Button;
