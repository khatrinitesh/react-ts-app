import React, { useState } from "react";
import Accordion from "../components/Accordion";
import Timeline from "../components/Timeline";
import CustomCarousel from "../components/Carousel";

const Home: React.FC = () => {
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="content">
        <div className="container mx-auto px-[1rem]">
          <CustomCarousel/>
          <Timeline/>
        <Accordion/>
          {toggle ? <Example1 /> : <Example2 />}
        </div>
      </div>
    </>
  );
};

export default Home;

function Example1() {
  return <>Example 1</>;
}
function Example2() {
  return <>Example 2</>;
}
