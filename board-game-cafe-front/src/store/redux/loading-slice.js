import { createSlice } from "@reduxjs/toolkit";

const initialState = { show: false };

const loadingSlice = createSlice({
  name: "loadingStore",
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

export const loadingAction = loadingSlice.actions;
export default loadingSlice.reducer;
