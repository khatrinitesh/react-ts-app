import React from 'react'
import { BLACK_AND_WHITE_IMAGES } from '../../constants/images'
import { ImageData } from '../../types'

const ImagesGallery:React.FC = () => {
  return (
    <div className="image-gallery">
      {BLACK_AND_WHITE_IMAGES.map((image: ImageData) => (
        <div key={image.id} className="image-item">
          <img src={image.src} alt={image.alt} className="w-full h-auto" />
          <p>{image.alt}</p>
        </div>
      ))}
    </div>
  )
}

export default ImagesGallery