import { configureStore } from "@reduxjs/toolkit";
import teasReducer from "./redusers/teasSlice";
import shopCardReducer from "./redusers/shopCardSlice";
import { shopCartAPI } from "../services/shopCartService";
import errorReducer from "./redusers/errorSlice";
import userReducer from "./redusers/userSlice";
const store = configureStore({
  reducer: {
    teas: teasReducer,
    shopCard: shopCardReducer,
    error: errorReducer,
    user: userReducer,
    [shopCartAPI.reducerPath]: shopCartAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopCartAPI.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
