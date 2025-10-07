import "./style.css";
import AuthLayout from "../AuthLayout";
import AuthHeader from "../AuthHeader";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../service/Registeruser";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await loginUser(phone, password);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success(data.message || "Login successful");
      navigate("/"); // redirect to homepage
    } catch (err) {
      setError(err.message || "Login failed");
      toast.error(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Link
        to="/"
        className="back-btn"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginLeft: "16px",
          marginTop: "30px",
        }}
      >
        <ArrowLeft size={24} />
        <span>Back To Home</span>
      </Link>

      <AuthLayout>
        <div className="inner-container">
          <AuthHeader />
          <p className="heading">Welcome Back</p>
          <p className="subheading">Sign in to your account to continue</p>

          <form className="login-form" onSubmit={handleLogin}>
            <label>Phone</label>
            <br />
            <input
              type="text"
              placeholder="Enter phone number..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <br />

            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />

            <input
              type="submit"
              value={loading ? "Logging in..." : "Login"}
              className="btn"
              disabled={loading}
            />
          </form>

          {error && <p className="error">{error}</p>}

          <div className="confirmation">
            <Link
              to="/forgotpassword"
              style={{ color: "#3749A6", textDecoration: "underline" }}
            >
              Forgot Password
            </Link>
            <div>
              Don’t have an account?{" "}
              <Link
                to="/register"
                style={{ color: "#3749A6", textDecoration: "underline" }}
              >
                Register now
              </Link>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default Login;
