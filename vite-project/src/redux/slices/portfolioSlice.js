import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: true,
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleTheme } = portfolioSlice.actions;

export default portfolioSlice.reducer;
