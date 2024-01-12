import { Link } from "react-router-dom";
import PriceSpan from "./PriceSpan";

export default function ProductCard(props) {
  const { product } = props;
  return (
    <Link to={"/products/" + product.id}>
      <div className="rounded-m group/x overflow-hidden shadow-md">
        <div className="relative aspect-square overflow-hidden">
          <span className="absolute right-0 top-0 z-10 m-2">
            <PriceSpan text={product.price.toLocaleString()} />
          </span>
          <img
            loading="lazy"
            className="absolute left-0 top-0 block h-full w-full object-cover duration-300 group-hover/x:opacity-0 "
            src={product.image}
            alt={product.name.trim()}
          />
          <img
            className="absolute left-0 top-0 block h-full w-full object-cover opacity-0 duration-300 group-hover/x:opacity-100"
            src={product.attachments.at(-1).path}
            alt={product.name.trim()}
          />
        </div>
        <p
          className="m-2 truncate text-end align-middle text-sm font-light md:text-base"
          title={product.name}
        >
          {product.name}
        </p>
      </div>
    </Link>
  );
}
