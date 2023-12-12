/*-------------------------------------------------------
 File-Name: ServerManager 
 Summary: 통신 함수 모음집
 Author: bmJckCFsQ771x
 Create-Date: 2023-12-11
 
 Latest-Update-Date: 2023-12-11 bmJckCFsQ771x
 Latest-Update-Log: 생성했어요
-------------------------------------------------------*/
import axios from "axios";

const ServerManager = {};

ServerManager.getBaseUrl = () => {
  const BASE_URL = "https://react-http-c86ef-default-rtdb.firebaseio.com/";
  return BASE_URL;
};

ServerManager.callApi = async ({
  apiAddress,
  method = "get",
  callback,
  requestData = {},
} = requestParam) => {
  // 로딩바 올리기

  let data = { api: String(apiAddress) };

  if (!(apiAddress ?? false)) {
    // 에러 메세지 출력 되어야 합니다
    return;
  }

  // 테스트 api 서두 넣기
  const sendRequest = new Promise((resolve, reject) => {
    axios({
      url: apiAddress,
      method: method,
      baseURL: ServerManager.getBaseUrl(),
      params: {},
      data: JSON.stringify(requestData),
      timeout: 10000, // 기본값은 `0` (타임아웃 없음)
      headers: {
        "Content-Type": "application/json",
      },
      maxContentLength: 2000,
      maxBodyLength: 2000,
    })
      .then((response) => {
        data.type = "success";
        data.status = response.status;
        data.dataSet = response.data;
        resolve(data);
      })
      .catch((error) => {
        data.type = "error";
        data.status = error.status;
        data.dataSet = error;
        reject(data);
      })
      .finally(() => {
        // 로딩바 사라짐
      });
  });

  await sendRequest.then((value) => {
    if (callback) {
      callback(value);
    }
  });
};

export default ServerManager;
