import { IoCartOutline } from "react-icons/io5";
import { useAuth } from "../contexts/AuthContext";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMail, CiShop } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { isAuthenticated, user } = useAuth();

  return (
    <>
      <nav className="fixed z-50 flex h-20 w-full items-center justify-between gap-x-10 border-b bg-white px-12 py-4">
        <Link className="font-serif text-2xl font-semibold text-primary" to="/">
          <p>Easy Buy</p>
        </Link>
        <input
          className="w-full max-w-3xl rounded-md px-3 py-1.5 ring-1 ring-gray-300 focus:ring-primary"
          placeholder="Search..."
          type="text"
        />
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
                <button className="relative rounded-lg p-2 hover:bg-slate-200">
                  <IoIosNotificationsOutline className="h-6 w-6" />
                </button>
                <Link
                  to={"/chat"}
                  className="relative rounded-lg p-2 hover:bg-slate-200"
                >
                  <CiMail className="h-6 w-6" />
                </Link>
              </div>
              <div className="flex">
                <Link
                  to={"/seller"}
                  className="relative flex max-w-32 items-center justify-center gap-2 rounded-lg p-2 hover:bg-slate-200"
                >
                  <CiShop className="min-h-6 min-w-6" />
                  <p className="max-w-20 truncate text-sm font-semibold">
                    {user && user.shop ? user.shop.name : "Shop"}
                  </p>
                </Link>
                <button className="relative flex max-w-32 items-center justify-start gap-2 rounded-lg p-2 hover:bg-slate-200">
                  <div className="avatar">
                    <div className="w-6 rounded-full">
                      <img src={user?.imageUrl} alt="Profile Image" />
                    </div>
                  </div>
                  <p className="max-w-20 truncate text-sm font-semibold">
                    {user ? user.username : "Shirloin"}
                  </p>
                </button>
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
