import { IProductCategory } from "./IProductCategory";
import { ICreateProductVariant, IProductVariant } from "./IProductVariant";
import { IShop } from "./IShop";

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  productVariants: IProductVariant[];
  productCategory: IProductCategory;
  shop: IShop;
}
export interface ICreateProduct {
  name: string;
  description: string;
  category: string;
  productVariants?: ICreateProductVariant[]
}
