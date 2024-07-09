import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

export default function LoginPage() {
    return (
        <Layout>
            <div className="m-auto w-96 p-8 rounded-lg border border-black shadow-lg">
                <h1 className="text-3xl font-bold mb-6">Login</h1>
                <input className="w-full p-2 my-2 ring-1 ring-black rounded-md" type="text" placeholder="Username" />
                <input className="w-full p-2 my-2 ring-1 ring-black rounded-md" type="password" placeholder="Password" />
                <button className="w-full p-2 my-4 bg-black text-white rounded-md font-medium">Login</button>
                <Link className="text-xs font-semibold text-center" to={'/register'}>
                    <p>Don't have an account? Register</p>
                </Link>
            </div>
        </Layout>
    )
}