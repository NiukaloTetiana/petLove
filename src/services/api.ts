import axios from "axios";

export const instance = axios.create({
  baseURL: "https://petlove.b.goit.study/api",
  withCredentials: true,
});

export const setToken = (token: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = ``;
};
