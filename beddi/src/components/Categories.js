import Category from "./Category";
import { useRecoilState } from "recoil";
import { ProductState } from "../state/atoms/ProductsState";
import { DataState } from "../state/atoms/DataState";

export default function Categories() {
  const data = useRecoilState(DataState)[0];
  let criteria = Boolean(Object.keys(data).length);
  const categories =
    criteria &&
    data.categories.filter((category) => category.products_count > 2);
  const products = useRecoilState(ProductState)[0];

  let categoriesOutput =
    criteria &&
    categories.map((category) => {
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

  const skeletons = [...Array(3).keys()].map((_, idx) => (
    <div
      key={idx}
      className="aspect-video h-32 w-full animate-pulse bg-gray-400 bg-gradient-to-tr"
    ></div>
  ));

  categoriesOutput =
    criteria && categoriesOutput.filter((category) => category.image);
  let categoriesOutputs =
    criteria &&
    categoriesOutput.map((category, idx) => (
      <Category key={idx} category={category} />
    ));

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
      {categoriesOutputs.length ? categoriesOutputs : skeletons}
    </div>
  );
}
