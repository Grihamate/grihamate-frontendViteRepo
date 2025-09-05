import React from 'react'
import './style.css'
import Card from '../AboutCard'

function AboutTeam() {
  return (
    <div className="team-container">
      <h2 className="team-heading">Meet Our Team</h2>
      <p className="team-para">
        Our experienced professionals are dedicated to providing exceptional
        service and expertise in every aspect of real estate.
      </p>

      <div className="team-grid">
        <Card
        //   image={team1}
          heading="Radhika Mehra"
          headingClassName="team-card-heading"
          subheading="Specializes in early childhood behavioral development with 15+ years of experience.
"
          subheadingClassName="team-card-subheading"
          className="team-card"
           subheading2="15+ years of professional experience"
        />
        <Card
        //   image={team2}
          heading="David Lee"
          headingClassName="team-card-heading"
          subheading="Former Head of Education at Mumbai University. Expert in preschool pedagogy.
"
                    
          subheadingClassName="team-card-subheading"
          className="team-card"
        />
        <Card
        //   image={team3}
          heading="Neha Kapoor"
          headingClassName="team-card-heading"
          subheading="Leading pediatric consultant ensuring our programs align with child health milestones.
"
          subheadingClassName="team-card-subheading"
          className="team-card"
        />
        <Card
        //   image={team4}
          heading="Alice Johnson"
          headingClassName="team-card-heading"
          subheading="Designs healthy meal recommendations and promotes early-age nutrition.
"
          subheadingClassName="team-card-subheading"
          className="team-card"
        />
      </div>
    </div>
  )
}

export default AboutTeam
