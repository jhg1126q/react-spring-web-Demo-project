import React, { useReducer, useState } from "react";

/******************** 
마스킹 컴포넌트 (1차)
숫자 영어 는 마스킹 됩니다
::::: TODO :::::
한글 마스킹 불가능, 
*********************/

const maskReducer = (state, action) => {
  let maskResult = "";
  let actionClone = { ...action };
  let tgt = actionClone.value;

  // 마지막 값이 입력제한 값이 아니면 지나갑니다
  // 입력중인 상황일 경우만 데이터를 조작합니다 지우는 과정에서 2개씩 지워지는 현상 잡습니다
  if (
    /[^a-z0-9]/.test(tgt.substring(tgt.length - 1)) &&
    !(action.rlength > tgt.length)
  ) {
    actionClone.value =
      tgt.slice(0, -1) +
      tgt.substring(tgt.length - 1).replace(/[^a-z0-9]/gi, "");
  }

  switch (action.type) {
    case "MASK":
      for (let i = 0; i < actionClone.value.length; i++) {
        maskResult += "*";
      }
      state = maskResult;
      break;
    case "DELETE":
      state = "";
      break;
  }

  return state;
};

const InputMasking = (props) => {
  const [maskResult, dispatchInputValue] = useReducer(maskReducer, "");
  const [realResult, setRealResult] = useState("");

  const onChangeHandler = (event) => {};

  const onInputHandler = (event) => {
    let test = ("" + (event.target.value ?? "")).replace(/[^a-z0-9]/gi, "");

    dispatchInputValue({
      type: "MASK",
      value: event.target.value,
      rlength: realResult.length,
    });

    if (test.length > 0) {
      test = realResult.substring(0, ("" + event.target.value).length) + test;
    } else {
      test = realResult.substring(0, ("" + event.target.value).length);
    }

    setRealResult(test);

    if (props.onChange) {
      props.onChange({ realResult: test });
    }
  };

  return (
    <input
      value={maskResult}
      onChange={onChangeHandler}
      placeholder={props.placeholder}
      onInput={onInputHandler}
    />
  );
};

export default InputMasking;
