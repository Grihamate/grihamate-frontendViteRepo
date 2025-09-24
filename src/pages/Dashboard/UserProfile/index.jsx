import React, { useEffect, useState } from "react";
import { Edit3, User } from "lucide-react";
import { updateUserProfile } from "../../../service/dashboard";
import "./style.css";

const UserProfile = ({ user, setUser }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        fullname: user.fullname || "",
        email: user.email || "",
        phone: user.phone || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // get token
      const updated = await updateUserProfile(user.id, formData, token);

      if (updated?.user) {
        // update parent state so UI refreshes instantly
        setUser(updated.user);
      }

      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="userprofile-container">
      <div className="user-info">
        <div className="user-avatar">
          <User size={64} className="user-avatar-icon" />
        </div>

        <div className="user-details">
          <span className="user-name">{user.fullname || "N/A"}</span>
          <div className="user-detail-item">
            <span>{user.email || "N/A"}</span>
          </div>
          <div className="user-detail-item">
            <span>{user.phone || "N/A"}</span>
          </div>
        </div>
      </div>

      <button className="edit-btn" onClick={() => setIsModalOpen(true)}>
        <Edit3 size={16} className="edit-icon" /> Edit Profile
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Edit Profile</h3>
            <form className="profile-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="modal-actions">
                <button type="submit" className="save-btn">
                  Save
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
