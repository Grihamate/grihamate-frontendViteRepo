import "./style.css"
import {useState} from "react"
import personImg from "../../assets/personImg.jpg"
import {subscribe} from "../../../../service/subscribe"
import { toast } from "react-toastify";

const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(''); // new state for email error
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
    setEmailError("Please enter a valid email address");
    } else {
    setEmailError(""); // clear error if valid
    }
  }

   
    const handleSubmit = async (e) => {
            e.preventDefault();
    
            if (!email) {
              toast.error("Email is required");
              return;
            }
            if (emailError) {
              toast.error(emailError);
              return;
            }

            setLoading(true);
        
            try {
              const response = await subscribe({email});
              toast.success(response.message || "Subscribe Successfully!");
              setEmail('');
             
            } catch (err) {
              toast.error(err.message || "Something went wrong.");
            } finally {
              setLoading(false);
            }
        }
        
      

    return (
        <div className="news-container">
            
            <div class="newsletter-content">
                <h2>Subscribe Our Newsletter</h2>
                <p>Stay updated with the latest property listings, market trends & investment tips</p>
                
                <form class="newsletter-form"  onSubmit={handleSubmit}>
                      
                    <input
                        type="email"
                        placeholder="Enter Your Mail"
                        required value={email}
                        onChange={handleEmailChange}
                    />
                    <button type="submit" > {loading ? "Sending..." : "Subscribe Now"}</button>
                </form>
                {email && emailError.trim().length > 0 && (
                    <p style={{ color: "red", fontSize: "12px" }}>{emailError}</p>
                  )}
            </div>


           
            <img src={personImg} alt="Newsletter" />
          
        </div>
    )
}


export default NewsLetter;