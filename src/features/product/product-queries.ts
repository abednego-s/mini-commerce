import { useQuery } from "react-query";
import axios from "axios";
import { Product } from "./product-types";

export async function getProducts() {
  const res = await axios.get<Product[]>(
    `${process.env.REACT_APP_API_URL}/products`
  );
  return res.data;
}

export function useGetProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}
