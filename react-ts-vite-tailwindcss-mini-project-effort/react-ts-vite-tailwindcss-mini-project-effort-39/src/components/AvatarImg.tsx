import React from 'react';
import { motion } from "framer-motion";
import type { Avatar } from '../interface';


interface AvatarCardProps {
  avatar: Avatar;
}

const AvatarImg:React.FC<AvatarCardProps> = ({avatar}) => {
  return (
    <>
       <motion.div
      className="bg-[#e0e5ec] rounded-2xl p-4 w-48 flex flex-col items-center shadow-neumorphism"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={avatar.imageUrl}
        alt={avatar.name}
        className="rounded-full w-20 h-20 mb-3 border-4 border-[#d1d9e6] shadow-inner"
      />
      <p className="text-gray-700 font-medium">{avatar.name}</p>
    </motion.div>
    </>
  )
}

export default AvatarImg
