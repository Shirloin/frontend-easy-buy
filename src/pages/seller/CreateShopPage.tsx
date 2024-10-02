import { ChangeEvent } from "react";
import { GrGallery } from "react-icons/gr";
import ShopService from "../../services/ShopService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useCreateShopStore from "../../hooks/useCreateShopStore";

export default function CreateShopPage() {
  const navigate = useNavigate();

  const { shop, setName, setDescription, setBannerImage, setShopImage } =
    useCreateShopStore();

  const onBannerImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      reader.onloadend = () => {
        const url = reader.result as string;
        setBannerImage(url);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const onShopImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      reader.onloadend = () => {
        const url = reader.result as string;
        setShopImage(url);
        console.log(url);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = async () => {
    try {
      const response = await ShopService.createShop(
        shop.name,
        shop.description,
        shop.bannerUrl,
        shop.imageUrl,
      );
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/seller/products");
    }
  };

  return (
    <>
      <div className="mx-auto flex w-full max-w-5xl flex-grow flex-col">
        <div className="mt-4 flex w-full flex-col gap-6 rounded-md shadow-all-sides">
          <div className="relative">
            <img
              className="h-60 w-full rounded-md object-cover"
              src={shop.bannerUrl}
              alt=""
            />

            <label className="group absolute -bottom-12 left-32 cursor-pointer rounded-full">
              <input
                onChange={onShopImageChange}
                className="hidden"
                type="file"
                accept="image/*"
              />
              <div className="relative h-fit w-fit rounded-full">
                <div className="absolute inset-0 hidden place-content-center rounded-full group-hover:flex group-hover:bg-black group-hover:bg-opacity-70">
                  <GrGallery className="m-auto h-8 w-8 text-white" />
                </div>
                <img
                  className="h-32 w-32 rounded-full object-cover"
                  src={shop.imageUrl}
                  alt=""
                />
              </div>
            </label>
            <label className="absolute bottom-0 right-0 m-4 cursor-pointer rounded-md bg-gray-200 px-8 py-2 font-semibold">
              <input
                onChange={onBannerImageChange}
                className="hidden"
                type="file"
                accept="image/*"
              />
              <p>Select Photo</p>
            </label>
          </div>
          <div className="mt-6 flex w-full flex-col gap-6 p-6">
            <div className="flex items-center gap-10">
              <div className="w-full max-w-60">
                <h1 className="text-xl font-bold">Shop Name</h1>
                <p className="text-xs">Shop name min.5 characters.</p>
              </div>
              <input
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                value={shop.name}
                className="w-full rounded-md p-2 ring-1 ring-gray-200"
                type="text"
              />
            </div>
            <div className="flex items-center gap-10">
              <div className="max-w-60">
                <h1 className="text-xl font-bold">Shop Description</h1>
                <p className="text-xs">
                  Make sure shop description including the detail of your shop
                  so customers can easily understand and find your shop.
                </p>
              </div>
              <textarea
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setDescription(e.target.value)
                }
                value={shop.description}
                className="h-28 max-h-28 w-full rounded-md p-2 ring-1 ring-gray-200"
                name=""
                id=""
              ></textarea>
            </div>
            <div className="flex justify-end gap-4">
              <button className="max-w-28 rounded-md px-12 py-2 text-sm font-bold text-gray-500 ring-1 ring-gray-300">
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="max-w-28 rounded-md bg-primary px-12 py-2 text-sm font-bold text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
