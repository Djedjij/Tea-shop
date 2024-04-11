import { createAsyncThunk } from "@reduxjs/toolkit";
import $host from "../../http";

export const fetchUuid = createAsyncThunk(
  "shopCart/fetchUuid",
  async (_, thunkAPI) => {
    try {
      const response = await $host.get("cart-service/cart/generate_uuid");
      localStorage.setItem("uuid", response.data.uuid);

      return response.data.uuid;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        "Не удалось получить идентификатор корзины"
      );
    }
  }
);
