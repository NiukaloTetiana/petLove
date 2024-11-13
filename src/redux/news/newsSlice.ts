import { createSlice } from "@reduxjs/toolkit";

import type { INew } from "../../types";
import { getNews } from "./newsOperations";

export interface INewSlice {
  news: INew[];
  page: number;
  totalPages: number;
  isLoading: boolean;
}

const initialState: INewSlice = {
  news: [],
  page: 1,
  totalPages: 0,
  isLoading: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setPageNews: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.fulfilled, (state, action) => {
        state.news = action.payload.results;
        state.totalPages = action.payload.totalPages;
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
    selectPageNews: (state) => state.page,
    selectTotalPagesNews: (state) => state.totalPages,
    selectIsLoadingNews: (state) => state.isLoading,
  },
});

export const newsReducer = newsSlice.reducer;
export const {
  selectNews,
  selectPageNews,
  selectTotalPagesNews,
  selectIsLoadingNews,
} = newsSlice.selectors;
export const { setPageNews } = newsSlice.actions;
