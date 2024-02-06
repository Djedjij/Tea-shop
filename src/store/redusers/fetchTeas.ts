import { createAsyncThunk } from "@reduxjs/toolkit";
import $host from "../../http";

export const fetchTeas = createAsyncThunk(
  "teas/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await $host.get("core-service/products");
      return response.data.content;
    } catch (e) {
      return thunkAPI.rejectWithValue("Ошибка при загрузке");
    }
  }
);
