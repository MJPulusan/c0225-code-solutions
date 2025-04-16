import './App.css';
import { useState } from 'react';
import { Modal } from './component/Modal';

export default function App() {
  const [isDeleting, setIsDeleting] = useState(false);
  function handleDelete(): void {
    alert('Item deleted!');
    setIsDeleting(false);
  }
  return (
    <>
      <button onClick={() => setIsDeleting(true)}>Delete Me!</button>
      <Modal isOpen={isDeleting} onClose={() => setIsDeleting(false)}>
        <p>Are you sure you want to delete the item?</p>
        <button onClick={() => setIsDeleting(false)}>Cancel</button>
        <button onClick={handleDelete} autoFocus>
          Delete!
        </button>
      </Modal>
    </>
  );
}
