export interface IWorkDay {
  _id: string;
  isOpen: boolean;
  from?: string;
  to?: string;
}

export interface IFriend {
  _id: string;
  title: string;
  url: string;
  addressUrl: string;
  imageUrl: string;
  address: string;
  workDays: IWorkDay[];
  phone: string;
  email: string;
}
