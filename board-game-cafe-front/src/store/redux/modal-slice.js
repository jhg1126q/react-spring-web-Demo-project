import { createSlice } from "@reduxjs/toolkit";

const initialState = { show: false, message: "", callback: null };

const modalSlice = createSlice({
  name: "modalStore",
  initialState,
  reducers: {
    show(state, action) {
      if (String(action.payload.message).length < 1) {
        // no message
        state.show = false;
        state.message = "";
        state.title = "";
        state.callback = null;
      } else {
        if (action.payload.show) {
          // 제대로 들어온 경우
          state.show = true;
          state.message = action.payload.message;
          state.title = action.payload.title ?? "알림";
          state.callback = action.payload.callback;
        } else {
          state.show = false;
          state.message = "";
          state.title = "";
          state.callback();
        }
      }
    },
  },
});

export const modalAction = modalSlice.actions;
export default modalSlice.reducer;
