import { IProduct } from "./IProduct";

export interface IProductImage {
  _id: string;
  imageUrl: string;
  product: IProduct;
}

export interface ICreateProductImage {
  imageUrl: string;
}
