import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { MainLayout } from "./components/layouts";
import { Products } from "./features/product";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <NotificationsProvider>
        <MainLayout>
          <Products />
        </MainLayout>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default App;
