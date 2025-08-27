import React, { useState } from "react";
import "./style.css";
import AuthLayout from "../AuthLayout";
import AuthHeader from "../AuthHeader";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../service/Registeruser";

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

      // Save token and user in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert(data.message);
      navigate("/dashboard"); // or wherever you want
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="inner-container">
        <AuthHeader />

        <p className="heading">Welcome Back</p>
        <p className="subheading">Sign in to your account to continue</p>

        <form onSubmit={handleLogin}>
          <label>Phone</label>
          <br />
          <input
            type="number"
            placeholder="Enter here..."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          <span>
            Don’t have an account? <Link to="/register">Register now</Link>
          </span>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;

