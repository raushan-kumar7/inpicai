import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <img src={assets.inpicai} alt="InPicAI Logo" width={150} />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright © 2024 InPicAI. All rights reserved.
        <span className="block mt-2">
          Developed by{" "}
          <a
            href="https://raushan-kumar.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Raushan Kumar
          </a>
        </span>
      </p>

      <div className="flex gap-2.5">
        <a
          href="https://www.facebook.com/kumar.raushan19"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 hover:bg-blue-600 rounded-full transition-transform duration-300 cursor-pointer"
        >
          <img
            src={assets.facebook_icon}
            alt="Facebook"
            width={35}
            className="rounded-full"
          />
        </a>
        <a
          href="https://x.com/kumar_raushan19"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 hover:bg-blue-600 rounded-full transition-transform duration-300 cursor-pointer"
        >
          <img
            src={assets.twitter_icon}
            alt="Twitter"
            width={35}
            className="rounded-full"
          />
        </a>
        <a
          href="https://www.instagram.com/kumar.raushan19"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 hover:bg-blue-600 rounded-full transition-transform duration-300 cursor-pointer"
        >
          <img
            src={assets.instagram_icon}
            alt="Instagram"
            width={35}
            className="rounded-full"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
