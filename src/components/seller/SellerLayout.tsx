import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function SellerLayout() {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <Outlet />
            </div>
        </>
    )
}