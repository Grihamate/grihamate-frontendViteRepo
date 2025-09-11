import React from 'react'
import './style.css'

function AboutInfo() {
  return (
    <section className="about-info-section">
      {/* Outer full-width wrapper */}
      <div className="about-info-container">
        {/* Inner max-width container */}
        <h2 className="about-info-heading">About Grihamate</h2>
        <p className="about-info-text">
          Founded with a vision to revolutionize the real estate industry, Grihamate has grown from a small startup to a trusted name in property solutions. We understand that finding the perfect property is more than just a transaction – it's about finding a home, building wealth, and securing your future.
        </p>
        <p className="about-info-text">
          Our journey began with a simple belief: that everyone deserves access to quality properties and exceptional service. Today, we continue to uphold this commitment through innovative technology, personalized service, and an unwavering dedication to our clients' success.
        </p>
        <p className="about-info-text">
          Our mission is to bridge the gap between property seekers and their dream homes while providing property owners with comprehensive management solutions that maximize value and minimize hassle.
        </p>
      </div>
    </section>
  )
}

export default AboutInfo
