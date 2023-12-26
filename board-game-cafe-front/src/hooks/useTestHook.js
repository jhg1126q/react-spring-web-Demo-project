import { useState } from "react";
import { useDispatch } from "react-redux";
import { modalAction } from "../store/redux/modal-slice";
import { loadingAction } from "../store/redux/loading-slice";

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
