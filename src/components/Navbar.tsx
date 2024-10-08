import { IoCartOutline } from "react-icons/io5";
import { useAuth } from "../contexts/AuthContext";
import { CiMail, CiShop } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

export default function Navbar() {
  const { isAuthenticated, user } = useAuth();

  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (search.length > 0) {
      navigate(`/search?query=${search}`);
      setSearch("");
      queryClient.invalidateQueries({ queryKey: ["searchProduct"] });
    }
  };

  return (
    <>
      <nav className="fixed top-0 z-50 flex h-20 w-full items-center justify-between gap-x-6 border-b bg-white px-6 py-4 sm:gap-x-10 sm:px-12">
        <Link
          className="flex font-serif text-2xl font-semibold text-primary"
          to="/"
        >
          <p>EasyBuy</p>
        </Link>
        <form
          className="w-full min-w-36 sm:max-w-xl xl:max-w-3xl"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full rounded-md px-3 py-1.5 ring-1 ring-gray-300 focus:ring-primary"
            placeholder="Search..."
            type="text"
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
        </form>
        <div className="flex gap-x-4">
          {isAuthenticated ? (
            <>
              <div className="flex">
                <Link
                  to="/cart"
                  className="relative rounded-lg p-2 hover:bg-slate-200"
                >
                  <IoCartOutline className="h-6 w-6" />
                </Link>
                <Link
                  to={"/chat"}
                  className="relative rounded-lg p-2 hover:bg-slate-200"
                >
                  <CiMail className="h-6 w-6" />
                </Link>
              </div>
              <div className="flex">
                <Link
                  to={"/seller/products"}
                  className="relative flex max-w-32 items-center justify-center gap-2 rounded-lg p-2 hover:bg-slate-200"
                >
                  <CiShop className="min-h-6 min-w-6" />
                  <p className="max-w-20 truncate text-sm font-semibold">
                    {user && user.shop ? user.shop.name : "Shop"}
                  </p>
                </Link>
                <Link
                  to={"/profile"}
                  className="relative flex max-w-32 items-center justify-start gap-2 rounded-lg p-2 hover:bg-slate-200"
                >
                  <div className="avatar">
                    <div className="w-6 rounded-full">
                      <img src={user?.imageUrl} alt="Profile Image" />
                    </div>
                  </div>
                  <p className="max-w-20 truncate text-sm font-semibold">
                    {user ? user.username : "Shirloin"}
                  </p>
                </Link>
              </div>
            </>
          ) : (
            <>
              <Link to={"/register"}>
                <div className="nav-auth-btn text-primary ring-1 ring-primary">
                  Register
                </div>
              </Link>
              <Link to={"/login"}>
                <div className="nav-auth-btn bg-primary text-white ring-1 ring-primary">
                  Login
                </div>
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
