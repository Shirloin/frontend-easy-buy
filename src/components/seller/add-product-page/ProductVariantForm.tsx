import { ChangeEvent } from "react";
import useCreateProductStore from "../../../hooks/useCreateProductStore";
import Button from "../../ui/Button";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
export default function ProductVariantForm() {
  const {
    productVariants,
    addProductVariant,
    updateProductVariant,
    removeProductVariant,
  } = useCreateProductStore();

  const handleImageChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const url = reader.result as string;
        updateProductVariant(index, "imageUrl", url);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="mt-4 flex w-full flex-col gap-6 rounded-md p-6 shadow-all-sides">
        <div className="flex items-center justify-between gap-10">
          <div className="max-w-60">
            <h1 className="font-bold">Product Variant</h1>
            <p className="text-xs">
              Add variants so buyers can choose the right product, come on!
              Enter max. 5 types of variants.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-4">
          {productVariants.map((variant, index) => {
            return (
              <div key={index} className="flex w-full flex-col gap-4">
                <div className="flex w-full items-center justify-between">
                  <h1 className="text-lg font-bold">
                    Product Variant {index + 1}
                  </h1>
                  <Button
                    title="Remove"
                    type="danger"
                    onClick={() => removeProductVariant(index)}
                  />
                </div>
                <div className="mb-4 flex w-full items-center justify-between gap-10">
                  <div className="w-full max-w-60">
                    <h1 className="font-bold">Product Variant Name</h1>
                    <p className="text-xs">
                      Product variant name min. 3 characters.
                    </p>
                  </div>
                  <input
                    className="w-full rounded-md p-2 ring-1 ring-gray-200"
                    type="text"
                    placeholder="Product Variant Name"
                    value={variant.name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updateProductVariant(index, "name", e.target.value)
                    }
                  />
                </div>
                <div className="mb-4 flex w-full items-center justify-between gap-10">
                  <div className="w-full max-w-60">
                    <h1 className="font-bold">Product Variant Price</h1>
                    <p className="text-xs">
                      Product variant price must be more than 0.
                    </p>
                  </div>
                  <input
                    className="w-full rounded-md p-2 ring-1 ring-gray-200"
                    type="number"
                    placeholder="Product Variant Price"
                    value={variant.price}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updateProductVariant(index, "price", e.target.value)
                    }
                  />
                </div>
                <div className="mb-4 flex w-full items-center justify-between gap-10">
                  <div className="w-full max-w-60">
                    <h1 className="font-bold">Product Variant Stock</h1>
                    <p className="text-xs">
                      Product variant stock must be more than 0.
                    </p>
                  </div>
                  <input
                    className="w-full rounded-md p-2 ring-1 ring-gray-200"
                    type="number"
                    placeholder="Product Variant Stock"
                    value={variant.stock}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updateProductVariant(index, "stock", e.target.value)
                    }
                  />
                </div>
                <div className="flex items-start gap-10">
                  <div className="max-w-60">
                    <h1 className="font-bold">Product Image</h1>
                    <p className="text-xs">
                      Photo format must be .jpg, .jpeg, .png and the size
                      min.300 x 300 px.
                    </p>
                  </div>
                  <label
                    key={index}
                    className="group relative flex h-28 w-28 flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-center hover:cursor-pointer hover:border-primary"
                  >
                    <input
                      onChange={(e) => handleImageChange(e, index)}
                      className="hidden"
                      type="file"
                      accept="image/*"
                    />
                    {!variant.imageUrl ? (
                      <>
                        <MdOutlineAddPhotoAlternate className="h-8 w-8" />
                        <p className="font-semibold">Photo </p>
                      </>
                    ) : (
                      <>
                        <img
                          className="h-full w-full rounded-md object-cover"
                          src={variant.imageUrl}
                          alt=""
                        />
                      </>
                    )}
                  </label>
                </div>
              </div>
            );
          })}
          <Button
            title="+ Add Variant"
            onClick={addProductVariant}
            type="outline"
          />
          {/* <button
            onClick={addProductVariant}
            className="rounded-md bg-white px-8 py-2 text-center font-semibold text-primary ring-1 ring-primary"
          >
            + Add Variant
          </button> */}
        </div>
      </div>
    </>
  );
}
