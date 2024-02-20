import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITea, TeasState } from "../../models/ITea";
import { fetchFilteredByPriceTeas, fetchTeas } from "./fetchTeas";

const initialState: TeasState = {
  teas: [],
  isLoading: false,
  error: "",
  currentPage: 1,
  itemsPerPage: 9,
  totalItems: 100,
  filteredTeas: [],
  isFiltered: false,
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
    setLowCostTeas: (state) => {
      state.teas = [...state.teas].sort(
        (a, b) => Number(a.price) - Number(b.price)
      );
      state.currentPage = 1;
      state.filteredTeas = [];
      state.isFiltered = false;
    },
    setHighCostTeas: (state) => {
      state.teas = [...state.teas].sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
      state.currentPage = 1;
      state.filteredTeas = [];
      state.isFiltered = false;
    },
    showFilteredByCategoryTeas: (state, action: PayloadAction<string>) => {
      const filteredTeas = state.teas.filter(
        (tea) => tea.category === action.payload
      );
      let newState = { ...state, filteredTeas };
      if (filteredTeas.length === 0) {
        newState.isFiltered = true;
      }
      return newState;
    },

    resetFilters: (state) => {
      state.filteredTeas = [];
      state.isFiltered = false;
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
      })
      .addCase(fetchFilteredByPriceTeas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.filteredTeas = action.payload;
      })
      .addCase(fetchFilteredByPriceTeas.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilteredByPriceTeas.rejected, (state, action) => {
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
  setTeas,
  setCurrentPage,
  setTotalItems,
  setLowCostTeas,
  setHighCostTeas,
  showFilteredByCategoryTeas,
  resetFilters,
} = teasSlice.actions;

export default teasSlice.reducer;
