import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { ChangeEvent, useState } from "react";

export default function RegisterPage() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Layout>
            <div className="m-auto w-96 p-8 rounded-lg border border-black shadow-lg">
                <h1 className="text-3xl font-bold mb-6">Register</h1>
                <input className="w-full p-2 my-2 ring-1 ring-black rounded-md" onChange={(e:ChangeEvent<HTMLInputElement>) => {setUsername(e.target.value)}} value={username} type="text" placeholder="Username" />
                <input className="w-full p-2 my-2 ring-1 ring-black rounded-md" onChange={(e:ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value)}} value={email} type="email" placeholder="Email" />
                <input className="w-full p-2 my-2 ring-1 ring-black rounded-md" onChange={(e:ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value)}} value={password} type="password" placeholder="Password" />
                <button className="w-full p-2 my-4 bg-black text-white rounded-md font-medium">Register</button>
                <Link className="text-xs font-semibold text-center" to={'/login'}>
                    <p>Already have an account? Login</p>
                </Link>
            </div>
        </Layout>
    )
}