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

  /*------------- 
   버튼 클릭 관련 
  ---------------*/
  const onClickHandler = () => {
    // 전달 받은 함수는 하위 컴포넌트의 이벤트 발동후 넘겨줍니다
    setIsFree(!isFree);
  };

  // 팝업 닫기 이벤트
  const onModalClickHandler = () => {
    setIsModalCall(!isModalCall);
  };

  // Api 콜
  const onClickCallApiHandler = () => {
    // TODO :: 로딩바를 Redux로 ServerManager에 집어넣어서 진행해야합니다
    showTestLoading(true);

    // API를 호출할 경우 이런식으로 호출하게 된다.
    // 직접적으로 ServerManager를 호출해서 콜하는 방식으로 갈건지
    // CommonUtils 를 통해서 한번 더 감싸서 기본 세팅을 해서 호출하게 할건지 생각해 봐야 한다.
    // post관련 테스트 진행
    const param = {};
    param.apiAddress = "people/1/";
    param.method = "get";
    param.callback = callBackTest;

    ServerManager.callApi(param);
  };

  // 테스트 콜백 함수
  const callBackTest = (response) => {
    console.log("callback response ::: ", response);
    showTestLoading(false);
  };

  // 팝업 버튼 클릭
  const onModalCallClickHandler = () => {
    // TODO ::: 하단의 함수로만으로 모달창을 생성해서 가져오고 싶다
    CommmonUtil.showModal("페이지 ID", "콜");

    setIsModalCall(!isModalCall);
  };

  const showTestLoading = (isShow) => {
    setIsLoadingShow(isShow);
  };

  return (
    <Fragment>
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
      <div>
        <a target="_blank">
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
          <li>
            <Button onClick={onClickCallApiHandler}>API콜</Button>
          </li>
        </ul>
        <p className={classes.main}>{content}</p>
      </Card>
      <p className="read-the-docs">{document}</p>
    </Fragment>
  );
};

export default Main;
