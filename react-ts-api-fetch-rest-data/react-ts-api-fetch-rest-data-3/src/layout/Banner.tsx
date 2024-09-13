import React from "react";

const Banner: React.FC<BannerTypes> = ({ title, description }) => {
  return (
    <div className="bannerContent bg-blue-200 py-10">
      <div className="container px-[1rem] mx-auto">
        <h3 className="title font-bold text-[32px]">{title}</h3>
        <p className="description font-semibold text-[18px]">{description}</p>
      </div>
    </div>
  );
};

export default Banner;
