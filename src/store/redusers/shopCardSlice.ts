import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICartItem, ShopCartState } from "../../models/IshopCard";

const initialState: ShopCartState = {
  shopCart: { itemsMap: [], totalCost: 0 },
  isLoading: false,
  error: "",
};

const shopCartSlise = createSlice({
  name: "shopCart",
  initialState,
  reducers: {
    setShopCart: (state, action: PayloadAction<ICartItem[]>) => {
      state.shopCart.itemsMap = action.payload;
    },
    setTotalCost: (state, action: PayloadAction<number>) => {
      state.shopCart.totalCost = action.payload;
    },
    setTeaGrams: (
      state,
      action: PayloadAction<{ index: number; costByHundredGrams: number }>
    ) => {
      state.shopCart.itemsMap[action.payload.index].costByHundredGrams =
        action.payload.costByHundredGrams;
    },
  },
});

export const { setShopCart, setTotalCost } = shopCartSlise.actions;

export default shopCartSlise.reducer;
