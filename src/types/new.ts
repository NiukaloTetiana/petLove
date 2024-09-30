export type INewItem = {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
};

export type INew = {
  results: INewItem[];
  totalPages: number;
  page: number;
  perPage: number;
};
