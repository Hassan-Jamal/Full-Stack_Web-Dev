import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find((user) => user.email === email && user.password === password);

    if (validUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(validUser));
      setMessage("✅ Login successful! Redirecting...");
      setTimeout(() => (window.location.href = "/home"), 1500);
    } else {
      setMessage("❌ Invalid email or password.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Welcome Back</h2>
      <p>Login to continue shopping</p>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="📧 Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="🔒 Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login 🔑</button>
      </form>
      {message && <p className="auth-message">{message}</p>}
      <p className="switch-link">
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
};

export default Login;
