import React,{useState} from "react";

const CustomApp: React.FC = () => {
  return <div>
    <QRCode/>
  </div>;
};

export default CustomApp;

const QRCode: React.FC = () => {
  const [textValue, setTextValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={textValue}
        onChange={handleInputChange}
        placeholder="Enter text..."
      />
      <div id="qr_code">
        {textValue && <QRCode value={textValue} size={128} />}
      </div>
    </>
  );
};
