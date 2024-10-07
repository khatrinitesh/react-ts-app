import React from "react";
import { BannerProps } from "./../types/index.d";

const Banner: React.FC<BannerProps> = ({ title, description }) => {
  return (
    <div className="bannerContent py-20 bg-cyan-300">
      <div className="container mx-auto">
        <h3 className="text-[32px] font-bold">{title}</h3>
        <p className="text-[18px] font-semibold">{description}</p>
      </div>
    </div>
  );
};

export default Banner;
