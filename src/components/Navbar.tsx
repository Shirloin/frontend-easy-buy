import { IoCartOutline } from "react-icons/io5";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMail, CiShop } from "react-icons/ci";

export default function Navbar() {
    const { isAuthenticated } = useAuth();

    return (
        <>
            <nav className="fixed h-20 flex w-full items-center justify-between gap-x-10 border-b bg-white px-12 py-4">
                <a className="font-serif text-3xl font-semibold text-primary" href="/">
                    comxmart
                </a>
                <input
                    className="w-full rounded-md px-3 py-1.5 ring-1 ring-gray-300 focus:ring-primary"
                    placeholder="Search..."
                    type="text"
                />
                <div className="flex gap-x-4">
                    {isAuthenticated ? (
                        <>
                            <div className="flex">
                                <button className="relative rounded-lg p-2 hover:bg-slate-200">
                                    <IoCartOutline className="h-6 w-6" />
                                </button>
                                <button className="relative rounded-lg p-2 hover:bg-slate-200">
                                    <IoIosNotificationsOutline className="h-6 w-6" />
                                </button>
                                <button className="relative rounded-lg p-2 hover:bg-slate-200">
                                    <CiMail className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="flex">
                                <button className="relative flex gap-2 rounded-lg p-2 justify-center items-center hover:bg-slate-200">
                                    <CiShop className="h-6 w-6" />
                                    <p className="text-sm font-semibold">Shop</p>
                                </button>
                                <button className="relative flex gap-2 rounded-lg p-2 justify-center items-center hover:bg-slate-200">
                                    <div className="avatar">
                                        <div className="w-6 rounded-full">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                    <p className="font-semibold text-sm">Shirloin</p>
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
