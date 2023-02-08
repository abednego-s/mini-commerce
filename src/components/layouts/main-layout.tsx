import { Space } from "@mantine/core";
import { Footer } from "./footer";
import { Header } from "./header";

export function MainLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header />
      <main>
        <Space h={120} />
        {children}
        <Space h={80} />
      </main>
      <Footer />
    </>
  );
}
