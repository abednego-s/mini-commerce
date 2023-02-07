import { Container, Group, Header as MantineHeader, Text } from "@mantine/core";

export function Header() {
  return (
    <MantineHeader height={60} sx={() => ({ position: "fixed" })}>
      <Container sx={() => ({ height: "100%" })}>
        <Group position="apart" align="center" h="100%">
          <Text fw="600" fz="lg">
            Mini Commerce App
          </Text>
        </Group>
      </Container>
    </MantineHeader>
  );
}
