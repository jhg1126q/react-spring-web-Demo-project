import React, { Fragment, useState } from "react";
import testLogo from "../assets/godot-logo.svg";
import Button from "../components/UI/Button/SimpleButton";
import Card from "../components/Card/Card";

const Main = () => {
  const title = "Test Front Page";
  const content = "테스트 내용이 출력됩니다.";
  const document = "주석 처리 하는 파트입니다";

  const [isFree, setIsFree] = useState(false);

  const onClickHandler = () => {
    // 전달 받은 함수는 하위 컴포넌트의 이벤트 발동후 넘겨줍니다
    console.log("this is main click Event!");
    setIsFree(!isFree);
  };

  return (
    <Fragment>
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
        </ul>

        <p>{content}</p>
      </Card>
      <p className="read-the-docs">{document}</p>
    </Fragment>
  );
};

export default Main;
