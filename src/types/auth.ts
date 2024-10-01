import { INotice } from "./notice";

export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface ILoginRequest extends Omit<IRegisterRequest, "name"> {}

export interface IAuthResponse {
  email: string;
  name: string;
  token: string;
}

export interface IRefreshResponse {
  _id: string;
  name: string;
  email: string;
  token: string;
  noticesFavorites: INotice[];
}
