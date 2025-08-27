
import React from "react";
import "./style.css";
import AuthLayout from "../AuthLayout";
import AuthHeader from "../AuthHeader";

import headerLogo from "../../../src/assets/headerLogo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <AuthLayout>
      <div className="inner-container">
        {/* <div className="description">
          <img src={headerLogo} alt="Logo" />
          <h1>Grihamate</h1>
        </div> */}
        <AuthHeader/>

        <p className="heading">Welcome Back</p>
        <p className="subheading">Sign in to your account to continue</p>

        <form>
          <label>Phone</label>
          <br />
          <input type="number" placeholder="Enter here..." />
          <br />
          <label>Password</label>
          <br />
          <input type="password" placeholder="Enter password..." />
          <br />
          <input type="submit" value="Login" className="btn" />
        </form>

        <div className="confirmation">
          <span>
            Don’t have an account? <Link to='/register' >Register now</Link>
          </span>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
