import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Heading from "../../components/Heading";
import ProductCard from "../../components/ProductCard";
import ProductCardSkeleton from "../../components/ProductCardSkeleton";
import PriceSpan from "../../components/PriceSpan";

export const productLoader = async ({ params }) => {
  const productId = params.productId;
  const response = await fetch(
    "https://div1tsz58em9z.cloudfront.net/web/products/" + productId,
    { headers: { Referer: "http://beddishop.surge.sh" } },
  );
  if (!response.ok) {
    throw Error("Sorry, we cloud not find the product");
  }
  return response.json();
};

export default function ProductPage() {
  const product = useLoaderData().data;
  let [activeImage, setActiveImage] = useState(0);
  const [sameCategoryProducts, setSameCategoryProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [product]);

  useEffect(() => {
    let url =
      product.category_id === 0
        ? `https://apiv2.tajir.store/web/stores/beddishop/products?page=1&per_page=8`
        : `https://apiv2.tajir.store/web/stores/beddishop/products?page=1&per_page=8&category_id=${product.category_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((products) => {
        products = products.data;
        setSameCategoryProducts(products);
        setLoaded(true);
      });
  }, []);

  const attachments =
    product &&
    product.attachments.map((attachment, idx) => {
      return (
        <div className="aspect-square max-w-32" key={attachment.id}>
          <img
            className={`block w-full cursor-pointer border-solid border-orange-600 object-cover ${
              activeImage === idx && "cursor-default border-2"
            }`}
            onClick={() => setActiveImage(idx)}
            src={attachment.path}
            alt={product.description}
          />
        </div>
      );
    });

  return (
    <>
      <div className="grid gap-x-2 gap-y-8 px-8 pt-4 lg:grid-cols-3">
        <div className="order-2 lg:col-span-2 lg:grid-cols-subgrid">
          <img
            className="block aspect-video w-full object-cover"
            src={product.attachments[activeImage].path}
            alt={product.description}
          />
          <div className="mt-2 flex items-center gap-2">{attachments}</div>
        </div>
        <div className="relative order-1 lg:order-2">
          <div className="sticky left-0 top-32 flex flex-col items-end">
            <PriceSpan text={product.price.toLocaleString()} />
            <h1
              dir="rtl"
              className="my-6 text-balance text-end text-3xl tracking-tight lg:my-12"
            >
              {product.name}
            </h1>
            <p className="text-balance text-end">{product.description}</p>
          </div>
        </div>
      </div>
      <div className="px-8">
        <Heading title="From the same category" />
        <div
          className="mx-auto grid grid-cols-2 gap-4 md:grid-cols-4"
          style={{ width: "min(1400px, 100%)" }}
        >
          {sameCategoryProducts.length
            ? sameCategoryProducts.map((p) => (
                <div key={p.id}>
                  <ProductCard product={p} />
                </div>
              ))
            : loaded &&
              Boolean(sameCategoryProducts.length) &&
              [...Array(4).keys()].map((_, idx) => (
                <div key={idx}>
                  <ProductCardSkeleton />
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
