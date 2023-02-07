import { Card, Stack } from "@mantine/core";
import { ProductCard } from "./product-card";
import { Product } from "./product-types";

export function ProductsCard({ products }: { products?: Product[] }) {
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
