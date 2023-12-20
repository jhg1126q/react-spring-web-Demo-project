import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import ServerManager from "../../utils/ServerManager";

const UserDetail = () => {
  const params = useParams();
  const { result: loadData } = useLoaderData();

  return (
    <>
      <p>Id : {params.userId}</p>
      <p>Email : {loadData.dataSet.userEmail}</p>
      <p>Name : {loadData.dataSet.userName}</p>
      <p>Password : {loadData.dataSet.userPassword}</p>
      <Link to=".." relative="path">
        뒤로가기
      </Link>
    </>
  );
};

export default UserDetail;

export async function loader({ params }) {
  // loader에서 넘어오는 데이터는 params입니다
  let result = {};

  const loaderCallback = async (data) => {
    result = await data;
  };

  const init_loader = async () => {
    let param = {};
    param.apiAddress = "/user/" + params.userId + ".json";
    param.method = "get";
    param.callback = loaderCallback;

    await ServerManager.callApi(param);
  };

  const call = await init_loader();

  return { call, result };
}
