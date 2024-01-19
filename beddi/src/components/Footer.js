import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Social from "./Social";
import { DataState } from "../state/atoms/DataState";
import { useRecoilState } from "recoil";

export default function Footer() {
  const data = useRecoilState(DataState)[0];

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

  const phone =
    criteria &&
    storeInfo.user.phone.replace(
      /(\d{3})(\d{3})(\d{3})(\d{3})/g,
      "$1 $2 $3 $4",
    );

  return (
    <>
      {criteria && (
        <footer className=" mt-8 bg-slate-800 pt-4 text-white md:p-8">
          <div className="flex flex-col items-center justify-center gap-y-1 ">
            <img
              className="block aspect-square h-32 rounded-full"
              src={storeInfo.logo}
              alt=""
            />
            <h1 className="text-3xl font-light tracking-tighter">
              {storeInfo.name}
            </h1>
            <p className="text-sm tracking-tighter">{storeInfo.description}</p>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-end">
            <p>{storeInfo.user.address}</p>
            <FaLocationDot />
          </div>
          <div className="mb-4 flex items-center justify-center gap-2 text-end">
            <p>
              <Link to={`tel:${storeInfo.user.phone}`}>{phone}</Link>
            </p>
            <FaPhoneFlip />
          </div>
          <div className="flex items-center justify-center gap-2">
            {socialLinks}
          </div>
          <p className="py-2 text-center text-sm font-light">
            Developed with 💙 by{" "}
            <span className="text-orange-600 hover:underline">
              <Link target="_blank" to="https://fb.com/@abdtt">
                Abdullah Altatan
              </Link>
            </span>
          </p>
        </footer>
      )}
    </>
  );
}
