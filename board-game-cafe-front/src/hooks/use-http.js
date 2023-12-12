// hooks는 무조건 use로 시작되어야합니다

import { useState } from "react";
import ServerManager from "../utils/ServerManager";

const useHttp = ({
  apiAddress,
  method = "get",
  callback,
  requestData = {},
} = requestParam) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const BASE_URL = "https://react-http-c86ef-default-rtdb.firebaseio.com/";

  const sendRequest = async () => {
    // 로딩바 올리기
    setIsLoading(true);

    let data = { api: String(apiAddress) };

    if (!(apiAddress ?? false)) {
      // 에러 메세지 출력 되어야 합니다
      setError(true);
      return;
    }

    // 로딩바, 모달창 준비
    setIsLoading(true);
    setError(null);

    const param = {};
    param.apiAddress = "/user.json";
    param.method = "get";
    param.callback = callBackTest;

    await ServerManager.callApi(param);
  };

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
