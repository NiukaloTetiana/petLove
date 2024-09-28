export type New = {
  results: Array<{
    _id: string;
    imgUrl: string;
    title: string;
    text: string;
    date: string;
    url: string;
  }>;

  totalPages: number;
  page: number;
  perPage: number;
};
