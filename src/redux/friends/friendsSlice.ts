import { createSlice } from "@reduxjs/toolkit";

import type { IFriend } from "../../types";
import { getFriends } from "./friendsOperations";

export interface IFriendSlice {
  friends: IFriend[];
  isLoading: boolean;
}

const initialState: IFriendSlice = {
  friends: [],
  isLoading: false,
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFriends.fulfilled, (state, action) => {
        state.friends = action.payload;
        state.isLoading = false;
      })
      .addCase(getFriends.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFriends.rejected, (state) => {
        state.isLoading = false;
      });
  },
  selectors: {
    selectFriends: (state) => state.friends,
    selectIsLoadingFriends: (state) => state.isLoading,
  },
});

export const friendsReducer = friendsSlice.reducer;
export const { selectFriends, selectIsLoadingFriends } = friendsSlice.selectors;
