import { Card, Stack } from "@mantine/core";
import { ProductCard } from "./product-card";
import { useGetProducts } from "./product-queries";

export function ProductsCard() {
  const { data: products } = useGetProducts();

  return (
    <Stack spacing="lg">
      {products?.map((product) => (
        <Card key={product.id} shadow="md" radius="md" withBorder>
          <Card.Section>
            <ProductCard {...product} />
          </Card.Section>
        </Card>
      ))}
    </Stack>
  );
}
