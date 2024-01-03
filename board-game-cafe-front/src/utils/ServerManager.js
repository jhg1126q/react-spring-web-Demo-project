/*-------------------------------------------------------
 File-Name: ServerManager 
 Summary: 통신 함수 모음집
 Author: bmJckCFsQ771x
 Create-Date: 2023-12-11
 
 Latest-Update-Date: 2023-12-18 bmJckCFsQ771x
 Latest-Update-Log: callApi 관련 업데이트
-------------------------------------------------------*/
import axios from "axios";
import messege from "../properties/messege";

const ServerManager = {};

ServerManager.getBaseUrl = () => {
  const BASE_URL = "https://react-http-c86ef-default-rtdb.firebaseio.com/";
  return BASE_URL;
};

/*********************************
  title   : callApi
  params  : requestParam
  return  : callback(data)
  author  : bmJckCFsQ771x
  date    : 2023-12-18 
**********************************/
ServerManager.callApi = async ({
  apiAddress,
  method = "get",
  callback,
  requestData = {},
} = requestParam) => {
  const data = { api: String(apiAddress) };

  // 테스트 api 서두 넣기
  const sendRequest = new Promise((resolve, reject) => {
    axios({
      url: String(apiAddress) + ".json",
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
        data.status = error.code;
        data.dataSet = error;
        // 공통 메세지 출력
        data.messege = messege[error.status];
        reject(data);
      })
      .finally(() => {
        // 필수 후 처리가 필요하면 여기서
      });
  });

  return await sendRequest.then((value) => {
    if (callback) {
      callback(value);
    }

    return value;
  });
};

/*
과연 쓸일이 있을지 모르겠다.
*/
ServerManager.defaultCallback = async (data) => {
  return data;
};

export default ServerManager;
