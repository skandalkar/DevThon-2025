import React, { useState } from "react";
import { Link } from "react-router-dom";
// import About from "./About";
import LoginPage from "/src/Components/LoginPage.jsx";
// import "./Header.css";
import "./About.css"; // Import CSS styles
import { FaUniversity, FaUsers, FaLightbulb, FaAdjust } from "react-icons/fa";

function About() {
  // const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <>
    <section className="header">
      {/* <div className="logo">Institute Portal</div> */}
      <nav>
        <ul className="nav-links">
          <img src="/src/assets/Prmceam_Logo.png" alt="" />
          <li><Link to="/">Home</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to="">Academics</Link></li>
          <li><Link to="">Research</Link></li>
          <li><Link to="">Reports</Link></li>
           <li><Link to="">NAAC</Link></li>
          <li><Link to="">Contact</Link></li>
          <li><Link to="/LoginPage" >Sign-In / SignUp</Link></li>
        </ul>
      </nav>
     
    </section>
    <div className={`about-container`}>
      {/* <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        <FaAdjust /> {darkMode ? "Light Mode" : "Dark Mode"}
      </button> */}

      <header className="about-header">
        <h1>Welcome to PRMCEAM</h1>
        <p>Empowering Future Engineers with Quality Education</p>
      </header>

      <section className="about-content">
        <h2><FaUniversity /> About Our Institute</h2>
        <p>
          **PRMCEAM** is committed to academic excellence, innovation, and holistic 
          development of students. Our mission is to nurture future-ready professionals 
          with a passion for learning and leadership.
        </p>
      </section>

      <section className="features">
        <h2><FaLightbulb /> Why Choose Us?</h2>
        <ul>
          <li>🎓 **Top-Ranked Engineering Institute**</li>
          <li>💡 **State-of-the-Art Labs & Infrastructure**</li>
          <li>🌍 **Industry-Linked Training & Placements**</li>
          <li>📚 **Experienced Faculty & Research Programs**</li>
        </ul>
      </section>

      <section className="team">
        <h2><FaUsers /> Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">👨‍🏫 Dr. ABC - Principal</div>
          <div className="team-card">👨‍💼 Prof. XYZ - HOD</div>
          <div className="team-card">👩‍🏫 Faculty Members</div>
          <div className="team-card">🎓 Student Committees</div>
        </div>
      </section>

      <footer className="about-footer">
        <p>© {new Date().getFullYear()} PRMCEAM | Shaping the Future</p>
      </footer>
    </div>
    </>
  );
}

export default About;
