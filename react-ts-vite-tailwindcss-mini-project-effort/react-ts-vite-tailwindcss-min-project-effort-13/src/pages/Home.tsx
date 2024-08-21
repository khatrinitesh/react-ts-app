import React from "react";
import Banner from "../layout/Banner";

const Home:React.FC = () => {
  return (
    <div className="content">
      <Banner
        title="Home"
        desc="Qui pariatur irure officia duis dolore dolor tempor dolore excepteur occaecat consectetur."
      />
      <div className="container mx-auto"></div>
    </div>
  );
};

export default Home;
