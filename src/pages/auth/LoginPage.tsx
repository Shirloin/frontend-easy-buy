import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { ChangeEvent, useState } from "react";
import AuthService from "../../services/AuthService";
import toast from "react-hot-toast";

export default function LoginPage() {

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async () => {
        try {
            const res = await AuthService.login(username, password)
            if (res.status === 200) {
                toast.success(res.data.message)
                navigate('/')
            }
        } catch (error: any) {
            if (error.response) {
                const msg = error.response.data.errors[0].msg
                toast.error(msg)
            }
        }
    }
    return (
        <Layout>
            <div className="m-auto w-96 p-8 rounded-lg border border-black shadow-lg">
                <h1 className="text-3xl font-bold mb-6">Login</h1>
                <input className="w-full p-2 my-2 ring-1 ring-black rounded-md" onChange={(e: ChangeEvent<HTMLInputElement>) => { setUsername(e.target.value) }} value={username} type="text" placeholder="Username" />
                <input className="w-full p-2 my-2 ring-1 ring-black rounded-md" type="password" onChange={(e: ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }} value={password} placeholder="Password" />
                <button onClick={handleSubmit} className="w-full p-2 my-4 bg-black text-white rounded-md font-medium">Login</button>
                <Link className="text-xs font-semibold text-center" to={'/register'}>
                    <p>Don't have an account? Register</p>
                </Link>
            </div>
        </Layout>
    )
}