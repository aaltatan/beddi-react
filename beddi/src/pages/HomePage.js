import { useEffect } from "react";
import Slider from "../components/Slider";
import Heading from "../components/Heading";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Hero from "../components/Hero";

export default function HomePage() {
  useEffect(() => {
    document.title = "Beddi Shop";
  });

  return (
    <>
      <section className="mx-auto text-balance">
        <Hero />
        <Heading title="Last Arrivals" />
        <Slider />
      </section>
      <section className="mx-auto text-balance px-2">
        <Heading title="Categories" />
        <Categories />
      </section>
      <section className="mx-auto text-balance px-2">
        <Heading title="Products" />
        <Products />
      </section>
    </>
  );
}
