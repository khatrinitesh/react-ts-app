import React from 'react'

const CustomApp = () => {
  return (
    <>
      <ResponsiveImageApp src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Wallpaper"/>
    </>
  )
}

export default CustomApp

interface ResponsiveImageProps {
    src: string; // URL of the image
    alt: string; // Alt text for accessibility
  }

const ResponsiveImageApp: React.FC<ResponsiveImageProps> = ({src,alt}) => {
    return (
      <div>
        <h1>Responsive Image Example</h1>
        <img src={src} alt={alt}/>
      </div>
    );
  };