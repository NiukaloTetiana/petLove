import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { IFriend } from "../../types";
import { instance } from "../../services";

export const getFriends = createAsyncThunk<
  IFriend[],
  undefined,
  { rejectValue: string }
>("friends/getFriends", async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.get("/friends");

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});
