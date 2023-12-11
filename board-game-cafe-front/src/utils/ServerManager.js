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
  const BASE_URL = "https://swapi.dev/api/";
  return BASE_URL;
};

ServerManager.callApi = async ({
  apiAddress,
  method,
  callback,
} = requestParam) => {
  // 로딩바 올리기
  console.log("로딩바 올리기");

  let data = { api: String(apiAddress) };

  // 테스트 api 서두 넣기
  const response = new Promise((resolve, reject) => {
    axios({
      url: apiAddress,
      method: method,
      baseURL: ServerManager.getBaseUrl(),
      transformRequest: [
        function (data) {
          // 데이터를 변환하려는 작업 수행
          return data;
        },
      ],

      // `transformResponse`는 응답 데이터가 then/catch로 전달되기 전에 변경할 수 있게 해줍니다.
      transformResponse: [
        function (data) {
          // 데이터를 변환하려는 작업 수행
          return data;
        },
      ],

      // `params`은 요청과 함께 전송되는 URL 파라미터입니다.
      // 반드시 일반 객체나 URLSearchParams 객체여야 합니다.
      // 참고: null이나 undefined는 URL에 렌더링되지 않습니다.
      params: {},
      data: {},
      timeout: 10000, // 기본값은 `0` (타임아웃 없음)
      withCredentials: false, // 기본값

      responseType: "json", // 기본값
      responseEncoding: "utf8", // 기본값

      maxContentLength: 2000,
      maxBodyLength: 2000,
    })
      .then((response) => {
        data.type = "success";
        data.status = response.status;
        data.dataSet = JSON.parse(response.data);
        resolve(data);
      })
      .catch((error) => {
        data.type = "success";
        data.status = error.status;
        data.dataSet = error;
        reject(data);
      })
      .finally(() => {
        // 로딩바 사라짐
        console.log("로딩바 삭제");
      });
  });

  await response.then((value) => {
    callback(value);
    return;
  });
};

export default ServerManager;
