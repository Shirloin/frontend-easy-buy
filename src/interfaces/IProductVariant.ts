import { IProduct } from "./IProduct";

export interface IProductVariant {
  _id: string;
  name: string;
  price: number;
  stock: number;
  product: IProduct;
  imageUrl: string
}

export interface ICreateProductVariant {
  name: string;
  price: number;
  stock: number;
  imageUrl: string
}
