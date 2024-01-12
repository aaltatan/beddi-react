import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar(props) {
  useEffect(() => {
    document.getElementById("search").focus();
  });

  let [results, setResults] = useState([]);
  let handler;

  const searchHandler = async (keyword) => {
    let params = new URLSearchParams({
      page: 1,
      per_page: 10,
      search: keyword.trim(),
    }).toString();

    const url =
      "https://div1tsz58em9z.cloudfront.net/web/stores/beddishop/products";

    const response = await fetch(`${url}?${params}`);
    let results = await response.json();
    setResults(results.data);
  };

  let resultsOutput = results.length ? (
    <ul className="orient max-h-56 overflow-auto shadow-md [&>*:nth-child(odd)]:bg-slate-50">
      {results.map((result, idx) => {
        return (
          <li
            key={result.id}
            className="p-3 text-sm hover:text-orange-600 lg:text-base"
          >
            <Link
              onClick={() => props.func(false)}
              to={"products/" + result.id}
            >
              <div className="flex items-center gap-x-4 ">
                <p className="flex-1 text-end">{result.name}</p>
                <img
                  className="block aspect-square w-12 rounded-full object-cover"
                  src={result.image}
                  alt={result.description}
                />
                <span>{idx + 1}</span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  ) : (
    <span></span>
  );

  return (
    <div className="search-bar fixed -top-16 left-0 z-30 min-h-full w-screen bg-white opacity-0">
      {props.children}
      <div
        style={{ maxWidth: "min(800px, 100%)" }}
        className="mx-auto my-14 px-8 lg:my-20 lg:px-12"
      >
        <input
          type="text"
          className="mb-4 w-full px-4 py-2 caret-orange-600 shadow-md outline-none duration-150 hover:shadow-lg focus:shadow-lg lg:px-8 lg:py-4 lg:text-2xl "
          placeholder="Search for your product"
          id="search"
          onKeyUp={(e) => {
            clearTimeout(handler);
            handler = setTimeout(() => {
              e.target.value && searchHandler(e.target.value);
            }, 1_000);
          }}
        />
        {resultsOutput}
      </div>
    </div>
  );
}
