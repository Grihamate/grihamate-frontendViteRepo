import React from 'react'
import './style.css'
import Card from '../AboutCard'
import poojaimg from '../../assets/poojaimg.jpeg'
import pranjalimg from '../../assets/Pranjalimg.jpeg'
import chandanimg from '../../assets/chandanimg.png';
import varunimg from '../../assets/varunimg.jpg';
import shlipiimg from '../../assets/shlipiimg.jpeg';
import ankushimg from '../../assets/ankushimg.jpeg';
import Adityaimg from '../../assets/Adityaimg.jpeg';
import salesimg from '../../assets/salesimg.jpeg';
import vinitimg from '../../assets/vinitimg.jpeg';



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
  image={Adityaimg}
  heading="Aditya Mishra"
  headingClassName="team-card-heading"
  subheading="Founder"
  subheadingClassName="team-card-subheading"
  className="team-card"
  circle={false}   // disable the small icon circle
  imageStyle={{
    width: "159px",
    height: "159px",
    borderRadius: "50%",   // makes it circular
    objectFit: "cover",
    objectPosition:'top',
      margin:"auto"
  }}
/>
        <Card
  image={poojaimg}
  heading="Pooja Prajapati"
  headingClassName="team-card-heading"
  subheading="Ui/Ux designer."
  subheadingClassName="team-card-subheading"
  className="team-card"
  circle={false}   // disable the small icon circle
  imageStyle={{
    width: "159px",
    height: "159px",
    borderRadius: "50%",   // makes it circular
    objectFit: "cover",
    margin:"auto"
  }}
/>
        <Card
  image={pranjalimg}
  heading="Pranjal Takkar"
  headingClassName="team-card-heading"
  subheading="Frontend Developer."
  subheadingClassName="team-card-subheading"
  className="team-card"
  circle={false}   // disable the small icon circle
  imageStyle={{
    width: "159px",
    height: "159px",
    borderRadius: "50%",   // makes it circular
    objectFit: "cover",
      margin:"auto"
  }}
/>

      
            <Card
  image={shlipiimg}
  heading="Shilpi Kumari"
  headingClassName="team-card-heading"
  subheading="Backend Developer."
  subheadingClassName="team-card-subheading"
  className="team-card"
  circle={false}   // disable the small icon circle
  imageStyle={{
    width: "159px",
    height: "159px",
    borderRadius: "50%",   // makes it circular
    objectFit: "cover",
      margin:"auto"
  }}
/>
              <Card
  image={varunimg}
  heading="Varun Kumar"
  headingClassName="team-card-heading"
  subheading="Backend Developer."
  subheadingClassName="team-card-subheading"
  className="team-card"
  circle={false}   // disable the small icon circle
  imageStyle={{
    width: "159px",
    height: "159px",
    borderRadius: "50%",   // makes it circular
    objectFit: "cover",
      margin:"auto"
  }}
/>
        <Card
  image={chandanimg}
  heading="Chandan Singh"
  headingClassName="team-card-heading"
  subheading="Backend Developer."
  subheadingClassName="team-card-subheading"
  className="team-card"
  circle={false}   // disable the small icon circle
  imageStyle={{
    width: "159px",
    height: "159px",
    borderRadius: "50%",   // makes it circular
    objectFit: "cover",
    objectPosition:'top',
      margin:"auto"
  }}
/>
        <Card
  image={ankushimg}
  heading="Ankush"
  headingClassName="team-card-heading"
  subheading="Frontend Developer."
  subheadingClassName="team-card-subheading"
  className="team-card"
  circle={false}   // disable the small icon circle
  imageStyle={{
    width: "159px",
    height: "159px",
    borderRadius: "50%",   // makes it circular
    objectFit: "cover",
    objectPosition:'top',
      margin:"auto"
  }}
/>

        <Card
  image={salesimg}
  heading="Sonia Choudhary"
  headingClassName="team-card-heading"
  subheading="Sales Head."
  subheadingClassName="team-card-subheading"
  className="team-card"
  circle={false}   // disable the small icon circle
  imageStyle={{
    width: "159px",
    height: "159px",
    borderRadius: "50%",   // makes it circular
    objectFit: "cover",
    objectPosition:'top',
      margin:"auto"
  }}
/>
        <Card
  image={vinitimg}
  heading="Vinit Tyagi"
  headingClassName="team-card-heading"
  subheading="Marketing Team Head."
  subheadingClassName="team-card-subheading"
  className="team-card"
  circle={false}   // disable the small icon circle
  imageStyle={{
    width: "159px",
    height: "159px",
    borderRadius: "50%",   // makes it circular
    objectFit: "cover",
    objectPosition:'top',
      margin:"auto"
  }}
/>
      </div>
    </div>
  )
}

export default AboutTeam
