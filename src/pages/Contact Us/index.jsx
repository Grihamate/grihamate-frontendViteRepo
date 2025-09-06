import React from "react"
import HeroSection from "./components/HeroSection/index"
import "./style.css"
import ContactForm from "./components/ContactForm"
import Card from "../../component/AboutCard/index"
import mapImg from "./assets/map.jpg"
import NewsLetter from "./components/NewsLetter"
import callIcon from "./assets/callIcon.svg"
import emailIcon from "./assets/emailIcon.svg"
import locationIcon from "./assets/locationIcon.svg"


const ContactUs = () => {
    return (
        <div className="contact-page">
           <HeroSection/>
           <ContactForm/>
           <div className="contact-us-cards-cont">
                 <Card 
                    className="my-contactus-card"
                    image={callIcon}
                    imageStyle={{width:"32px", height: "32px"}}
                    headingClassName="card-contactus-heading-custom" 
                    subheadingClassName="card-contactus-subheading-custom"
                    heading="Contact Phone Number"
                    subheading="+91 7011769523" 
                />

                 <Card 
                    className="my-contactus-card"
                    image={emailIcon}
                    imageStyle={{width:"32px", height: "32px"}}
                    headingClassName="card-contactus-heading-custom" 
                    subheadingClassName="card-contactus-subheading-custom"
                    heading="Our Email address"
                    subheading="Grihamateoffical@gmail.com" 
                 />

                 <Card 
                    className="my-contactus-card"
                    image={locationIcon}
                    imageStyle={{width:"32px", height: "32px"}}
                    headingClassName="card-contactus-heading-custom" 
                    subheadingClassName="card-contactus-subheading-custom"
                    heading="Our Location"
                    subheading="xzy" 
                 />
           </div>
           <div className="map-container">
              <img src={mapImg}/>
           </div>

           <NewsLetter/>
           
        </div>
    )
}



export default ContactUs;