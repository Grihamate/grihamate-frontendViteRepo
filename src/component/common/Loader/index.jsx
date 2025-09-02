// Loader.jsx
import React from "react";
import "./style.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p className="loading-text">Loading properties...</p>
    </div>
  );
};

export default Loader;
