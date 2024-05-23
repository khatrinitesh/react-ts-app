import React, { useState,useEffect  } from 'react';
import './style.css';

const CustomApp:React.FC = () => {
  return (
    <>
         <div className="grid-container">
      <GridTile
        title="Tile 1"
        description="Description for tile 1"
        imageUrl="https://via.placeholder.com/150"
      />
      <GridTile
        title="Tile 2"
        description="Description for tile 2"
        imageUrl="https://via.placeholder.com/150"
      />
      {/* Add more GridTile components as needed */}
    </div>
    </>
  )
}

export default CustomApp

interface GridTileProps {
    title: string;
    description: string;
    imageUrl: string;
  }

const GridTile: React.FC<GridTileProps> = ({title,description,imageUrl}) => {
    return (
        <div className="grid-tile">
        <img src={imageUrl} alt={title} />
        <div className="tile-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  };
  
  