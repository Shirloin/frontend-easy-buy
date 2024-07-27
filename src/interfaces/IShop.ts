import IUser from "./IUser";

export interface IShop {
  _id: string;
  name: string;
  description: string;
  banner_url: string;
  image_url: string;
  user: IUser;
}
