import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { show: false };

const loadingSlice = createSlice({
  name: "loadingStore",
  initialState,
  reducers: {
    show() {
      state.show = true;
    },
    hide(state) {
      state.show = false;
    },
    toggle(state) {
      state.show = !state.show;
    },
  },
});

// 여기서는 알아서 action객체가 생성됩니다

const store = configureStore({
  reducer: { loading: loadingSlice.reducer },
});

export const loadingAction = loadingSlice.actions;
export default store;
