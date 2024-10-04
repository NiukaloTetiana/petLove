export interface IPet {
  _id: string;
  imgUrl: string;
  title: string;
  name: string;
  birthday: string;
  sex: string;
  species: string;
}

export interface IPetRequest extends Omit<IPet, "_id"> {}
