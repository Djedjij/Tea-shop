import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUuid = createAsyncThunk(
  "shopCart/fetchUuid",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://25.15.198.17:5555/cart/v1/api/cart/generate_uuid"
      );
      localStorage.setItem("uuid", response.data.uuid);
      console.log(localStorage.getItem("uuid"));
      return response.data.uuid;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        "Не удалось получить идентификатор корзины"
      );
    }
  }
);

// export const fetchTea = createAsyncThunk(
//   "shopCart/fetchTea",
//   async (_, thunkAPI) => {

//   }
// );
