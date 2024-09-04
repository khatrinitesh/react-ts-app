import React from "react";
import Banner from "../layout/Banner";
import Carousel from "../components/Carousel";
import CascadeSlider from "../components/Carousel";
import { carouselItems } from './../constants/constants';

const About: React.FC = () => {
  return (
    <div className="content">
      <Banner
        title="About"
        desc="Tempor Lorem aliquip cillum ad qui id eu fugiat laborum est amet anim sit occaecat. Nisi proident ipsum reprehenderit magna consequat elit est et deserunt id cupidatat. Ipsum Lorem enim qui reprehenderit aute aute nisi velit excepteur adipisicing minim nisi laborum. Sit labore excepteur ullamco nulla nostrud.

In ea tempor occaecat consequat incididunt veniam consectetur commodo veniam dolore. Veniam ex magna laboris occaecat ad nisi cupidatat dolor aliqua. Proident anim deserunt exercitation exercitation incididunt nostrud nostrud aliquip adipisicing."
      />
      <div className="container mx-auto px-1">
      <CascadeSlider slides={carouselItems} />
      </div>
    </div>
  );
};

export default About;
