import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import "./styles.css";
import { useSetRecoilState } from "recoil";

// layout
import MainLayout from "./layouts/MainLayout";
import ProductLayout from "./layouts/ProductLayout";

// pages
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/product/ProductsPage";

// loaders
import ProductPage, { productLoader } from "./pages/product/ProductPage";
import { useEffect } from "react";
import { ProductState } from "./state/atoms/ProductsState";
import { DataState } from "./state/atoms/DataState";

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
  const setProducts = useSetRecoilState(ProductState);
  const setData = useSetRecoilState(DataState);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://apiv2.tajir.store/web/stores/beddishop/products?page=1&per_page=200",
      );
      const data = await response.json();
      const products = data.data.flat();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://apiv2.tajir.store/web/stores/home/beddishop",
      );
      let data = await response.json();
      data = data.data;
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App dark:text-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
