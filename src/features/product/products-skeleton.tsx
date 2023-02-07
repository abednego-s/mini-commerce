import { Stack } from "@mantine/core";
import { ProductSkeleton } from "./product-skeleton";

export function ProductsSkeleton() {
  return (
    <Stack spacing="lg">
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
    </Stack>
  );
}
