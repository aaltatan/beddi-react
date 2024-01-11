import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

export default function Products() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  let [status, setStatus] = useState(false);
  let [activePage, setActivePage] = useState(1);
  const LIMIT = 8;

  useEffect(() => {
    fetch("https://apiv2.tajir.store/web/stores/home/beddishop")
      .then((res) => res.json())
      .then((categoriesData) => {
        categoriesData = categoriesData.data.categories;
        categoriesData = categoriesData.filter(
          (category) => category.products_count > 0,
        );
        setCategories([{ id: 0, name: "الكل" }, ...categoriesData]);
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
        ? `https://apiv2.tajir.store/web/stores/beddishop/products?page=1&per_page=${
            activePage * LIMIT
          }`
        : `https://apiv2.tajir.store/web/stores/beddishop/products?page=1&per_page=${
            activePage * LIMIT
          }&category_id=${activeCategory}`;
    fetch(url)
      .then((res) => res.json())
      .then((products) => {
        products = products.data;
        setProducts(products);
        setStatus(true);
      });
  }, [activeCategory, activePage]);

  let output;
  if (status && products.length) {
    output = products.map((product, idx) => (
      <ProductCard key={idx} product={product} />
    ));
  } else {
    if (!products.length && !status) {
      output = [...Array(8).keys()].map((_, idx) => (
        <ProductCardSkeleton key={idx} />
      ));
    } else {
      output = <h1 className="font-light">There is no Products</h1>;
    }
  }

  return (
    <div className="grid grid-cols-aside gap-x-4 max-md:grid-cols-1">
      <aside>
        <div className="no-scrollbar sticky left-0 top-24 mb-4 overflow-x-scroll">
          <ul className="flex gap-2 text-xs md:grid md:grid-cols-2">
            {categoriesOutput}
          </ul>
        </div>
      </aside>
      <div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{output}</div>
        {status && products.length && products.length % LIMIT === 0 ? (
          <button
            className="mx-auto my-4 block bg-orange-600 px-4 py-2 text-white hover:bg-orange-700"
            onClick={() => setActivePage(++activePage)}
          >
            Load more
          </button>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}
