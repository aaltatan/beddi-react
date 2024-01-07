import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import IconHover from "./IconHover";

export default function Navbar() {
  const links = [
    { title: "Home", path: "/" },
    { title: "Products", path: "products" },
    { title: "Categories", path: "categories" },
  ];

  const linksOutput = links.map((el, idx) => {
    return (
      <li
        key={idx}
        className="w-full cursor-pointer px-3 py-1 hover:underline max-md:py-3 max-md:shadow max-md:hover:bg-slate-200"
      >
        <NavLink to={el.path} className="block w-full">
          {el.title}
        </NavLink>
      </li>
    );
  });

  const navLinksHandler = () => {
    document.getElementById("nav-links").classList.toggle("flex");
    document.getElementById("nav-links").classList.toggle("hidden");
  };

  return (
    <header className="sticky left-0 top-0 z-10 w-full shadow-sm">
      <nav className="relative flex items-center p-2">
        <h1 className="uppercase md:text-2xl">Beddi Shop</h1>
        <IconHover>
          <HiMenu onClick={() => navLinksHandler()} />
        </IconHover>
        <ul
          className="ml-auto flex items-center justify-center max-md:absolute max-md:left-0 max-md:top-full max-md:w-full max-md:flex-col"
          id="nav-links"
        >
          {linksOutput}
        </ul>
      </nav>
    </header>
  );
}
