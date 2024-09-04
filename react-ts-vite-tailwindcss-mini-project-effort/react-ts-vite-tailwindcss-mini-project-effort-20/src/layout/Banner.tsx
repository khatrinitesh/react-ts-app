import React from "react";

const Banner: React.FC<BannerProps> = ({ title, desc }) => {
  return (
    <div className="bannerContent py-5 bg-blue-400">
      <div className="container mx-auto">
        <h1 className="font-bold text-[30px]">{title}</h1>
        <p className="font-medium text-[18px]">{desc}</p>
      </div>
    </div>
  );
};

export default Banner;
