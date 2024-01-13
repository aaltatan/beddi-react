import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import "./styles.css";

// layout
import MainLayout from "./layouts/MainLayout";
import ProductLayout from "./layouts/ProductLayout";

// pages
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/product/ProductsPage";

// loaders
import ProductPage, { productLoader } from "./pages/product/ProductPage";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="products" element={<ProductLayout />}>
        <Route index element={<ProductsPage />} />
        <Route
          path=":productId"
          element={<ProductPage />}
          loader={productLoader}
          errorElement={
            <NotFound
              header="Product not found"
              message="Sorry, we cloud not find the product you are looking for."
            />
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <NotFound
            header="Page not found"
            message="Sorry, we couldn't find the page you are looking for."
          />
        }
      />
    </Route>,
  ),
);

function App() {
  return (
    <div className="App dark:text-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
