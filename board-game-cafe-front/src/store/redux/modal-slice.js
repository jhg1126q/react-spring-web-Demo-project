import { createSlice } from "@reduxjs/toolkit";

const initialState = { show: false };

const modalSlice = createSlice({
  name: "modalStore",
  initialState,
  reducers: {
    show(state, action) {
      if (action.payload) {
        state.show = true;
      } else {
        state.show = false;
      }
    },
    toggle(state) {
      state.show = !state.show;
    },
  },
});

export const modalAction = modalSlice.actions;
export default modalSlice.reducer;
