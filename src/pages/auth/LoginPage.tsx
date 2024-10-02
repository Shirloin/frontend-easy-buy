import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import AuthService from "../../services/AuthService";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();

  const {
    setToken,
    setUser,
    isLoading,
    setIsLoading,
    isAuthenticated,
    setShop,
  } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await AuthService.login(username, password);
      if (res.status === 200) {
        setToken(res.data.token);
        setUser(res.data.user);
        setShop(res.data.user.shop);
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error: any) {
      if (error.response) {
        const msg = error.response.data.message;
        toast.error(msg);
      }
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate("/");
    }
  }, [isLoading, isAuthenticated, navigate]);

  return (
    <div className="flex min-h-screen w-full">
      <div className="border-blagray-300ck m-auto w-96 rounded-lg border p-8 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-primary">Login</h1>
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
          type="password"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
          value={password}
          placeholder="Password"
        />
        <button
          onClick={handleSubmit}
          className="my-4 w-full rounded-md bg-primary p-2 font-medium text-white"
        >
          Login
        </button>
        <Link className="text-center text-xs font-semibold" to={"/register"}>
          <p>Don't have an account? Register</p>
        </Link>
      </div>
    </div>
  );
}
