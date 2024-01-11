import { useEffect, useState } from "react";

export default function SearchBar(props) {
  useEffect(() => {
    document.getElementById("search").focus();
  });

  let [results, setResults] = useState([]);
  let [keyword, setKeyword] = useState([]);

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

  let resultsOutput =
    results.length &&
    results.map((result) => {
      return <li key={result.id}>{result.name}</li>;
    });

  return (
    <div className="search-bar fixed -top-16 left-0 z-30 min-h-screen w-screen bg-white opacity-0">
      {props.children}
      <div
        style={{ maxWidth: "min(800px, 100%)" }}
        className="mx-auto my-40 flex px-4"
      >
        <input
          type="text"
          className="w-full px-8 py-4 text-2xl caret-orange-600 shadow-md outline-none duration-150 hover:shadow-lg focus:shadow-lg "
          placeholder="Search for your product"
          id="search"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          className="bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
          onClick={(e) => {
            searchHandler(keyword);
          }}
        >
          Search
        </button>
      </div>
      <ul>{resultsOutput}</ul>
    </div>
  );
}
