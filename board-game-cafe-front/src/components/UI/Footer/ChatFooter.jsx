import React from "react";
import classes from "./ChatFooter.module.css";
import { BiSolidSend, BiSolidSave } from "react-icons/bi";

const ChatFooter = (props) => {
  const onChangeTextHandler = (event) => {
    if (props.onChange) {
      props.onChange();
    }
  };

  const onKeyDownHandler = (event) => {
    if (props.onEnter) {
      props.onEnter();
    }
  };

  const onClickHandler = (event) => {
    if (props.onEnter) {
      props.onEnter();
    }
  };

  return (
    <footer>
      <i>
        <BiSolidSave />
      </i>
      <textarea
        onChange={onChangeTextHandler}
        placeholder="대화를 입력해 주세요"
        onKeyDown={onKeyDownHandler}
      ></textarea>
      <i>
        <BiSolidSend onClick={onClickHandler} />
      </i>
    </footer>
  );
};

export default ChatFooter;
