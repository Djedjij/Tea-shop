import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { popularTea } from "../utils/consts";

interface Tea {
  name: string;
  img: string;
  price: number;
  desc?: string;
}

interface TeasState {
  teas: Tea[];
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}

const initialState: TeasState = {
  teas: popularTea,
  currentPage: 1,
  itemsPerPage: 3,
  totalItems: 0,
};

const teasSlice = createSlice({
  name: "teas",
  initialState,
  reducers: {
    setTeas: (state, action: PayloadAction<Tea[]>) => {
      state.teas = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalItems: (state, action: PayloadAction<number>) => {
      state.totalItems = action.payload;
    },
  },
});

export const { setTeas, setCurrentPage, setTotalItems } = teasSlice.actions;
export default teasSlice.reducer;
