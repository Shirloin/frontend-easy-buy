import { IProductCategory } from "./IProductCategory";
import { IProductImage } from "./IProductImage";
import { IProductVariant } from "./IProductVariant";
import { IShop } from "./IShop";

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  productVariants: IProductVariant[];
  productImages: IProductImage[];
  productCategory: IProductCategory;
  shop: IShop;
}
export interface ICreateProduct {
  name: string;
  description: string;
  category: string;
}
