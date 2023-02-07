import {
  ActionIcon,
  Badge,
  Group,
  Image,
  Popover,
  Stack,
  Text,
} from "@mantine/core";
import { IconShoppingCart, IconTrash } from "@tabler/icons-react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../features/cart/cart-slice";
import { RootState } from "../../store";

export function CartPopover() {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const total = useMemo(() => {
    return cart.reduce((prev, current) => {
      prev += current.total;
      return prev;
    }, 0);
  }, [cart]);

  function onRemoveCartItem(id: string) {
    dispatch(removeFromCart(id));
  }

  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <ActionIcon>
          <Badge
            color="red"
            variant="filled"
            sx={() => ({
              position: "absolute",
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              top: -15,
              right: -15,
            })}
          >
            {total}
          </Badge>
          <IconShoppingCart size={30} />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown>
        {cart.length > 0 ? (
          <Stack spacing="lg">
            {cart.map((item) => (
              <Group key={item.id}>
                <Image src={item.image} width={30} />
                <Text fz="sm">
                  ({item.total}) {item.name}
                </Text>
                <ActionIcon onClick={() => onRemoveCartItem(item.id)}>
                  <IconTrash size={20} />
                </ActionIcon>
              </Group>
            ))}
          </Stack>
        ) : (
          <div>Your cart is empty</div>
        )}
      </Popover.Dropdown>
    </Popover>
  );
}
