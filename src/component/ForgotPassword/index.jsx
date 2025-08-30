import "./style.css"

const ForgotPasswordPassWord = () => {
    return (
        <div className="wrapper">
            <div className="container-auth-head">
               <div className="inner-container-pass">
                <div className="forgot-heading">
                   <p className="heading">Forgot Password?</p>
                   <p className="subheading">No Worries. We’ll send you reset instructions.</p>
                </div>
                <form className="forgot-form" >
                    <input
                        type="number"
                        placeholder="Enter your email"
                   /> 
                   <input
                    type="submit"
                    className="btn"
                    value={"Rest Password"}
                   />
                </form>
               </div>
                <p className="arrow-back">&larr; &nbsp;  Back to log in</p>
            </div>
        </div>
    )
}


export default ForgotPasswordPassWord;



