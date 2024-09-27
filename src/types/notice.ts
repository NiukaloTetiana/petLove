export interface INotice {
  // _id: string;
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
