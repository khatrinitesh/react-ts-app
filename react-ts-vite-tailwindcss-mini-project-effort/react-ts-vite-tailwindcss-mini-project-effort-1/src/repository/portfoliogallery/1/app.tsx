import React from 'react';
import './style.css'

const CustomApp = () => {
    const images = [
        {
          "id": 1,
          "src": "https://st3.depositphotos.com/1388768/37656/i/450/depositphotos_376566760-stock-photo-api-application-programming-interface-software.jpg",
          "alt": "Image 1"
        },
        {
          "id": 2,
          "src": "https://newsdata.io/blog/wp-content/uploads/2024/02/21-Free-Open-APIs-for-Developers-and-Testing.jpg",
          "alt": "Image 2"
        },
        // Add more images as needed
      ]
  return (
    <div>
      <GalleryApp images={images}/>
    </div>
  )
}

export default CustomApp

interface Image{
    id:number;
    src:string;
    alt:string;   
}

interface GalleryProps{
    images:Image[]

}

const GalleryApp:React.FC<GalleryProps> = ({images}) => {
    return(
        <>
        <div className='gallery'>
            {images.map((image) => {
                return(
                    <>
                     <img src={image.src} alt={image.alt}/>
                    </>
                )
            })}
        </div>
        </>
    )
}
