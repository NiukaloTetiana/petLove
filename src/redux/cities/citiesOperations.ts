import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { ICity } from "../../types";
import { instance } from "../../services";

export const getCities = createAsyncThunk<
  ICity[],
  undefined,
  { rejectValue: string }
>("cities/getCities", async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.get("/cities/locations");

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});
