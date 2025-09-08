import React from "react";
import "./style.css";
import AboutHeroSection from "../../component/AboutHeroSection";
import AboutGrihamate from "../../component/AboutGrihamate";
import Card from "../../component/AboutCard";
import AboutTeam from "../../component/AboutTeam";
import AboutPreference from "../../component/GrihamatePreference";
import trusticon from "../../assets/trusticon.png";
import growth from "../../assets/growth.png";
import transparency from "../../assets/transparency.png";

function About() {
  return (
    <div>
      <AboutHeroSection></AboutHeroSection>

      <AboutGrihamate></AboutGrihamate>
      <div class="card-container">

        <Card
          className="my-wide-card"
          headingClassName="card-heading-custom"
          subheadingClassName="card-subheading-custom"
          heading="Trust"
          subheading="Building lasting relationships through reliability and integrity"
          image={trusticon}
          circleColor="#FFDDEE"
        />
        <Card
          className="my-wide-card"
          headingClassName="card-heading-custom"
          subheadingClassName="card-subheading-custom"
          heading="Transparency"
          subheading="Clear communication and honest dealings in every transaction"
          image={transparency}
          circleColor="#BCFCDD"
        />
        <Card
          className="my-wide-card"
          headingClassName="card-heading-custom"
          subheadingClassName="card-subheading-custom"
          heading="Growth"
          subheading="Committed to your success and our continuous improvement"
             image={growth}
    circleColor=" #BBE5FD;
"
        />
        <Card
          className="my-wide-card"
          headingClassName="card-heading-custom"
          subheadingClassName="card-subheading-custom"
          heading="Innovation"
          subheading="Leveraging technology to simplify property management"
   image={growth}
    circleColor="#BBE5FD;
"



        />
      </div>
      <AboutTeam />
      <AboutPreference />
    </div>
  );
}

export default About;
