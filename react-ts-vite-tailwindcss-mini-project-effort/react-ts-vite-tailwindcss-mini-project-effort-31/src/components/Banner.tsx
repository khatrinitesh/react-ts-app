import React from "react";
import { BannerProps } from "../interface";

const Banner: React.FC<BannerProps> = ({ title, description, bannerStyle }) => {
  return (
    <div className={`${bannerStyle} bannerContent py-[50px] bg-orange-300`}>
      <div className="container mx-auto">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Banner;
