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
import { useCart } from "./use-cart";

export function CartPopover() {
  const { cart, removeFromCart, getTotal } = useCart();

  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <ActionIcon size={50}>
          <Badge
            color="red"
            variant="filled"
            sx={() => ({
              position: "absolute",
              borderRadius: "50%",
              height: "40px",
              width: "40px",
              top: -15,
              right: -15,
            })}
          >
            {getTotal()}
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
                <ActionIcon onClick={() => removeFromCart(item.id)}>
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
