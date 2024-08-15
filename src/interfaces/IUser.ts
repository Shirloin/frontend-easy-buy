import { IShop } from "./IShop";

export default interface IUser {
  _id: string;
  username: string;
  email: string;
  imageUrl: string;
  shop: IShop | null | undefined;
}
