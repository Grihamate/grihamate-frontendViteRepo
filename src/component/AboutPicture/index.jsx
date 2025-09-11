import React from 'react'
import './style.css'
import aboutus from '../../assets/aboutus.jpg'

function AboutPicture() {
  return (
    <div className="about-picture">
      {/* Background image */}
      <img src={aboutus} alt="About Grihamate" className="about-picture-img" />

      {/* Overlay text */}
      <div className="hero-content">
        <h1>About Grihamate</h1>
        <p>Your Property, Our Priority...</p>
      </div>
    </div>
  )
}

export default AboutPicture

