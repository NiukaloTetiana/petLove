import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import type { IUser } from "../../types";
import {
  addPet,
  getUserCurrent,
  removePet,
  updateUserAvatar,
  updateUserCurrent,
} from "./userOperations";
import {
  loginUser,
  logoutUser,
  refreshUser,
  registerUser,
} from "../auth/authOperations";
import {
  addNoticeFavorites,
  deleteNoticeFavorites,
} from "../notices/noticesOperations";

export interface IUserSlice extends IUser {
  isLoading: boolean;
}

const initialState: IUserSlice = {
  user: {
    _id: null,
    name: null,
    email: null,
    avatar: null,
    phone: null,
  },
  noticesViewed: [],
  noticesFavorites: [],
  pets: [],
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addNoticeViewed: (state, action) => {
      if (!state.noticesViewed.includes(action.payload)) {
        state.noticesViewed.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
      })
      .addCase(getUserCurrent.fulfilled, (state, action) => {
        state.user._id = action.payload._id;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.avatar = action.payload.avatar;
        state.user.phone = action.payload.phone;
        state.noticesFavorites = action.payload.noticesFavorites;
        state.pets = action.payload.pets;
        state.isLoading = false;
      })
      .addCase(updateUserCurrent.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.avatar = action.payload.avatar;
        state.user.phone = action.payload.phone;
        state.isLoading = false;
      })
      .addCase(updateUserAvatar.fulfilled, (state, action) => {
        state.user.avatar = action.payload.avatar;
        state.isLoading = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
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
      .addCase(deleteNoticeFavorites.fulfilled, (state, action) => {
        state.noticesFavorites = state.noticesFavorites.filter((elem) =>
          action.payload.includes(elem._id)
        );
        state.isLoading = false;
      })
      .addCase(addNoticeFavorites.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(logoutUser.fulfilled, () => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(
          getUserCurrent.pending,
          updateUserCurrent.pending,
          updateUserAvatar.pending,
          addPet.pending,
          removePet.pending,
          deleteNoticeFavorites.pending,
          addNoticeFavorites.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getUserCurrent.rejected,
          updateUserCurrent.rejected,
          updateUserAvatar.rejected,
          addPet.rejected,
          removePet.rejected,
          deleteNoticeFavorites.rejected,
          addNoticeFavorites.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
  selectors: {
    selectUser: (state) => state.user,
    selectNoticesViewed: (state) => state.noticesViewed,
    selectNoticesFavorites: (state) => state.noticesFavorites,
    selectPets: (state) => state.pets,
    selectIsLoadingUser: (state) => state.isLoading,
  },
});

export const userReducer = userSlice.reducer;
export const {
  selectUser,
  selectNoticesViewed,
  selectNoticesFavorites,
  selectPets,
  selectIsLoadingUser,
} = userSlice.selectors;
export const { addNoticeViewed } = userSlice.actions;
