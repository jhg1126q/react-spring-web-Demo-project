import React, { useEffect } from "react";
import Nav from "../../components/UI/Nav/Nav";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const movePage = () => {
    setTimeout(() => {
      useNavigate("/");
    }, 5000);
  };

  useEffect(() => {
    // hook 내부에서 다른 hook를 발동 할수 없습니다 .
    // custom 후크가 필요합니다
    // movePage();
  }, []);

  return (
    <>
      <Nav></Nav>
      <main>
        <h1>에러 페이지</h1>
        <p>페이지를 찾을수 없습니다.</p>
      </main>
    </>
  );
};

export default ErrorPage;
