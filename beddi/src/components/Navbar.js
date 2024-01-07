import { NavLink } from "react-router-dom";
import { HiMenu, HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";
import IconHover from "./IconHover";
import { useState } from "react";

export default function Navbar() {
  const [mode, setMode] = useState("light");

  const links = [
    { title: "Home", path: "/" },
    { title: "Products", path: "products" },
    { title: "Categories", path: "categories" },
  ];

  const linksOutput = links.map((el, idx) => {
    return (
      <li
        key={idx}
        className="w-full cursor-pointer bg-white px-3 py-1 hover:underline max-md:py-3 max-md:hover:bg-slate-200 dark:bg-slate-800 dark:max-md:hover:bg-slate-900"
      >
        <NavLink
          to={el.path}
          className="block w-full"
          onClick={() =>
            document.getElementById("nav-links").classList.add("max-md:hidden")
          }
        >
          {el.title}
        </NavLink>
      </li>
    );
  });

  const navLinksHandler = () => {
    document.getElementById("nav-links").classList.toggle("max-md:hidden");
  };

  const modeHandler = () => {
    if (mode === "light") {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="sticky left-0 top-0 z-10 w-full select-none shadow-md">
      <nav className="relative flex items-center gap-x-4 bg-white p-3 md:p-5 dark:bg-slate-800">
        <h1 className="uppercase md:text-2xl">Beddi Shop</h1>
        <div className="ms-auto md:hidden" onClick={() => navLinksHandler()}>
          <IconHover>
            <HiMenu />
          </IconHover>
        </div>
        <ul
          className="ml-auto items-center justify-center max-md:absolute max-md:left-0 max-md:top-full max-md:hidden max-md:w-full max-md:flex-col max-md:shadow-lg md:flex"
          id="nav-links"
        >
          {linksOutput}
        </ul>
        <div onClick={() => modeHandler()} title="Switch Mode">
          <IconHover>{mode === "dark" ? <HiSun /> : <HiMoon />}</IconHover>
        </div>
      </nav>
    </header>
  );
}
