import React from "react";
import SearchBox from "./Searchbox";
import heroImg from '../../../assets/heroImg.jpg';
import "./style.css";

const HeroSection = ({ onSearch }) => {
  return (
    <div className="hero-container">
      <div className="charges-box">
        0% Brokerage Guaranteed
      </div>
      {/* Hero Image */}
      <img src={heroImg} alt="Hero" className="hero-bg" />

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>Apka Apna Property Saathi</h1>
        <h2 className="charges-text">With 0% Brokerage</h2>
        <p>Find your perfect home or investment opportunity</p>
        <SearchBox onSearch={onSearch} />
      </div>
    </div>
  );
};

export default HeroSection;
