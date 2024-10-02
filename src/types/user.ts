import { INotice } from "./notice";
import { IPet } from "./pet";

export interface IUser {
  _id: string | null;
  name: string | null;
  email: string | null;
  avatar: string | null;
  phone: string | null;
  token: string | null;
  noticesViewed: INotice[];
  noticesFavorites: INotice[];
  pets: IPet[];
}

export interface IUserEditRequest {
  name: string;
  email: string;
  avatar: string;
  phone: string;
}
