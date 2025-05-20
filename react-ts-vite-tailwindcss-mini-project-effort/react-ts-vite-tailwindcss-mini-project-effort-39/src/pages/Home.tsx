import React, { useState } from "react";
import Accordion from "../components/Accordion";
import Timeline from "../components/Timeline";
import CustomCarousel from "../components/Carousel";
import AutoCompleteComponent from "../components/AutoComplete";
import AvatarImg from "../components/AvatarImg";
import { AVATARS, CARD_DATA } from "../constants/constants";
import InfoCard from "../components/InfoCard";
import SpotLightCard from "../components/SpotLightCard";
import CenterTables from "../components/CenterTables";

const Home: React.FC = () => {
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="content">
        <div className="container mx-auto px-[1rem]">
          <div className="min-h-screen bg-[#e0e5ec] flex items-center justify-center gap-8 flex-wrap p-8">
            <CenterTables/>
            {CARD_DATA.map((card) => (
        <SpotLightCard key={card.id} item={card} />
      ))}
             {CARD_DATA.map((card) => (
        <InfoCard key={card.id} item={card} />
      ))}

      <br/>
      {AVATARS.map((avatar) => (
        <AvatarImg key={avatar.id} avatar={avatar} />
      ))}
    </div>
          <AutoCompleteComponent/>
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
