import React, { useState } from "react";
import "./style.css";

const CustomApp = () => {
  const wallpaper =
    "https://wallpapercave.com/wp/wp3140294.jpg";
  return (
    <>
      <h1>Image Effects Example</h1>
      <ImgEffects imageUrl="https://e1.pxfuel.com/desktop-wallpaper/312/649/desktop-wallpaper-human-intelligence-can-fix-artificial-intelligent-shortcomings-artificial-intelligence.jpg" />
    </>
  );
};

export default CustomApp;

interface ImageEffectProps {
  imageUrl: string;
}

const ImgEffects: React.FC<ImageEffectProps> = ({ imageUrl }) => {
  const [effect, setEffect] = useState<string>("grayscale");

  const handleEffectChange = (newEffect: string) => {
    setEffect(newEffect);
    console.log(newEffect);
  };
  return (
    <>
      <div className="image-effects">
      <div className={`image-container ${effect !== 'none' ? 'effect-applied' : ''}`}>
          <img src={imageUrl} alt="Original" style={{ filter: effect !== 'none' ? effect : 'none' }} />
        </div>
        <div className="controls">
          <button onClick={() => handleEffectChange('none')}>Original</button>
          <button onClick={() => handleEffectChange('grayscale')}>Grayscale</button>
          <button onClick={() => handleEffectChange('sepia')}>Sepia</button>
          <button onClick={() => handleEffectChange('blur(5px)')}>Blur</button>
        </div>
      </div>
    </>
  );
};
