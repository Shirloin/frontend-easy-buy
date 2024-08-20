import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ICreateProduct, IProduct } from "../interfaces/IProduct";
import ProductService from "../services/ProductService";
import { ICreateProductVariant, IProductVariant } from "../interfaces/IProductVariant";
import { ICreateProductImage, IProductImage } from "../interfaces/IProductImage";




export function useGetAllProductsByShop(shopId: string) {
    const fetchData = async () => {
        try {
            const response = await ProductService.getAllProductsByShop(shopId)
            return response.data as IProduct[]
        } catch (error) {
            throw new Error("Failed to fetch all products by user")
        }
    }
    return useQuery({
        queryKey: ['products', shopId],
        queryFn: fetchData
    })
}

export function useGetMyShopProduct() {
    const fetchData = async () => {
        try {
            const response = await ProductService.getMyShopProduct()
            return response.data.products as IProduct[]
        } catch (error) {
            throw new Error("Failed to fetch all products by user")
        }
    }
    return useQuery({
        queryKey: ['myShopProducts'],
        queryFn: fetchData
    })
}

export function useCreateProduct() {
    const createProduct = async ({
        product,
        productVariants,
        productImages,
    }: {
        product: ICreateProduct;
        productVariants: ICreateProductVariant[];
        productImages: ICreateProductImage[];
    }) => {
        try {
            const response = await ProductService.createProduct(product, productVariants, productImages);
            return response.data.message;
        } catch (error: any) {
            throw new Error(error.response.data.message);
        }
    }

    return useMutation({
        mutationKey: ['createProduct'],
        mutationFn: createProduct
    });
}

export function useUpdateProduct() {
    const queryClient = useQueryClient();
    const updateProduct = async (product: IProduct) => {
        try {
            const response = await ProductService.updateProduct(product);
            return response.data.message;
        } catch (error: any) {
            throw new Error(error.response.data.message);
        }
    }

    return useMutation({
        mutationKey: ['updateProduct'],
        mutationFn: updateProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["myShopProducts"] });
        }
    });
}

export function useDeleteProduct() {
    const queryClient = useQueryClient();

    const deleteProduct = async (productId: string) => {
        try {
            const response = await ProductService.deleteProduct(productId);
            return response.data.message;
        } catch (error: any) {
            throw new Error(error.response.data.message);
        }
    }

    return useMutation({
        mutationKey: ['deleteProduct'],
        mutationFn: deleteProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["myShopProducts"] });
        }
    });
}

export function useGetLatestProduct() {
    const fetchData = async () => {
        try {
            const response = await ProductService.getLatestProduct()
            return response.data.products as IProduct[]
        } catch (error) {
            throw new Error("Failed to fetch latest products by user")
        }
    }
    return useQuery({
        queryKey: ['latestProduct'],
        queryFn: fetchData
    })
}