import { Link } from "react-router-dom";

export default function Category(props) {
  const { category } = props;
  return (
    <div
      key={category.id}
      className="relative before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-trans"
    >
      <img
        className="block aspect-video object-cover"
        src={category.image}
        alt={category.name}
      />
      <Link to={"categories/" + category.id}>
        <span className="absolute left-1/2 top-1/2 isolate -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 text-center shadow-md hover:underline max-sm:px-2 max-sm:py-1 max-sm:text-sm">
          {category.name}
        </span>
      </Link>
    </div>
  );
}
