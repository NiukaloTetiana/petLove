import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import type { IUser } from "../../types";
import {
  addPet,
  getUserCurrent,
  removePet,
  updateUserCurrent,
} from "./userOperations";
import { logoutUser, refreshUser } from "../auth/authOperations";

export interface IUserSlice extends Omit<IUser, "token"> {
  isLoading: boolean;
}

const initialState: IUserSlice = {
  _id: null,
  name: null,
  email: null,
  avatar: null,
  phone: null,
  noticesViewed: [],
  noticesFavorites: [],
  pets: [],
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserCurrent.fulfilled, (state, action) => {
        state._id = action.payload._id;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.avatar = action.payload.avatar;
        state.phone = action.payload.phone;
        state.noticesViewed = action.payload.noticesViewed;
        state.noticesFavorites = action.payload.noticesFavorites;
        state.pets = action.payload.pets;
        state.isLoading = false;
      })
      .addCase(updateUserCurrent.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.avatar = action.payload.avatar;
        state.phone = action.payload.phone;
        state.isLoading = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.noticesFavorites = action.payload.noticesFavorites;
      })
      .addCase(addPet.fulfilled, (state, action) => {
        state.pets = action.payload.pets;
        state.isLoading = false;
      })
      .addCase(removePet.fulfilled, (state, action) => {
        state.pets = action.payload.pets;
        state.isLoading = false;
      })
      .addCase(logoutUser.fulfilled, () => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(
          getUserCurrent.pending,
          updateUserCurrent.pending,
          addPet.pending,
          removePet.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getUserCurrent.rejected,
          updateUserCurrent.rejected,
          addPet.rejected,
          removePet.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
  selectors: {
    selectName: (state) => state.name,
    selectAvatar: (state) => state.avatar,
    selectEmail: (state) => state.email,
    selectPhone: (state) => state.phone,
    selectNoticesViewed: (state) => state.noticesViewed,
    selectNoticesFavorites: (state) => state.noticesFavorites,
    selectPets: (state) => state.pets,
    selectIsLoadingUser: (state) => state.isLoading,
  },
});

export const userReducer = userSlice.reducer;
export const {
  selectName,
  selectAvatar,
  selectEmail,
  selectPhone,
  selectNoticesViewed,
  selectNoticesFavorites,
  selectPets,
  selectIsLoadingUser,
} = userSlice.selectors;
