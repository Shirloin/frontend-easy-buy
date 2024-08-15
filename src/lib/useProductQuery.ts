import { useQuery } from "@tanstack/react-query";
import { IProduct } from "../interfaces/IProduct";
import ProductService from "../services/ProductService";

export function useGetAllProductsByUser(userId: string) {
    const fetchData = async () => {
        try {
            const response = await ProductService.getAllProductsByUser(userId)
            return response.data as IProduct[]
        } catch (error) {
            throw new Error("Failed to fetch all products by user")
        }
    }
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchData
    })
}