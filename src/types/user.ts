import { INotice } from "./notice";
import { IPet } from "./pet";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  phone: string;
  token: string;
  noticesViewed: INotice[];
  noticesFavorites: INotice[];
  pets: IPet[];
  createdAt: string;
  updatedAt: string;
}

export interface IUserEditRequest {
  name: string;
  email: string;
  avatar: string;
  phone: string;
}
