import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import { store } from "./store";
import { MainLayout } from "./components/layouts";
import { Products } from "./features/product";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <NotificationsProvider>
            <MainLayout>
              <Products />
            </MainLayout>
          </NotificationsProvider>
        </MantineProvider>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
