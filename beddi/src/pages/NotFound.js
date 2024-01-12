import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound(props) {
  const { header, message } = props;

  useEffect(() => {
    document.title = "Page not found";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <main className="grid min-h-full place-items-center bg-inherit px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-orange-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          {header}
        </h1>
        <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300">
          {message}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 gap-y-2 max-md:flex-wrap">
          <Link
            to="/"
            className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
