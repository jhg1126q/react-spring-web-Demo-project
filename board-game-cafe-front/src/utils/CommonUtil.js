/*-------------------------------------------------------
 File-Name: CommonUtil 
 Summary: 공통 함수 모음집
 Author: bmJckCFsQ771x
 Create-Date: 2023-12-08
 
 Latest-Update-Date: 2023-12-11 bmJckCFsQ771x
 Latest-Update-Log: 주석 처리 및 통신함수 제외, 모달 함수 생성 했습니다.
-------------------------------------------------------*/
const CommmonUtil = {}; // Object.assign();

/*-----------------
CommonUtils Params
-----------------*/
CommmonUtil.testParam = "TEST_000";
CommmonUtil.testNum = 0;

/*--------------------
CommonUtils functions
--------------------*/
CommmonUtil.getTestParam = () => {
  return testParam;
};

CommmonUtil.showModal = (title, content, callback) => {
  // title : 제목
  // content : 내용
  // callback : 콜백함수

  console.log("모달창이 등장합니다");
  console.log("제목 : " + title);
  console.log("내용 : " + content);
  if (callback) {
    console.log("callback 함수 존재합니다");
  }
};

CommmonUtil.showAlert = () => {
  console.log("경고창입니다");
};

CommmonUtil.showBackDrop = (isShow) => {
  if (isShow) {
    console.log("백드롭 화면을 활성화 합니다");
    return;
  }
  console.log("백드롭 화면을 비활성화 합니다");
};

CommmonUtil.showLoading = (isShow) => {
  if (isShow) {
    console.log("로딩 화면을 활성화 합니다");
    return;
  }
  console.log("로딩 화면을 비활성화 합니다");
};

// 반값 감지
CommmonUtil.isEmpty = (data) => {
  // 빈 값들어오면 true 리턴합니다.

  if (!(data ?? false)) {
    return true;
  }

  if (data.trim().length === 0) {
    return true;
  }

  if (Array.isArray(data) && data.length === 0) {
    return true;
  }

  if (data.constructor === Object && Object.keys(data).length === 0) {
    return true;
  }

  return false;
};

export default CommmonUtil;
