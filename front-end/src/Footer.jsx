import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About PRMCEAM</h2>
          <ul>
            <li><a href="#">Anti Ragging</a></li>
            <li><a href="#">UGC 2(f)/12(B) Status</a></li>
            <li><a href="#">NAAC VISIT VIDEO</a></li>
            <li><a href="#">Facilities</a></li>
            <li><a href="#">E-Waste Management</a></li>
            <li><a href="#">Grievance Redressal</a></li>
            <li><a href="#">Internal Complaint Committee</a></li>
          </ul>
        </div>

        <div className="footer-section quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">First Year Engineering</a></li>
            <li><a href="#">E-Magazine</a></li>
            <li><a href="#">Prospectus</a></li>
            <li><a href="#">Brochure</a></li>
            <li><a href="#">AICTE EOA’s</a></li>
            <li><a href="#">DTE’s Permission</a></li>
            <li><a href="#">SGBAU’s Affiliations</a></li>
            <li><a href="#">Prevention of Caste Based Discrimination</a></li>
            <li><a href="#">Fit India Home</a></li>
            <li><a href="#">NAD</a></li>
            <li><a href="#">Support Staff</a></li>
            <li><a href="#">Faculty Login</a></li>
            <li><a href="#">Ambulance</a></li>
            <li><a href="#">Bharatiya Nyaya Sanhita</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>
            Prof. Ram Meghe College of Engineering & Management,<br />
            New Express Highway, Prof Ram Meghe Square, Badnera,<br />
            Amravati, Maharashtra, India.<br />
            Phone: <a href="tel:+917212580373">0721-2580373</a><br />
            Fax: <a href="fax:+917212580372">0721-2580372</a><br />
            Email: <a href="mailto:principal@prmceam.ac.in">principal@prmceam.ac.in</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Prof. Ram Meghe College of Engineering & Management, Badnera-Amravati. All rights reserved.</p>
        <p>Developed By: eGovernance & ICT Cell</p>
      </div>
    </footer>
  );
};

export default Footer;
