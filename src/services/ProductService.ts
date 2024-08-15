import axios from "axios";
import { ICreateProduct } from "../interfaces/IProduct";
import { ICreateProductImage } from "../interfaces/IProductImage";
import { ICreateProductVariant } from "../interfaces/IProductVariant";

export default class ProductService {
  static async createProduct(
    product: ICreateProduct,
    productVariants: ICreateProductVariant[],
    productImages: ICreateProductImage[],
  ) {
    return axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/product`, {
      product,
      productVariants,
      productImages,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authentication"),
      },
    });
  }

  static async getAllProductsByUser(userId: string) {
    return axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/user/${userId}/products`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authentication"),
      },
    })
  }
}
