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
    setQuantity: (
      state,
      action: PayloadAction<{ index: number; quantity: number }>
    ) => {
      state.shopCart.itemsMap[action.payload.index].quantity =
        action.payload.quantity;
    },
  },
});

export const { setShopCart, setTotalCost, setQuantity } = shopCartSlise.actions;

export default shopCartSlise.reducer;
