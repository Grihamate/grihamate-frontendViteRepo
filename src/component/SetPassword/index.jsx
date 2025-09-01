import "./style.css"

const SetPassword = () => {
    return (
        <div className="wrapper">
            <div className="container-auth-head">
               <div className="inner-container-pass">
                <div className="forgot-heading">
                   <p className="heading">Set New Password</p>
                   <p className="subheading">Your new password must by different to 
                     previously used passwords.</p>
                </div>
                <form className="forgot-form" >
                    <input
                        type="text"
                        placeholder="Password"
                   /> 
                    <input
                        type="text"
                        placeholder="Confirm Password"
                   /> 
                   <input
                    type="submit"
                    className="btn"
                    value={"Continue"}
                   />
                </form>
               </div>
                <p className="arrow-back">&larr; &nbsp;  Back to log in</p>
            </div>
        </div>
    )
}


export default SetPassword;



