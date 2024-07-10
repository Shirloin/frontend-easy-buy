import axios from "axios";


export default class AuthService{
    static async register(username: string, email: string, password: string){
        return await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/register`, {
            email, username, password
        })
    }
    static async login(username: string, password: string){
        return await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/login`, {
            username, password
        })
    }
}
