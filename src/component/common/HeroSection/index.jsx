import React from "react";
import {Link} from "react-router-dom"
import SearchBox from "./Searchbox";
import heroImg from '../../../assets/heroImg.jpg';
import "./style.css";

const HeroSection = ({ onSearch, searching }) => {
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
          <div className="mobile-buttons">
            <div className="mobile-buttons">
              <Link to="/rent" className="btn btn-rent">
                Rent
              </Link>
              <Link to="/sale" className="btn btn-buy">
                Buy
              </Link>
            </div>

          </div>
            <SearchBox onSearch={onSearch} searching={searching} />
      </div>
    </div>
  );
};

export default HeroSection;
