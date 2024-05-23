import React from "react";

const CustomApp = () => {

    const handleClick = () => {
        alert('Button clicked!');
    }
  return (
    <>
    <BtnImg imgUrl="https://static.vecteezy.com/system/resources/thumbnails/025/067/762/small_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg" btnTxt="Click" onClick={handleClick}/>
    </>
  )
}

export default CustomApp;

interface ButtonOnImgProps {
  imgUrl: string;
  btnTxt: string;
  onClick: () => void;
}

const BtnImg:React.FC<ButtonOnImgProps> = ({imgUrl,btnTxt,onClick}) => {
  return (
    <>
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src={imgUrl}
          alt="Image"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <button
          onClick={onClick}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "10px",
            backgroundColor: "transparent",
            border: "2px solid #fff",
            color: "#fff",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {btnTxt}
        </button>
      </div>
    </>
  );
};
