import IUser from "./IUser";

export interface IShop {
  _id: string;
  name: string;
  description: string;
  bannerUrl: string;
  imageUrl: string;
  user: IUser;
}
