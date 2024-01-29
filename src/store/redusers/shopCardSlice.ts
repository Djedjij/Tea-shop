import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICardItem, ShopCardState } from "../../models/IshopCard";

const initialState: ShopCardState = {
  shopCard: { itemsMap: [], totalCost: 0 },
  isLoading: false,
  error: "",
};

const shopCardSlise = createSlice({
  name: "shopCard",
  initialState,
  reducers: {
    setShopCard: (state, action: PayloadAction<ICardItem[]>) => {
      state.shopCard.itemsMap = action.payload;
    },
    setTotalCost: (state, action: PayloadAction<number>) => {
      state.shopCard.totalCost = action.payload;
    },
    setTeaGrams: (
      state,
      action: PayloadAction<{ index: number; costByHundredGrams: number }>
    ) => {
      state.shopCard.itemsMap[action.payload.index].costByHundredGrams =
        action.payload.costByHundredGrams;
    },
  },
});

export const { setShopCard, setTotalCost } = shopCardSlise.actions;

export default shopCardSlise.reducer;
