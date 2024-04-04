import { configureStore } from "@reduxjs/toolkit";
import teasReducer from "./redusers/teasSlice";
import { shopCartAPI } from "../services/shopCartService";
import errorReducer from "./redusers/errorSlice";
import userReducer from "./redusers/userSlice";
import { teaAPI } from "../services/teaService";
import { reviewAPI } from "../services/reviewServise";

const store = configureStore({
  reducer: {
    teas: teasReducer,
    error: errorReducer,
    user: userReducer,
    [shopCartAPI.reducerPath]: shopCartAPI.reducer,
    [teaAPI.reducerPath]: teaAPI.reducer,
    [reviewAPI.reducerPath]: reviewAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      shopCartAPI.middleware,
      teaAPI.middleware,
      reviewAPI.middleware
    ),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
