import React, { useState } from 'react'
import Modal from './ModalComp';

const FinalModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Example Modal"
      >
        <p>This is the content of the modal.</p>
      </Modal>
    </>
  )
}

export default FinalModal