import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Social(props) {
  const icons = {
    facebook: (
      <FaFacebook className="text-xl group-hover/social-link:text-[#4267B2] lg:text-3xl" />
    ),
    instagram: (
      <AiFillInstagram className="text-xl group-hover/social-link:text-[#cd486b] lg:text-3xl" />
    ),
    telegram: (
      <FaTelegram className="text-xl group-hover/social-link:text-[#229ED9] lg:text-3xl" />
    ),
    whatsapp: (
      <IoLogoWhatsapp className="text-xl group-hover/social-link:text-[#25D366] lg:text-3xl" />
    ),
  };

  return icons[props.icon];
}
