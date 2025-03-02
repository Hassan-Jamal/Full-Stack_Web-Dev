import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const navigate = useNavigate();

  // Load user data from localStorage
  const storedUser = JSON.parse(localStorage.getItem("user")) || {};

  const [user, setUser] = useState({
    name: storedUser.name || "",
    email: storedUser.email || "",
    profilePic: storedUser.profilePic || "https://via.placeholder.com/150",
  });

  const [editMode, setEditMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // Handle input field changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle profile picture upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Save updated profile details
  const handleSave = () => {
    const updatedUser = { ...user };
    if (selectedImage) {
      updatedUser.profilePic = selectedImage;
      setSelectedImage(null);
    }
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setEditMode(false);
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="title">Profile</h2>
        <img src={selectedImage || user.profilePic} alt="Profile" className="profile-pic" />

        {editMode && (
          <input type="file" accept="image/*" onChange={handleImageChange} className="file-input" />
        )}

        {editMode ? (
          <>
            <input type="text" name="name" value={user.name} onChange={handleChange} className="input-field" placeholder="Enter your name" />
            <input type="email" name="email" value={user.email} onChange={handleChange} className="input-field" placeholder="Enter your email" />
            <button onClick={handleSave} className="save-btn">Save</button>
          </>
        ) : (
          <>
            <h3 className="user-name">{user.name || "Your Name"}</h3>
            <p className="user-email">{user.email || "Your Email"}</p>
            <button onClick={() => setEditMode(true)} className="edit-btn">Edit Profile</button>
          </>
        )}

        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
