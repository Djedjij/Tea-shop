import { configureStore } from "@reduxjs/toolkit";
import teasReduser from "./redusers/teasSlice";

const store = configureStore({
  reducer: {
    teas: teasReduser,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
