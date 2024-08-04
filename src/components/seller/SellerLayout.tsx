import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function SellerLayout() {
    return (
        <>
            <div className="flex flex-grow">
                <Sidebar />
                <div className="lg:ml-56 flex flex-grow sm:px-6">
                    <Outlet />
                </div>
            </div>
        </>
    )
}