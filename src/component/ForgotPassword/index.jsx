

import { useState } from "react";
import { forgotPassword } from "../../service/forgotPassword";
// adjust path if needed

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await forgotPassword(email);
      setMessage(res.message); // "Reset link sent to your email."
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="wrapper">
      <div className="container-auth-head">
        <div className="inner-container-pass">
          <div className="forgot-heading">
            <p className="heading">Forgot Password?</p>
            <p className="subheading">No Worries. We’ll send you reset instructions.</p>
          </div>

          <form className="forgot-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="submit"
              className="btn"
              value="Reset Password"
            />
          </form>

          {/* Show success or error messages */}
          {message && <p style={{ color: "green" }}>{message}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <p className="arrow-back">&larr; &nbsp; Back to log in</p>
      </div>
    </div>
  );
};

export default ForgotPassword;




