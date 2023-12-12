import React, { Fragment, useCallback, useEffect, useState } from "react";
import testLogo from "../assets/godot-logo.svg";
import Button from "../components/UI/Button/SimpleButton";
import Card from "../components/Card/Card";
import classes from "./Main.module.css";
import Modal from "../components/Modal/Modal";
import CommmonUtil from "../utils/CommonUtil";
import ServerManager from "../utils/ServerManager";
import Loading from "../components/Loading/Loading";
import Input from "../components/UI/Input/Input";
import useHttp from "../hooks/use-http";

const Main = () => {
  const title = "Test Front Page";
  const content = "테스트 내용이 출력됩니다.";
  const document = "주석 처리 하는 파트입니다";

  const [isFree, setIsFree] = useState(false);
  const [isModalCall, setIsModalCall] = useState(false);
  const [isLoadingShow, setIsLoadingShow] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userList, setUserList] = useState([]);
  // 왜 커스텀 후크를 사용하는가
  // 조건이 바뀌게 되면 자동 조회 할수 있도록
  // const { isLoading, error, sendRequest } = useHttp({});

  // 팝업 닫기 이벤트
  const onModalClickHandler = () => {
    setIsModalCall(!isModalCall);
  };

  // Api 콜
  // useEffect 에서 재실행되는 것을 막기 위해서 useCallback으로 변경
  const onClickCallApiHandler = useCallback(async () => {
    // TODO :: 로딩바를 Redux로 ServerManager에 집어넣어서 진행해야합니다
    showTestLoading(true);

    // API를 호출할 경우 이런식으로 호출하게 된다.
    const param = {};
    param.apiAddress = "/user.json";
    param.method = "get";
    param.callback = callBackTest;

    ServerManager.callApi(param);
  }, []);

  // 테스트 콜백 함수
  const callBackTest = (response) => {
    showUserList(response.dataSet);
    showTestLoading(false);
  };

  // 유저 리스트 출력하는 함수
  const showUserList = (data) => {
    let result = [];
    let responseData = data;

    if (!responseData) {
      setUserList([]);
      return;
    }
    for (const keySet in responseData) {
      result.push({
        id: keySet,
        userName: responseData[keySet].userName,
        password: responseData[keySet].userPassword,
        email: responseData[keySet].userEmail,
      });
    }

    setUserList([...result]);
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

  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  const onChangeUserEmail = (event) => {
    setUserEmail(event.target.value);
  };

  const onChangeUserPassword = (event) => {
    setUserPassword(event.target.value);
  };

  const onSubmitClickHandler = () => {
    let data = {
      userName: userName,
      userEmail: userEmail,
      userPassword: userPassword,
    };

    let param = {};
    param.apiAddress = "/user.json";
    param.requestData = data;
    param.method = "post";
    param.callback = onSubmitAfterHandler;

    ServerManager.callApi(param);
  };

  const onSubmitAfterHandler = () => {
    let param = {};
    param.apiAddress = "/user.json";
    param.method = "get";
    param.callback = onCallbackGetTest;

    ServerManager.callApi(param);
  };

  // 콜백 관련 테스트
  const onCallbackGetTest = (response) => {
    showUserList(response.dataSet);
    showTestLoading(false);
  };

  // 각 userList 클릭
  const onClickUserList = (data) => {
    let inputData = { id: data.id };

    let param = {};
    param.apiAddress = "/user.json";
    param.method = "delete";
    param.requestData = inputData;
    param.callback = onCallbackGetTest;
  };

  // 호이스팅 문제로 useEffect를 밑으로 내립니다
  useEffect(() => {
    onClickCallApiHandler();
  }, []);

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
            <Button onClick={onModalCallClickHandler}>모달창</Button>
          </li>
        </ul>
        <p className={classes.main}>{content}</p>
      </Card>
      <Card>
        <form>
          <ul>
            <li>
              <Input
                value={userName}
                onChange={onChangeUserName}
                placeholder="Name"
                type="text"
              ></Input>
            </li>
            <li>
              <Input
                value={userEmail}
                onChange={onChangeUserEmail}
                placeholder="Email"
                type="email"
              ></Input>
            </li>
            <li>
              <Input
                value={userPassword}
                onChange={onChangeUserPassword}
                placeholder="password"
                type="password"
              ></Input>
            </li>
            <li>
              <Button onSubmit={onSubmitClickHandler} type="submit">
                등록
              </Button>
            </li>
          </ul>
        </form>
      </Card>
      <Card>
        <ul>
          {userList ? (
            userList.map((data) => {
              return (
                <li key={data.id} onClick={() => onClickUserList(data)}>
                  <p>
                    {data.userName + " / " + data.email + " / " + data.password}
                  </p>
                </li>
              );
            })
          ) : (
            <p>데이터가 없습니다</p>
          )}
        </ul>
      </Card>
      <p className="read-the-docs">{document}</p>
    </Fragment>
  );
};

export default Main;
