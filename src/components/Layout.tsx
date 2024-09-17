import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <div className="flex min-h-screen w-full min-w-full flex-col">
        <Navbar />
        <div className="mt-20 flex flex-grow">
          <Outlet />
        </div>
      </div>
    </>
  );
}
