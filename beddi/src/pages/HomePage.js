import { useEffect } from "react";
import Slider from "../components/Slider";
import Heading from "../components/Heading";
export default function HomePage() {
  useEffect(() => {
    document.title = "Beddi Shop";
  });

  return (
    <>
      <Slider />
      <Heading title="Categories" />
    </>
  );
}
