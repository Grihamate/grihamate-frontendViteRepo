import React from "react"
import HeroSection from "./components/HeroSection/index"
import "./style.css"
import ContactForm from "./components/ContactForm"
import Card from "../../component/AboutCard/index"
import mapImg from "./assets/map.jpg"
import NewsLetter from "./components/NewsLetter"

const ContactUs = () => {
    return (
        <div className="contact-page">
           <HeroSection/>
           <ContactForm/>
           <div className="contact-us-cards-cont">
                 <Card className="my-wide-card"   headingClassName="card-heading-custom" subheadingClassName="card-subheading-custom"
                heading="Contact Phone Number" subheading="Clear communication and honest dealings in every transaction" />

                 <Card className="my-wide-card"   headingClassName="card-heading-custom" subheadingClassName="card-subheading-custom"
                heading="Transparency" subheading="Clear communication and honest dealings in every transaction" />

                 <Card className="my-wide-card"   headingClassName="card-heading-custom" subheadingClassName="card-subheading-custom"
                heading="Transparency" subheading="Clear communication and honest dealings in every transaction" />
           </div>
           <div className="map-container">
              <img src={mapImg}/>
           </div>

           <NewsLetter/>
           
        </div>
    )
}



export default ContactUs;