import React, { useState } from "react";
import Input from "../../components/UI/Input/Input";
import Card from "../../components/Card/Card";
import Button from "../../components/UI/Button/SimpleButton";
import Commonutil from "../../utils/CommonUtil";
import { Link } from "react-router-dom";
import { SkeletonProfile } from "../../components/UI/Skeleton/Skeleton";
import useHttp from "../../hooks/use-http";

const AddUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { callApi } = useHttp();

  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  const onChangeUserEmail = (event) => {
    setUserEmail(event.target.value);
  };

  const onChangeUserPassword = (event) => {
    setUserPassword(event.target.value);
  };

  const validAddUserData = () => {
    if (Commonutil.isEmpty(userName)) {
      console.log("이름 검증");
      return false;
    }
    if (Commonutil.isEmpty(userEmail)) {
      console.log("이메일 검증 ::: " + userEmail);
      return false;
    }
    if (Commonutil.isEmpty(userPassword)) {
      console.log("비밀번호 검증");
      return false;
    }

    return true;
  };

  const onSubmitClickHandler = async () => {
    if (!validAddUserData()) {
      return;
    }

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
    param.isLoadingActive = true;

    setIsLoading(true);
    callApi(param);
  };

  const onSubmitAfterHandler = () => {
    // 등록되었습니다
    setIsLoading(false);
    console.log("제출 완료");
    setUserEmail("");
    setUserName("");
    setUserPassword("");
  };

  return (
    <Card>
      <form>
        <ul>
          {isLoading ? (
            <SkeletonProfile />
          ) : (
            <>
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
            </>
          )}

          <li>
            <Button
              onSubmit={onSubmitClickHandler}
              disabled={isLoading}
              type="submit"
            >
              등록
            </Button>
          </li>
          <li>
            <Link to="/user">목록으로 가기</Link>
          </li>
        </ul>
      </form>
    </Card>
  );
};

export default AddUser;
