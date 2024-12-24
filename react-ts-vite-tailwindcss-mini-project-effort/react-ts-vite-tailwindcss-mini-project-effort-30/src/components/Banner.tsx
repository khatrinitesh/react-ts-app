import React from "react";
import { BannerProps } from "../interface";

const Banner: React.FC<BannerProps> = ({ title, description, bannerStyle }) => {
  return (
    <div className={`${bannerStyle} bannerContent py-[50px] bg-blue-400`}>
      <div className="container mx-auto">
        <h2 className="bannerTitle text-[40px] text-white font-bold">{title}</h2>
        <p className="bannerDesc text-white text-[18px]">{description}</p>
      </div>
    </div>
  );
};

export default Banner;
