import "./style.css";
import bgImage from "../../assets/contactImg.png";
import { sendContactMessage } from "../../service/contactService";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactSection() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // new loading state

  const handleSubmit = async () => {
    // Mobile number validation
    const phonePattern = /^[0-9]{10}$/; // exactly 10 digits
    if (!phonePattern.test(phone)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    setLoading(true); // start loading

    try {
      const response = await sendContactMessage({ fullname, email, phone, message });

      // Show success toast
      toast.success(response.message || "Message sent successfully!");

      // Clear form fields
      setFullname('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err) {
      toast.error(err.message || "Something went wrong.");
    } finally {
      setLoading(false); // stop loading
    }
  };

  // Limit input to 10 digits
  const handlePhoneChange = (e) => {
    const value = e.target.value.slice(0, 10); // max 10 characters
    setPhone(value.replace(/\D/g, "")); // remove non-numeric characters
  };

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

          {/* Form fields */}
          <input
            type="text"
            placeholder="Your name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your phone"
            value={phone}
            onChange={handlePhoneChange}
          />
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          {/* Submit button */}
          <button onClick={handleSubmit} disabled={loading}>
            {loading ? "Sending..." : "Send message"}
          </button>
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
