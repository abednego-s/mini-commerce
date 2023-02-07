import { Col, Grid, Group, Skeleton, Space, Stack } from "@mantine/core";

export function ProductSkeleton() {
  return (
    <>
      <Grid gutter="md">
        <Col lg={6} md={12}>
          <Stack spacing="lg">
            <Skeleton height={500} radius="md" />
            <Group position="center">
              <Skeleton height={70} width={70} radius="sm" />
              <Skeleton height={70} width={70} radius="sm" />
              <Skeleton height={70} width={70} radius="sm" />
            </Group>
          </Stack>
        </Col>
        <Col lg={6} md={12}>
          <Space h={30} />
          <Skeleton height={16} width={100} radius="xl" mb={25} />
          <Skeleton height={32} radius="xl" mb={20} />
          <Skeleton height={16} width={100} radius="xl" mb={35} />
          <Skeleton height={24} width={100} radius="xl" mb={20} />
          <Space h="lg" />
          <Group>
            <Skeleton height={24} width={100} radius="xl" />
            <Skeleton height={24} width={100} radius="xl" />
          </Group>
          <Space h="md" />
        </Col>
      </Grid>
    </>
  );
}
