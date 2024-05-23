import React, { useState, useEffect } from "react";

const CustomApp = () => {
  return <div>
    <Example/>
  </div>;
};

export default CustomApp;

const Example: React.FC = () => {
  const [isCap, setIscap] = useState<boolean>(false);

  useEffect(() => {
    const handleKey = (e:KeyboardEvent) => {
        if(e.getModifierState('CapsLock')){
            setIscap(true)
        }
        else{
            setIscap(false)
        }
    }
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <>
      <input type="text" placeholder="Type something..." />
      {isCap && <p>Caps Lock is activated!</p>}
    </>
  );
};
