import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  teas: [],
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
