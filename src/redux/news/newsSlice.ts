import { createSlice } from "@reduxjs/toolkit";
import type { INew } from "../../types";
import { getNews } from "./newsOperations";

export interface INewSlice {
  news: INew[];
  isLoading: boolean;
}

const initialState: INewSlice = {
  news: [],
  isLoading: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.isLoading = false;
      })
      .addCase(getNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNews.rejected, (state) => {
        state.isLoading = false;
      });
  },
  selectors: {
    selectNews: (state) => state.news,
    selectIsLoadingNews: (state) => state.isLoading,
  },
});

export const newsReducer = newsSlice.reducer;
export const { selectNews, selectIsLoadingNews } = newsSlice.selectors;
