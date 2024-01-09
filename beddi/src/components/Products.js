import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Products() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  let [activePage, setActivePage] = useState(1);
  const LIMIT = 8;

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((res) => res.json())
      .then((categoriesData) => {
        categoriesData = categoriesData.filter(
          (category) => category.products_count !== 0,
        );
        setCategories([
          { id: 0, name: "الكل" },
          ...categoriesData,
          { id: null, name: "غير ذلك" },
        ]);
      });
  }, []);

  const categoriesOutput = categories.map((category, idx) => {
    let criteria =
      category.id === activeCategory
        ? "bg-orange-600 text-white"
        : "bg-slate-200 hover:bg-slate-300";
    return (
      <li
        className={`flex cursor-pointer items-center justify-center px-4 py-2 text-center ${criteria}`}
        key={idx}
        onClick={() => {
          setActiveCategory(category.id);
          setActivePage(1);
        }}
      >
        {category.name}
      </li>
    );
  });

  useEffect(() => {
    let url =
      activeCategory === 0
        ? `http://localhost:3001/products?_start=0&_end=${activePage * LIMIT}`
        : `http://localhost:3001/products?_start=0&_end=${
            activePage * LIMIT
          }&category_id=${activeCategory}`;
    fetch(url)
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
      });
  }, [activeCategory, activePage]);

  return (
    <div className="grid-cols-aside relative grid gap-x-4 max-md:grid-cols-1">
      <aside>
        <div className="no-scrollbar sticky left-0 top-24 mb-4 overflow-x-scroll max-md:top-0">
          <ul className=" flex gap-2 text-xs md:grid md:grid-cols-2">
            {categoriesOutput}
          </ul>
        </div>
      </aside>
      <div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.length &&
            products.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
        </div>
        <button
          className="mx-auto my-4 block bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
          onClick={() => setActivePage(++activePage)}
        >
          More
        </button>
      </div>
    </div>
  );
}
