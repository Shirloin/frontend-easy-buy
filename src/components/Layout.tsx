import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
    return (
        <>
            <div className="min-h-screen w-full flex flex-col">
                <Navbar />
                <div className="mt-20 flex flex-grow pb-4">
                    <Outlet />
                </div>
            </div>
        </>
    )
}