import {
  Button,
  Container,
  Col,
  Flex,
  Grid,
  Group,
  Text,
  Rating,
  Space,
  Divider,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { Product } from "./product-types";
import { ProductCarousel } from "./product-carousel";
import { AddToCartButton } from "../cart";

export function ProductCard({
  id,
  images,
  rating,
  reviewCount,
  name,
  price,
}: Product) {
  return (
    <Grid gutter="md">
      <Col lg={6} md={12}>
        <ProductCarousel slides={images} />
        <Space h="lg" />
      </Col>
      <Col lg={6} md={12}>
        <Space h={30} />
        <Container>
          <Text transform="uppercase" color="red.6" fw="600" fz="sm" mb="sm">
            Sale
          </Text>
          <Text fz="lg" fw="600" mb="md">
            {name}
          </Text>
          <Flex align="center">
            <Rating value={rating} readOnly />
            <Text color="dimmed" ml="sm" fz="sm">
              ({reviewCount} reviews)
            </Text>
          </Flex>
          <Space h="md" />
          <Text fz="lg" fw="600">
            {price}
          </Text>
          <Divider my={35} size="xs" />
          <Group>
            <AddToCartButton productId={id} />
            <Button
              color="green.6"
              onClick={() =>
                showNotification({
                  title: "Buy Product",
                  message: `Thanks for buying ${name}`,
                  autoClose: 2000,
                })
              }
            >
              Buy Now
            </Button>
          </Group>
          <Space h="md" />
        </Container>
      </Col>
    </Grid>
  );
}
