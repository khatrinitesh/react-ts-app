import React from "react";
import { BannerProps } from "../../types";

const Banner: React.FC<BannerProps> = ({ title, description }) => {
  return (
    <div className="bannerContent py-10 bg-slate-400">
      <div className="container mx-auto">
        <h3 className="font-bold text-[32px]">{title}</h3>
        <p className="text-[16px] font-semibold">{description}</p>
      </div>
    </div>
  );
};

export default Banner;
