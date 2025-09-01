import { useNavigate } from "react-router-dom";
import "./style.css";

const ResetSuccessPage = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login"); // ✅ redirect to login page
  };

  return (
    <div className="wrapper">
      <div className="pass-success-container">
        <div className="reset-success-inner-cont">
          <div className="reset-success-heading">
            <p className="heading">Password Reset</p>
            <p className="subheading">
              Your password has been successfully reset. <br />
              Click below to log in magically.
            </p>
          </div>

          <button
            type="button"
            className="reset-btn"
            onClick={goToLogin} // ✅ navigate on click
          >
            Go to login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetSuccessPage;
