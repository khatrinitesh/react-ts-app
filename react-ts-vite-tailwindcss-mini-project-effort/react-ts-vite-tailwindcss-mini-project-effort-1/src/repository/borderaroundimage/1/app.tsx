import React from 'react'

const CustomApp = () => {
  return (
    <div>
        <ImgWithBorder imgUrl="https://static.vecteezy.com/system/resources/thumbnails/025/067/762/small_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg"/>
    </div>
  )
}

export default CustomApp

interface ImgWithBorderProps{
    imgUrl:string;
    borderColor:string;
}

const ImgWithBorder:React.FC<ImgWithBorderProps> = ({imgUrl,borderColor}) => {
    return(
        <>
        <div style={{border:`2px solid ${borderColor}`,padding:'10px',display:'inline-block'}}>
            <img src={imgUrl} alt="example" style={{ maxWidth: '100%' }} />
        </div>
        </>
    )
}