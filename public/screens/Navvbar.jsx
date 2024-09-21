import { NavLink } from "react-router-dom";
import Logo from "../image/logo.jpg";
import Videoos from"../image/video.mp4"
import { useState } from "react"
import Section from "./secdisp";
import Presentation from "./sec";
import axios from 'axios';
import Imgss from"../image/bloggg.jpeg"
import ContactUs from "./contact";
import Accordion from "./accoid";

const Naavvbar=()=>{
    return(
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
</>
    )
}
export default Naavvbar