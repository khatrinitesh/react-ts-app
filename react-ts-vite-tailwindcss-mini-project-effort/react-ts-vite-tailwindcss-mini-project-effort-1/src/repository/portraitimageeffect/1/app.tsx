import React,{useState} from "react";
import "./style.css";

const CustomApp = () => {
  return (
    <div>
      <PortraitImageEffect imageUrl="https://st3.depositphotos.com/1388768/37656/i/450/depositphotos_376566760-stock-photo-api-application-programming-interface-software.jpg" />
    </div>
  );
};

export default CustomApp;

interface PortraitImageEffectProps {
  imageUrl: string;
}

const PortraitImageEffect:React.FC<PortraitImageEffectProps> = ({
  imageUrl,
}) => {
  const [isPortrait, setIsPortrait] = useState<boolean>(false);

  const handleImageLoad = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const img = event.currentTarget;
    const ratio = img.width / img.height;
    setIsPortrait(ratio < 1); // If width is less than height, it's considered portrait
  };

  return (
    <div className={`image-container ${isPortrait ? "portrait" : ""}`}>
      <img src={imageUrl} alt="Portrait" onLoad={handleImageLoad} />
    </div>
  );
};
