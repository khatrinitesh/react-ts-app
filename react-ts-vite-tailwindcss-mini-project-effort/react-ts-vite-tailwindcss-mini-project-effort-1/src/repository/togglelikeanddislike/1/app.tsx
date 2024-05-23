import React, { useState } from 'react';
import { FaRegThumbsUp,FaRegThumbsDown } from "react-icons/fa6";

const CustomApp = () => {
  return (
    <>
        <ToggleLikeDislike/>
    </>
  )
}

export default CustomApp

interface LikeDislike {
    liked:boolean;
}

const ToggleLikeDislike:React.FC  =() => {
    const [likeDislike, setLikeDislike] = useState<LikeDislike>({liked:false});

    const toggleLikeDislike = () => {
        setLikeDislike(prevState => ({liked:!prevState.liked}));
    };
    return(
        <>
        {/* Toggle button to switch between thumbs up and thumbs down */}
        <button
            onClick={toggleLikeDislike}
            className={`text-3xl focus:outline-none ${likeDislike.liked ? 'text-blue-500' : 'text-red-500'}`}
        >
            {likeDislike.liked ? (
            <FaRegThumbsUp /> // Thumbs up icon
            ) : (
                <FaRegThumbsDown  /> // Thumbs down icon
            )}
        </button>
        <p>{likeDislike.liked ? 'Liked' : 'Disliked'}</p>
        </>
    )
}

