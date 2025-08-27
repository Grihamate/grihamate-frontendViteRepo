// src/components/AuthHeader.js
import React from "react";
import headerLogo from "../assets/headerLogo.png"; // adjust path if needed

const AuthHeader = () => {
  return (
    <div className="description">
      <img src={headerLogo} alt="Logo" />
      <h1>Grihamate</h1>
    </div>
  );
};

export default AuthHeader;
