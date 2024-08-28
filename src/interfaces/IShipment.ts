import { ICart } from "./ICart";
import { ICartItem } from "./ICartItem";

export interface IShipment {
    cart: ICart
    cartItems: ICartItem[]
}