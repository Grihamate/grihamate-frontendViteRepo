import "./style.css"
import heroImg from "./assets/heroImg.jpg"

const HeroSection = () => {
    return (
        <div className="contact-hero-section">
           <img src={heroImg}/>
             <div className="contact-hero-content">
                <h1>Let's Connect</h1>
                <p>Find your perfect home or investment opportunity</p>        
            </div>

        </div>
    )
}

export default HeroSection;