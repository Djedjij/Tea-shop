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

export const fetchFilteredTeas = createAsyncThunk(
  "teas/fetchFiltered",
  async ({ min_price, max_price, name, p, count }: Params, thunkAPI) => {
    try {
      const response = await $host.get(`core-service/products`, {
        params: {
          min_price,
          max_price,
          name,
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

export const fetchFilteredByCategoryTeas = createAsyncThunk(
  "teas/fetchFilteredByCategory",
  async ({ title }: Params, thunkAPI) => {
    try {
      const response = await $host.get(`core-service/categories/${title}`);
      return response.data.productList;
    } catch (e) {
      return thunkAPI.rejectWithValue("Ошибка при загрузке");
    }
  }
);
