import { Link } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import AuthService from "../../services/AuthService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await AuthService.register(username, email, password);
      if (res.status === 200) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error: any) {
      if (error.response) {
        const msg = error.response.data.message;
        toast.error(msg);
      }
    }
  };

  return (
    <div className="flex min-h-screen w-full">
      <div className="m-auto w-96 rounded-lg border border-black p-8 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold">Register</h1>
        <input
          className="my-2 w-full rounded-md p-2 ring-1 ring-gray-300 focus:ring-primary"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setUsername(e.target.value);
          }}
          value={username}
          type="text"
          placeholder="Username"
        />
        <input
          className="my-2 w-full rounded-md p-2 ring-1 ring-gray-300 focus:ring-primary"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          placeholder="Email"
        />
        <input
          className="my-2 w-full rounded-md p-2 ring-1 ring-gray-300 focus:ring-primary"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
          placeholder="Password"
        />
        <button
          onClick={handleSubmit}
          className="my-4 w-full rounded-md bg-black p-2 font-medium text-white"
        >
          Register
        </button>
        <Link className="text-center text-xs font-semibold" to={"/login"}>
          <p>Already have an account? Login</p>
        </Link>
      </div>
    </div>
  );
}
