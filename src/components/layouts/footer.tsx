import { Box, Container, Footer as MantinFooter, Text } from "@mantine/core";

export function Footer() {
  return (
    <MantinFooter height="auto" bg="dark.4">
      <Container>
        <Box py="lg">
          <Text color="gray.1">Mini Commerce 2023</Text>
        </Box>
      </Container>
    </MantinFooter>
  );
}
