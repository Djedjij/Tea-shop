import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICartItem, ICartUuid, ShopCartState } from "../../models/IshopCard";
import { fetchUuid } from "./fetchShopCart";

const initialState: ShopCartState = {
  shopCart: { itemsMap: [], totalCost: 0, cartId: { uuid: "" } },
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
    setTotalCost: (state, action: PayloadAction<void>) => {
      state.shopCart.totalCost = state.shopCart.itemsMap.reduce(
        (acc, item) => acc + item.teaPrice,
        0
      );
    },
    setIncrementQuantity: (state, action: PayloadAction<{ index: number }>) => {
      state.shopCart.itemsMap[action.payload.index].quantity += 1;
    },
    setDecrementQuantity: (state, action: PayloadAction<{ index: number }>) => {
      state.shopCart.itemsMap[action.payload.index].quantity -= 1;
    },
    setCost: (state, action: PayloadAction<{ index: number }>) => {
      state.shopCart.itemsMap[action.payload.index].teaPrice =
        state.shopCart.itemsMap[action.payload.index].costByHundredGrams *
        state.shopCart.itemsMap[action.payload.index].quantity;
    },
    setUuid: (state, action: PayloadAction<ICartUuid>) => {
      state.shopCart.cartId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUuid.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.shopCart.cartId = action.payload;
      })
      .addCase(fetchUuid.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUuid.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        } else {
          state.error = "Неизвестная ошибка";
        }
      });
  },
});

export const {
  setShopCart,
  setTotalCost,
  setIncrementQuantity,
  setDecrementQuantity,
  setCost,
  setUuid,
} = shopCartSlise.actions;

export default shopCartSlise.reducer;
