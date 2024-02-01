import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICartUuid } from "../../models/IshopCard";

export const fetchUuid = createAsyncThunk(
  "shopCart/fetchUuid",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<ICartUuid>(
        "http://25.15.198.17:5555/cart/v1/api/cart/generate_uuid"
      );

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        "Не удалось получить идентификатор корзины"
      );
    }
  }
);
