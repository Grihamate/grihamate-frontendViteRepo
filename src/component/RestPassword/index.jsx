import "./style.css"
import {Link} from "react-dom";

 const PasswordReset = () => {
    return (
          <div className="wrapper">
            <div className="reset-container">
               <div className="pass-reset-inner-container">
                <div className="reset-heading">
                   <p className="heading">Password Reset</p>
                   <p className="subheading">We sent a Code to <span>prajapapatipooja232@gmail.com</span></p>
                </div>
                <form className="reset-form">    
                  <div className="otp-box-bar">
                     <input/>
                     <input/>
                     <input/>
                     <input/>
                     <input/>

                  </div>            
                   <input
                    type="submit"
                    className="btn"
                    value={"Rest Password"}
                   />
                </form>
               <div className="reset-bottom-desc">
                 <div> Don’t receive the email?<span> Click to resend  </span></div>  
                 <p className="reset-arrow-back">&larr; &nbsp;  Back to log in</p>
               </div>
               </div>
              
            </div>
        </div>
    )
}


export default PasswordReset;