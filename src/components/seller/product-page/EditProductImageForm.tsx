import { ChangeEvent, useState } from "react";
import { IProduct } from "../../../interfaces/IProduct";
import { ICreateProductImage, IProductImage } from "../../../interfaces/IProductImage";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { TbTrash } from "react-icons/tb";
import { IoAddOutline } from "react-icons/io5";

type ImageType = IProductImage | ICreateProductImage

export default function EditProductImageForm({ product }: { product: IProduct }) {
    const [images, setImages] = useState<ImageType[]>(product.productImages)


    const addProductImage = () => {
        const newImage: ICreateProductImage = {
            imageUrl: ""
        }
        setImages([...images, newImage])
    }

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                const url = reader.result as string
                const updatedImages = [...images];
                updatedImages[index] = {
                    ...updatedImages[index],
                    imageUrl: url
                };
                setImages(updatedImages);
            }
            reader.readAsDataURL(file)
        }
    }

    const removeProductImage = (index: number) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setImages(updatedImages);
    }

    const handleSubmit = () => {

    }

    return (
        <>
            <div className="flex w-full flex-wrap gap-4">
                {images.map((image, index) => (
                    <label key={index} className="group relative flex h-28 w-28 flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-center hover:cursor-pointer hover:border-primary">

                        {
                            image.imageUrl === "" ? (
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
                                    <img className="w-full h-full object-cover rounded-md" src={image.imageUrl} alt="" />
                                </>
                            )
                        }
                    </label>
                ))}
                <button onClick={addProductImage} className="flex h-28 w-28 flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-center hover:cursor-pointer hover:border-primary">
                    <IoAddOutline className="h-8 w-8" />
                </button>
            </div>
            <button onClick={handleSubmit} className="w-full mt-4 rounded-md bg-primary px-12 py-2 text-sm font-bold text-white">
                Save
            </button>
        </>
    )
}