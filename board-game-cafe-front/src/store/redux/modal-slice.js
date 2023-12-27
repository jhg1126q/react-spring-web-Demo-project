import { createSlice } from "@reduxjs/toolkit";

const initialState = { show: false, message: "" };

const modalSlice = createSlice({
  name: "modalStore",
  initialState,
  reducers: {
    show(state, action) {
      if (String(action.payload.message).length < 1) {
        console.log("ssss");
        state.show = false;
        state.message = "";
      } else {
        if (action.payload.show) {
          state.show = true;
          state.message = action.payload.message;
        } else {
          state.show = false;
          state.message = "";
        }
      }
    },
  },
});

export const modalAction = modalSlice.actions;
export default modalSlice.reducer;
