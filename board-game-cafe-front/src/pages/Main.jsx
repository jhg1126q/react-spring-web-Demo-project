import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import Modal from "../components/Modal/Modal";
import Loading from "../components/Loading/Loading";
import Nav from "../components/UI/Nav/Nav";
import { counterActions } from "../redux/use-loading";

const Main = () => {
  const title = "Root Layer로 감싸고 있습니다";
  const show = useSelector((state) => state.loading);

  const [isModalCall, setIsModalCall] = useState(false);
  const [isLoadingShow, setIsLoadingShow] = useState(false);

  // 팝업 닫기 이벤트
  const onModalClickHandler = () => {
    setIsModalCall(!isModalCall);
    setIsLoadingShow(false);
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
      <Outlet />
    </Fragment>
  );
};

export default Main;
