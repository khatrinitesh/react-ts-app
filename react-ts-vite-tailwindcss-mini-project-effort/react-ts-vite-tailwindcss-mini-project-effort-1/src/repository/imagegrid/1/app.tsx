import React from 'react'

const CustomApp = () => {
    const option = [
        {id:1,src:'https://e1.pxfuel.com/desktop-wallpaper/312/649/desktop-wallpaper-human-intelligence-can-fix-artificial-intelligent-shortcomings-artificial-intelligence.jpg'},
        {id:2,src:'https://cdn.pixabay.com/photo/2023/06/06/16/38/ai-generated-8045101_1280.jpg'},
    ]
  return (
    <>
      <ImgGrid images={option}/>
    </>
  )
}

export default CustomApp

interface ImageGridProps {
    images: string;
    id:number;
  }

  const ImgGrid:React.FC<ImageGridProps> = ({images}) => {
    return(
        <>
         {images.map((val) => {
            return(
                <>
                <div className={val.id} key={val.id}>
                    <img src={val.src} alt={`val ${val.id}`}/>
                </div>
                </>
            )
         })}
        </>
    )
  }
