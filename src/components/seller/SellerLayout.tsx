import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function SellerLayout() {
    return (
        <>
            <div className="flex flex-grow">
                <Sidebar />
                <div className="ml-56 flex flex-grow">
                    <Outlet />
                </div>
            </div>
        </>
    )
}