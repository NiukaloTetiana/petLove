import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import type {
  INoticesRequest,
  INoticesResponse,
  IOneNotice,
} from "../../types";
import { instance } from "../../services";

export const getNotices = createAsyncThunk<
  INoticesResponse,
  INoticesRequest,
  { rejectValue: string }
>("notices/getNotices", async (params, { rejectWithValue }) => {
  try {
    const { data } = await instance.get("/notices", { params });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});

export const getNoticeById = createAsyncThunk<
  IOneNotice,
  string,
  { rejectValue: string }
>("notices/getNoticeById", async (id, { rejectWithValue }) => {
  try {
    const { data } = await instance.get(`/notices/${id}`);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});

export const getNoticesCategories = createAsyncThunk<
  string[],
  undefined,
  { rejectValue: string }
>("notices/getNoticesCategories", async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.get("/notices/categories");

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});

export const getNoticesSex = createAsyncThunk<
  string[],
  undefined,
  { rejectValue: string }
>("notices/getNoticesSex", async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.get("/notices/sex");

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});

export const getNoticesSpecies = createAsyncThunk<
  string[],
  undefined,
  { rejectValue: string }
>("notices/getNoticesSpecies", async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.get("/notices/species");

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});

export const addNoticeFavorites = createAsyncThunk<
  string[],
  string,
  { rejectValue: string }
>("notices/addNotice", async (id, { rejectWithValue }) => {
  try {
    const { data } = await instance.post(`/notices/favorites/add/${id}`);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});

export const deleteNoticeFavorites = createAsyncThunk<
  string[],
  string,add
  { rejectValue: string }
>("notices/deleteNotice", async (id, { rejectWithValue }) => {
  try {
    const { data } = await instance.delete(`/notices/favorites/remove/${id}`);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});
