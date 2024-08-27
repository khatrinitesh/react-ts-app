import React from "react";
import { BannerProps } from "../interface";

const Banner: React.FC<BannerProps> = ({ title, desc }) => {
  return (
    <div className="bannerContent py-[50px] bg-blue-400">
      <div className="container mx-auto">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Banner;
