import { IShop } from "./IShop";

export default interface IUser {
  _id: string;
  username: string;
  email: string;
  image_url: string;
  shop: IShop;
}
