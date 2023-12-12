import React from "react";
import classes from "./SimpleButton.module.css";

/* Props
 type : 버튼 타입
 disabled : 비활성화 여부
*/
const Button = (props) => {
  const onClickHandler = (event) => {
    event.preventDefault();
    if (props.onClick) {
      props.onClick();
    }

    if (props.onSubmit) {
      props.onSubmit();
    }
  };

  const btnClass = `${classes.button} ${props.className}`;

  return (
    <button
      className={btnClass}
      onClick={onClickHandler}
      disabled={props.disabled || false}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
