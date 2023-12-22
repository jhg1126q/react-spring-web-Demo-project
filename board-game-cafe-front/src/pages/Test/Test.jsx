import React, { useState } from "react";
import Card from "../../components/Card/Card";
import Button from "../../components/UI/Button/SimpleButton";
import InputMasking from "../../components/UI/Input/InputMasking";
import { SkeletonProfile } from "../../components/UI/Skeleton/Skeleton";
import TestClassExample from "./TestClassExample";
import { useDispatch } from "react-redux";
import { loadingAction } from "../../store/redux/loading-slice";
import { modalAction } from "../../store/redux/modal-slice";

import CommmonUtil from "../../utils/CommonUtil";
import classes from "../Main.module.css";

const Test = () => {
  const [textMask, setTesxtMask] = useState("");
  const dispatchStore = useDispatch();

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
    dispatchStore(loadingAction.toggle());
    setTimeout(() => {
      dispatchStore(loadingAction.toggle());
    }, 2000);
  };

  const onFnTestClick = (event) => {
    // TODO ::: redux saga 로 제어해야합니다
    console.log("test");
    let data = {
      r1: "r1",
      r2: "r2",
      r3: "r3",
      r4: "r4",
      r5: "r5",
    };
    let fnCall = yieldTestFunction(data);

    console.log("1차 :::: ", fnCall.next().value);
    console.log("2차 :::: ", fnCall.next().value);
    // done 이 true 로 나옵니다
    console.log("3차 :::: ", fnCall.next().value);
  };

  function* yieldTestFunction(data) {
    console.log("yield 1" + data.r1);
    console.log("yield 2" + data.r2);
    // yield 1차
    yield data.r1 + data.r2;

    console.log("yield 3" + data.r3);
    // yield 2차
    yield data.r3;

    console.log("yield 4" + data.r4);

    console.log("yield 5" + data.r5);
  }

  return (
    <>
      <Card>
        <ul>
          <li>
            <Button onClick={onModalCallClickHandler}>모달창</Button>
          </li>
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
