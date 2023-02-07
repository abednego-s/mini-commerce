import { Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { IconShoppingCart } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { addToCart, CartItem } from "./cart-slice";

export function AddToCartButton({ id, name, image, total }: CartItem) {
  const dispatch = useDispatch();

  function onAddToCart(item: CartItem) {
    dispatch(addToCart(item));
    showNotification({
      title: "Add to Cart",
      message: `${name} succesfully added to cart`,
      autoClose: 2000,
    });
  }
  return (
    <Button
      color="yellow.6"
      leftIcon={<IconShoppingCart size={16} />}
      onClick={() => onAddToCart({ id, name, image, total })}
    >
      Add Cart
    </Button>
  );
}
