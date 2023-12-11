/*-------------------------------------------------------
 File-Name: CommonUtil 
 Summary: 공통 함수 모음집
 Author: bmJckCFsQ771x
 Create-Date: 2023-12-08
 
 Latest-Update-Date: 2023-12-11 bmJckCFsQ771x
 Latest-Update-Log: 주석 처리 및 통신함수 제외, 모달 함수 생성 했습니다.
-------------------------------------------------------*/
const CommmonUtil = {};

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
};

CommmonUtil.showAlert = () => {
  console.log("경고창입니다");
};

CommmonUtil.showBackDrop = () => {
  console.log("백드롭 화면을 활성화 합니다");
};

CommmonUtil.showLoading = (isShow) => {
  if (isShow) {
    console.log("로딩 화면을 활성화 합니다");
    return;
  }
  console.log("로딩 화면을 비활성화 합니다");
};

export default CommmonUtil;
