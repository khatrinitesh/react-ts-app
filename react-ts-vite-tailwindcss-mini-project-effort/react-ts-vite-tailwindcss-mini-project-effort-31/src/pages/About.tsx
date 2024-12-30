import React from "react";
import Banner from "../components/Banner";
import IconBar from "../components/IconBar";
import Accordion from "../components/Accordion";
import { sections } from "../constants/accordionData";
import { Tab, Tabs } from "../components/Tabs";

const About: React.FC = () => {
  return (
    <div className="content">
      <Banner
        title="About"
        description="Qui aliquip ut ut amet nostrud adipisicing laboris duis ex aliquip."
      />
      <h1 className="text-center text-3xl my-4">Zustand Tabs Example</h1>

      {/* Tabs Component */}
      <Tabs>
        <Tab id="tab1" label="Tab 1">
          <p>This is the content of Tab 1.</p>
        </Tab>
        <Tab id="tab2" label="Tab 2">
          <p>This is the content of Tab 2.</p>
        </Tab>
        <Tabs id="tab3" label="Tab 3">
          <p>This is the content of Tab 3.</p>
        </Tabs>
      </Tabs>
      <h1 className="text-center text-3xl my-4">Zustand Accordion</h1>
      <Accordion sections={sections} />
      <IconBar />
    </div>
  );
};

export default About;
