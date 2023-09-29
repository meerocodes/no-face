import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function EmailModal({ isOpen, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="ModalContainer" // Add the CSS class for the modal container
    >
      <h2>Subscribe for 20% off!</h2>
 
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" className="ModalContainer input" required /> {/* Add class for styling */}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" className="ModalContainer input" required /> {/* Add class for styling */}
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="tel" className="ModalContainer input" required /> {/* Add class for styling */}
        </div>
        <button type="submit" className="ModalContainer button[type='submit']">Submit</button> {/* Add class for styling */}
      </form>
      <button onClick={onClose} class="ModalContainer Close [type='submit']">X</button> {/* Add class for styling */}
    </Modal>
  );
}

export default EmailModal;

