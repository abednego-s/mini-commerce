import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { add, remove } from "./cart-slice";
import { CartItem } from "./cart-types";

export function useCart() {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  function addToCart(item: CartItem) {
    dispatch(add(item));
  }

  function removeFromCart(id: string) {
    dispatch(remove(id));
  }

  function getTotal() {
    return cart.reduce((prev, current) => {
      prev += current.total;
      return prev;
    }, 0);
  }

  return { cart, addToCart, removeFromCart, getTotal };
}
