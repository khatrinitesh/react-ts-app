import React from 'react'

const CustomApp = () => {
    const Options = [
        {imageUrl:'https://via.placeholder.com/640x360',altText:'image 1'},
        {imageUrl:'https://via.placeholder.com/540x360',altText:'image 2'},
        {imageUrl:'https://via.placeholder.com/440x360',altText:'image 3'},
        {imageUrl:'https://via.placeholder.com/340x360',altText:'image 4'},
    ]
  return (
    <div>
        {Options.map((val,index) => {
            return(
                <>
                    <AvatarImg imageUrl={val.imageUrl} altText={val.altText}/>
                </>
            )
        })}
    </div>
  )
}

export default CustomApp

interface AvatarProps {
    imageUrl:string;
    altText:string;
}

const AvatarImg:React.FC<AvatarProps> = ({imageUrl,altText}) => {
    return(
        <>
            <img src={imageUrl} alt={altText} />
        </>
    )
}