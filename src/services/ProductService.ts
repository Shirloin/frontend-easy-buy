import axios from "axios";
import { ICreateProduct, IProduct } from "../interfaces/IProduct";
import { ICreateProductVariant } from "../interfaces/IProductVariant";

export default class ProductService {
  static async createProduct(
    product: ICreateProduct,
    productVariants: ICreateProductVariant[],
  ) {
    return axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/product`, {
      product,
      productVariants,
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
    const createProduct: ICreateProduct = {
      name: product.name,
      description: product.description,
      category: product.productCategory.name
    }

    return axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/product/${product._id}`, {
      product: createProduct,
      productVariants: product.productVariants,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authentication"),
      },
    })
  }

  static async deleteProduct(productId: string) {
    return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/product/${productId}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authentication"),
      },
    })
  }
  static async getLatestProduct() {
    return axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/product/latest-product`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authentication"),
      },
    })
  }

  static async getProductDetail(productId: string) {
    return axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/product/${productId}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authentication"),
      },
    })
  }
  static async searchProduct(query: string) {
    return axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/product/search`, {
      params: {
        query
      }
    })
  }
  static async getRelatedProducts(id: string) {
    return axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/product/category/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authentication"),
      },
    })
  }
}
