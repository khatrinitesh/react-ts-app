import React, { useState } from "react";
import Accordion from "../components/Accordion";
import Timeline from "../components/Timeline";
import CustomCarousel from "../components/Carousel";
import BtnGrp from "../components/BtnGrp";
import Preloader from "../components/Preloader";
import PricingTable from "../components/PricingTable";
import HorizontalScroll from "../components/HorizontalScroll";
import { BASE_STRING, DEFAULT_INDEX, FIRST_NAME, LAST_NAME, NAME_TO_CHECK, NAME_TO_FIND, SAMPLE_ITEMS, SAMPLE_TEXT, SAMPLE_TEXT1, SUFFIX, USERS, USERS1 } from "../constants/constants";
import CharAt from "../components/CharAt";
import Concat from "../components/Concat";
import EndsWith from "../components/EndsWith";
import IncludesComp from "../components/IncludesComp";
import IndexOfExample from "../components/IndexOfExample";
import LengthExample from "../components/Length";
import AnimatedComp from "../components/Animated/Animated";

const Home: React.FC = () => {
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="content">
        <div className="container mx-auto px-[1rem]">
          <AnimatedComp/>
          <LengthExample text={SAMPLE_TEXT1} items={SAMPLE_ITEMS}/>
          <IndexOfExample users={USERS1} nameToFind={NAME_TO_FIND} />;
          <IncludesComp users={USERS} nameToCheck={NAME_TO_CHECK} />;
          <EndsWith baseString={BASE_STRING} suffix={SUFFIX}/>
          <Concat str1={FIRST_NAME} str2={LAST_NAME}/>
          <CharAt text={SAMPLE_TEXT} index={DEFAULT_INDEX}/>
          <HorizontalScroll/>
          <PricingTable/>
          <Preloader/>
          <BtnGrp onSelect={(val) => console.log("Selected:", val)} />
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
