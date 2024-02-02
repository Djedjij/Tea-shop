import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTeas = createAsyncThunk(
  "teas/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://25.15.198.17:5555/core/v1/api/products"
      );

      return response.data.content;
    } catch (e) {
      return thunkAPI.rejectWithValue("Ошибка при загрузке");
    }
  }
);
