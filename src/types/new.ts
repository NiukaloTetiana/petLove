export type INew = {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
  id?: string;
};

export type INewResponse = {
  results: INew[];
  totalPages: number;
  page: number;
  perPage: number;
};
