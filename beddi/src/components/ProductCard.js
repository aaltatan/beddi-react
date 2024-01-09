export default function ProductCard(props) {
  const { product } = props;
  return (
    <div className="fade rounded-m group/x overflow-hidden shadow-md">
      <div className="overflow-hidden">
        <img
          className="block aspect-square object-cover group-hover/x:hidden "
          src={product.image}
          alt={product.name.trim()}
        />
        <img
          className="hidden aspect-square object-cover group-hover/x:block"
          src={product.attachments.at(-1).path}
          alt={product.name.trim()}
        />
      </div>
      <div className="flex items-center justify-between p-2">
        <span className="font-light">{product.name}</span>
        <span className="bg-orange-600 px-2 py-1 text-white">
          {product.price.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
