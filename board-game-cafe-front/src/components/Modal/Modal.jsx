import React from "react";
import Button from "../UI/Button/SimpleButton";
import classes from "./Modal.module.css";
import Card from "../Card/Card";
import ReactDOM from "react-dom";

/*
Modal 만들어야할 종류

Confirm 모달(예, 아니오)
Alert 모달(닫기)
Info 모달 (확인)
스크롤 모달
연속 모달

*/

const ModalBackDrop = (props) => {
  // 혹시 모를 이벤트 버블링 막기
  const onClick = (event) => {
    event.stopPropagation();
    if ((props.isBackDropAvail ?? false) && props.onClick) {
      props.onClick();
    }
    return;
  };

  return <div className={classes.backdrop} onClick={onClick}></div>;
};

const ModalOverlay = (props) => {
  const title = props.title ?? "모달 팝업 제목";
  const btnTxt = props.btnTxt ?? "닫기";

  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>{props.children}</div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>{btnTxt}</Button>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  // 확인 버튼 클릭시 호출되는 기능
  const onClickHandler = async () => {
    if (props.onConfirm) {
      await props.onConfirm();
    }
    onCloseHandler();
  };

  // 닫기 버튼 클릭시 호출되는 기능
  const onCloseHandler = async () => {
    if (props.onClose) {
      await props.onClose();
    }
  };

  // 여기까지는 jsx 처리가 가능합니다.
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalBackDrop
          isBackDropAvail={props.active}
          onClick={true && props.onConfirm}
        />,
        document.getElementById("overlay-container")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title} onConfirm={onClickHandler}>
          {props.children}
        </ModalOverlay>,
        document.getElementById("overlay-container")
      )}
    </React.Fragment>
  );
};

export default Modal;
