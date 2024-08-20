import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IProduct } from "../interfaces/IProduct";
import ProductService from "../services/ProductService";

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