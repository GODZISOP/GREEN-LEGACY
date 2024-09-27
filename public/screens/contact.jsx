<<<<<<< HEAD
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

=======
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import {   FaFacebook, FaLinkedinIn, FaInstagram ,} from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import Naavvbar from './Navvbar';


const ContactUs = () => {
  return(
    <>
    <div className='headerfoot'>
<div className='contact'>
  
    <h1>Get in Touch</h1>
    <div className="social-media-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FaFacebook className="social-icon1" />
      </a>
      <a href="https://www.linkedin.com/in/green-legacy-alliance-8433a3324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FaLinkedinIn className="social-icon3" />
      </a>
     
      <a href="https://www.instagram.com/greenlegacyalliance?igsh=MW1yZW53M2M4M3FuOQ==" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FaInstagram className="social-icon4" />
      </a>


    </div>

  </div>
   
   
    <div>
<div class="main">
  <div className="card" id="c1"><h1></h1></div>
  <div className="card" id="c2"></div>
  <div className="card" id="c3"></div>
  <div className="card" id="c4">
    <h3>Gmail</h3>

  <h4>greenlegacyalliance@gmail.com</h4>

  <FaEnvelope className="social-icon5" />
  </div>
</div>
    </div>
    </div>
    </>
  )
};

export default ContactUs;
>>>>>>> 6b1575b680e453d69d0aa02ca86c544fc94e5057
