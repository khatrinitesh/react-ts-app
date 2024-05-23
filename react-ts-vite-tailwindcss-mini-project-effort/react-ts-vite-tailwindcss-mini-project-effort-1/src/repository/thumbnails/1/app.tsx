import React from 'react'

const CustomApp = () => {
  return (
    <>
        <ThumbnailGallery/>
    </>
  )
}

export default CustomApp

interface Thumbnail {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
  }

  interface ThumbnailProps {
    thumbnail: Thumbnail;
  }

  const ThumbnailCard: React.FC<ThumbnailCardProps> = ({ thumbnail }) => {
    return (
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <img className="w-full" src={thumbnail.imageUrl} alt={thumbnail.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{thumbnail.title}</div>
          <p className="text-gray-700 text-base">{thumbnail.description}</p>
        </div>
      </div>
    );
  };

  const thumbnails: Thumbnail[] = [
    {
      id: '1',
      imageUrl: 'https://via.placeholder.com/300',
      title: 'Thumbnail 1',
      description: 'Description for Thumbnail 1',
    },
    {
      id: '2',
      imageUrl: 'https://via.placeholder.com/300',
      title: 'Thumbnail 2',
      description: 'Description for Thumbnail 2',
    },
    // Add more thumbnails as needed
  ];

  
  const ThumbnailGallery: React.FC = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {thumbnails.map((thumbnail) => (
          <ThumbnailCard key={thumbnail.id} thumbnail={thumbnail} />
        ))}
      </div>
    );
  };