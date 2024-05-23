import React from 'react';
import './style.css';

const CustomApp = () => {
    const images:Image[] = [
        { src: 'https://static.vecteezy.com/system/resources/thumbnails/025/067/762/small_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg', alt: 'Image 1' },
        { src: 'https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg', alt: 'Image 2' },
        { src: 'https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg', alt: 'Image 3' },
    ]
  return (
    <>
    <ImgGallery images={images} />
    </>
  )
}

export default CustomApp

interface Image {
    src: string;
    alt: string;
}
  
interface ImageGalleryProps {
    images: Image[];
}

const ImgGallery:React.FC<ImageGalleryProps> = ({images}) => {
    return(
        <>
         <div className="image-gallery">
            {images.map((image,index) => {
                return(
                    <div>
                        <img src={image.src} alt={image.alt} className='center-image' />
                    </div>
                )
            })}

         </div>
        </>
    )
}