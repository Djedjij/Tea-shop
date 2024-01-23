import { createSlice } from "@reduxjs/toolkit";
import { ShopCardState } from "../../models/IshopCard";

const initialState: ShopCardState = {
  teas: [],
  isLoading: false,
  error: "",
};

const shopCardSlise = createSlice({
  name: "shopCard",
  initialState,
  reducers: {},
});

export default shopCardSlise.reducer;
