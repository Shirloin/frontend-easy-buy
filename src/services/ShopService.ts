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
    banner_url: string,
    image_url: string,
  ) {
    return await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/shop`,
      {
        name,
        description,
        banner_url,
        image_url,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("authentication"),
        },
      },
    );
  }
}
