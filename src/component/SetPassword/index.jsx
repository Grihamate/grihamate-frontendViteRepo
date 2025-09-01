import { useParams, useNavigate } from "react-router-dom";
import "./style.css";

const SetPassword = () => {
  const { token } = useParams();   // ✅ get token from URL
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Call your API here with the token + new password
    console.log("Reset token:", token);

    // after success redirect
    navigate("/resetSuccess");
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="forgot-heading">
          <p className="heading">Set New Password</p>
          <p className="subheading">
            Your new password must be different from previously used passwords.
          </p>
        </div>
        <form className="forgot-form" onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Password"
          />
          <input
            type="password"
            placeholder="Confirm Password"
          />
          <input
            type="submit"
            className="btn"
            value="Continue"
          />
        </form>
        <p className="arrow-back" onClick={() => navigate("/login")}>
          &larr; &nbsp; Back to log in
        </p>
      </div>
    </div>
  );
};

export default SetPassword;
