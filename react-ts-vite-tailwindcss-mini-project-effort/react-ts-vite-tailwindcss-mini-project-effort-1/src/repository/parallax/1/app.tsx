import React, { useRef, useEffect, useState } from "react";
import "./style.css";

const CustomApp = () => {
  return (
    <>async (params:type) => {
      
    }
      <Parallax />
    </>
  );
};

export default CustomApp;

const Parallax: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const parallaxOffset =
          window.pageYOffset - parallaxRef.current.offsetTop;
        setScrollY(parallaxOffset);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div
        className="parallax-content"
        ref={parallaxRef}
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <h1>Welcome to the Parallax Effect</h1>
        <p>Scroll down to see the effect</p>
        <p>
          Amet cillum duis consequat ut exercitation id enim. Dolor sit aute
          sint dolore laboris elit proident eu ea elit elit nulla duis
          incididunt. Non velit labore pariatur aliquip sint do non est eu
          aliquip. Quis non labore dolore ipsum aliquip enim. Aute magna
          adipisicing fugiat adipisicing cupidatat nisi ex. Velit eiusmod
          aliquip occaecat nisi eu culpa ea. Id qui elit in velit mollit
          consectetur ullamco minim sint exercitation do laboris dolor est.
          Aliquip Lorem nulla aliquip laboris sint aliquip velit cupidatat
          consequat adipisicing consequat culpa laboris. Nisi culpa ea ullamco
          cupidatat ad veniam aute. Commodo laboris quis non elit consectetur
          exercitation ullamco irure commodo quis pariatur. Adipisicing veniam
          ipsum nisi adipisicing sunt pariatur elit mollit do eu in enim. Ad
          duis id ullamco commodo sit. Ex dolor mollit deserunt aliquip
          consequat laboris ea laboris. Sunt occaecat mollit duis excepteur
          nulla culpa eiusmod duis. Aliqua deserunt dolore in nulla officia
          fugiat. Officia do reprehenderit pariatur labore minim ullamco ea eu
          aute voluptate. Amet commodo id laboris officia irure reprehenderit
          labore labore veniam consequat deserunt laborum nisi occaecat. Ad
          eiusmod aliquip veniam fugiat nulla sit. Dolor tempor voluptate nisi
          minim ad deserunt mollit proident et occaecat officia proident veniam
          exercitation. Officia cupidatat ea pariatur exercitation irure. Esse
          fugiat consequat elit deserunt cupidatat duis fugiat ut exercitation
          quis in voluptate non. Duis laborum sit ad pariatur ipsum labore
          aliquip in sit excepteur ex. Pariatur laborum dolor nulla do culpa
          cupidatat veniam. Elit sit aliquip dolore cupidatat dolor culpa. Esse
          nostrud incididunt officia dolore. Anim fugiat cillum reprehenderit
          magna. Enim nulla id labore fugiat officia aliquip quis laboris
          incididunt reprehenderit voluptate. Enim nulla culpa aliqua dolor
          deserunt culpa quis exercitation fugiat proident excepteur anim ea.
          Non aliquip laborum dolor non minim officia deserunt labore pariatur
          aute aliquip. Nisi est irure culpa adipisicing nulla quis elit et sint
          non. Anim ea veniam anim consectetur cillum ad ea officia ea
          adipisicing consectetur. Cupidatat ipsum esse aliqua ullamco pariatur
          esse occaecat officia adipisicing ad Lorem est. Ex elit tempor laborum
          aliqua sint elit nulla anim deserunt. Irure sint occaecat esse dolor
          pariatur consequat. Cupidatat magna cillum est adipisicing incididunt
          aliquip ut ipsum esse aute deserunt nisi aliqua. Consectetur voluptate
          duis nisi id est irure. Mollit sunt dolore commodo laboris quis
          consectetur ex occaecat anim adipisicing cupidatat magna ex sit.
          Proident commodo proident consectetur excepteur occaecat fugiat
          adipisicing qui ea esse amet irure ex do. Commodo consequat quis
          proident nulla proident ut amet occaecat voluptate voluptate. Pariatur
          qui aliquip ex Lorem reprehenderit ullamco est eu. Laboris cillum esse
          deserunt amet aliquip. Ut minim aliquip elit do voluptate. Duis quis
          anim sunt cupidatat ipsum consectetur. Deserunt commodo ipsum esse eu
          cupidatat est quis Lorem consequat elit fugiat minim. Nulla labore
          esse consequat minim ut deserunt dolor commodo exercitation. Aute quis
          aliqua do id in ullamco cillum officia incididunt esse consequat
          reprehenderit. Ullamco sit adipisicing laborum reprehenderit. Duis
          fugiat amet laborum eu veniam ea veniam ullamco. Aliquip velit
          deserunt ea amet proident exercitation.
        </p>
      </div>
    </div>
  );
};
