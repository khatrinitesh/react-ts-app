import React, { useState } from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
        <Tooltip tooltipText='top' position='up'/>
        <Tooltip tooltipText='right' position='right'/>
        <Tooltip tooltipText='down' position='down'/>
        <Tooltip tooltipText='left' position='left'/>
    </>
  )
}

export default CustomApp

interface TooltipProps {
    tooltipText: string;
    position: 'up' | 'down' | 'left' | 'right';
  }

  const Tooltip: React.FC<TooltipProps> = ({ tooltipText, position }) => {
    return (
        
      <p className="mt-20">
        <span className={`tooltip tooltip-${position}`} data-tooltip={tooltipText}>
          Hover Me
        </span>
      </p>
    );
  };
  