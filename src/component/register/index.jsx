import "./style.css";
import AuthLayout from "../AuthLayout";
import AuthHeader from "../AuthHeader";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { registerUser } from "../../service/Registeruser";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // ✅ Allow only numbers and max 10 digits
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length <= 10) {
        setFormData({ ...formData, phone: numericValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // ✅ Phone validation
    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error("Phone number must be exactly 10 digits");
      setLoading(false);
      return;
    }

    try {
      const result = await registerUser(formData);
      console.log("Register Success:", result);

      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      toast.error(error.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="inner-container">
        <AuthHeader />

        <p className="heading">Create Account</p>
        <p className="subheading">Join us to find your perfect property</p>

        <form className="register-form" onSubmit={handleSubmit}>
          <label>Full Name*</label>
          <br />
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Enter your name..."
            required
          />
          <br />

          <label>E-mail*</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address..."
            required
          />
          <br />

          <label>Phone*</label>
          <br />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number..."
            required
          />
          <br />

          <label>Password*</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password..."
            required
          />
          <br />

          <input
            type="submit"
            value={loading ? "Creating Account..." : "Create Account"}
            className="btn"
            disabled={loading}
          />
        </form>

        <div className="confirmation">
          <span>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ color: "#3749A6", textDecoration: "underline" }}
            >
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
