import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from '../public/screens/nav'; // Adjust the import path as needed
import Media from '../public/screens/media';
import News from '../public/screens/news';
import Notfound from '../public/screens/not';
import Link from '../public/screens/llink';
import Presentation from '../public/screens/sec';
import Section from '../public/screens/secdisp';
import './App.css'; // Adjust the path as needed
import ContactUs from '../public/screens/contact';
import Accordion from '../public/screens/accoid';
import Aboutus from '../public/screens/aboutus';
import Naavvbar from '../public/screens/Navvbar';
import Climate from '../public/screens/climate';
import ImageSlider from '../public/screens/slider';
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Nav/>} />
        
        <Route path="/screens/media.jspublicx" element={<Media />} />
        <Route path="/annual" element={<News />} />
        <Route path="link" element={<Link/>} />
        
        <Route path="link" element={<Presentation/>} />
        <Route path="link" element={<Section/>} />
        <Route path="/about" element={<Aboutus/>} />
      "
        <Route path="contact" element={<ContactUs/>} />
        <Route path="contact" element={<Accordion/>} />
        <Route path="contact" element={<Naavvbar/>} />
        
        <Route path="/climate" element={<Climate/>} />
        <Route path="/slider" element={<ImageSlider/>} />




        




        


      </Routes>
    </Router>
  );
};

export default App;