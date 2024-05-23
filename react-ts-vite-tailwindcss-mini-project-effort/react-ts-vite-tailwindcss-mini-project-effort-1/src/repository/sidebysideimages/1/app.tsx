import React from "react";

const CustomApp = () => {

    const imagesData: ImageData[] = [
        { id: 1, src: 'https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg', alt: 'Image 1' },
        { id: 2, src: 'https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg', alt: 'Image 2' },
        { id: 3, src: 'https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg', alt: 'Image 3' },
      ];
  return (
    <>
    <h1>Side by Side Images</h1>
    <SideImage images={imagesData}/>
    </>
  )
};

export default CustomApp;

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

interface Props {
  images: ImageData[];
}

const SideImage: React.FC<Props> = ({ images }) => {
  return (
    <>
      <div className="side-by-side-images-container">
        {images.map((image) => (
          <div key={image.id} className="image-wrapper">
            <img src={image.src} alt={image.alt} className="image" />
          </div>
        ))}
      </div>
    </>
  );
};
