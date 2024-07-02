import React from "react";
// INTERFACE
import { BannerProps } from "../interface/interface";

const Banner: React.FC<BannerProps> = ({ bannerStyle, title, desc }) => {
  return (
    <div className={`${bannerStyle} bannerContent py-10 bg-gray-300`}>
      <div className="container px-4 mx-auto">
        <h3 className="font-bold text-[24px]">{title}</h3>
        <p className="text-[16px]">{desc}</p>
      </div>
    </div>
  );
};

export default Banner;
