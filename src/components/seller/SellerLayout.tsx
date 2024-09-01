import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function SellerLayout() {
  return (
    <>
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex flex-grow sm:px-6 lg:ml-56">
          <Outlet />
        </div>
      </div>
    </>
  );
}
