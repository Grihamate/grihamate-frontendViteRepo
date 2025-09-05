import React from 'react'
import './style.css'
import CustomCard from './CustomCard'

function AboutPreference() {
  return (
    <div class='container-main'>
        <h2 class='header1'>Why Choose Grihamate ?</h2>
        <p class='para1'>Experience the difference with our comprehensive real estate solutions designed to exceed your expectations at every step.

</p>
    <div style={{ display: "flex", gap: "20px" }}>
      <CustomCard
        // image={sampleImage}
        heading="Child Development"
        description="We specialize in holistic early childhood growth and learning."
        button="Learn More"
      />
      <CustomCard
        // image={sampleImage}
        heading="Nutrition Programs"
        description="Healthy meal plans designed for young learners."
        button="Get Started"
      />
         <CustomCard
        // image={sampleImage}
        heading="Nutrition Programs"
        description="Healthy meal plans designed for young learners."
        button="Get Started"
      />
         <CustomCard
        // image={sampleImage}
        heading="Nutrition Programs"
        description="Healthy meal plans designed for young learners."
        button="Get Started"
      />
    </div>


    </div>
  )
}

export default AboutPreference