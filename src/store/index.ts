import { configureStore } from "@reduxjs/toolkit";
import teasReduser from "./redusers/teasSlice";
import shopCardReduser from "./redusers/shopCardSlice";

const store = configureStore({
  reducer: {
    teas: teasReduser,
    shopCard: shopCardReduser,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
