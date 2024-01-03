import { configureStore } from "@reduxjs/toolkit";
import loadingSliceReducer from "./redux/loading-slice";
import authSliceReducer from "./redux/auth-slice";
import modalSliceReducer from "./redux/modal-slice";

// 각각의 리덕스를 합쳐서 커다란 리덕스를 형성합니다
const store = configureStore({
  reducer: {
    loading: loadingSliceReducer,
    auth: authSliceReducer,
    modal: modalSliceReducer,
  },
});

export default store;
