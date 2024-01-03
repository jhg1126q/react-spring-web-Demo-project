import { createSlice } from "@reduxjs/toolkit";

const initialState = { auth: false };

const authSlice = createSlice({
  name: "authStore",
  initialState,
  reducers: {
    login(state) {
      state.auth = true;
    },
    logout(state) {
      state.auth = false;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice.reducer;
