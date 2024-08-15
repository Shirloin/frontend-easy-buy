import { IProduct } from "./IProduct";

export interface IProductCategory {
  _id: string;
  name: string;
  products: IProduct[];
}

export interface ICreateProductCategory {
  name: string;
  product: IProduct;
}
