import React, { useEffect } from "react";
import Nav from "../../components/UI/Nav/Nav";
import PageContent from "../../components/UI/Content/PageContent";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  let messege = "";

  if (error.status === "ERR_NETWORK") {
    messege += "AXIOS ERR PAGE";
  } else if (error.status === "404") {
    messege += "404";
  } else {
    messege += "해당되는 에러 코드가 없습니다 ::: ";
    messege += error.status;
  }

  return (
    <>
      <Nav></Nav>
      <main>
        <PageContent title="에러 페이지">
          <p>{error.status}</p>
          <p>{messege}</p>
        </PageContent>
      </main>
    </>
  );
};

export default ErrorPage;
