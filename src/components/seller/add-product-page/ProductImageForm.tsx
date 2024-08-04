import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import useCreateProductStore from "../../../hooks/useCreateProductStore";
import { IoAddOutline } from "react-icons/io5";
import { ChangeEvent } from "react";
import { TbTrash } from "react-icons/tb";

export default function ProductImageForm() {
    const { productImages, addProductImage, updateProductImage, removeProductImage } = useCreateProductStore()

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                const url = reader.result as string
                updateProductImage(index, url)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <>
            <div className="shadow-all-sides mt-4 flex w-full flex-col gap-6 rounded-md p-6">
                <div className="flex items-start gap-10">
                    <div className="max-w-60">
                        <h1 className="font-bold">Product Images</h1>
                        <p className="text-xs">
                            Photo format must be .jpg, .jpeg, .png and the size min.300 x 300
                            px.
                        </p>
                    </div>
                    <div className="flex w-full flex-wrap gap-4">
                        {productImages.map((image, index) => (
                            <label key={index} className="group relative flex h-28 w-28 flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-center hover:cursor-pointer hover:border-primary">

                                {
                                    image.image_url === "" ? (
                                        <>
                                            <input onChange={(e) => handleImageChange(e, index)} className="hidden" type="file" accept="image/*" />
                                            <MdOutlineAddPhotoAlternate className="h-8 w-8" />
                                            <p className="font-semibold">Photo {index + 1}</p>
                                        </>
                                    ) : (
                                        <>
                                            <button onClick={() => removeProductImage(index)} className="group-hover:flex hidden absolute bg-black inset-0 bg-opacity-50 rounded-md">
                                                <TbTrash className="h-5 w-5 text-white" />
                                            </button>
                                            <img src={image.image_url} alt="" />
                                        </>
                                    )
                                }
                            </label>
                        ))}
                        <button onClick={addProductImage} className="flex h-28 w-28 flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-center hover:cursor-pointer hover:border-primary">
                            <IoAddOutline className="h-8 w-8" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
