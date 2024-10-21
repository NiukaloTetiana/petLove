import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { instance } from "../../services";
import type { IPetRequest, IUserEditRequest, IUserResponse } from "../../types";

export const getUserCurrent = createAsyncThunk<
  IUserResponse,
  undefined,
  { rejectValue: string }
>("user/current/full", async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.get("/users/current/full");

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});

export const updateUserCurrent = createAsyncThunk<
  IUserResponse,
  IUserEditRequest,
  { rejectValue: string }
>("user/update", async (updatedUser, { rejectWithValue }) => {
  try {
    const { data } = await instance.patch("/users/current/edit", updatedUser);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});

export const updateUserAvatar = createAsyncThunk<
  IUserResponse,
  string,
  { rejectValue: string }
>("user/updateAvatar", async (avatar, { rejectWithValue }) => {
  try {
    const { data } = await instance.patch("/users/current/edit", { avatar });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});

export const addPet = createAsyncThunk<
  IUserResponse,
  IPetRequest,
  { rejectValue: string }
>(
  "user/addPet",

  async (pet, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/users/current/pets/add", pet);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      }
    }
  }
);

export const removePet = createAsyncThunk<
  IUserResponse,
  string,
  { rejectValue: string }
>(
  "user/removedPet",

  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete(
        `/users/current/pets/remove/${id}`
      );

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      }
    }
  }
);
