import React from "react";

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
      <i className="material-icons">attach_file</i>
      <textarea
        onChange={onChangeTextHandler}
        placeholder="대화를 입력해 주세요"
        onKeyDown={onKeyDownHandler}
      ></textarea>
      <i className="material-icons" onClick={onClickHandler}>
        send
      </i>
    </footer>
  );
};

export default ChatFooter;
