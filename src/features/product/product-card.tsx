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
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { Product } from "./product-types";
import { ProductCarousel } from "./product-carousel";
import { AddToCartButton } from "../cart";

export function ProductCard({
  id,
  image,
  images,
  rating,
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
              ({rating} reviews)
            </Text>
          </Flex>
          <Space h="md" />
          <Text fz="lg" fw="600">
            {price}
          </Text>
          <Space h="lg" />
          <Group>
            <AddToCartButton id={id} name={name} image={image} total={1} />
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
