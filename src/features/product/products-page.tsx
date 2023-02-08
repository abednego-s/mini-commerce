import { Container } from "@mantine/core";
import { ProductsCard } from "./products-card";
import { ProductsSkeleton } from "./products-skeleton";
import { ErrorAlert } from "../../components/errors";
import { useGetProducts } from "./product-queries";

export function ProductsPage() {
  const { isLoading, isError, isSuccess } = useGetProducts();

  return (
    <Container>
      {isLoading ? <ProductsSkeleton /> : null}
      {isError ? <ErrorAlert /> : null}
      {isSuccess ? <ProductsCard /> : null}
    </Container>
  );
}
