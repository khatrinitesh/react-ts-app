import React from 'react';
import { useAvatarImgStore } from '../store/store';
import { motion } from 'framer-motion';

const AvatarImg:React.FC<AvatarProps> = ({url}) => {

    const {avatarUrl,setAvatarUrl} = useAvatarImgStore();
  return (
    <>
       <motion.div
      whileHover={{ scale: 1.1 }}  // Animate the avatar size on hover
      transition={{ duration: 0.3 }}
      onClick={() => setAvatarUrl(url)}  // Set the selected avatar on click
      className={`w-24 h-24 rounded-full overflow-hidden cursor-pointer ${avatarUrl === url ? 'border-4 border-blue-500' : ''}`} // Highlight selected avatar
    >
      <img src={url} alt="Avatar" className="w-full h-full object-cover" />
    </motion.div>
    </>
  );
}

export default AvatarImg;
