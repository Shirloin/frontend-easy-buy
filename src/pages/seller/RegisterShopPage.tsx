import { GrGallery } from "react-icons/gr";

export default function RegisterShopPage() {
    return (
        <>
            <div className="max-w-5xl w-full mx-auto flex flex-col flex-grow ">
                <div className="shadow-all-sides mt-4 flex w-full flex-col gap-6 rounded-md">
                    <div className="relative ">
                        <img className="w-full h-60 rounded-md" src="https://plus.unsplash.com/premium_photo-1670738772747-c81429db3725?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />

                        <label className="group absolute -bottom-16 left-32 rounded-full cursor-pointer">
                            <input className="hidden" type="file" accept="image/*" />
                            <div className="w-fit h-fit relative rounded-full">
                                <div className="hidden group-hover:flex absolute inset-0 group-hover:bg-black group-hover:bg-opacity-70 rounded-full place-content-center ">
                                    <GrGallery className="w-8 h-8 m-auto text-white" />
                                </div>
                                <img className="w-32 h-32 rounded-full " src="https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                            </div>
                        </label>
                        <label className="absolute right-0 bottom-0 px-8 py-2 rounded-md font-semibold bg-gray-200 m-4 cursor-pointer">
                            <input className="hidden" type="file" accept="image/*" />
                            <p>Select Photo</p>
                        </label>
                    </div>
                    <div className="p-6 w-full flex flex-col gap-10 mt-10">
                        <div className="flex items-center gap-10 ">
                            <div className="max-w-60 w-full">
                                <h1 className="font-bold text-xl">Shop Name</h1>
                                <p className="text-xs">
                                    Shop name min.5 characters.
                                </p>
                            </div>
                            <input
                                className="w-full rounded-md p-2 ring-1 ring-gray-200"
                                type="text"
                            />
                        </div>
                        <div className="flex items-center gap-10">
                            <div className="max-w-60">
                                <h1 className="font-bold text-xl">Shop Description</h1>
                                <p className="text-xs">
                                    Make sure shop description including the detail of your shop
                                    so customers can easily understand and find your shop.
                                </p>
                            </div>
                            <textarea
                                className="h-28 max-h-28 w-full rounded-md p-2 ring-1 ring-gray-200"
                                name=""
                                id=""
                            ></textarea>
                        </div>
                        <div className="flex justify-end gap-4">
                            <button className="max-w-28 rounded-md px-12 py-2 text-sm font-bold text-gray-500 ring-1 ring-gray-300">
                                Cancel
                            </button>
                            <button className="max-w-28 rounded-md bg-primary px-12 py-2 text-sm font-bold text-white">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}