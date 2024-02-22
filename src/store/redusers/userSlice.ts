import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../models/IUser";
import { auth, login } from "../fetchUser";

const initialState: UserState = {
  user: { name: "", email: "", address: "", password: "" },
  isAuth: false,
  error: "",
  refreshToken: "",
  accessToken: "",
  isLoading: false,
  isLogin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.isLogin = false;
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
export const { logout } = userSlice.actions;
export default userSlice.reducer;
