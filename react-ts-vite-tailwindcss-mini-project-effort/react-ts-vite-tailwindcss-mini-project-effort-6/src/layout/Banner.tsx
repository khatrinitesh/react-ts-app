import React from "react";

const Banner: React.FC<BannerProps> = ({ title, desc }) => {
  return (
    <div className="bannersContent py-[50px] bg-cyan-400">
      <div className="container mx-auto">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Banner;
