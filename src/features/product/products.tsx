import { Container, Space } from "@mantine/core";
import { Product } from "./product-types";
import { ProductsCard } from "./products-card";
import { ProductsSkeleton } from "./products-skeleton";
import { useFetch } from "../../hooks";
import { ErrorState } from "../../components/app-states";

const url = process.env.REACT_APP_API_URL;

export function Products() {
  const { data: products, error } = useFetch<Product[]>(url);

  return (
    <Container>
      <Space h="lg" />
      {error ? (
        <ErrorState />
      ) : products ? (
        <ProductsCard products={products} />
      ) : (
        <ProductsSkeleton />
      )}
    </Container>
  );
}
