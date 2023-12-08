import React, { useState } from "react";
import Button from "../UI/Button/SimpleButton";
import classes from "./Modal.module.css";
import Card from "../Card/Card";

const Modal = (props) => {
  const [showModal, setShowModal] = useState(true);

  const onClickHandler = async () => {
    if (props.onConfirm) {
      await props.onConfirm();
    }
    // 여기에 팝업 사라지는 로직이 들어갈수 있다면 정말 좋겠다
    onCloseHandler();
  };

  const onCloseHandler = () => {
    setShowModal(false);
  };

  return (
    <React.Fragment>
      {showModal && (
        <>
          <div className={classes.backdrop}></div>
          <Card className={classes.modal}>
            <header className={classes.header}>
              <h2>제목</h2>
            </header>
            <div className={classes.content}>
              <p>모달창입니다</p>
            </div>
            <footer className={classes.actions}>
              <Button onClick={onClickHandler}>버튼</Button>
            </footer>
          </Card>
        </>
      )}
    </React.Fragment>
  );
};

export default Modal;
