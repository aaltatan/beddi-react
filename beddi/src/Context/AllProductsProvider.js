import React, { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export default function AllProductsProvider(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://apiv2.tajir.store/web/stores/beddishop/products?page=1&per_page=200",
    )
      .then((res) => res.json())
      .then((products) => setProducts(products.data.flat()));
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {props.children}
    </ProductsContext.Provider>
  );
}
