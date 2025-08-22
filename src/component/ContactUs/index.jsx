import "./style.css";
import bgImage from "../../assets/contactImg.png"; // tum apni image yahan import karo

export default function ContactSection() {
  return (
    <div
      className="contact-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="contact-container">
        <div className="contact-form">
          <div className="form-text">
                <h2>Get in touch</h2>
                <p>
                    Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus
                </p>
          </div>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your mail" />
          <input type="text" placeholder="Your phone" />
          <textarea placeholder="Your message"></textarea>
          <button>Send message</button>
        </div>

    
        <div className="contact-text">
          <h1>Putting a plan to action, to assure your satisfaction!</h1>
          <p>
            Arcu laoreet malesuada nunc eget. Fermentum ut dui etiam aliquam habitant elit
          </p>
        </div>
      </div>
    </div>
  );
}


