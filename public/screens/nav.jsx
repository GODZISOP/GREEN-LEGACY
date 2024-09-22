import { NavLink } from "react-router-dom";
import Logo from "../image/logo.jpg";
import Videoos from"../image/video.mp4"
import { useState } from "react"
import Section from "./secdisp";
import Presentation from "./sec";
import video2 from"../image/frontvidep.mp4"
import axios from 'axios';
import Imgss from"../image/bloggg.jpeg"
import ContactUs from "./contact";
import Accordion from "./accoid";
const Nav = () => {

 


  
  // Main
  
  return (
    <>
    <div className="main-nav">

      <div>

      <img src={Logo} alt="Logo" className="logo1" />
      </div>
      <div>
        <NavLink
          to="/screens/media.jspublicx"
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'blue' : 'black',
            textDecoration: 'none'
          })}
          >

<h1>

          GREEN LEGACY ALLIANCE
</h1>
        </NavLink>

       
          </div>

    </div>
<div className="LINKS">
<NavLink
        to="/about"
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : 'normal',
          color: isActive ? 'blue' : 'black',
          textDecoration: 'none',
          margin:"20px"
        })}
        >
<h4>

        ABOUT
</h4>
      </NavLink>
      <NavLink
        to="/climate"
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : 'normal',
          color: isActive ? 'blue' : 'black',
          textDecoration: 'none',
          margin:"20px"
        })}
        >
          <h4>

        CLIMATE CHANGE
          </h4>
      </NavLink>
      <NavLink
        to="/annual"
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : 'normal',
          color: isActive ? 'blue' : 'black',
          textDecoration: 'none',
          margin:"20px"
        })}
        >
          <h4>

        UN REPORTS
          </h4>
      </NavLink>
     
      <NavLink
        to="contact"
style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : 'normal',
          color: isActive ? 'blue' : 'black',
          textDecoration: 'none',
          margin:"20px"
        })}
        >
 <h4>

        CONTACT US
 </h4>
      </NavLink>
</div>
<div style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden' }}>
      {}
      <video
        src={Videoos}
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
        
      ></video>
      <div className="descp">

      <h1>Climate Change</h1>
      <p>Together for the Planet, Leading the Charge <br></br>Against Climate Change.</p>
      <div className="button-div">

      </div>
      <div className="button-div">

      <div class="galaxy-button">
    <NavLink to="contact">
  <button class="space-button">
    <span class="backdrop"></span>
    <span class="galaxy"></span>
      
    <label class="text">Contact Us</label>
  </button>
    </NavLink>
  <div class="bodydrop"></div>
</div>
<div class="galaxy-button">
<NavLink to="/annual">

  <button class="space-button">
    
    <span class="backdrop"></span>
    <span class="galaxy"></span>
    <label class="text">UN Reports</label>
  </button>
  </NavLink>

      </div>
  <div class="bodydrop"></div>
      </div>
</div>
</div>
<div>


    
    <Presentation></Presentation>

    <div className="top">
    <h1 className="newheading1">WHAT HAPPENS IF WE IGNORE THE CLIMATE CRISES?</h1>

    <div className="videoo">

    <video src={video2 } controls></video>
    </div>
    </div>
    <Accordion></Accordion>
    <ContactUs></ContactUs>
  </div>


  </>
  );
};

export default Nav;