import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITea, TeasState } from "../../models/ITea";
import {
  fetchFilteredByCategoryTeas,
  fetchFilteredTeas,
  fetchTeas,
} from "./fetchTeas";

const initialState: TeasState = {
  teas: [],
  filteredTeas: [],
  viewedTeas: [],
  favoriteTeas: [],
  isLoading: false,
  error: "",
  currentPage: 1,
  itemsPerPage: 9,
  totalItems: 100,
  isFiltered: false,
  filteredBy: null,
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
    resetFilters: (state) => {
      state.filteredTeas = [];
      state.isFiltered = false;
      state.filteredBy = null;
    },
    setFilteredBy: (state, action: PayloadAction<string>) => {
      state.filteredBy = action.payload;
    },
    setViewedTeas: (state, action: PayloadAction<ITea>) => {
      if (
        state.viewedTeas.findIndex(
          (tea) => tea.productId === action.payload.productId
        ) === -1
      ) {
        state.viewedTeas = [...state.viewedTeas, action.payload];
      }
    },
    setFavoriteTea: (state, action: PayloadAction<ITea>) => {
      state.favoriteTeas = [...state.favoriteTeas, action.payload];
    },
    removeFavoriteTea: (state, action: PayloadAction<number>) => {
      state.favoriteTeas = state.favoriteTeas.filter(
        (tea) => tea.productId !== action.payload
      );
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
      .addCase(fetchFilteredTeas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.filteredTeas = action.payload;
        state.isFiltered = true;
      })
      .addCase(fetchFilteredTeas.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilteredTeas.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        } else {
          state.error = "Неизвестная ошибка";
        }
      })
      .addCase(fetchFilteredByCategoryTeas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.filteredTeas = action.payload.productList;
        state.isFiltered = true;
        state.filteredBy = action.payload.name;
      })
      .addCase(fetchFilteredByCategoryTeas.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilteredByCategoryTeas.rejected, (state, action) => {
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
  resetFilters,
  setFilteredBy,
  setViewedTeas,
  setFavoriteTea,
  removeFavoriteTea,
} = teasSlice.actions;

export default teasSlice.reducer;
