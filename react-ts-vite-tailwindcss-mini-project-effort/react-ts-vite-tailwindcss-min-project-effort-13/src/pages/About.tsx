import React from "react";
import Banner from "../layout/Banner";
import Example from "../components/benefits/static-type-checking/1/Example";
import { sampleProduct } from "../constants/constants";
import EmptyInputValidation from "../components/repository/empty-input-validation/setup-component/2/Example";
import EqualHeight from "../components/repository/equal-height/1/Example";
import ScrollHorizontalWheel from "../components/repository/scrollpagehorizontalmousewheel/1/Example";

const About:React.FC = () => {

  // const handleClick =() => {
  //   alert('clicked')
  // }
  return (
    <div className="content">
      <Banner
        title="About"
        desc="Qui pariatur irure officia duis dolore dolor tempor dolore excepteur occaecat consectetur."
      />
      <div className="container mx-auto">
        <ScrollHorizontalWheel/>
       <Example product={sampleProduct}/>
       <EmptyInputValidation/>
       <EqualHeight/>
      </div>
    </div>
  );
};

export default About;
