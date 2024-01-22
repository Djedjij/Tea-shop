import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITea, TeasState } from "../../models/ITea";

const initialState: TeasState = {
  teas: [],
  isLoading: false,
  error: "",
  currentPage: 1,
  itemsPerPage: 9,
  totalItems: 100,
};

const teasSlice = createSlice({
  name: "teas",
  initialState,
  reducers: {
    teaFetching(state) {
      state.isLoading = true;
    },
    teaFetchingSuccess(state, action: PayloadAction<ITea[]>) {
      state.isLoading = false;
      state.error = "";
      state.teas = action.payload;
    },
    teaFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    setTeas: (state, action: PayloadAction<ITea[]>) => {
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

export const {
  setTeas,
  setCurrentPage,
  setTotalItems,
  teaFetching,
  teaFetchingSuccess,
  teaFetchingError,
} = teasSlice.actions;

export default teasSlice.reducer;
