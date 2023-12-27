import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { modalAction } from "../store/redux/modal-slice";

import Modal from "../components/Modal/Modal";
import Loading from "../components/Loading/Loading";
import Nav from "../components/UI/Nav/Nav";

const Main = () => {
  const title = "Root Layer로 감싸고 있습니다";
  // store 에 접근할 때 해당 store key 값으로 접근해야 합니다
  const isShow = useSelector((state) => state.loading.show);
  const isModal = useSelector((state) => state.modal.show);
  const modalMsg = useSelector((state) => state.modal.message);
  const dispatchStore = useDispatch();

  // 팝업 닫기 이벤트
  const onModalClickHandler = () => {
    dispatchStore(modalAction.show(false));
  };

  // Outlet 이 나오는 경로입니다.
  return (
    <Fragment>
      <Nav></Nav>
      {isShow && <Loading />}
      {isModal && (
        <Modal title={"알림"} active={false} onConfirm={onModalClickHandler}>
          <p>{modalMsg}</p>
        </Modal>
      )}
      <h1>{title}</h1>
      <Outlet />
    </Fragment>
  );
};

export default Main;
