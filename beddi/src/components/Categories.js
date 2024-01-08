import { useEffect, useState } from "react";
import Category from "./Category";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((res) => res.json())
      .then((categories) => setCategories(categories));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  let categoriesOutput = categories.map((category) => {
    if (products.length > 0) {
      const product = products.find(
        (product) => product.category_id === category.id,
      );
      if (product && product.image) {
        category = { ...category, image: product.image };
      }
    }
    return category;
  });

  categoriesOutput = categoriesOutput.filter((category) => category.image);
  categoriesOutput = categoriesOutput.map((category, idx) => (
    <Category key={idx} category={category} />
  ));

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2  lg:grid-cols-3 xl:col-span-4">
      {categoriesOutput}
    </div>
  );
}
