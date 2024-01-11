import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DataProvider from "../Context/DataProvider";
import AllProductsProvider from "../Context/AllProductsProvider";

export default function MainLayout() {
  return (
    <AllProductsProvider>
      <DataProvider>
        <div>
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </DataProvider>
    </AllProductsProvider>
  );
}
