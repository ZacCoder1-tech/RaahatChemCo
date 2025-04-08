import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        {/* Top Bar with Contact Info */}
        <div className="top-bar">
          <h1 className="logo">Rahat Chemicals</h1>
          
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt className="nav-icon" />
              <span>Area Nagran, Near Jama Masjid, Budaun (243601), UP</span>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="nav-icon" />
              <span>+91 89236 97291</span>
              <span>+91 79839 05205</span>
            </div>
          </div>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Main Navigation */}
        <div className={`main-nav ${isMobileMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/product" className="nav-link">Products</Link>
            </li>
            <li>
              <Link to="/Infrastructure" className="nav-link">Infrastructure</Link>
            </li>
            <li>
              <Link to="/AboutUs" className="nav-link">About Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};