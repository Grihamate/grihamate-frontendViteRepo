// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { ChevronDown } from "lucide-react";
// import { fetchUserProfile } from "../../../service/fetchuserdetail";
// import { deleteUserAccount } from "../../../service/deleteUser";
// import headerLogo from "../../../assets/headerLogo.png";
// import loginIcon from "../../../assets/loginIcon.png";
// import plusIcon from "../../../assets/plusIcon.png";
// import ConfirmationModal from "../../ConfirmationModal";
// import AddPropertyModal from "../AddPropertyForm";
// import "./style.css";

// const Header = () => {
//   const [user, setUser] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isAddPropertyModalOpen, setIsAddPropertyModalOpen] = useState(false); // State for Add Property Modal
//   const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] = useState(false); // State for Confirmation Modal
//   const [message, setMessage] = useState(""); // Modal message
//   const navigate = useNavigate();
//   const dropdownRef = useRef();

//   useEffect(() => {
//     const getUser = async () => {
//       try {
//         const userData = await fetchUserProfile();
//         setUser(userData);
//       } catch (error) {
//         console.error("Failed to fetch user:", error);
//         setUser(null);
//       }
//     };

//     getUser();
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleLoginClick = () => {
//     navigate("/login");
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     setDropdownOpen(false);
//     navigate("/login");
//   };

//   const handleRemoveAccount = () => {
//     setMessage("This action cannot be undone.");
//     setIsConfirmDeleteModalOpen(true); // Open confirmation modal for account deletion
//   };

//   const confirmDeleteAccount = async () => {
//     if (!user) return;

//     try {
//       const result = await deleteUserAccount(user.id);
//       alert(result.message || "Account deleted");
//       localStorage.removeItem("token");
//       setUser(null);
//       navigate("/"); // redirect to home
//     } catch (err) {
//       alert(err.message || "Failed to delete account");
//     }

//     setIsConfirmDeleteModalOpen(false); // Close the confirmation modal after action
//   };

//   return (
//     <header className="header">
//       <div className="navbar">
//         <div className="logo-section">
//           <img src={headerLogo} alt="Logo" className="logo" />
//         </div>

//         <nav className="links">
//           <Link to="/"><p className="link">Home</p></Link>
//           <Link to="/rent"><p className="link">Rent</p></Link>
//           <Link to="/sale"><p className="link">Sale</p></Link>
//           <Link to="/about"><p className="link">About us</p></Link>
//           <Link to="/contact"><p className="link">Contact us</p></Link>
//         </nav>

        
//         <div className="actions">
//           {user ? (
//             <div
//               ref={dropdownRef}
//               style={{ position: "relative", cursor: "pointer" }}
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   gap: "4px",
//                 }}
//               >
//                 <img
//                   src={user.profileImage || "/assets/default-avatar.png"}
//                   alt="User Avatar"
//                   style={{
//                     width: "32px",
//                     height: "32px",
//                     borderRadius: "50%",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
//                   <span>{user.fullname}</span>
//                   <ChevronDown size={16} />
//                 </div>
//               </div>

//               {dropdownOpen && (
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: "100%",
//                     right: 0,
//                     background: "white",
//                     boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
//                     borderRadius: "4px",
//                     padding: "8px",
//                     zIndex: 10,
//                     minWidth: "140px",
//                   }}
//                 >
//                   <button
//                     onClick={handleLogout}
//                     style={{
//                       background: "none",
//                       border: "none",
//                       width: "100%",
//                       textAlign: "left",
//                       padding: "8px",
//                       cursor: "pointer",
//                       fontSize: "14px",
//                     }}
//                   >
//                     Logout
//                   </button>

//                   <button
//                     onClick={handleRemoveAccount}
//                     style={{
//                       background: "none",
//                       border: "none",
//                       width: "100%",
//                       textAlign: "left",
//                       padding: "8px",
//                       cursor: "pointer",
//                       fontSize: "14px",
//                       color: "red",
//                     }}
//                   >
//                     Remove Account
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <div className="actions">
//               <button className="list-btn" onClick={() => setIsAddPropertyModalOpen(true)}>
//                 <img src={plusIcon} alt="plus" /> List Property
//               </button>
//               <button className="login-btn" onClick={handleLoginClick}>
//                 <img src={loginIcon} alt="login" /> Login
//               </button>
//             </div>
         
//           )}

        
//         </div>
//       </div>

//       {/* Render AddPropertyModal when isAddPropertyModalOpen is true */}
//      {isAddPropertyModalOpen && (
//         <div
//           className="modal-backdrop"
//           onClick={() => setIsAddPropertyModalOpen(false)}  // backdrop click → close
//           >
      
//             <AddPropertyModal setIsModalOpen={setIsAddPropertyModalOpen} />
        
//         </div>
//         )
//       }

//       {/* Render Confirmation Modal when isConfirmDeleteModalOpen is true */}
//       {isConfirmDeleteModalOpen && (
//         <ConfirmationModal
//           isOpen={isConfirmDeleteModalOpen}
//           onClose={() => setIsConfirmDeleteModalOpen(false)}
//           onConfirm={confirmDeleteAccount}
//           message={message}
//         />
//       )}
//     </header>
//   );
// };

// export default Header;
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { fetchUserProfile } from "../../../service/fetchuserdetail";
import { deleteUserAccount } from "../../../service/deleteUser";
import headerLogo from "../../../assets/headerLogo.png";
import loginIcon from "../../../assets/loginIcon.png";
import plusIcon from "../../../assets/plusIcon.png";
import ConfirmationModal from "../../ConfirmationModal";
import AddPropertyModal from "../AddPropertyForm";
import "./style.css";

const Header = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAddPropertyModalOpen, setIsAddPropertyModalOpen] = useState(false); // State for Add Property Modal
  const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] = useState(false); // State for Confirmation Modal
  const [message, setMessage] = useState(""); // Modal message
  const navigate = useNavigate();
  const dropdownRef = useRef();

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setDropdownOpen(false);
    navigate("/login");
  };

  const handleRemoveAccount = () => {
    setMessage("This action cannot be undone.");
    setIsConfirmDeleteModalOpen(true); // Open confirmation modal for account deletion
  };

  const confirmDeleteAccount = async () => {
    if (!user) return;

    try {
      const result = await deleteUserAccount(user.id);
      alert(result.message || "Account deleted");
      localStorage.removeItem("token");
      setUser(null);
      navigate("/"); // redirect to home
    } catch (err) {
      alert(err.message || "Failed to delete account");
    }

    setIsConfirmDeleteModalOpen(false); // Close the confirmation modal after action
  };

  return (
    <header className="header">
      <div className="navbar">
        <div className="logo-section">
          <img src={headerLogo} alt="Logo" className="logo" />
        </div>

        <nav className="links">
          <Link to="/"><p className="link">Home</p></Link>
          <Link to="/rent"><p className="link">Rent</p></Link>
          <Link to="/sale"><p className="link">Sale</p></Link>
          <Link to="/about"><p className="link">About us</p></Link>
          <Link to="/contact"><p className="link">Contact us</p></Link>
        </nav>

        <div className="actions">
          {user ? (
            <div
              ref={dropdownRef}
              style={{ position: "relative", cursor: "pointer" }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <img
                  src={user.profileImage || "/assets/default-avatar.png"}
                  alt="User Avatar"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <span>{user.fullname}</span>
                  <ChevronDown size={16} />
                </div>
              </div>

              {dropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    background: "white",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    borderRadius: "4px",
                    padding: "8px",
                    zIndex: 10,
                    minWidth: "140px",
                  }}
                >
                  <button
                    onClick={handleLogout}
                    style={{
                      background: "none",
                      border: "none",
                      width: "100%",
                      textAlign: "left",
                      padding: "8px",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    Logout
                  </button>

                  <button
                    onClick={handleRemoveAccount}
                    style={{
                      background: "none",
                      border: "none",
                      width: "100%",
                      textAlign: "left",
                      padding: "8px",
                      cursor: "pointer",
                      fontSize: "14px",
                      color: "red",
                    }}
                  >
                    Remove Account
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button className="login-btn" onClick={handleLoginClick}>
              <img src={loginIcon} alt="login" /> Login
            </button>
          )}

          <button className="list-btn" onClick={() => setIsAddPropertyModalOpen(true)}>
            <img src={plusIcon} alt="plus" /> List Property
          </button>
        </div>
      </div>

      {/* Render AddPropertyModal when isAddPropertyModalOpen is true */}
      {isAddPropertyModalOpen && <AddPropertyModal setIsModalOpen={setIsAddPropertyModalOpen} />}

      {/* Render Confirmation Modal when isConfirmDeleteModalOpen is true */}
      {isConfirmDeleteModalOpen && (
        <ConfirmationModal
          isOpen={isConfirmDeleteModalOpen}
          onClose={() => setIsConfirmDeleteModalOpen(false)}
          onConfirm={confirmDeleteAccount}
          message={message}
        />
      )}
    </header>
  );
};

export default Header;

