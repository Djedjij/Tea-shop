import { createAsyncThunk } from "@reduxjs/toolkit";
import $host from "../../http";
import { Params } from "react-router-dom";

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

export const fetchFilteredByPriceTeas = createAsyncThunk(
  "teas/fetchFilteredByPrice",
  async ({ min_price, max_price, p, count }: Params, thunkAPI) => {
    try {
      const response = await $host.get(`core-service/products`, {
        params: {
          min_price,
          max_price,
          p,
          count,
        },
      });
      console.log(response.data.content);

      return response.data.content;
    } catch (e) {
      return thunkAPI.rejectWithValue("Ошибка при загрузке");
    }
  }
);
