import { useEffect } from "react";
import Slider from "../components/Slider";
import Heading from "../components/Heading";
import Categories from "../components/Categories";

export default function HomePage() {
  useEffect(() => {
    document.title = "Beddi Shop";
  });

  return (
    <>
      <Slider />
      <section className="mx-auto text-balance px-2">
        <Heading title="Categories" />
        <Categories />
      </section>
      <section className="mx-auto text-balance px-2">
        <Heading title="Products" />
      </section>
    </>
  );
}
