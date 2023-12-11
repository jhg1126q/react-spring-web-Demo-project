import React, { Fragment, useState } from "react";
import testLogo from "../assets/godot-logo.svg";
import Button from "../components/UI/Button/SimpleButton";
import Card from "../components/Card/Card";
import classes from "./Main.module.css";
import Modal from "../components/Modal/Modal";
import CommmonUtil from "../utils/CommonUtil";
import ServerManager from "../utils/ServerManager";
import Loading from "../components/Loading/Loading";

const Main = () => {
  const title = "Test Front Page";
  const content = "테스트 내용이 출력됩니다.";
  const document = "주석 처리 하는 파트입니다";

  const [isFree, setIsFree] = useState(false);
  const [isModalCall, setIsModalCall] = useState(false);
  const [isLoadingShow, setIsLoadingShow] = useState(false);

  const onClickHandler = () => {
    // 전달 받은 함수는 하위 컴포넌트의 이벤트 발동후 넘겨줍니다
    console.log("this is main click Event!");
    setIsFree(!isFree);
  };

  // 팝업 내려가고 난 후
  const onModalClickHandler = () => {
    showTestLoading(true);
    ServerManager.testApi(
      { apiAddress: "people/1/", method: "get" },
      callBackTest
    );
    console.log("test end");
    setIsModalCall(!isModalCall);
  };

  const callBackTest = (response) => {
    console.log("Test callback에서 받아오는 response");
    console.log(response);
    showTestLoading(false);
  };

  // 팝업 버튼 클릭
  const onModalCallClickHandler = () => {
    // 하단의 함수로만으로 모달창을 생성해서 가져오고 싶다
    CommmonUtil.showModal("페이지 ID", "콜");

    setIsModalCall(!isModalCall);
  };

  const showTestLoading = (isShow) => {
    console.log("testLoading ::: ", isShow);
    setIsLoadingShow(isShow);
  };

  return (
    <Fragment>
      {isLoadingShow && <Loading />}
      {isModalCall && (
        <Modal title={"공통 모달"} onConfirm={onModalClickHandler}>
          <p>"안녕하세요 난 공통 모달창입니다"</p>
        </Modal>
      )}
      <div>
        <a href="#" target="_blank">
          <img src={testLogo} className="logo react" alt="Test logo" />
        </a>
      </div>
      <h1>{title}</h1>
      <Card>
        <ul>
          <li>
            <Button onClick={onClickHandler} disabled={isFree}>
              로그인/회원가입
            </Button>
          </li>
          <li>
            <Button onClick={onClickHandler} disabled={!isFree}>
              로그아웃
            </Button>
          </li>
          <li>
            <Button onClick={onModalCallClickHandler}>모달창</Button>
          </li>
        </ul>
        <p className={classes.main}>{content}</p>
      </Card>
      <p className="read-the-docs">{document}</p>
    </Fragment>
  );
};

export default Main;
