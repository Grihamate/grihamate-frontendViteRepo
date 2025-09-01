import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../services/authService"; 
import { toast } from "react-toastify"; // ✅ Import toast
import "./style.css";

const SetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      await resetPassword(token, password, confirmPassword);
      toast.success("Password reset successful!");
      setTimeout(() => navigate("/login"), 2000); // wait for toast before redirect
    } catch (err) {
      toast.error(err.message || "Password reset failed");
    } finally {
      setLoading(false);
    }
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <input
            type="submit"
            className="btn"
            value={loading ? "Processing..." : "Continue"}
            disabled={loading}
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
