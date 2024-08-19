import { ChangeEvent, useEffect, useState } from "react";
import { IProduct } from "../../../interfaces/IProduct";
import {
  ICreateProductImage,
  IProductImage,
} from "../../../interfaces/IProductImage";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { TbTrash } from "react-icons/tb";
import { IoAddOutline } from "react-icons/io5";
import { useEditProductImageStore } from "../../../hooks/useEditProductImageStore";
import useEditProductStore from "../../../hooks/useEditProductStore";

type ImageType = IProductImage | ICreateProductImage;

export default function EditProductImageForm() {
  const { product, addProductImage, updateProductImage, removeProductImage } =
    useEditProductStore();

  const handleImageChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const url = reader.result as string;
        console.log(url);
        updateProductImage(index, url);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="flex w-full flex-wrap gap-4">
        {product.productImages.map((image, index) => (
          <label
            key={index}
            className="group relative flex h-28 w-28 flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-center hover:cursor-pointer hover:border-primary"
          >
            {image.imageUrl === "" ? (
              <>
                <input
                  onChange={(e) => handleImageChange(e, index)}
                  className="hidden"
                  type="file"
                  accept="image/*"
                />
                <MdOutlineAddPhotoAlternate className="h-8 w-8" />
                <p className="font-semibold">Photo {index + 1}</p>
              </>
            ) : (
              <>
                <button
                  onClick={() => removeProductImage(index)}
                  className="absolute inset-0 hidden rounded-md bg-black bg-opacity-50 group-hover:flex"
                >
                  <TbTrash className="h-5 w-5 text-white" />
                </button>
                <img
                  className="h-full w-full rounded-md object-cover"
                  src={image.imageUrl}
                  alt=""
                />
              </>
            )}
          </label>
        ))}
        <button
          onClick={addProductImage}
          className="flex h-28 w-28 flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-center hover:cursor-pointer hover:border-primary"
        >
          <IoAddOutline className="h-8 w-8" />
        </button>
      </div>
    </>
  );
}
