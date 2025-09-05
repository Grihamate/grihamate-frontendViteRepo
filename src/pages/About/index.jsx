import React from 'react'
import './style.css'
import AboutHeroSection from '../../component/AboutHeroSection';
import AboutGrihamate from '../../component/AboutGrihamate';
import Card from '../../component/AboutCard';
import AboutTeam from '../../component/AboutTeam';

function About() {
  return (
    <div class='about-container'>
        <AboutHeroSection></AboutHeroSection>
        <AboutGrihamate></AboutGrihamate>
<div class='card-container'>
            <Card className="my-wide-card"   headingClassName="card-heading-custom" subheadingClassName="card-subheading-custom"
 heading="Trust" subheading="Building lasting relationships through reliability and integrity
" />
        <Card className="my-wide-card"   headingClassName="card-heading-custom" subheadingClassName="card-subheading-custom"
 heading="Transparency" subheading="Clear communication and honest dealings in every transaction

" />
        <Card className="my-wide-card"   headingClassName="card-heading-custom" subheadingClassName="card-subheading-custom"
 heading="Growth" subheading="Committed to your success and our continuous improvement

" />
     <Card className="my-wide-card"   headingClassName="card-heading-custom" subheadingClassName="card-subheading-custom"
 heading="Innovation" subheading="Leveraging technology to simplify property management



" />
<AboutTeam/>
</div>

    </div>
  )
}

export default About;