import React, { useEffect, useState } from "react";
import { Edit3, User } from "lucide-react";
import { updateUserProfile } from "../../../service/dashboard";
import { toast } from "react-toastify"; // ✅ import toast
import "./style.css";

const UserProfile = ({ user, setUser }) => {
    const [loading, setLoading] = useState(false); // ✅ new state
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
       setLoading(true); // ✅ show loading
    try {
      const token = localStorage.getItem("token"); // get token
      const updated = await updateUserProfile(user.id, formData, token);

       console.log("updated from API:", updated); 

      if (updated?.user) {
          setUser(prev => ({
            ...prev,        
            user: updated.user 
          }));
          toast.success("Profile updated successfully!");
      }

      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating profile:", error);
            toast.error("Failed to update profile. Please try again.");
    } finally {
    setLoading(false);  // ✅ always reset loading
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
                    <button
                  type="submit"
                  className="save-btn"
                  disabled={loading} // ✅ disable while saving
                >
                  {loading ? "Saving..." : "Save"} {/* ✅ change label */}
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
