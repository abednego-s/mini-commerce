import { Container } from "@mantine/core";
import { ProductsCard } from "./products-card";
import { ProductsSkeleton } from "./products-skeleton";
import { ErrorState } from "../../components/app-states";
import { useGetProducts } from "./product-queries";

export function Products() {
  const { isLoading, isError, isSuccess } = useGetProducts();

  return (
    <Container>
      {isLoading ? <ProductsSkeleton /> : null}
      {isError ? <ErrorState /> : null}
      {isSuccess ? <ProductsCard /> : null}
    </Container>
  );
}
