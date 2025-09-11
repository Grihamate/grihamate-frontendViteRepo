import React from 'react'
import './style.css'

function AboutGrihamate() {
  return (
    <section className="section-about">
      {/* Outer full-width background layer */}
      <div className="container-about">
        {/* Inner max-width container */}
        <h2 className="heading">About Grihamate</h2>
        <article className="para">
          <p>
            Founded with a vision to revolutionize the real estate industry, Grihamate has grown from a small startup to a trusted name in property solutions. We understand that finding the perfect property is more than just a transaction – it's about finding a home, building wealth, and securing your future.
          </p>
          <p>
            Our journey began with a simple belief: that everyone deserves access to quality properties and exceptional service. Today, we continue to uphold this commitment through innovative technology, personalized service, and an unwavering dedication to our clients' success.
          </p>
          <p>
            Our mission is to bridge the gap between property seekers and their dream homes while providing property owners with comprehensive management solutions that maximize value and minimize hassle.
          </p>
        </article>
      </div>
    </section>
  )
}

export default AboutGrihamate

