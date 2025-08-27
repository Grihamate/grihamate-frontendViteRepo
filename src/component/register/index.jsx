// import React from "react";
// import "./style.css";
// import AuthLayout from "../AuthLayout";
// import AuthHeader from "../AuthHeader";
// import { Link } from "react-router-dom";



// const Register = () => {
//   return (
//     <AuthLayout>
//       <div className="inner-container">
   
//         <AuthHeader/>

//         <p className="heading">Create Account</p>
//         <p className="subheading">Join us to find your perfect property</p>

//         <form>
//              <label>Full Name</label>
//           <br />
//           <input type="text" placeholder="Enter your name..." />
//           <br />
//            <label>E-mail</label>
//           <br />
//           <input type="email" placeholder="Enter your email address..." />
//           <br />
//           <label>Phone</label>
//           <br />
//           <input type="number" placeholder="Enter here..." />
//           <br />
//           <label>Password</label>
//           <br />
//           <input type="password" placeholder="Enter password..." />
//           <br />
//           <input type="submit" value="Create Account" className="btn" />
//         </form>

//         <div className="confirmation">
//           <span>
//             Already have an account? <Link to='/login'>Sign in</Link>
//           </span>
//         </div>
//       </div>
//     </AuthLayout>
//   );
// };

// export default Register;
import React, { useState } from "react";
import "./style.css";
import AuthLayout from "../AuthLayout";
import AuthHeader from "../AuthHeader";
import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../../service/Registeruser";

const Register = () => {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await registerUser(formData);
      console.log("Register Success:", result);

      alert("Registration successful!");
      navigate("/login"); // redirect to login
    } catch (error) {
      alert("Registration failed. Try again.");
    }
  };

  return (
    <AuthLayout>
      <div className="inner-container">
        <AuthHeader />

        <p className="heading">Create Account</p>
        <p className="subheading">Join us to find your perfect property</p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
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

          <label>E-mail</label>
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

          <label>Phone</label>
          <br />
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter here..."
            required
          />
          <br />

          <label>Password</label>
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

          <input type="submit" value="Create Account" className="btn" />
        </form>

        <div className="confirmation">
          <span>
            Already have an account? <Link to="/login">Sign in</Link>
          </span>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
