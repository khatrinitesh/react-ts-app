import React from 'react';

const Banner:React.FC<BannerProps> = ({title,description,bannerStyle}) => {
  return (
    <div className={`${bannerStyle} py-[50px] bg-red-400 bannerContent`}>
      <div className="container mx-auto">
      <h3>{title}</h3>
      <p>{description}</p>
      </div>
    </div>
  );
}

export default Banner;
