import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITea, TeasState } from "../../models/ITea";
import { fetchTeas } from "./fetchTeas";

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.teas = action.payload;
      })
      .addCase(fetchTeas.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTeas.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        } else {
          state.error = "Неизвестная ошибка";
        }
      });
  },
});

export const { setTeas, setCurrentPage, setTotalItems } = teasSlice.actions;

export default teasSlice.reducer;

// teaFetching(state) {
//   state.isLoading = true;
// },
// teaFetchingSuccess(state, action: PayloadAction<ITea[]>) {
//   state.isLoading = false;
//   state.error = "";
//   state.teas = action.payload;
// },
// teaFetchingError(state, action: PayloadAction<string>) {
//   state.isLoading = false;
//   state.error = action.payload;
// },
