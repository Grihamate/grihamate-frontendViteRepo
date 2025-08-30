// import React, { useState } from 'react';
import "./style.css";
import bgImage from "../../assets/contactImg.png";
import { sendContactMessage } from "../../service/contactService";
import { useState } from "react";

export default function ContactSection() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await sendContactMessage({ fullname, email, phone, message });
      alert(response.message || "Message sent!");
      
      // Optional: Clear form
      setFullname('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err) {
      alert(err.message || "Something went wrong.");
    }
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
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button onClick={handleSubmit}>Send message</button>
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
