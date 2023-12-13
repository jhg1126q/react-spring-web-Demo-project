import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import ServerManager from "../../utils/ServerManager";
import { Link } from "react-router-dom";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  const callUserList = () => {
    let param = {};
    param.apiAddress = "/user.json";
    param.method = "get";
    param.callback = showUserList;

    ServerManager.callApi(param);
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

  // 각 userList 클릭
  const onClickUserList = (data) => {
    let inputData = { id: data.id };

    let param = {};
    param.apiAddress = "/user/" + data.id + ".json";
    param.method = "delete";
    param.requestData = inputData;
    param.callback = callUserList;

    ServerManager.callApi(param);
  };

  useEffect(() => {
    callUserList();
  });

  return (
    <Card>
      <ul>
        {userList.length !== 0 ? (
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
        <li>
          <Link to="/addUser">유저 등록으로 가기</Link>
        </li>
      </ul>
    </Card>
  );
};

export default UserList;
