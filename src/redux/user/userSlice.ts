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

export interface IUserSlice extends Omit<IUser, "token"> {
  isLoading: boolean;
}

const initialState: IUserSlice = {
  user: {
    _id: null,
    name: null,
    email: null,
    avatar: null,
    phone: null,
    noticesViewed: [],
    noticesFavorites: [],
    pets: [],
  },
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
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
        state.user.noticesViewed = action.payload.noticesViewed;
        state.user.noticesFavorites = action.payload.noticesFavorites;
        state.user.pets = action.payload.pets;
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
        state.user.noticesFavorites = action.payload.noticesFavorites;
      })
      .addCase(addPet.fulfilled, (state, action) => {
        state.user.pets = action.payload.pets;
        state.isLoading = false;
      })
      .addCase(removePet.fulfilled, (state, action) => {
        state.user.pets = action.payload.pets;
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
          updateUserAvatar.rejected,
          addPet.rejected,
          removePet.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
  selectors: {
    selectUser: (state) => state.user,
    selectIsLoadingUser: (state) => state.isLoading,
  },
});

export const userReducer = userSlice.reducer;
export const { selectUser, selectIsLoadingUser } = userSlice.selectors;
