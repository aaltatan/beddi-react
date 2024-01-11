export default function ProductCard() {
  return (
    <div className="rounded-m group/x animate-pulse overflow-hidden shadow-md">
      <div className="aspect-square w-full overflow-hidden bg-gray-400"></div>
      <div className="flex items-center justify-between bg-gray-700 p-2">
        <span className="font-light"></span>
        <span className="bg-gray-600 px-2 py-1 text-white"></span>
      </div>
    </div>
  );
}
