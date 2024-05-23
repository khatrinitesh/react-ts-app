import React from "react";
import "./style.css";

const CustomApp: React.FC = () => {
  return (
    <div>
      <FullPageBackground>
        Amet ad sit quis sint sit consequat. Id reprehenderit non Lorem sunt
        laboris ex. Enim ut quis enim laborum nulla est sint pariatur nulla
        voluptate. Dolor sint anim ipsum in in sit sint mollit irure. Ea
        excepteur ut et eu magna est esse sunt Lorem occaecat pariatur ex
        laboris. Fugiat et consequat Lorem officia magna qui laboris ullamco
        fugiat non culpa non. Non velit pariatur eu excepteur aliquip qui
        adipisicing. Eiusmod commodo ea quis quis qui veniam deserunt aute
        veniam cupidatat. Dolor sint reprehenderit adipisicing eiusmod eu
        nostrud Lorem cupidatat do ut proident laborum tempor. Aliqua voluptate
        consequat do irure deserunt consequat ipsum aliquip laborum. Adipisicing
        incididunt non cillum incididunt elit exercitation aliquip esse
        consectetur voluptate excepteur. Aliquip quis non sint deserunt ut ipsum
        aute nulla eiusmod fugiat. Cupidatat consequat irure ipsum adipisicing
        velit. Elit officia ad nisi id Lorem do. Ea magna consequat duis ex
        pariatur. Exercitation qui nisi exercitation voluptate minim pariatur
        adipisicing adipisicing consectetur dolore ut occaecat. Ipsum pariatur
        eiusmod sit deserunt cupidatat veniam ullamco nisi labore laboris. Quis
        irure anim anim nostrud. Ut exercitation adipisicing sit sint
        exercitation minim veniam dolor elit anim. Velit adipisicing enim
        laborum velit voluptate Lorem sint cillum. Officia cillum voluptate in
        qui cupidatat cillum quis voluptate proident excepteur. Do proident
        voluptate labore minim incididunt nisi commodo do sint in exercitation
        ex. Est qui qui eiusmod amet fugiat incididunt ex. Laboris ullamco
        ullamco sit eiusmod qui duis. Veniam cillum ut pariatur consequat dolore
        labore. Velit dolor mollit veniam amet eiusmod laborum non. Elit nostrud
        adipisicing mollit exercitation ea ex aliquip eu et cupidatat anim culpa
        ipsum ullamco. Aliqua minim ex consequat est aliquip commodo consequat
        aute excepteur et enim nisi. Proident irure cupidatat id laborum
        excepteur commodo dolor non reprehenderit ea eiusmod officia laborum.
        Occaecat pariatur culpa officia fugiat eu proident esse dolore aute ea.
        Mollit nulla exercitation enim aute ipsum ut commodo. Minim ut duis sit
        nulla nostrud proident consequat exercitation excepteur voluptate
        excepteur consequat. Nulla dolore velit eiusmod quis tempor occaecat.
        Lorem quis ullamco laborum fugiat aliquip. Mollit qui duis enim
        reprehenderit aliqua esse voluptate. Magna consequat ut proident quis
        dolor occaecat labore deserunt. Lorem elit Lorem proident occaecat do eu
        qui excepteur ut in. Excepteur commodo pariatur occaecat eu dolore
        consectetur elit officia eu veniam do culpa consectetur. Officia
        consequat enim culpa reprehenderit ea id. Cupidatat culpa cillum Lorem
        sint. Aliquip officia pariatur sint dolor. Elit cupidatat deserunt est
        mollit ullamco pariatur dolore do fugiat. Nostrud duis ullamco qui aute
        Lorem nisi. Ex pariatur nulla fugiat et eu mollit in ad.
      </FullPageBackground>
    </div>
  );
};

export default CustomApp;

const FullPageBackground: React.FC = ({ children }) => {
  return <div className="full-page-background">{children}</div>;
};
