import "./style.css"

 const ResetSuccessPage = () => {
    return (
          <div className="wrapper">
            <div className="pass-success-container">
               <div className="reset-success-inner-cont">
                <div className="reset-success-heading ">
                   <p className="heading">Password Reset</p>
                   <p className="subheading">Your password has been successfully reset.
                    Click below to log in magically.</p>
                </div>
                   
                   <input
                    type="submit"
                    className="reset-btn"
                    value={"Go to login"}
                />
        
               </div>

            </div>
        </div>
    )
}


export default ResetSuccessPage;