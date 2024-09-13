import React from "react";
import { BannerType } from "../types";

const Banner: React.FC<BannerType> = ({ className, title, desc }) => {
  return (
    <div className={`${className} bannerConten py-[50px] bg-purple-400`}>
      <div className="container mx-auto">
        <h3 className="font-bold text-[32px]">{title}</h3>
        <p className="font-semibold text-[18px]">{desc}</p>
      </div>
    </div>
  );
};

export default Banner;
