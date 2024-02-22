import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthResponse, ILogin, IUser } from "../models/IUser";
import $host from "../http";

export const auth = createAsyncThunk(
  "user/auth",
  async (formData: IUser, thunkAPI) => {
    try {
      const response = await $host.post<AuthResponse>(
        "/auth-service/sign-up",
        formData,
        {
          headers: { cart_id: localStorage.getItem("uuid") || "" },
        }
      );
      if (response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
      }
      const token1 = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );

      if (token1) {
        console.log("Токен найден в cookie:", token1);
      } else {
        console.log("Токен не найден в cookie");
      }
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Ошибка при регистрации");
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (formData: ILogin, thunkAPI) => {
    try {
      const response = await $host.post("/auth-service/sign-in", formData, {
        headers: { cart_id: localStorage.getItem("uuid") || "" },
      });
      if (response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
      }
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Ошибка при авторизации");
    }
  }
);

export const chekAuth = createAsyncThunk(
  "user/checkAuth",
  async (_, thunkAPI) => {
    try {
      const response = await $host.post("/auth-service/refresh", {
        headers: { cart_id: localStorage.getItem("uuid") || "" },
      });
      if (response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
      }
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Ошибка при регистрации");
    }
  }
);
