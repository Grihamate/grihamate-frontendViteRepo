import React from 'react'
import "./style.css"
import aboutus from '../../assets/aboutus.jpg'

function AboutHeroSection() {
  return (
    <div className='section-container'>
      <div 
        className='image-container' 
        style={{ backgroundImage: `url(${aboutus})` }}
      />
      
      <div className="hero-content">
        <h1>About Grihamate</h1>
        <p>Your Property ,Our Priority...</p>
      </div>
    </div>
  )
}

export default AboutHeroSection
