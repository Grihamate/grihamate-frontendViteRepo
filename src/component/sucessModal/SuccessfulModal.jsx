// src/component/common/SuccessModal.jsx
import React from "react";
import { CheckCircle } from "lucide-react";
import "./style.css";

const SuccessModal = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <CheckCircle className="modal-icon" size={60} />
        <h3 className="modal-title">Success!</h3>
        <p className="modal-message">{message}</p>
        <button className="modal-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
