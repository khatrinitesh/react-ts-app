import React from 'react';
import { TIMELINE_DATA } from '../constants/constants';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const Timeline: React.FC = () => {
  return (
    <div className="relative max-w-3xl mx-auto mt-12 px-4 bg-[#1f1e41] text-white rounded-lg py-10">
      {/* Vertical line */}
      <div className="absolute left-5 top-0 h-full w-[2px] bg-[#ea5443] z-0" />

      {TIMELINE_DATA.map((item, index) => (
        <motion.div
          key={item.id}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="mb-10 pl-10 relative z-10"
        >
          {/* Timeline dot */}
          <div className="absolute -left-[3px] top-5 w-4 h-4 rounded-full bg-[#fdebb7] border border-[#ea5443] shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />

          {/* Neumorphic-style card */}
          <div className="bg-[#1f1e41] p-6 rounded-xl shadow-[8px_8px_16px_#181732,_-8px_-8px_16px_#262459] border border-[#ea5443]/10 hover:bg-[#ea5443]/10 transition-colors duration-300">
            <p className="text-xs text-[#fdebb7] mb-2">{item.date}</p>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-[#d1d1e9] mt-1">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
