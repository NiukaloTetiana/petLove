import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import type { INotice, IOneNotice } from "../../types";
import {
  addNoticeFavorites,
  deleteNoticeFavorites,
  getNoticeById,
  getNotices,
  getNoticesCategories,
  getNoticesSex,
  getNoticesSpecies,
} from "./noticesOperations";

export interface INoticesSlice {
  notices: INotice[];
  oneNotice: IOneNotice | null;
  categories: string[];
  species: string[];
  sex: string[];
  page: number;
  totalPages: number;
  isLoading: boolean;
}

const initialState: INoticesSlice = {
  notices: [],
  oneNotice: null,
  categories: [],
  species: [],
  sex: [],
  page: 1,
  totalPages: 0,
  isLoading: false,
};

const noticesSlice = createSlice({
  name: "notices",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotices.fulfilled, (state, action) => {
        state.notices = action.payload.results;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
      })
      .addCase(getNoticeById.fulfilled, (state, action) => {
        state.oneNotice = action.payload;
        state.isLoading = false;
      })
      .addCase(getNoticesCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
      .addCase(getNoticesSpecies.fulfilled, (state, action) => {
        state.species = action.payload;
        state.isLoading = false;
      })
      .addCase(getNoticesSex.fulfilled, (state, action) => {
        state.sex = action.payload;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          getNotices.pending,
          getNoticeById.pending,
          getNoticesCategories.pending,
          getNoticesSpecies.pending,
          getNoticesSex.pending,
          addNoticeFavorites.pending,
          deleteNoticeFavorites.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getNotices.rejected,
          getNoticeById.rejected,
          getNoticesCategories.rejected,
          getNoticesSpecies.rejected,
          getNoticesSex.rejected,
          addNoticeFavorites.rejected,
          deleteNoticeFavorites.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
  selectors: {
    selectNotices: (state) => state.notices,
    selectOneNotice: (state) => state.oneNotice,
    selectCategories: (state) => state.categories,
    selectSpecies: (state) => state.species,
    selectSex: (state) => state.sex,
    selectPage: (state) => state.page,
    selectTotalPages: (state) => state.totalPages,
    selectIsLoadingNotices: (state) => state.isLoading,
  },
});

export const noticesReducer = noticesSlice.reducer;
export const {
  selectNotices,
  selectOneNotice,
  selectCategories,
  selectSpecies,
  selectSex,
  selectPage,
  selectTotalPages,
  selectIsLoadingNotices,
} = noticesSlice.selectors;
