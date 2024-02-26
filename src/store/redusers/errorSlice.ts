import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IError } from "../../models/IError";

const initialState: IError = {
  message: "",
};
const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setModalError: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { setModalError } = errorSlice.actions;
export default errorSlice.reducer;
