import React from 'react'

const CustomApp = () => {
  return (
    <>
      <RoundedImage src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Avatar" width="150px" height="150px"/>
    </>
  )
}

export default CustomApp


interface ImageProps {
    src: string;
    alt: string;
    width?: string;
    height?: string;
  }


  const RoundedImage: React.FC<ImageProps> = ({ src, alt, width, height }) => {
    return (
      <img
        src={src}
        alt={alt}
        style={{
          borderRadius: '50%',
          width: width || '100px', // default width if not provided
          height: height || '100px', // default height if not provided
        }}
      />
    );
  };