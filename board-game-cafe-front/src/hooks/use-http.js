// hooks는 무조건 use로 시작되어야합니다
import { loadingAction } from "../store/redux/loading-slice";
import { modalAction } from "../store/redux/modal-slice";
import { useDispatch } from "react-redux";
import ServerManager from "../utils/ServerManager";

// 로딩바와 에러메시지 출현을 위하여 useState hook을 사용하기에
// 커스텀 후크를 만들어서 진행합니다
const useHttp = () => {
  const dispatchStore = useDispatch();

  const callApi = async ({
    apiAddress,
    method = "get",
    callback,
    requestData = {},
    isLoadingActive = true,
  }) => {
    if (isLoadingActive) dispatchStore(loadingAction.show(true));

    if (!(apiAddress ?? false)) {
      // 에러 메세지 출력 되어야 합니다
      dispatchStore(modalAction.show(true));
      dispatchStore(loadingAction.show(false));

      return {
        status: "fail",
      };
    }

    const result = await ServerManager.callApi({
      apiAddress,
      method,
      callback,
      requestData,
    }).then((value) => {
      dispatchStore(loadingAction.show(false));
      return value;
    });
    return result;
  };

  return { callApi };
};

export default useHttp;
