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
