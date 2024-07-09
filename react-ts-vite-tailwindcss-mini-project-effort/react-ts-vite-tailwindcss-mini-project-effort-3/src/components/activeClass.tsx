import React, { useState } from "react";
import { ListProps } from "../interface/interface";

const ActiveClassComp: React.FC<ListProps> = ({ items }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setActiveItem(id);
  };
  return (
    <>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={item.id === activeItem ? "active" : ""}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ActiveClassComp;
