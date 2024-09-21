import React from 'react';

const Section = ({ title, description, imageUrl, imageAlt, onClick }) => (
    <div className="section" onClick={onClick}>
    <h2>{title}</h2>
  </div>
);

export default Section;
