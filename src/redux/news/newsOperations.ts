import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { INew } from "../../types";
import { instance } from "../../services";

export const getNews = createAsyncThunk<
  INew[],
  undefined,
  { rejectValue: string }
>("news/getNews", async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.get("/news");

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});
