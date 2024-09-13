import React from "react";
// layout
import Banner from "./../layout/Banner";
// library
import { useNavigate } from "react-router-dom";
// component
import BtnPrimary from "./../component/BtnPrimary";

const Error = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="content h-[100dvh] gap-5 bg-blue-300 place-content-center items-center grid text-center">
      <Banner
        title="Page not found"
        desc="Dolor dolor magna esse laborum. Elit amet anim ullamco irure non. Ea esse ut voluptate pariatur deserunt magna nisi nostrud. Nisi labore non pariatur enim non et Lorem occaecat elit quis id amet aliqua consectetur. Ad non veniam in in dolore ad anim. Nisi aliquip dolore duis enim do. Consectetur nisi mollit aliquip amet sunt anim dolor qui consequat aliqua. Veniam minim ad ipsum ad aute voluptate occaecat minim proident laboris."
      />
      <div className="container mx-auto">
        <BtnPrimary title="Return to homepage" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Error;
