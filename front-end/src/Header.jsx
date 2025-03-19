import React from "react";
import { Link } from "react-router-dom";
import About from "/src/Components/About.jsx";
import LoginPage from "/src/Components/LoginPage.jsx";
import Footer from "/src/Components/Footer.jsx"
import "./Header.css"

function Header(){
  return (
    <>
    {/* College Logo */}
      <section className="img">
        <img src="src\assets\PRMCEAM-Logo_Badnera-1.png" alt="" />
      </section>
    {/* Header Content */}
      <section className="header">
      {/* <div className="logo">Institute Portal</div> */}
      <nav>
        <ul className="nav-links">
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
    <hr />
    {/* Hero Section */}
    <section className="home-container">
      <header className="hero-section">
        <h1>Welcome to PRMCEAM , Amravati</h1>
        <p>Your gateway to excellence in education and research.</p>
        <a href="#about" className="btn">Learn More</a>
      </header>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>
          ABC University is a leading institution committed to providing quality education and
          research opportunities across various disciplines.
        </p>
      </section>

      <section className="departments-section">
        <h2>Our Departments</h2>
        <ul>
          <li>Computer Science</li>
          <li>Business Administration</li>
          <li>Engineering</li>
          <li>Medicine</li>
        </ul>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: contact@abcuniversity.edu</p>
        <p>Phone: +123 456 7890</p>
      </section>

      
    
    </section>
    {/* Footer part */}
    <Footer/>
    </>
  );
};

export default Header;
