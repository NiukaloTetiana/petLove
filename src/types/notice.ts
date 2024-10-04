export interface INotice {
  _id: string;
  species: string;
  category: string;
  price?: number;
  title: string;
  name: string;
  birthday: string;
  comment: string;
  sex: string;
  location: string;
  imgURL: string;
  popularity: number;
  user: string;
  createdAt: string;
  updatedAt?: string;
}

export interface INoticesResponse {
  results: INotice[];
  totalPages: number;
  page: number;
  perPage: number;
}

export interface INoticesRequest {
  page: number;
  limit: number;
  keyword: string;
  category: string;
  species: string;
  locationId: string;
  byDate?: boolean;
  byPrice?: boolean;
  byPopularity?: boolean;
}

export interface IOneNotice {
  _id: string;
  species: string;
  category: string;
  price?: number;
  title: string;
  name: string;
  birthday: string;
  comment: string;
  sex: string;
  location: { _id: string; stateEn: string; cityEn: string };
  imgURL: string;
  popularity: number;
  user: { _id: string; email: string; phone: string };
  createdAt: string;
  updatedAt?: string;
}
