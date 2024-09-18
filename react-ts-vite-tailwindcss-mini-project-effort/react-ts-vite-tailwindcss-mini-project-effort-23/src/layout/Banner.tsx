import React from "react";
import { BannerType } from "../types";

const Banner: React.FC<BannerType> = ({ title, desc }) => {
  return (
    <div className="bannerContent">
      <div className="container mx-auto">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Banner;
