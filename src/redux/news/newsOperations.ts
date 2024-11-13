import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { INewResponse } from "../../types";
import { instance } from "../../services";

export const getNews = createAsyncThunk<
  INewResponse,
  { page: number; limit: number; keyword?: string },
  { rejectValue: string }
>("news/getNews", async (params, { rejectWithValue }) => {
  try {
    const { data } = await instance.get("/news", { params });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});
