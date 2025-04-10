import './App.css';
import { useRef, useState } from 'react';
import Modal from './component/Modal';

export default function App() {
  const modal = useRef<HTMLDialogElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  function handleConfirmation() {
    setIsOpen(true); // Open modal
  }

  function handleCancelbtn() {
    setIsOpen(false); // Close modal
  }

  function handleDeletebtn() {
    alert('Item deleted!');
    setIsOpen(false); // Close the modal after deletion
  }

  function handleModalClose() {
    setIsOpen(false);
  }

  return (
    <div className="app-container">
      <button onClick={handleConfirmation}>Delete Me!</button>

      <Modal ref={modal} isOpen={isOpen} onClose={handleModalClose}>
        <p>Are you sure you want to delete the item?</p>
        <button onClick={handleCancelbtn}>Cancel</button>
        <button onClick={handleDeletebtn}>Delete</button>
      </Modal>
    </div>
  );
}
