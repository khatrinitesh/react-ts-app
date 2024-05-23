import React from 'react';

interface BannerProps{
    Bastyle: React.CSSProperties; // Style object for the banner
    title:string;
    desc:string;
}

const Banner:React.FC<BannerProps> = ({ Bastyle, title, desc }) => {
  
  return (
    <div>
      <h3 style={Bastyle}>{title}</h3>
      <p className={desc}>{desc}</p>
    </div>
  );
};

export default Banner