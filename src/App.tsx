import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { store } from "./store";
import { Provider } from "react-redux";
import { MainLayout } from "./components/layouts";
import { Products } from "./features/product";

function App() {
  return (
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <NotificationsProvider>
          <MainLayout>
            <Products />
          </MainLayout>
        </NotificationsProvider>
      </MantineProvider>
    </Provider>
  );
}

export default App;
