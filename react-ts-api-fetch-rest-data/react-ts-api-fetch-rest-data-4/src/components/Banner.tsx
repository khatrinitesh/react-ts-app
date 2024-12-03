import React from "react";
import { BannerProps } from "../interface";

const Banner: React.FC<BannerProps> = ({ bannerStyle, title, description }) => {
  return (
    <div className={`${bannerStyle} bannerContent bg-orange-500 py-[50px]`}>
      <div className="container mx-auto">
        <h3 className="font-bold text-[24px]">{title}</h3>
        <p className="font-bold text-[18px]">{description}</p>
      </div>
    </div>
  );
};

export default Banner;
