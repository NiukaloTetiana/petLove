import { createSlice } from "@reduxjs/toolkit";
import type { ICity } from "../../types";
import { getCities } from "./citiesOperations";

export interface INoticesSlice {
  cities: ICity[];
  isLoading: boolean;
}

const initialState: INoticesSlice = {
  cities: [],
  isLoading: false,
};

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCities.fulfilled, (state, action) => {
        state.cities = action.payload;
        state.isLoading = false;
      })
      .addCase(getCities.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCities.rejected, (state) => {
        state.isLoading = false;
      });
  },
  selectors: {
    selectCities: (state) => state.cities,
    selectIsLoadingCities: (state) => state.isLoading,
  },
});

export const citiesReducer = citiesSlice.reducer;
export const { selectCities, selectIsLoadingCities } = citiesSlice.selectors;
