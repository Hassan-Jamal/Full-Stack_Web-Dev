import React, { useState, useEffect } from "react";
import "./profile.css";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    profilePic: "https://via.placeholder.com/150",
  });
  const [editMode, setEditMode] = useState(false);
  const [newPic, setNewPic] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setEditMode(false);
  };

  const handlePicChange = () => {
    setUser({ ...user, profilePic: newPic });
    localStorage.setItem("user", JSON.stringify({ ...user, profilePic: newPic }));
    setNewPic("");
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <img src={user.profilePic} alt="Profile" className="profile-pic" />
      <input
        type="text"
        placeholder="Profile Image URL"
        value={newPic}
        onChange={(e) => setNewPic(e.target.value)}
      />
      <button onClick={handlePicChange}>Update Picture</button>
      {editMode ? (
        <>
          <input type="text" name="name" value={user.name} onChange={handleChange} />
          <input type="email" name="email" value={user.email} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <button onClick={() => setEditMode(true)}>Edit Profile</button>
        </>
      )}
      <button className="logout-btn">Logout</button>
    </div>
  );
};

export default Profile;
