import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Correct import
import { NavLink } from 'react-router-dom';

const ContactUs = () => {
  return (
    <>
    <footer className="footer">
        <div className="footer-content">
            <h3>                    greenlegacyalliance@gmail.com
            </h3>
            <p>Our vision is to combat these challenges by focusing on reforestation and climate action</p>
        </div>
        <div className="footer-links">
            <h4>Site Map</h4>
            <ul>
            <NavLink to="#">

                <li><a href="#">Home</a></li>
                </NavLink>

                <NavLink to="/annual">

                <li><a href="/annual">UN Repoorts</a></li>
                </NavLink>
                <NavLink to="/about">

                <li><a href="/about">About</a></li>
                </NavLink>
                <NavLink to="/contact">

                <li><a href="/contact">Contact</a></li>
                </NavLink>

            </ul>
        </div>
     
        <div className="social-media">
            <h4>Follow Us</h4>
            <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=61561379865236&mibextid=LQQJ4d" className="social-icon">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com/greenlegacyalliance?igsh=MW1yZW53M2M4M3FuOQ==" className="social-icon">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com/in/green-legacy-alliance-8433a3324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-icon">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="greenlegacyalliance@gmail.com" className="social-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2024 YOUTH ORGANIZATION All rights reserved.</p>
            <p>MADE BY ZAIN SHABBIR.</p>
        </div>
    </footer>
    </>
);
};

export default ContactUs;

