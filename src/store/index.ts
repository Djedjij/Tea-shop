import { configureStore } from "@reduxjs/toolkit";
import teasReducer from "./redusers/teasSlice";
import shopCardReducer from "./redusers/shopCardSlice";
import { shopCartAPI } from "../services/shopCartService";
import errorReducer from "./redusers/errorSlice";
import userReducer from "./redusers/userSlice";
import { teaAPI } from "../services/teaService";

const store = configureStore({
  reducer: {
    teas: teasReducer,
    shopCard: shopCardReducer,
    error: errorReducer,
    user: userReducer,
    [shopCartAPI.reducerPath]: shopCartAPI.reducer,
    [teaAPI.reducerPath]: teaAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopCartAPI.middleware, teaAPI.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
