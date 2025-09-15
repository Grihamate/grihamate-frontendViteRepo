import "./style.css";
import PersonImg from "./assets/personImg.png"
import { useState } from "react";
import { toast } from "react-toastify";
import { sendContactMessage } from "../../../../service/contactService";

const ContactForm = () => {

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
        <div className="contactus-form-cont">
            <div className="contactus-form-inner">
                 <img src={PersonImg}/>

                 <div className="contactus-form">
                    <h1>Get in touch with us.</h1>
                   <form className="contactus-main-form">
                    <div className="contactus-input-group">
                        <label for="name">Name:</label>
                        <input id="name" name="name" type="text" placeholder="Enter Name"
                          value={fullname}
                          onChange={(e) => setFullname(e.target.value)}
                        />
                    </div>

                    <div className="contactus-input-group">
                        <label for="email">Email:</label>
                        <input id="email" 
                        name="email"
                         type="text"
                          placeholder="Enter Email"
                          value={email}
                          onChange={handleEmailChange}
                          />
                    </div>

                      {emailError && <p style={{ color: "red", fontSize: "12px" }}>{emailError}</p>} {/* show error */}

                    <div className="contactus-input-group">
                        <label for="phone">Phone</label>
                        <input id="phone"
                          name="phoneNo" 
                          pattern="\d{10}"
                          maxlength="10"
                          minlength="10"
                          placeholder="Enter Your Number"
                          value={phone}
                          onChange={handlePhoneChange}
                        />
                    </div>
                    <div className="contactus-textarea-group">
                        <label for="message">Message</label>
                        <textarea id="name" name="message" 
                        type="text" 
                        placeholder="Write Mesage"
                          value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                    <div className="form-button-wrapper" >
                      <button onClick={handleSubmit} disabled={loading}>
                       {loading ? "Sending..." : "Submit"}
                      </button>
                     </div>
                   </form>

                </div>
                 
            </div>

        </div>
    )
}


export default ContactForm;



