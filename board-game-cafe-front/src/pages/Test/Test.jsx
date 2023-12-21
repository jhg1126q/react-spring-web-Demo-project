import React, { useState } from "react";
import Card from "../../components/Card/Card";
import Button from "../../components/UI/Button/SimpleButton";
import CommmonUtil from "../../utils/CommonUtil";
import classes from "../Main.module.css";

import InputMasking from "../../components/UI/Input/InputMasking";
import { SkeletonProfile } from "../../components/UI/Skeleton/Skeleton";

const Test = (props) => {
  const [textMask, setTesxtMask] = useState("");
  // 팝업 버튼 클릭
  const onModalCallClickHandler = () => {
    // TODO ::: 하단의 함수로만으로 모달창을 생성해서 가져오고 싶다
    CommmonUtil.showModal("페이지 ID", "콜");

    setIsModalCall(!isModalCall);
  };

  const onChangeHandler = (data) => {
    setTesxtMask(data.realResult);
    return;
  };

  return (
    <>
      <Card>
        <ul>
          <li>
            <SkeletonProfile></SkeletonProfile>
          </li>
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
        </ul>
        <p className={classes.main}></p>
      </Card>
      <p className="read-the-docs"></p>
    </>
  );
};

export default Test;
