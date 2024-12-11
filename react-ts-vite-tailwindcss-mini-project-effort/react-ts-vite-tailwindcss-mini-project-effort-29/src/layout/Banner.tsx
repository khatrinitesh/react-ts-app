import React from "react";

const Banner: React.FC<BannerProps> = ({ title, description, bannerStyle }) => {
  return (
    <div className={`${bannerStyle} bannerContent py-[50px]`}>
      <div className="container mx-auto">
        <h2 className="font-bold text-[32px]">{title}</h2>
        <p className="text-[18px] font-semibold">{description}</p>
      </div>
    </div>
  );
};

export default Banner;
