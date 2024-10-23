export interface IPet {
  _id: string;
  imgURL: string;
  title: string;
  name: string;
  birthday: string;
  sex: string;
  species: string;
}

export interface IPetRequest extends Omit<IPet, "_id"> {}
