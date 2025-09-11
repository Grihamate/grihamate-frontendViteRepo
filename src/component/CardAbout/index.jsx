import React from "react";
import Card from "../AboutCard";
import "./style.css";

// icons
import trusticon from "../../assets/trusticon.png";
import transparency from "../../assets/transparency.png";
import growth from "../../assets/growth.png";

function AboutCards() {
  return (
    <section className="about-container">
      <div className="card-container">
        <Card
          className="my-contactus-card"
          headingClassName="card-contactus-heading-custom"
          subheadingClassName="card-contactus-subheading-custom"
          heading="Trust"
          subheading="Building lasting relationships through reliability and integrity"
          image={trusticon}
          circleColor="#FFDDEE"
        />
        <Card
          className="my-contactus-card"
          headingClassName="card-contactus-heading-custom"
          subheadingClassName="card-contactus-subheading-custom"
          heading="Transparency"
          subheading="Clear communication and honest dealings in every transaction"
          image={transparency}
          circleColor="#BCFCDD"
        />
        <Card
          className="my-contactus-card"
          headingClassName="card-contactus-heading-custom"
          subheadingClassName="card-contactus-subheading-custom"
          heading="Growth"
          subheading="Committed to your success and our continuous improvement"
          image={growth}
          circleColor="#BBE5FD"
        />
        <Card
          className="my-contactus-card"
          headingClassName="card-contactus-heading-custom"
          subheadingClassName="card-contactus-subheading-custom"
          heading="Innovation"
          subheading="Leveraging technology to simplify property management"
          image={growth}
          circleColor="#BBE5FD"
        />
      </div>
    </section>
  );
}

export default AboutCards;
