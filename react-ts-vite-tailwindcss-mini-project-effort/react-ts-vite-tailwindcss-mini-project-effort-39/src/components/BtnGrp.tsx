import React, { useState } from "react";
import { BUTTON_OPTIONS } from "../constants/constants";
import { motion } from "framer-motion";
import type { ButtonOption } from "../interface";

interface ButtonGroupProps {
  options?: ButtonOption[];
  onSelect?: (value: string) => void;
  initial?: string;
}

const BtnGrp: React.FC<ButtonGroupProps> = ({
  options = BUTTON_OPTIONS,
  onSelect,
  initial = options[0]?.value,
}) => {
  const [selected, setSelected] = useState(initial);

  const handleClick = (value: string) => {
    setSelected(value);
    onSelect?.(value);
  };
  return (
    <>
      <div className="button-group">
        {options.map((option) => (
          <button
            key={option.value}
            className={`btn ${selected === option.value ? "active" : ""}`}
            onClick={() => handleClick(option.value)}
          >
            {selected === option.value && (
              <motion.div
                className="highlight"
                layoutId="buttonHighlight"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span>{option.label}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default BtnGrp;
