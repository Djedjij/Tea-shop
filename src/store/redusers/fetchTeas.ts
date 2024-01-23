import axios from "axios";
import { ITea } from "../../models/ITea";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTeas = createAsyncThunk(
  "teas/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<ITea[]>(
        process.env.REACT_APP_API_URL + `/products`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Ошибка при загрузке");
    }
  }
);
