import React from "react";
import { BannerProps } from "../interface";

const Banner:React.FC<BannerProps> = ({ children, bannerStyle }) => {
  return (
    <>
      <div className={`${bannerStyle} `}>
        {children}
      </div>
    </>
  );
};

export default Banner;
