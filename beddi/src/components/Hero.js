import Social from "./Social";
import { DataContext } from "../Context/DataProvider";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function Hero() {
  const data = useContext(DataContext);

  let criteria = Boolean(Object.keys(data).length);

  let storeInfo = criteria && data.store;

  const socialLinks =
    criteria &&
    Object.entries(storeInfo.social_media).map((socialLink, idx) => {
      return (
        <span
          className="group/social-link duration-150 hover:-translate-y-2"
          key={idx}
        >
          <span>
            <Link
              className="block py-2 lg:py-5"
              target="_blank"
              to={socialLink.at(-1)}
              title={socialLink.at(0).toUpperCase()}
            >
              <Social icon={socialLink.at(0)} />
            </Link>
          </span>
        </span>
      );
    });

  return (
    <>
      {criteria ? (
        <div className="relative">
          <img
            src={storeInfo.cover}
            className="mx-auto block aspect-auto max-h-96 w-full object-cover"
            alt={storeInfo.description}
          />
          <div className="absolute bottom-0 left-0 mr-2 flex items-center gap-x-2 p-1 lg:p-3">
            {socialLinks}
          </div>
        </div>
      ) : (
        <div className="mx-auto aspect-video h-96 w-full animate-pulse bg-gray-400"></div>
      )}
    </>
  );
}
