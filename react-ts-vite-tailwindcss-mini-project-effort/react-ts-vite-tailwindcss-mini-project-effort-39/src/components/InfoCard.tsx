import React from 'react'
import type { CardItem } from '../interface';
import { motion } from "framer-motion";

interface InfoCardProps {
  item: CardItem;
}


const InfoCard:React.FC<InfoCardProps> = ({item}) => {

  return (
    <>
      <motion.div
      className="bg-white rounded-xl p-6 shadow-lg w-72 cursor-pointer"
      whileHover={{
        scale: 1.05,
        rotate: 1,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
    </motion.div>
    </>
  )
}

export default InfoCard
