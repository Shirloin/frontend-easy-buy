import axios from "axios";

export default class ShopService {
  static async getUserShop() {
    return await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/shop/`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authentication"),
      },
    });
  }
  static async createShop(
    name: string,
    description: string,
    bannerUrl: string,
    imageUrl: string,
  ) {
    return await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/shop`,
      {
        name,
        description,
        bannerUrl,
        imageUrl,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("authentication"),
        },
      },
    );
  }
}
