import { createSlice } from "@reduxjs/toolkit";

interface HeaderState {
  isVisible: boolean;
}

const initialState: HeaderState = {
  isVisible: true,
};

const headerSlice = createSlice({
  name: "ad",
  initialState,
  reducers: {
    closeHeader(state) {
      state.isVisible = false;
    },
    showHeader(state) {
      state.isVisible = true;
    },
    toggleHeader(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { closeHeader, showHeader, toggleHeader } = headerSlice.actions;

export default headerSlice.reducer;
