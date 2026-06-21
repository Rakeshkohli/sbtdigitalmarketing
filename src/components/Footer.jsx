import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container">

        <div className="footer-grid">
          <div className="footer-col about-col">
            <Link to="/" className="logo footer-logo">
              <span className="logo-icon">SBT</span>
              <span className="logo-text">Digital Marketing</span>
            </Link>
            <p className="footer-desc">
              A result-driven digital marketing agency helping startups and local businesses grow their online presence and increase revenue.
            </p>
            <div className="social-icons">
              <a href="#" className="social-link"><FaFacebook size={20} /></a>
              <a href="#" className="social-link"><FaTwitter size={20} /></a>
              <a href="#" className="social-link"><FaInstagram size={20} /></a>
              <a href="#" className="social-link"><FaLinkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-col links-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col services-col">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services">SEO Optimization</Link></li>
              <li><Link to="/services">Google & Meta Ads</Link></li>
              <li><Link to="/services">Social Media Management</Link></li>
              <li><Link to="/services">Web Development</Link></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li>
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li>
                <Mail size={18} />
                <span>info@sbtdigital.com</span>
              </li>
              <li>
                <MapPin size={18} />
                <span>123 Tech Park, Phase 1, Digital City, India 400001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SBT Digital Marketing. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
