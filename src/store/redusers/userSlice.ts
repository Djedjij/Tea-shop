import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser, UserState } from "../../models/IUser";
import { auth, login } from "../fetchUser";

const initialState: UserState = {
  user: { name: "", email: "", address: "", password: "" },
  isAuth: false,
  error: "",
  refreshToken: "",
  accessToken: "",
  isLoading: false,
  isLogin: localStorage.getItem("token") ? true : false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.isLogin = false;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    checkLogin: (state) => {
      localStorage.getItem("token");
      state.isLogin = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(auth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.refreshToken = action.payload.refreshToken;
        state.accessToken = action.payload.accessToken;
        state.isAuth = true;
        state.isLogin = true;
      })
      .addCase(auth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(auth.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        } else {
          state.error = "Неизвестная ошибка";
        }
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.isAuth = true;
        state.isLogin = true;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        } else {
          state.error = "Неизвестная ошибка";
        }
      });
  },
});
export const { logout, setUser, checkLogin } = userSlice.actions;
export default userSlice.reducer;
