import { Link, NavLink } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { HiMagnifyingGlass } from "react-icons/hi2";
import IconHover from "./IconHover";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";

export default function Navbar() {
  const links = [
    { title: "Home", path: "/" },
    { title: "Products", path: "products" },
    { title: "Categories", path: "categories" },
  ];

  const [isActiveSearch, setIsActiveSearch] = useState(false);

  const linksOutput = links.map((el, idx) => {
    return (
      <li key={idx} className="w-full cursor-pointer ">
        <NavLink
          to={el.path}
          className="relative block w-full px-1 py-2 text-center max-md:p-4 "
          onClick={() =>
            document.getElementById("nav-links").classList.add("max-md:hidden")
          }
        >
          <span className="animated-nav-link">
            <span>{el.title}</span>
            <span>{el.title}</span>
          </span>
        </NavLink>
      </li>
    );
  });

  const navLinksHandler = () => {
    document.getElementById("nav-links").classList.toggle("max-md:hidden");
  };

  return (
    <header className="sticky left-0 top-0 z-50 w-full select-none shadow-md">
      {isActiveSearch && (
        <SearchBar func={setIsActiveSearch}>
          <span
            className="absolute right-0 top-0 m-6 cursor-pointer text-2xl lg:m-10"
            onClick={() => setIsActiveSearch(false)}
          >
            <IconHover>
              <HiMiniXMark />
            </IconHover>
          </span>
        </SearchBar>
      )}
      <nav className="relative flex items-center gap-x-4 bg-white p-3 dark:bg-slate-800 md:p-5">
        <Link to="/">
          <h1 className="uppercase md:text-2xl">Beddi Shop</h1>
        </Link>
        <ul
          className="mx-auto items-center justify-center gap-x-5 bg-white max-md:absolute max-md:left-0 max-md:top-full max-md:hidden max-md:w-full max-md:flex-col max-md:shadow-lg md:flex"
          id="nav-links"
        >
          {linksOutput}
        </ul>
        <div className="ms-auto flex max-w-fit items-center gap-x-4">
          <div onClick={() => setIsActiveSearch(!isActiveSearch)}>
            <IconHover>
              <HiMagnifyingGlass className="text-xl" />
            </IconHover>
          </div>
          <div className="md:hidden" onClick={() => navLinksHandler()}>
            <IconHover>
              <HiOutlineBars3 className="text-xl" />
            </IconHover>
          </div>
        </div>
      </nav>
    </header>
  );
}
