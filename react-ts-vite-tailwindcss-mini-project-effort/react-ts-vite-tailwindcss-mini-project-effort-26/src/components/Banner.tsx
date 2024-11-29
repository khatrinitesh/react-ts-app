import React from "react";
import { BannerProps } from "./../interface/index";

const Banner: React.FC<BannerProps> = ({ title, description, bannerStyle }) => {
  return (
    <>
      <div className={`${bannerStyle} bannerContent py-[50px] bg-blue-600`}>
        <div className="container mx-auto gap-[10px] grid">
          <h3 className="text-white font-bold text-[32px]">{title}</h3>
          <p className="text-white text-[18px]">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Banner;
