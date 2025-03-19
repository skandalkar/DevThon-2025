import React, { useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
// import LoginPage from "/src/Components/LoginPage.jsx";
// import "./Header.css";
// import "./About.css"; // Import CSS styles
import { FaUniversity, FaUsers, FaLightbulb, FaAdjust } from "react-icons/fa";
import './LoginPage.css'; // Import the CSS file for styling

const Login = () => {
  const [role, setRole] = useState("Principal");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Function to validate email
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Invalid email format! Please enter a valid email.");
      return;
    }

    setError(""); // Clear error if email is valid

    console.log("Role:", role);
    console.log("Email:", email);
    console.log("Password:", password);

    alert("Login Successful!");
  };

  return (
    <div className="login-container">
      <h2>Login to Your Account</h2>

      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="role">Select Role</label>
          <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Principal">Principal</option>
            <option value="HOD">HOD</option>
            <option value="Faculty">Faculty</option>
            <option value="Student">Student</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button type="submit" className="btn-login">Login</button>
      </form>
    </div>
  );
};

export default Login;
