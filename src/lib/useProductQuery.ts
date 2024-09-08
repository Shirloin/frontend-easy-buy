import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ICreateProduct, IProduct } from "../interfaces/IProduct";
import ProductService from "../services/ProductService";
import { ICreateProductVariant } from "../interfaces/IProductVariant";
import { useHandleError } from "../hooks/useHandleError";




export function useGetAllProductsByShop(shopId: string) {
    const handleError = useHandleError()
    const fetchData = async () => {
        try {
            const response = await ProductService.getAllProductsByShop(shopId)
            return response.data as IProduct[]
        } catch (error) {
            handleError(error)
            throw new Error("Failed to fetch all products by user")
        }
    }
    return useQuery({
        queryKey: ['products', shopId],
        queryFn: fetchData
    })
}

export function useGetMyShopProduct() {
    const handleError = useHandleError()
    const fetchData = async () => {
        try {
            const response = await ProductService.getMyShopProduct()
            return response.data.products as IProduct[]
        } catch (error) {
            handleError(error)
        }
    }
    return useQuery({
        queryKey: ['myShopProducts'],
        queryFn: fetchData
    })
}

export function useCreateProduct() {
    const handleError = useHandleError()
    const createProduct = async ({
        product,
        productVariants,
    }: {
        product: ICreateProduct;
        productVariants: ICreateProductVariant[];
    }) => {
        try {
            const response = await ProductService.createProduct(product, productVariants);
            return response.data.message;
        } catch (error: any) {
            handleError(error)
        }
    }

    return useMutation({
        mutationKey: ['createProduct'],
        mutationFn: createProduct
    });
}

export function useUpdateProduct() {
    const handleError = useHandleError()
    const queryClient = useQueryClient();
    const updateProduct = async (product: IProduct) => {
        try {
            const response = await ProductService.updateProduct(product);
            return response.data.message;
        } catch (error: any) {
            handleError(error)
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
    const handleError = useHandleError()

    const deleteProduct = async (productId: string) => {
        try {
            const response = await ProductService.deleteProduct(productId);
            return response.data.message;
        } catch (error: any) {
            handleError(error)
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
    const handleError = useHandleError()
    const fetchData = async () => {
        try {
            const response = await ProductService.getLatestProduct()
            return response.data.products as IProduct[]
        } catch (error) {
            handleError(error)
        }
    }
    return useQuery({
        queryKey: ['latestProduct'],
        queryFn: fetchData
    })
}

export function useGetProductDetail(productId: string) {
    const handleError = useHandleError()
    const fetchData = async () => {
        try {
            const response = await ProductService.getProductDetail(productId)
            return response.data.product as IProduct
        } catch (error) {
            handleError(error)
        }
    }
    return useQuery({
        queryKey: ['productDetail'],
        queryFn: fetchData
    })
}
export function useSearchProduct(query: string) {
    const handleError = useHandleError()
    const fetchData = async () => {
        try {
            const response = await ProductService.searchProduct(query)
            return response.data.products as IProduct[]
        } catch (error) {
            handleError(error)
        }
    }
    return useQuery({
        queryKey: ['searchProduct', query],
        queryFn: fetchData,

    })
}

