import { Link } from "react-router-dom";
import PriceSpan from "./PriceSpan";
import { DataState } from "../state/atoms/DataState";
import { useRecoilState } from "recoil";

export default function Slider() {
  const data = useRecoilState(DataState)[0];
  let criteria = Object.keys(data).length;
  let products = [];
  let newProducts;
  if (criteria) {
    products = data.products;
    newProducts = products.slice(0, 5);
  }

  const handelClick = (idx) => {
    const images = document.querySelectorAll(`.slider-image`);
    images.forEach((el, index) => {
      el.classList.remove("w-4/5");
      idx === index && el.classList.add("w-4/5");
    });
  };

  const skeleton = (
    <div className="h-hero w-full animate-pulse bg-gray-400 bg-gradient-to-t max-md:h-hero-sm"></div>
  );

  const productsOutput = products.length
    ? newProducts.map((product, idx) => {
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
                <PriceSpan text={product.price.toLocaleString()} />
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
      })
    : skeleton;

  return (
    <div className="slider-images-container flex items-center">
      {productsOutput}
    </div>
  );
}
