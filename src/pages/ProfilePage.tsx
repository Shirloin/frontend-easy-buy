import { IoPersonOutline } from "react-icons/io5";
import AddressSection from "../components/profile-page/AddressSection";
import BiodataSection from "../components/profile-page/BiodataSection";
import NotificationSection from "../components/profile-page/NotificationSection";
import Tabs from "../components/Tabs";
import { useAuth } from "../contexts/AuthContext";
import OrderSection from "../components/profile-page/OrderSection";
import Button from "../components/ui/Button";

export default function ProfilePage() {
  const { user, logOut } = useAuth();

  const tabList = ["Biodata", "Address List", "Notification", "Order"];

  return (
    <>
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col items-start justify-center px-10 py-4">
        <div className="flex items-center gap-4 font-semibold">
          <IoPersonOutline className="h-5 w-5" />
          <p className="text-xl">{user?.username}</p>
          <Button onClick={logOut} title="Sign Out" type="ghost" size="large" />
        </div>
        <Tabs tabList={tabList}>
          <BiodataSection />
          <AddressSection />
          <NotificationSection />
          <OrderSection />
        </Tabs>
      </div>
    </>
  );
}
