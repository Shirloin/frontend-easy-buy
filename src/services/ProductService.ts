import axios from "axios";
import { ICreateProduct, IProduct } from "../interfaces/IProduct";
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

  static async getAllProductsByShop(shopId: string) {
    return axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/shop/${shopId}/products`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authentication"),
      },
    })
  }
  static async getMyShopProduct() {
    return axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/shop/products`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authentication"),
      },
    })
  }

  static async updateProduct(product: IProduct) {
    return axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/product`, {
      product,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authentication"),
      },
    })
  }
}
