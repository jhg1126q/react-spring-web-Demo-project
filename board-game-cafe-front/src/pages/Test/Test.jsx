import React, { useState } from "react";
import Card from "../../components/Card/Card";
import Button from "../../components/UI/Button/SimpleButton";
import InputMasking from "../../components/UI/Input/InputMasking";
import TestClassExample from "./TestClassExample";
import { useDispatch } from "react-redux";
import { loadingAction } from "../../store/redux/loading-slice";
import { modalAction } from "../../store/redux/modal-slice";

import CommmonUtil from "../../utils/CommonUtil";
import classes from "../Main.module.css";
import useHttp from "../../hooks/use-http";

const Test = () => {
  const [textMask, setTesxtMask] = useState("");
  const dispatchStore = useDispatch();
  const { callApi } = useHttp();

  // 팝업 버튼 클릭
  const onModalCallClickHandler = () => {
    // TODO ::: 하단의 함수로만으로 모달창을 생성해서 가져오고 싶다
    CommmonUtil.showModal("페이지 ID", "콜");

    dispatchStore(modalAction.show(true));
  };

  const onChangeHandler = (data) => {
    setTesxtMask(data.realResult);
    return;
  };

  const onLoadingClick = (event) => {
    const result = callApi({ apiAddress: "/user.json", method: "get" });
    console.log(result);
  };

  function* counterTest(array) {
    // return은 done 상태를 만든다.
    if (!array) {
      return 0;
    }

    // 이 상태에서 매달려 있다
    for (let item of array) {
      yield item;
    }

    // 마지막에는 return을 넣거나
    // 안한다면 0가 되어버린다
    return 0;
  }

  const onFnTestClick = (event) => {
    // TODO ::: redux saga 로 제어하는거 해보아야함
    let ddd = [1, 2, 3, 4, 5];
    const sss = counterTest(ddd);
    ddd.forEach((elem) => {
      console.log("counter ::: ", sss.next());
      console.log("elem ::: ", elem);
    });

    console.log("last ::: ", sss.next());
  };

  return (
    <>
      <Card>
        <ul>
          <li>
            <InputMasking onChange={onChangeHandler}></InputMasking>
          </li>
          <li>
            <p>
              {textMask.length < 1
                ? "상단 Input에 숫자나 영어를 입력해주세요."
                : textMask}
            </p>
          </li>
          <TestClassExample />
          <li>
            <Button onClick={onLoadingClick}>로딩창 클릭</Button>
          </li>
          <li>
            <Button onClick={onFnTestClick}>테스트 클릭</Button>
          </li>
        </ul>
        <p className={classes.main}></p>
      </Card>
      <p className="read-the-docs"></p>
    </>
  );
};

export default Test;
