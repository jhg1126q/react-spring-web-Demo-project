import React, { Fragment, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../components/UI/Button/SimpleButton";
import Card from "../components/Card/Card";
import Modal from "../components/Modal/Modal";
import CommmonUtil from "../utils/CommonUtil";
import Loading from "../components/Loading/Loading";
import useHttp from "../hooks/use-http";

import classes from "./Main.module.css";
import Nav from "../components/UI/Nav/Nav";

const Main = () => {
  const title = "Main Page";

  const [isModalCall, setIsModalCall] = useState(false);
  const [isLoadingShow, setIsLoadingShow] = useState(false);

  // 팝업 닫기 이벤트
  const onModalClickHandler = () => {
    setIsModalCall(!isModalCall);
  };

  // 팝업 버튼 클릭
  const onModalCallClickHandler = () => {
    // TODO ::: 하단의 함수로만으로 모달창을 생성해서 가져오고 싶다
    CommmonUtil.showModal("페이지 ID", "콜");

    setIsModalCall(!isModalCall);
  };

  // Outlet 이 나오는 경로입니다.
  return (
    <Fragment>
      <Nav></Nav>
      {isLoadingShow && <Loading />}
      {isModalCall && (
        <Modal
          title={"공통 모달"}
          active={false}
          onConfirm={onModalClickHandler}
        >
          <p>"안녕하세요 난 공통 모달창입니다"</p>
        </Modal>
      )}
      <h1>{title}</h1>
      <Card>
        <ul>
          <li>
            <Button onClick={onModalCallClickHandler}>모달창</Button>
          </li>
        </ul>
        <p className={classes.main}></p>
      </Card>
      <p className="read-the-docs"></p>
      <Outlet />
    </Fragment>
  );
};

export default Main;
