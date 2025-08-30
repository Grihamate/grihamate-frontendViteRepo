import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import headerLogo from "../../../assets/headerLogo.png"
import loginIcon from "../../../assets/loginIcon.png"
import plusIcon from "../../../assets/plusIcon.png"
import "./style.css";
import { User } from "lucide-react";
import { fetchUserProfile } from "../../../service/fetchuserdetail";
import { useState ,useEffect } from "react";

const Header = () => {
 const [user, setUser] = useState(null);
  

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await fetchUserProfile();
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setUser(null);
      }
    };

    getUser();
  }, []);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login"); // login page par le jayega
  };

  return (
    
    <header className="header">
      <div className="navbar">
        <div className="logo-section">
          <img src={headerLogo} alt="Logo" className="logo" />
        </div>

        <nav className="links">
          <Link to="/">
            <p className="link">Home</p>
          </Link>
          <Link to="/rent">
            <p className="link">Rent</p>
          </Link>
          <Link to="/sale">
            <p className="link">Sale</p>
          </Link>
          <Link to="/about">
            <p className="link">About us</p>
          </Link>
          <Link to="/contact">
            <p className="link">Contact us</p>
          </Link>
        </nav>

        <div className="actions">
     
          {
            user ? (
<div style={{ display: 'flex', flexDirection:'column' ,alignItems: 'center', gap: '8px' }}>
  <img
    src={user.profileImage || '/assets/default-avatar.png'}
    alt="User Avatar"
    style={{
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      objectFit: 'cover',
    }}
  />
  <span >{user.fullname}</span>
</div>

            ):
           <button className="login-btn" onClick={handleLoginClick}>
            <img src={loginIcon} alt="login" /> Login
          </button>
          }
          <button className="list-btn">
            <img src={plusIcon} alt="plus" /> List Property
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
