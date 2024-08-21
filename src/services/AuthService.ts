import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

export default class AuthService {
  static validate_token() {
    return axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/validate-token`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("authentication"),
        },
      },
    );
  }

  static async register(username: string, email: string, password: string) {
    return await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/register`,
      {
        email,
        username,
        password,
      },
    );
  }
  static async login(username: string, password: string) {
    return await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/login`, {
      username,
      password,
    });
  }

  static async logOut() {
    return await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/logout`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authentication"),
      },
    });
  }
}
