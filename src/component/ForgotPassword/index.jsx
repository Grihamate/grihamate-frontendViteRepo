import { useState } from "react";
import { forgotPassword } from "../../service/forgotPassword";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // ✅ new state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true); // ✅ start loading

    try {
      const res = await forgotPassword(email);
      setMessage(res.message); // "Reset link sent to your email."
      setEmail("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // ✅ stop loading
    }
  };

  return (
    <div className="wrapper">
      <div className="container-auth-head">
        <div className="inner-container-pass" style={{ gap: "0px" }}>
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
              style={{
                borderRadius: "8px",
                width: "100%",
                padding: "12px 16px",
                backgroundColor: "#F4F5F7",
                border: "1px solid #C4C4D6",
                marginBottom: "10px",
              }}
            />
            <input
              type="submit"
              className="btn"
              value={loading ? "Submitting..." : "Submit"} // ✅ dynamic button text
              disabled={loading} // ✅ disable button while submitting
            />
          </form>

          {/* Show success or error messages */}
          {message && <p style={{ color: "green" }}>{message}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <Link to="/login" className="arrow-back">
          &larr; &nbsp; Back to log in
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;




