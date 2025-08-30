

import React from "react";
import "./ConfirmationModal.css";  // Add your custom styling for the modal

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Are you sure?</h3>
        <p>{message}</p>
        <div className="modal-actions">
          <button onClick={onClose} className="cancel-btn">Cancel</button>
          <button onClick={onConfirm} className="confirm-btn">Yes, Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;