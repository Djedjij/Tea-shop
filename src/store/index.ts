import { configureStore } from "@reduxjs/toolkit";
import teasReduser from "./redusers/teasSlice";
import shopCardReduser from "./redusers/shopCardSlice";
import { shopCartAPI } from "../services/shopCartService";

const store = configureStore({
  reducer: {
    teas: teasReduser,
    shopCard: shopCardReduser,
    [shopCartAPI.reducerPath]: shopCartAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopCartAPI.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
