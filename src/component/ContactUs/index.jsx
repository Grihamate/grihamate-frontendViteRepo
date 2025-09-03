import "./style.css";
import bgImage from "../../assets/contactImg.png";
import { sendContactMessage } from "../../service/contactService";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactSection() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(''); // new state for email error
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Real-time email validation
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError(""); // clear error if valid
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.slice(0, 10); 
    setPhone(value.replace(/\D/g, ""));
  };

  const handleSubmit = async () => {
    if (!email) {
      toast.error("Email is required");
      return;
    }
    if (emailError) {
      toast.error(emailError);
      return;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    if (!fullname.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!message.trim()) {
      toast.error("Please enter a message");
      return;
    }

    setLoading(true);

    try {
      const response = await sendContactMessage({ fullname, email, phone, message });
      toast.success(response.message || "Message sent successfully!");
      setFullname('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err) {
      toast.error(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="contact-container">
        <div className="contact-form">
          <div className="form-text">
            <h2>Get in touch</h2>
            <p>Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus</p>
          </div>

          <input
            type="text"
            placeholder="Your name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p style={{ color: "red", fontSize: "12px" }}>{emailError}</p>} {/* show error */}

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

          <button onClick={handleSubmit} disabled={loading}>
            {loading ? "Sending..." : "Send message"}
          </button>
        </div>

        <div className="contact-text">
          <h1>Putting a plan to action, to assure your satisfaction!</h1>
          <p>Arcu laoreet malesuada nunc eget. Fermentum ut dui etiam aliquam habitant elit</p>
        </div>
      </div>
    </div>
  );
}
