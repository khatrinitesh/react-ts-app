import React, { useState } from "react";

const CustomApp = () => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleDelete = () => {
    // Perform delete action
    console.log('Item deleted');
    closeDeleteModal();
  };
  return <div>
     <h1>My App</h1>
      <button onClick={openDeleteModal}>Open Delete Modal</button>
      <DelModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} onDelete={handleDelete} />
  </div>;
};

export default CustomApp;

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DelModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  onDelete,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[-1]"  onClick={onClose}>
        
      </div>
      <div className="modal z-[999]">
          <div className="modal-content bg-white p-4">
            <span className="close absolute top-0 right-0 p-2 cursor-pointer" onClick={onClose}>
              &times;
            </span>
            <h2 className="text-xl font-bold mb-2">Delete Item</h2>
            <p className="mb-4">Are you sure you want to delete this item?</p>
            <div className="flex justify-end">
              <button className="mr-2 px-4 py-2 bg-red-500 text-white rounded" onClick={onDelete}>Delete</button>
              <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded" onClick={onClose}>Cancel</button>
            </div>
          </div>
        </div>
    </>
  );
};
