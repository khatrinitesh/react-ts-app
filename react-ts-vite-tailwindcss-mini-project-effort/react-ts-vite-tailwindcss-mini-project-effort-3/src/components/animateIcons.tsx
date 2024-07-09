import React from 'react';
import { AnimatedIconProps } from '../interface/interface';
import { iconStyles,iconAnimations } from './../constants/constants';

const AnimateIconsComp:React.FC<AnimatedIconProps> = ({icon,isSelected=false}) => {
  return (
    <>
     <div
            className={`${iconStyles.base} ${isSelected ? iconStyles.selected : iconStyles.notSelected} ${isSelected ? iconAnimations.selected : ''}`}
        >
            {/* Example: Display icon based on 'icon' prop */}
            <img src={icon} alt="Icon" className="w-full h-full object-cover" />
        </div>
    </>
  )
}

export default AnimateIconsComp