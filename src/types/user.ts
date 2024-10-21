import { INotice } from "./notice";
import { IPet } from "./pet";

export interface IUser {
  user: {
    _id: string | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    avatar: string | null;
  };
  noticesViewed: INotice[];
  noticesFavorites: INotice[];
  pets: IPet[];
}

export interface IUserResponse {
  _id: string | null;
  name: null;
  email: null;
  avatar: null;
  phone: null;
  token: string | null;
  noticesViewed: INotice[];
  noticesFavorites: INotice[];
  pets: IPet[];
}

export interface IUserEditRequest {
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
}
