import axios from "axios";

export default class UserService {
  static async getShop(id: string) {
    return await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/shop/${id}`,
    );
  }
}
