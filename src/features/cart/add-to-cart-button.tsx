import { Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { IconShoppingCart } from "@tabler/icons-react";
import { useGetProducts } from "../product/product-queries";
import { useCart } from "./use-cart";

export function AddToCartButton({ productId }: { productId: string }) {
  const { data: products } = useGetProducts();
  const { addToCart } = useCart();

  function onAddToCart() {
    if (products) {
      const selectedProduct = products.find(
        (product) => product.id === productId
      );
      if (selectedProduct) {
        const { id, name, image } = selectedProduct;
        addToCart({
          id,
          name,
          image,
          total: 1,
        });
        showNotification({
          title: "Add to Cart",
          message: `${selectedProduct.name} succesfully added to cart`,
          autoClose: 2000,
        });
      }
    }
  }
  return (
    <Button
      color="yellow.6"
      leftIcon={<IconShoppingCart size={16} />}
      onClick={onAddToCart}
    >
      Add Cart
    </Button>
  );
}
