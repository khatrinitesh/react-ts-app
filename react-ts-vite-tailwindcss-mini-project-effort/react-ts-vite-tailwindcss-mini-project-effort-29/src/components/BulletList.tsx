import React from 'react';
import { useListStore } from '../store/store';
import { motion } from 'framer-motion';

const BulletList = () => {
    const { items, addItem, toggleItem, removeItem } = useListStore(); // Access Zustand store

  // Framer Motion variants for animation
  const listItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const handleAddItem = () => {
    const newItemText = prompt('Enter new list item:');
    if (newItemText) {
      addItem(newItemText);  // Add new item to the list
    }
  };
  return (
    <>
      <div className="bullet-list-container">
      <h2 className="text-lg font-bold mb-4">Bullet List</h2>
      
      <motion.ul
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={listItemVariants}
        className="list-disc pl-5 space-y-2"
      >
        {items.map((item) => (
          <motion.li
            key={item.id}
            className={`flex items-center cursor-pointer ${item.checked ? 'line-through text-gray-500' : ''}`}
            variants={listItemVariants}
            onClick={() => toggleItem(item.id)}  // Toggle checked state on click
          >
            <span className="mr-2">•</span>  {/* Bullet point */}
            {item.text}
            <button
              className="ml-4 text-red-500"
              onClick={(e) => {
                e.stopPropagation();
                removeItem(item.id); // Remove item when clicking on the delete button
              }}
            >
              ❌
            </button>
          </motion.li>
        ))}
      </motion.ul>

      <button
        onClick={handleAddItem}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Item
      </button>
    </div>
    </>
  );
}

export default BulletList;
