import "./style.css"

 const PasswordReset = () => {
    return (
          <div className="wrapper">
            <div className="reset-container">
               <div className="reset-inner-container">
                <div className="reset-heading">
                   <p className="heading">Password Reset</p>
                   <p className="subheading">We sent a Code to <span>prajapapatipooja232@gmail.com</span></p>
                </div>
                <form className="reset-form">               
                   <input
                    type="submit"
                    className="btn"
                    value={"Rest Password"}
                   />
                </form>
               </div>
                <p className="reset-arrow-back">&larr; &nbsp;  Back to log in</p>
            </div>
        </div>
    )
}


export default PasswordReset;