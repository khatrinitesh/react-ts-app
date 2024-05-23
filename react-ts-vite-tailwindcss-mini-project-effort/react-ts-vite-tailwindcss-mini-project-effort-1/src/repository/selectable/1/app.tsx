import React, { useState } from "react";

const CustomApp = () => {
    const items = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
        // Add more items as needed
      ];
  return (
    <>
      <h1>Selectable Items</h1>
      <Selectable items={items} />
    </>
  )
};

export default CustomApp;

interface Item {
  id: number;
  name: string;
}

interface SelectableProps {
  items: Item[];
}

const Selectable: React.FC<SelectableProps> = ({ items }) => {
    const [selectedItems, setSelectedItems] = useState<Item[]>([]);

    const handleItemClick = (item: Item) => r{
      const isSelected = selectedItems.some((selectedItem) => selectedItem.id === item.id);
  
      if (isSelected) {
        setSelectedItems(selectedItems.filter((selectedItem) => selectedItem.id !== item.id));
      } else {
        setSelectedItems([...selectedItems, item]);
      }
    };
  
  return (
    <>
      <div>
      <h2>Selectable Items</h2>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => handleItemClick(item)}
            style={{
              cursor: "pointer",
              fontWeight: selectedItems.some((selectedItem) => selectedItem.id === item.id) ? "bold" : "normal",
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <h3>Selected Items</h3>
      <ul>
        {selectedItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
    </>
  );
};
