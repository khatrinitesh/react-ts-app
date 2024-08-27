import React from "react";
import { BannerProps } from "../interface";

const Banner: React.FC<BannerProps> = ({ title, desc }) => {
  return (
    <div className="bannerContent">
      <div className="container mx-auto">
        <h2 className="text-red-500 underline uppercase  font-bold text-[24px]">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Banner;
