import { useState } from "react";
import { useDispatch } from "react-redux";
import { modalAction } from "../store/redux/modal-slice";
import { loadingAction } from "../store/redux/loading-slice";

// custom hook
// component 내에 있어야만 하는 hook 소스를
// 아웃소싱 하기 위해서 만드는 것 (공통 후크)
// 쓰는 법도 hook와 똑같다
const useTestHook = (init) => {
  const [test, setTest] = useState(init);
  const dispatchStore = useDispatch();

  const setLoading = (isShow) => {
    dispatchStore(loadingAction.show(isShow));
    setTest("loading");
  };
  const setModal = (isShow) => {
    dispatchStore(modalAction.show(isShow));
    setTest("modal");
  };

  return { test, setLoading, setModal };
};

export default useTestHook;
