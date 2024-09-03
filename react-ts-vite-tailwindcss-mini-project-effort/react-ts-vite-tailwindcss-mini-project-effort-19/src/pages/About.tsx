import React from "react";
import Banner from "../layout/Banner";

const About: React.FC = () => {
  return (
    <div className="content">
      <Banner
        bannerTitle="About"
        bannerDesc="Nostrud magna dolor dolor anim deserunt."
      />
      <div className="container mx-auto">About</div>
    </div>
  );
};

export default About;
