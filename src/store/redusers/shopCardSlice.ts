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
    setIncrementQuantity: (state, action: PayloadAction<{ index: number }>) => {
      state.shopCart.itemsMap[action.payload.index].quantity += 1;
    },
    setDecrementQuantity: (state, action: PayloadAction<{ index: number }>) => {
      state.shopCart.itemsMap[action.payload.index].quantity -= 1;
    },
    setCost: (state, action: PayloadAction<{ index: number }>) => {
      state.shopCart.itemsMap[action.payload.index].costByHundredGrams =
        state.shopCart.itemsMap[action.payload.index].costByHundredGrams *
        state.shopCart.itemsMap[action.payload.index].quantity;
    },
  },
});

export const {
  setShopCart,
  setTotalCost,
  setIncrementQuantity,
  setDecrementQuantity,
  setCost,
} = shopCartSlise.actions;

export default shopCartSlise.reducer;
