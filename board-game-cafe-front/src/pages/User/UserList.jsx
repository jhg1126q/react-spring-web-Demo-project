import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Button from "../../components/UI/Button/SimpleButton";
import ServerManager from "../../utils/ServerManager";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import useModal from "../../hooks/use-modal";
import classes from "./UserList.module.css";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const { callApi } = useHttp();
  const { showAlert } = useModal();

  const events = useLoaderData();
  const navigate = useNavigate();

  const callUserList = () => {
    let param = {};
    param.apiAddress = "/user.json";
    param.method = "get";
    param.callback = showUserList;

    callApi(param);
  };

  // 유저 리스트 출력하는 함수
  const showUserList = (data) => {
    let result = [];
    let responseData = data.dataSet;

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

  const onClickDeleteUserHandler = (data) => {
    let inputData = { id: data.id };

    let param = {};
    param.apiAddress = "/user/" + data.id;
    param.method = "delete";
    param.requestData = inputData;
    param.callback = callDeleteUserCallback;

    ServerManager.callApi(param);
  };

  const callDeleteUserCallback = (data) => {
    showAlert({ message: "삭제되었습니다.", callback: callUserList });
  };

  // 버튼 클릭
  const onDeleteButtonClickHandler = (event) => {
    let param = {};
    param.apiAddress = "/user";
    param.method = "delete";
    param.callback = callUserList;

    ServerManager.callApi(param);
  };

  // 각 userList 클릭
  const onClickUserList = (data) => {
    navigate(data.id);
  };

  useEffect(() => {
    showUserList(events.result);
  }, []);

  return (
    <Card>
      <ul>
        {userList.length !== 0 ? (
          userList.map((data) => {
            return (
              <li key={data.id}>
                <p>{data.userName}</p>
                <Button
                  className={classes.button}
                  onClick={() => onClickUserList(data)}
                >
                  상세보기
                </Button>
                <Button onClick={() => onClickDeleteUserHandler(data)}>
                  삭제
                </Button>
              </li>
            );
          })
        ) : (
          <p>데이터가 없습니다</p>
        )}
        <li>
          <Link to="/addUser">유저 등록으로 가기</Link>
        </li>
        <li>
          <Button onClick={onDeleteButtonClickHandler}>전부 삭제</Button>
        </li>
      </ul>
    </Card>
  );
};

export default UserList;

export async function loader() {
  // 브라우저에서 발동함
  // 리엑트 컴포넌트가 아닙니다.
  // loader가 useLoaderData라는 훅에서 발동되기 때문에 훅중첩에 주의하셔야합니다(무한반복주의)
  let result = {};

  const loaderCallback = async (data) => {
    result = await data;
  };

  const init_loader = async () => {
    let param = {};

    param.apiAddress = "/user";
    param.method = "get";
    param.callback = loaderCallback;
    await ServerManager.callApi(param);
  };

  const call = await init_loader();

  return { call, result };
}
