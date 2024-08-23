import IUser from "./IUser";

export interface IShop {
  _id: string;
  name: string;
  description: string;
  bannerUrl: string;
  imageUrl: string;
  user: IUser;
}

export interface ICreateShop {
  name: string;
  description: string;
  bannerUrl: string;
  imageUrl: string;
}
