import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function Slider() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((products) => {
        products.length = 5;
        setProducts(products);
      });
  }, []);

  const handelClick = (idx) => {
    const images = document.querySelectorAll(`.slider-image`);
    images.forEach((el, index) => {
      el.classList.remove("w-4/5");
      idx === index && el.classList.add("w-4/5");
    });
  };

  const productsOutput = products.map((product, idx) => {
    return (
      <div
        className="slider-image h-hero w-1/5 cursor-pointer  duration-150 max-md:h-hero-sm"
        key={product.id}
        onClick={() => handelClick(idx)}
      >
        <img
          className="block h-full w-full border-4 border-white object-cover dark:border-slate-800"
          src={product.image}
          alt={product.description}
        />
        <div className="slider-image__body text-white">
          <div className="flex items-center justify-between gap-y-2 text-balance text-center max-md:flex-col max-md:justify-center">
            <span className="rounded-md bg-orange-600 px-4 py-2 font-bold max-md:px-2 max-md:py-1 max-md:text-sm">
              {product.price.toLocaleString()}
            </span>
            <h1 className="text-xl max-md:text-sm">
              <Link
                to={"products/" + product.id}
                className="underline hover:text-orange-500"
              >
                {product.name}
              </Link>
            </h1>
          </div>
          <p className="text-balance py-4 text-center text-sm">
            {product.description}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="slider-images-container flex items-center">
      {productsOutput}
    </div>
  );
}
