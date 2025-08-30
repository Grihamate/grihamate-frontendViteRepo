import "./style.css"

 const ResetSuccessPage = () => {
    return (
          <div className="wrapper">
            <div className="reset-container">
               <div className="reset-success-inner-cont">
                <div className="reset-success-heading">
                   <p className="heading">Password Reset</p>
                   <p className="subheading">We sent a Code to <span>prajapapatipooja232@gmail.com</span></p>
                </div>
                   
                   <input
                    type="submit"
                    className="reset-btn"
                    value={"Rest Password"}
                />
        
               </div>

            </div>
        </div>
    )
}


export default ResetSuccessPage;